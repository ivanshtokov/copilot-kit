import Link from "next/link";import Link from "next/link";



export default function PromptFilesPage() {export default function SkillsPage() {

    return (    return (

        <div className="max-w-3xl">        <div className="max-w-3xl">

            {/* Breadcrumb */}            {/* Breadcrumb */}

            <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">            <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">

                <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>                <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50">Docs</Link>

                <span>/</span>                <span>/</span>

                <span className="text-zinc-900 dark:text-zinc-50">Prompt Files</span>                <span className="text-zinc-900 dark:text-zinc-50">Skills</span>

            </nav>            </nav>



            {/* Page Header */}            {/* Page Header */}

            <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">            <div className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">

                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Prompt Files                    Skills

                </h1>                </h1>

                <p className="text-lg text-zinc-600 dark:text-zinc-400">                <p className="text-lg text-zinc-600 dark:text-zinc-400">

                    Reusable prompt templates that you can attach to any Copilot conversation.                    Domain-specific knowledge modules that agents load automatically.

                </p>                </p>

            </div>            </div>



            {/* What are Prompt Files */}            {/* What are Skills */}

            <section className="mb-12">            <section className="mb-12">

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    What are Prompt Files?                    What are Skills?

                </h2>                </h2>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-4">

                    Prompt files are Markdown files with the <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">.prompt.md</code> extension that contain reusable prompt templates. They can be shared across your team and attached to chat conversations to provide consistent context.                    Skills are modular knowledge packages that contain principles, patterns, and decision-making frameworks for specific domains. They're loaded automatically when an agent needs them.

                </p>                </p>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

                    Unlike one-off prompts, prompt files are versioned with your code and can be organized by domain, making them easy to discover and reuse.                    Unlike hard-coded templates, skills teach <em>principles</em> — enabling agents to make contextual decisions rather than copying patterns.

                </p>                </p>



                <div className="p-4 rounded-lg border border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-950/20">                <div className="p-4 rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">

                    <p className="text-sm text-violet-900 dark:text-violet-200">                    <p className="text-sm text-amber-900 dark:text-amber-200">

                        <strong className="font-semibold">Location:</strong> Prompt files are stored in <code className="px-1 py-0.5 rounded bg-violet-100 dark:bg-violet-900 text-xs font-mono">.github/prompts/</code> directory.                        <strong className="font-semibold">Key Principle:</strong> Skills are loaded on-demand based on task context. You don't need to configure anything manually.

                    </p>                    </p>

                </div>                </div>

            </section>            </section>



            {/* How to Use */}            {/* How Skills Work */}

            <section className="mb-12">            <section className="mb-12">

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    How to Use Prompt Files                    How Skills Work

                </h2>                </h2>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

                    Attach prompt files to your Copilot Chat using the attachment button or keyboard shortcut:                    When you invoke an agent, it automatically loads relevant skills based on:

                </p>                </p>



                <ul className="space-y-3 mb-6">                <ul className="space-y-3 mb-6">

                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">

                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">1</span>                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">1</span>

                        <div>                        <div>

                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Open Copilot Chat</strong>                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Agent Configuration</strong>

                            <p className="text-sm mt-1">Press <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">Ctrl+Alt+I</code> (Windows/Linux) or <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">Cmd+Alt+I</code> (Mac)</p>                            <p className="text-sm mt-1">Each agent specifies which skills it can access in its frontmatter</p>

                        </div>                        </div>

                    </li>                    </li>

                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">

                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">2</span>                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">2</span>

                        <div>                        <div>

                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Attach Prompt File</strong>                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Task Context</strong>

                            <p className="text-sm mt-1">Click the 📎 attachment button and select "Prompt..." or type <code className="px-1 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono">#</code> to filter prompt files</p>                            <p className="text-sm mt-1">The AI reads skill descriptions and loads relevant ones</p>

                        </div>                        </div>

                    </li>                    </li>

                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">                    <li className="flex items-start gap-3 text-base text-zinc-600 dark:text-zinc-400">

                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">3</span>                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-bold shrink-0 mt-0.5">3</span>

                        <div>                        <div>

                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Send Your Request</strong>                            <strong className="font-semibold text-zinc-900 dark:text-zinc-50">Selective Reading</strong>

                            <p className="text-sm mt-1">The prompt template content is automatically included in your message context</p>                            <p className="text-sm mt-1">Only necessary sections are read to optimize context usage</p>

                        </div>                        </div>

                    </li>                    </li>

                </ul>                </ul>

            </section>

                <div className="p-4 rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/20">

                    <p className="text-sm text-cyan-900 dark:text-cyan-200">            {/* Skill Categories */}

                        <strong className="font-semibold">Tip:</strong> You can attach multiple prompt files to a single conversation for complex tasks.            <section className="mb-12">

                    </p>                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                </div>                    Skill Categories

            </section>                </h2>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

            {/* Prompt Categories */}                    40+ skills organized by domain:

            <section className="mb-12">                </p>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Prompt Categories                <div className="space-y-6">

                </h2>                    <div>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Frontend Development</h3>

                    40+ prompt files organized by domain:                        <div className="grid gap-3 sm:grid-cols-2">

                </p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">react-patterns</code>

                <div className="space-y-6">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Modern React patterns and hooks</p>

                    <div>                            </div>

                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Code Generation</h3>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                        <div className="grid gap-3 sm:grid-cols-2">                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">nextjs-best-practices</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Next.js App Router principles</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">react-component.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Generate React components with TypeScript</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">tailwind-patterns</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Tailwind CSS v4 principles</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">api-endpoint.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Create REST or GraphQL endpoints</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">frontend-design</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">UI/UX design thinking</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">database-schema.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Design database schemas and migrations</p>                        </div>

                            </div>                    </div>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">unit-test.prompt.md</code>                    <div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Generate comprehensive test suites</p>                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Backend Development</h3>

                            </div>                        <div className="grid gap-3 sm:grid-cols-2">

                        </div>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                    </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">api-patterns</code>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">API design decisions</p>

                    <div>                            </div>

                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Code Review</h3>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                        <div className="grid gap-3 sm:grid-cols-2">                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">database-design</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Schema and indexing strategy</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">security-review.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Scan for security vulnerabilities</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">nodejs-best-practices</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Node.js development principles</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">performance-review.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Identify performance bottlenecks</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">docker-expert</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Container optimization</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">accessibility-check.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Validate WCAG accessibility standards</p>                        </div>

                            </div>                    </div>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">code-quality.prompt.md</code>                    <div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Check code quality and best practices</p>                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Quality & Testing</h3>

                            </div>                        <div className="grid gap-3 sm:grid-cols-2">

                        </div>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                    </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">testing-patterns</code>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Testing strategies and mocking</p>

                    <div>                            </div>

                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Documentation</h3>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                        <div className="grid gap-3 sm:grid-cols-2">                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">vulnerability-scanner</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Security analysis</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">api-docs.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Generate API documentation</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">systematic-debugging</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">4-phase debugging methodology</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">readme-gen.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Create project README files</p>                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">

                            </div>                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">clean-code</code>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Pragmatic coding standards</p>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">jsdoc-comments.prompt.md</code>                            </div>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Add JSDoc/TSDoc comments to code</p>                        </div>

                            </div>                    </div>

                            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">                </div>

                                <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 font-semibold">changelog.prompt.md</code>

                                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">Generate CHANGELOG entries</p>                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-6">

                            </div>                    And 28+ more skills covering architecture, deployment, SEO, mobile, game development, and specialized tools.

                        </div>                </p>

                    </div>            </section>

                </div>

            {/* Skill Structure */}

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-6">            <section className="mb-12">

                    And 28+ more prompts covering refactoring, debugging, architecture decisions, and specialized tasks.                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                </p>                    Skill Structure

            </section>                </h2>

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">

            {/* Prompt File Structure */}                    Each skill contains:

            <section className="mb-12">                </p>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

                    Prompt File Structure                <div className="relative group mb-6">

                </h2>                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">

                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">                        <code className="text-zinc-100">{`skills/

                    Prompt files support Markdown formatting and can include variables:└── react-patterns/

                </p>    ├── SKILL.md         # Main documentation

    ├── sections/        # Detailed guides

                <div className="relative group mb-6">    ├── examples/        # Reference implementations

                    <pre className="p-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 overflow-x-auto border border-zinc-800 font-mono text-sm">    └── scripts/         # Helper utilities (optional)`}</code>

                        <code className="text-zinc-100">{`# React Component Generator                    </pre>

                </div>

Generate a React component with the following requirements:            </section>



## Context            {/* Next Steps */}

- Use TypeScript with strict mode            <section className="mb-12">

- Follow our project's naming conventions                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">

- Include proper prop types and default values                    Next Steps

                </h2>

## Component Requirements                <div className="grid gap-4 sm:grid-cols-2">

- Implement as a functional component                    <Link

- Use Tailwind CSS for styling                        href="/docs/workflows"

- Include accessibility attributes (aria-labels, roles)                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"

- Add JSDoc comments for all props                    >

                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Workflows →</h3>

## Files to Reference                        <p className="text-sm text-zinc-600 dark:text-zinc-400">

- \${file:src/components/ui/button.tsx}                            Learn about slash command procedures

- \${file:src/types/common.ts}                        </p>

                    </Link>

## Output                    <Link

Create the component in \${input:componentPath}`}</code>                        href="/docs/cli"

                    </pre>                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"

                </div>                    >

                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">CLI Reference →</h3>

                <p className="text-base text-zinc-600 dark:text-zinc-400">                        <p className="text-sm text-zinc-600 dark:text-zinc-400">

                    Use <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">{"${file:path}"}</code> to reference files and <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm font-mono">{"${input:name}"}</code> for user inputs.                            Explore command-line tools

                </p>                        </p>

            </section>                    </Link>

                </div>

            {/* Next Steps */}            </section>

            <section className="mb-12">

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">            {/* Footer Navigation */}

                    Next Steps            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">

                </h2>                <Link

                <div className="grid gap-4 sm:grid-cols-2">                    href="/docs/agents"

                    <Link                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"

                        href="/docs/workflows"                >

                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                    >                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />

                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Instructions →</h3>                    </svg>

                        <p className="text-sm text-zinc-600 dark:text-zinc-400">                    Agents

                            Configure repository and file-level instructions                </Link>

                        </p>                <Link

                    </Link>                    href="/docs/workflows"

                    <Link                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"

                        href="/docs/cli"                >

                        className="group p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"                    Workflows

                    >                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">CLI Reference →</h3>                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

                        <p className="text-sm text-zinc-600 dark:text-zinc-400">                    </svg>

                            Explore command-line tools                </Link>

                        </p>            </div>

                    </Link>        </div>

                </div>    );

            </section>}


            {/* Footer Navigation */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <Link
                    href="/docs/agents"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Custom Agents
                </Link>
                <Link
                    href="/docs/workflows"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline flex items-center gap-1"
                >
                    Instructions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
