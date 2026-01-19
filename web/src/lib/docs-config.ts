export const docsConfig = {export const docsConfig = {

    mainNav: [    mainNav: [

        {        {

            title: "Documentation",            title: "Documentation",

            href: "/docs",            href: "/docs",

        },        },

        {        {

            title: "Custom Agents",            title: "Agents",

            href: "/docs/agents",            href: "/docs/agents",

        },        },

        {        {

            title: "Prompt Files",            title: "Skills",

            href: "/docs/skills",            href: "/docs/skills",

        },        },

        {        {

            title: "Instructions",            title: "Workflows",

            href: "/docs/workflows",            href: "/docs/workflows",

        },        },

    ],    ],

    sidebarNav: [    sidebarNav: [

        {        {

            title: "Getting Started",            title: "Getting Started",

            items: [            items: [

                {                {

                    title: "Introduction",                    title: "Introduction",

                    href: "/docs",                    href: "/docs",

                },                },

                {                {

                    title: "Installation",                    title: "Installation",

                    href: "/docs/installation",                    href: "/docs/getting-started/installation",

                },                },

            ],                {

        },                    title: "Quick Start",

        {                    href: "/docs/getting-started/quick-start",

            title: "Custom Agents",                },

            items: [            ],

                {        },

                    title: "Overview",        {

                    href: "/docs/agents",            title: "Agents",

                },            items: [

                {                {

                    title: "Orchestrator",                    title: "Overview",

                    href: "/docs/agents/orchestrator",                    href: "/docs/agents",

                },                },

                {                {

                    title: "Code Reviewer",                    title: "Orchestrator",

                    href: "/docs/agents/code-reviewer",                    href: "/docs/agents/orchestrator",

                },                },

                {                {

                    title: "Frontend Expert",                    title: "Project Planner",

                    href: "/docs/agents/frontend-expert",                    href: "/docs/agents/project-planner",

                },                },

                {                {

                    title: "Backend Expert",                    title: "Frontend Specialist",

                    href: "/docs/agents/backend-expert",                    href: "/docs/agents/frontend-specialist",

                },                },

                {                {

                    title: "Security Auditor",                    title: "Backend Specialist",

                    href: "/docs/agents/security-auditor",                    href: "/docs/agents/backend-specialist",

                },                },

                {                {

                    title: "Documentation Writer",                    title: "Mobile Developer",

                    href: "/docs/agents/documentation-writer",                    href: "/docs/agents/mobile-developer",

                },                },

            ],                {

        },                    title: "Security Auditor",

        {                    href: "/docs/agents/security-auditor",

            title: "Prompt Files",                },

            items: [                {

                {                    title: "Debugger",

                    title: "Overview",                    href: "/docs/agents/debugger",

                    href: "/docs/skills",                },

                },                {

                {                    title: "Game Developer",

                    title: "Code Generation",                    href: "/docs/agents/game-developer",

                    href: "/docs/skills/code-generation",                },

                },            ],

                {        },

                    title: "Code Review",        {

                    href: "/docs/skills/code-review",            title: "Skills",

                },            items: [

                {                {

                    title: "Refactoring",                    title: "Overview",

                    href: "/docs/skills/refactoring",                    href: "/docs/skills",

                },                },

                {                {

                    title: "Documentation",                    title: "Clean Code",

                    href: "/docs/skills/documentation",                    href: "/docs/skills/clean-code",

                },                },

                {                {

                    title: "Testing",                    title: "React Patterns",

                    href: "/docs/skills/testing",                    href: "/docs/skills/react-patterns",

                },                },

            ],                {

        },                    title: "Next.js Best Practices",

        {                    href: "/docs/skills/nextjs-best-practices",

            title: "Instructions",                },

            items: [                {

                {                    title: "Tailwind Patterns",

                    title: "Overview",                    href: "/docs/skills/tailwind-patterns",

                    href: "/docs/workflows",                },

                },                {

                {                    title: "Frontend Design",

                    title: "Repository Instructions",                    href: "/docs/skills/frontend-design",

                    href: "/docs/workflows/repository",                },

                },                {

                {                    title: "Mobile Design",

                    title: "Folder Instructions",                    href: "/docs/skills/mobile-design",

                    href: "/docs/workflows/folder",                },

                },            ],

                {        },

                    title: "applyTo Instructions",        {

                    href: "/docs/workflows/apply-to",            title: "Workflows",

                },            items: [

            ],                {

        },                    title: "Overview",

        {                    href: "/docs/workflows",

            title: "CLI Reference",                },

            items: [                {

                {                    title: "/brainstorm",

                    title: "Overview",                    href: "/docs/workflows/brainstorm",

                    href: "/docs/cli",                },

                },                {

            ],                    title: "/create",

        },                    href: "/docs/workflows/create",

    ],                },

};                {

                    title: "/debug",
                    href: "/docs/workflows/debug",
                },
                {
                    title: "/deploy",
                    href: "/docs/workflows/deploy",
                },
            ],
        },
    ],
};
