#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VERSION = '3.0.0';
const PACKAGE_NAME = '@shtokov/copilot-kit';

// Parse CLI arguments
function parseArgs(args) {
  const options = {
    force: false,
    path: process.cwd(),
    quiet: false,
    dryRun: false,
    help: false
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--force' || arg === '-f') {
      options.force = true;
    } else if (arg === '--path' || arg === '-p') {
      options.path = args[++i] || process.cwd();
    } else if (arg === '--quiet' || arg === '-q') {
      options.quiet = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }

  return options;
}

function log(message, options = {}) {
  if (!options.quiet) {
    console.log(message);
  }
}

function copyDir(src, dest, options = {}) {
  if (options.dryRun) {
    log(`[DRY-RUN] Would copy ${src} to ${dest}`, options);
    return;
  }

  if (process.platform === 'win32') {
    execSync(`xcopy "${src}" "${dest}" /E /I /H /Y`, { stdio: options.quiet ? 'ignore' : 'inherit' });
  } else {
    execSync(`cp -r "${src}" "${dest}"`, { stdio: options.quiet ? 'ignore' : 'inherit' });
  }
}

function removeDir(dir, options = {}) {
  if (options.dryRun) {
    log(`[DRY-RUN] Would remove ${dir}`, options);
    return;
  }

  if (process.platform === 'win32') {
    execSync(`rmdir /s /q "${dir}"`, { stdio: 'ignore' });
  } else {
    execSync(`rm -rf "${dir}"`, { stdio: 'ignore' });
  }
}

function init(options) {
  const sourceGithubDir = path.join(__dirname, '../.github');
  const sourceVscodeDir = path.join(__dirname, '../.vscode');
  const targetGithubDir = path.join(options.path, '.github');
  const targetVscodeDir = path.join(options.path, '.vscode');

  if (fs.existsSync(targetGithubDir)) {
    if (options.force) {
      log('⚠️  Removing existing .github directory...', options);
      removeDir(targetGithubDir, options);
    } else {
      console.error('Error: .github directory already exists. Use --force to overwrite.');
      process.exit(1);
    }
  }

  log('🚀 Initializing Copilot Kit v3.0...', options);
  
  if (options.dryRun) {
    log('[DRY-RUN] Would create .github directory with all templates', options);
    log('[DRY-RUN] Would create .vscode directory with settings', options);
  } else {
    // Copy .github
    copyDir(sourceGithubDir, targetGithubDir, options);
    
    // Copy .vscode (merge if exists)
    if (fs.existsSync(sourceVscodeDir)) {
      if (!fs.existsSync(targetVscodeDir)) {
        fs.mkdirSync(targetVscodeDir, { recursive: true });
      }
      // Copy settings.json
      const sourceSettings = path.join(sourceVscodeDir, 'settings.json');
      const targetSettings = path.join(targetVscodeDir, 'settings.json');
      if (fs.existsSync(sourceSettings)) {
        if (fs.existsSync(targetSettings)) {
          // Merge settings
          try {
            const existingSettings = JSON.parse(fs.readFileSync(targetSettings, 'utf8'));
            const newSettings = JSON.parse(fs.readFileSync(sourceSettings, 'utf8'));
            const mergedSettings = { ...existingSettings, ...newSettings };
            fs.writeFileSync(targetSettings, JSON.stringify(mergedSettings, null, 2));
            log('📝 Merged Copilot settings into existing .vscode/settings.json', options);
          } catch (e) {
            fs.copyFileSync(sourceSettings, targetSettings);
          }
        } else {
          fs.copyFileSync(sourceSettings, targetSettings);
        }
      }
    }
  }

  log('', options);
  log('✅ Successfully initialized Copilot Kit!', options);
  log('', options);
  log('📁 Installed:', options);
  log('   • 16 Custom Agents (.github/agents/*.agent.md)', options);
  log('   • 40 Agent Skills (.github/skills/*/SKILL.md)', options);
  log('   • 11 Instructions (.github/instructions/*.instructions.md)', options);
  log('   • 5 Prompt Files (.github/prompts/*.prompt.md)', options);
  log('   • VS Code settings (.vscode/settings.json)', options);
  log('', options);
  log('🎯 Next steps:', options);
  log('   • Use @agent-name in Copilot Chat to activate agents', options);
  log('   • Attach instructions via Copilot Edits panel', options);
  log('   • Skills are auto-loaded for domain-specific context', options);
  log('   • Read .github/copilot-instructions.md for configuration', options);
}

function update(options) {
  const targetDir = path.join(options.path, '.github');

  if (!fs.existsSync(targetDir)) {
    console.error('Error: .github directory not found. Run `copilot-kit init` first.');
    process.exit(1);
  }

  log('🔄 Updating Copilot Kit...', options);
  
  // Remove old and copy new
  removeDir(targetDir, options);
  init({ ...options, force: true });
  
  log('✅ Successfully updated to the latest version!', options);
}

function status(options) {
  const targetDir = path.join(options.path, '.github');
  const agentsDir = path.join(targetDir, 'agents');
  const skillsDir = path.join(targetDir, 'skills');
  const promptsDir = path.join(targetDir, 'prompts');
  const instructionsDir = path.join(targetDir, 'instructions');
  const vscodeDir = path.join(options.path, '.vscode');

  console.log('');
  console.log('📊 Copilot Kit Status');
  console.log('─'.repeat(40));

  if (!fs.existsSync(targetDir)) {
    console.log('❌ Not installed');
    console.log('');
    console.log('Run `npx @shtokov/copilot-kit init` to install');
    return;
  }

  console.log('✅ Installed');
  console.log('');

  // Count agents
  if (fs.existsSync(agentsDir)) {
    const agents = fs.readdirSync(agentsDir).filter(f => f.endsWith('.agent.md'));
    console.log(`🤖 Agents: ${agents.length}`);
  }

  // Count skills
  if (fs.existsSync(skillsDir)) {
    const skills = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
    console.log(`🧩 Skills: ${skills.length}`);
  }

  // Count prompts
  if (fs.existsSync(promptsDir)) {
    const prompts = fs.readdirSync(promptsDir).filter(f => f.endsWith('.prompt.md'));
    console.log(`📚 Prompt Files: ${prompts.length}`);
  }

  // Count instructions
  if (fs.existsSync(instructionsDir)) {
    const instructions = fs.readdirSync(instructionsDir).filter(f => f.endsWith('.instructions.md'));
    console.log(`📝 Instructions: ${instructions.length}`);
  }

  // Check VS Code settings
  const settingsFile = path.join(vscodeDir, 'settings.json');
  if (fs.existsSync(settingsFile)) {
    console.log('⚙️  VS Code settings configured');
  }

  // Check copilot-instructions.md
  const mainConfig = path.join(targetDir, 'copilot-instructions.md');
  if (fs.existsSync(mainConfig)) {
    console.log('✅ Repository instructions configured');
  }

  console.log('');
}

function showHelp() {
  console.log(`
${PACKAGE_NAME} v${VERSION}

Native GitHub Copilot Configuration Kit - Custom Agents, Agent Skills, Instructions, and Prompt Files

Usage:
  npx ${PACKAGE_NAME} <command> [options]

Commands:
  init      Install .github and .vscode folders into your project
  update    Update to the latest version
  status    Check installation status

Options:
  --force, -f     Overwrite existing .github folder
  --path, -p      Install in specific directory
  --quiet, -q     Suppress output
  --dry-run       Preview actions without executing
  --help, -h      Show this help message

Examples:
  npx ${PACKAGE_NAME} init
  npx ${PACKAGE_NAME} init --force
  npx ${PACKAGE_NAME} init --path ./myapp
  npx ${PACKAGE_NAME} update
  npx ${PACKAGE_NAME} status
`);
}

// Main
const args = process.argv.slice(2);
const command = args[0];
const options = parseArgs(args.slice(1));

if (options.help || command === 'help') {
  showHelp();
} else if (command === 'init') {
  init(options);
} else if (command === 'update') {
  update(options);
} else if (command === 'status') {
  status(options);
} else if (command === '--version' || command === '-v') {
  console.log(VERSION);
} else {
  showHelp();
}
