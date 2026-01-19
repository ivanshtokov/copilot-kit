#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VERSION = '2.0.0';
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
  const sourceDir = path.join(__dirname, '../.github');
  const targetDir = path.join(options.path, '.github');

  if (fs.existsSync(targetDir)) {
    if (options.force) {
      log('⚠️  Removing existing .github directory...', options);
      removeDir(targetDir, options);
    } else {
      console.error('Error: .github directory already exists. Use --force to overwrite.');
      process.exit(1);
    }
  }

  log('🚀 Initializing Copilot Kit...', options);
  
  if (options.dryRun) {
    log('[DRY-RUN] Would create .github directory with all templates', options);
  } else {
    copyDir(sourceDir, targetDir, options);
  }

  log('', options);
  log('✅ Successfully initialized Copilot Kit!', options);
  log('', options);
  log('📁 Installed:', options);
  log('   • 16 Custom Agents (.github/agents/)', options);
  log('   • 40+ Prompt Files (.github/prompts/)', options);
  log('   • 11 Instructions (.github/instructions/)', options);
  log('', options);
  log('🎯 Next steps:', options);
  log('   • Use @AgentName in Copilot Chat to activate agents', options);
  log('   • Use /command to trigger instructions', options);
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
  const promptsDir = path.join(targetDir, 'prompts');
  const instructionsDir = path.join(targetDir, 'instructions');

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
    const agents = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    console.log(`📦 Agents: ${agents.length}`);
  }

  // Count prompts
  if (fs.existsSync(promptsDir)) {
    const prompts = fs.readdirSync(promptsDir).filter(f => fs.statSync(path.join(promptsDir, f)).isDirectory());
    console.log(`📚 Prompt Files: ${prompts.length}`);
  }

  // Count instructions
  if (fs.existsSync(instructionsDir)) {
    const instructions = fs.readdirSync(instructionsDir).filter(f => f.endsWith('.md'));
    console.log(`📝 Instructions: ${instructions.length}`);
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

AI Agent templates - Custom Agents, Prompt Files, and Instructions for GitHub Copilot

Usage:
  npx ${PACKAGE_NAME} <command> [options]

Commands:
  init      Install .github folder into your project
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
