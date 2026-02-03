next-auth-crud/
├── .env.local                    # Environment variables (DATABASE_URL, AUTH_SECRET)
├── next.config.mjs               # Next.js config (minimal)
├── tailwind.config.ts            # Tailwind config (minimal)
├── tsconfig.json                 # TypeScript config
├── package.json
│
├── prisma/
│   ├── schema.prisma             # Data models: User + Post
│   └── seed.ts                   # (optional) seed script
│
├── src/
│   ├── app/                      # App Router — every folder = a route
│   │   ├── layout.tsx            # Root layout (wraps everything)
│   │   ├── page.tsx              # / → landing / redirect
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx      # /auth/login
│   │   │   └── signup/
│   │   │       └── page.tsx      # /auth/signup
│   │   ├── dashboard/
│   │   │   └── page.tsx          # /dashboard (PROTECTED)
│   │   └── api/
│   │       └── auth/
│   │           └── [...nextauth]/
│   │               └── route.ts  # NextAuth catch-all handler
│   │
│   ├── lib/                      # Pure utility / infra — NO UI
│   │   ├── prisma.ts             # Prisma client singleton
│   │   ├── auth.ts               # NextAuth config (session logic)
│   │   └── validators.ts         # Zod schemas for every input shape
│   │
│   ├── actions/                  # Next.js Server Actions (the "backend")
│   │   ├── authActions.ts        # signup / login server actions
│   │   └── postActions.ts        # CRUD server actions (create/read/update/delete)
│   │
│   ├── components/               # Reusable UI components
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   ├── PostForm.tsx          # Shared create / edit form
│   │   └── PostList.tsx          # Renders user's posts + edit/delete buttons
│   │
│   └── middleware.ts             # Protects /dashboard (and any future routes)
│
└── public/                       # Static assets
