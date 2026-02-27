# Donezo —  Dashboard

## Live Link: [https://dashboard-app-flame-nine.vercel.app/](https://dashboard-app-flame-nine.vercel.app/)

A production-grade React + TypeScript dashboard built for the Frontend Intern assignment.

## 🛠 Tech Stack

- **React 18** + **TypeScript** (strict mode)
- **Vite 5** — fast dev server and build tool
- **Tailwind CSS 3** — utility-first styling with custom `brand-*` color palette
- **shadcn/ui pattern** — reusable component library (Button, Input, Label, Form, Badge)
- **React Hook Form** + **Zod** — type-safe form validation
- **Framer Motion** — animations and transitions
- **React Router DOM v6** — client-side routing with protected routes
- **Axios** — HTTP client with JWT interceptor
- **JWT Auth** — token stored in `localStorage`, rehydrated on page load

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layouts/
│   │   ├── layout-items/
│   │   │   ├── Sidebar.tsx       ← navigation sidebar
│   │   │   └── Topbar.tsx        ← header with search + user info
│   │   └── DashboardLayout.tsx   ← layout wrapper with Outlet
│   ├── modules/
│   │   ├── Auth/
│   │   │   └── LoginForm.tsx     ← RHF + Zod login form
│   │   └── Dashboard/
│   │       ├── StatCards.tsx     ← 4 stat summary cards
│   │       ├── BarChart.tsx      ← weekly analytics chart
│   │       ├── Reminder.tsx      ← meeting reminder widget
│   │       ├── ProjectList.tsx   ← sidebar project list
│   │       ├── TeamCollaboration.tsx ← team member statuses
│   │       ├── ProjectProgress.tsx  ← SVG gauge chart
│   │       └── TimeTracker.tsx   ← live timer with controls
│   └── ui/
│       ├── button.tsx            ← CVA button variants
│       ├── input.tsx             ← styled text input
│       ├── label.tsx             ← Radix label
│       ├── form.tsx              ← RHF form primitives
│       └── badge.tsx             ← status badges
├── context/
│   └── auth.context.tsx          ← AuthContext (login/logout/rehydrate)
├── lib/
│   ├── axios.ts                  ← Axios instance + JWT interceptor
│   └── utils.ts                  ← cn() helper
├── pages/
│   ├── PublicRoutes/Auth/Login.tsx  ← login page
│   └── Dashboard/DashboardPage.tsx  ← main dashboard
├── routes/
│   └── index.tsx                 ← router with public/protected routes
├── types/
│   ├── index.ts                  ← shared TypeScript interfaces
│   └── auth.type.ts              ← Zod login schema
└── utils/
    └── withAuth.tsx              ← ProtectedRoute + PublicOnlyRoute guards
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js **18+** (or Bun)
- npm / yarn / pnpm

### Step 1 — Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/dashboard-app.git
cd dashboard-app
```

### Step 2 — Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3 — Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Step 4 — Build for production
```bash
npm run build
```

### Step 5 — Preview production build
```bash
npm run preview
```

---

## 🔐 Authentication

The app uses JWT-based authentication against the provided REST API.

| Field | Value |
|-------|-------|
| **Endpoint** | `POST https://task-api-eight-flax.vercel.app/api/login` |
| **Email** | `user1@example.com` |
| **Password** | `password123` |

The JWT token is stored in `localStorage` and automatically attached to all API requests via an Axios interceptor. On page reload, the session is rehydrated from `localStorage`.

---

## 🔒 Protected Routes

- `/login` — Public only. If already logged in → redirects to `/dashboard`
- `/dashboard` — Protected. If not logged in → redirects to `/login`

---

## 🌐 Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

The `vercel.json` config handles SPA routing (all paths → `index.html`).

---

## ✨ Features

- ✅ Login with email/password + Zod validation
- ✅ JWT token auth (persistent, survives page refresh)
- ✅ Protected routes (no dashboard access without login)
- ✅ Public-only route (logged in users can't see login page)
- ✅ Dashboard with 7 widgets matching the Dribbble design
- ✅ Live time tracker with pause/stop controls
- ✅ Animated bar chart, SVG gauge, stat cards
- ✅ Team collaboration with status badges
- ✅ Responsive (mobile sidebar with overlay)
- ✅ Framer Motion animations throughout
- ✅ TypeScript strict mode, no `any`
- ✅ Reusable shadcn-style UI components
- ✅ React Hook Form + Zod on all forms
