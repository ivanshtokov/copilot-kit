import Link from "next/link";import Link from "next/link";



export default function InstructionsPage() {export default function WorkflowsPage() {

    const instructionTypes = [    const workflows = [

        {        { cmd: "/brainstorm", desc: "Structured brainstorming for projects and features. Explores multiple options before implementation.", usage: "/brainstorm authentication system" },

            name: "Repository Instructions",        { cmd: "/create", desc: "Create new application command. Triggers App Builder skill and starts interactive dialogue with user.", usage: "/create landing page with hero section" },

            file: ".github/copilot-instructions.md",        { cmd: "/debug", desc: "Activates DEBUG mode for systematic problem investigation using 4-phase methodology.", usage: "/debug why login fails" },

            desc: "Applied to all Copilot interactions across the entire repository.",        { cmd: "/deploy", desc: "Deployment command for production releases. Pre-flight checks and deployment execution.", usage: "/deploy to production" },

            usage: "Project-wide coding standards, architecture patterns, technology stack"        { cmd: "/enhance", desc: "Add or update features in existing application. Used for iterative development.", usage: "/enhance add dark mode" },

        },        { cmd: "/orchestrate", desc: "Coordinate multiple agents for complex tasks. Use for multi-perspective analysis.", usage: "/orchestrate design system audit" },

        {        { cmd: "/plan", desc: "Create project plan using project-planner agent. Only generates plan file, no code.", usage: "/plan new authentication feature" },

            name: "Folder Instructions",        { cmd: "/preview", desc: "Preview server start, stop, and status check. Local development server management.", usage: "/preview start" },

            file: ".instructions.md",        { cmd: "/status", desc: "Display  agent and project status. Progress tracking and status board.", usage: "/status" },

            desc: "Applied when Copilot works with files in the same folder or subfolders.",        { cmd: "/test", desc: "Test generation and test running command. Creates and executes tests for code.", usage: "/test authentication service" },

            usage: "Component patterns, API conventions, testing requirements"        { cmd: "/ui-ux-pro-max", desc: "Plan and implement UI with 50 styles, 21 palettes, 50 font pairings.", usage: "/ui-ux-pro-max design dashboard" },

        },    ];

        {

            name: "applyTo Instructions",    return (

            file: "*.instructions.md",        <div className="max-w-3xl">

            desc: "Uses YAML frontmatter to specify glob patterns for targeted files.",            {/* Breadcrumb */}

            usage: "Language-specific rules, framework conventions"            <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">

        },                <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>

    ];                <span>/</span>

                <span className="text-zinc-900 dark:text-zinc-50">Workflows</span>

    return (            </nav>

        <div className="max-w-3xl">

            {/* Breadcrumb */}            {/* Page Header */}

            <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">            <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">

                <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                <span>/</span>                    Workflows

                <span className="text-zinc-900 dark:text-zinc-50">Instructions</span>                </h1>

            </nav>                <p className="text-lg text-zinc-600 dark:text-zinc-400">

                    Slash command procedures for common development tasks.

            {/* Page Header */}                </p>

            <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">            </div>

                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Instructions            {/* What are Workflows */}

                </h1>            <section className="mb-12">

                <p className="text-lg text-zinc-600 dark:text-zinc-400">                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Configure how Copilot generates code at repository, folder, and file levels.                    What are Workflows?

                </p>                </h2>

            </div>                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">

                    Workflows are well-defined, step-by-step procedures for achieving specific development tasks. They're invoked using slash commands and provide consistent, repeatable processes.

            {/* What are Instructions */}                </p>

            <section className="mb-12">                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                    Each workflow contains specific instructions, decision points, and best practices for its domain.

                    What are Instructions?                </p>

                </h2>            </section>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">

                    Instructions are Markdown files that provide context and guidelines to GitHub Copilot. They help Copilot understand your project's coding standards, architecture patterns, and specific requirements.            {/* How to Use */}

                </p>            <section className="mb-12">

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Instructions are automatically picked up by Copilot based on the files you're working with — no manual configuration required.                    How to Use Workflows

                </p>                </h2>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

                <div className="p-4 rounded-lg border border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-950/20">                    Simply type a slash command followed by your task description:

                    <p className="text-sm text-violet-900 dark:text-violet-200">                </p>

                        <strong className="font-semibold">Key Feature:</strong> Instructions are cumulative — multiple instruction files can apply to a single context, building up comprehensive guidance.

                    </p>                <div className="relative group mb-6">

                </div>                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">

            </section>                        <code className="text-zinc-100">{`/brainstorm authentication system

/create landing page with hero section

            {/* Instruction Types */}/debug why login fails`}</code>

            <section className="mb-12">                    </pre>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                </div>

                    Instruction Types

                </h2>                <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/20">

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                    <p className="text-sm text-blue-900 dark:text-blue-200">

                    Three levels of instructions for different scopes:                        <strong className="font-semibold">Tip:</strong> Some workflows have a <code className="px-1 py-0.5 rounded bg-blue-100 dark:bg-blue-900/40 font-mono text-xs">// turbo</code> annotation that allows auto-running safe commands without user approval.

                </p>                    </p>

                </div>

                <div className="space-y-6">            </section>

                    {instructionTypes.map((type) => (

                        <div            {/* Available Workflows */}

                            key={type.name}            <section className="mb-12">

                            className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800"                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                        >                    Available Workflows

                            <div className="flex items-start justify-between gap-4 mb-3">                </h2>

                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

                                    {type.name}                    {workflows.length} workflows covering common development scenarios:

                                </h3>                </p>

                            </div>

                            <code className="text-sm font-mono text-violet-600 dark:text-violet-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded mb-3 inline-block">                <div className="space-y-6">

                                {type.file}                    {workflows.map((workflow) => (

                            </code>                        <div

                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">                            key={workflow.cmd}

                                {type.desc}                            className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800"

                            </p>                        >

                            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">                            <div className="flex items-start justify-between gap-4 mb-3">

                                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">                                <code className="text-lg font-mono font-semibold text-zinc-900 dark:text-zinc-50">

                                    Best For                                    {workflow.cmd}

                                </div>                                </code>

                                <span className="text-sm text-zinc-700 dark:text-zinc-300">                            </div>

                                    {type.usage}                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">

                                </span>                                {workflow.desc}

                            </div>                            </p>

                        </div>                            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">

                    ))}                                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">

                </div>                                    Example Usage

            </section>                                </div>

                                <code className="text-sm font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">

            {/* Repository Instructions */}                                    {workflow.usage}

            <section className="mb-12">                                </code>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                            </div>

                    Repository Instructions                        </div>

                </h2>                    ))}

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                </div>

                    Create a <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">.github/copilot-instructions.md</code> file:            </section>

                </p>

            {/* Creating Custom Workflows */}

                <div className="relative group mb-6">            <section className="mb-12">

                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                        <code className="text-zinc-100">{`# Project Guidelines                    Creating Custom Workflows

                </h2>

## Tech Stack                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

- Next.js 14 with App Router                    You can create your own workflows by adding markdown files to <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">.agent/workflows/</code>:

- TypeScript in strict mode                </p>

- Tailwind CSS v4 for styling

- Prisma ORM for database                <div className="relative group mb-6">

                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">

## Coding Standards                        <code className="text-zinc-100">{`---

- Use functional components with TypeScriptdescription: Deploy application to staging

- Prefer named exports over default exports---

- Use Server Components by default

- Add error boundaries for async operations# Deployment Workflow



## File Naming1. Run tests

- Components: PascalCase (Button.tsx)2. Build production bundle

- Utilities: kebab-case (format-date.ts)3. Deploy to staging server

- Types: PascalCase with .types.ts suffix`}</code>4. Verify deployment`}</code>

                    </pre>                    </pre>

                </div>                </div>

            </section>

                <p className="text-base text-zinc-600 dark:text-zinc-400">

            {/* Folder Instructions */}                    Save as <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">.agent/workflows/deploy-staging.md</code> and invoke with <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">/deploy-staging</code>.

            <section className="mb-12">                </p>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">            </section>

                    Folder Instructions

                </h2>            {/* Next Steps */}

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">            <section className="mb-12">

                    Add <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">.instructions.md</code> files to specific folders:                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                </p>                    Next Steps

                </h2>

                <div className="relative group mb-6">                <div className="grid gap-4 sm:grid-cols-2">

                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">                    <Link

                        <code className="text-zinc-100">{`# src/components/.instructions.md                        href="/docs/cli"

                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"

## Component Guidelines                    >

- All components must be accessible (WCAG 2.1 AA)                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">CLI Reference →</h3>

- Include prop types with JSDoc comments                        <p className="text-sm text-zinc-600 dark:text-zinc-400">

- Export component and its types together                            Learn about command-line tools

- Use composition over inheritance                        </p>

                    </Link>

## Testing Requirements                    <Link

- Every component needs a .test.tsx file                        href="/docs/agents"

- Test user interactions, not implementation                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"

- Minimum 80% coverage for new components`}</code>                    >

                    </pre>                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Back to Agents →</h3>

                </div>                        <p className="text-sm text-zinc-600 dark:text-zinc-400">

                            Review specialist agents

                <div className="p-4 rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/20">                        </p>

                    <p className="text-sm text-cyan-900 dark:text-cyan-200">                    </Link>

                        <strong className="font-semibold">Tip:</strong> Folder instructions are inherited by all subfolders, making them ideal for setting patterns in parent directories.                </div>

                    </p>            </section>

                </div>

            </section>            {/* Footer Navigation */}

            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">

            {/* applyTo Instructions */}                <Link

            <section className="mb-12">                    href="/docs/skills"

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"

                    Targeted Instructions with applyTo                >

                </h2>                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />

                    Use YAML frontmatter to apply instructions to specific file patterns:                    </svg>

                </p>                    Skills

                </Link>

                <div className="relative group mb-6">                <Link

                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">                    href="/docs/cli"

                        <code className="text-zinc-100">{`# .github/instructions/api-routes.instructions.md                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"

                >

---                    CLI Reference

applyTo: "**/api/**/*.ts"                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

---                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                    </svg>

## API Route Guidelines                </Link>

- Always validate request body with Zod            </div>

- Return consistent error response format        </div>

- Log all errors with request context    );

- Use appropriate HTTP status codes}

- Include rate limiting headers`}</code>
                    </pre>
                </div>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">
                    Common glob patterns:
                </p>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li><code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">**/*.test.ts</code> — All test files</li>
                    <li><code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">src/components/**</code> — All component files</li>
                    <li><code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">**/*.{ts,tsx}</code> — All TypeScript files</li>
                    <li><code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 font-mono">**/migrations/**</code> — Database migration files</li>
                </ul>
            </section>

            {/* Example Structure */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                    Example Project Structure
                </h2>
                <div className="relative group mb-6">
                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">
                        <code className="text-zinc-100">{`.github/
├── copilot-instructions.md      # Repository-wide
├── instructions/
│   ├── typescript.instructions.md   # applyTo: **/*.ts
│   └── testing.instructions.md      # applyTo: **/*.test.*
src/
├── components/
│   ├── .instructions.md         # Component folder
│   └── ui/
│       └── .instructions.md     # UI components
├── api/
│   └── .instructions.md         # API routes
└── lib/
    └── .instructions.md         # Utility functions`}</code>
                    </pre>
                </div>
            </section>

            {/* Next Steps */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                    Next Steps
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    <Link
                        href="/docs/cli"
                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                    >
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">CLI Reference →</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Learn about the initialization tool
                        </p>
                    </Link>
                    <Link
                        href="/docs/agents"
                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                    >
                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Custom Agents →</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Create specialized AI assistants
                        </p>
                    </Link>
                </div>
            </section>

            {/* Footer Navigation */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <Link
                    href="/docs/skills"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Prompt Files
                </Link>
                <Link
                    href="/docs/cli"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"
                >
                    CLI Reference
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
