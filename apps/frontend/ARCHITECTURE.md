# Frontend Architecture Guide

## 📁 Verzeichnisstruktur

```
src/
├── components/                 # React Komponenten
│   ├── ui/                     # Wiederverwendbare UI-Komponenten
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Loading.tsx
│   │   └── Error.tsx
│   ├── shared/                 # Shared Components (auf mehreren Pages)
│   │   ├── PageContainer.tsx   # Standard Page Layout
│   │   └── Notification.tsx    # Notification Toast
│   ├── layouts/                # Layout-Komponenten
│   │   ├── RootLayout.tsx      # Hauptlayout
│   │   └── DashboardLayout.tsx # Dashboard-Layout (optional)
│   └── index.ts                # Zentrale Exports
│
├── contexts/                   # React Contexts (State Management)
│   ├── ThemeContext.tsx
│   ├── NotificationContext.tsx
│   └── index.ts
│
├── hooks/                      # Custom React Hooks
│   ├── queries/                # TanStack Query Hooks
│   │   └── useItems.ts
│   ├── mutations/              # TanStack Mutation Hooks
│   │   └── useCreateItem.ts
│   ├── custom/                 # Custom Hooks
│   │   └── useLifecycle.ts
│   └── index.ts                # Zentrale Exports
│
├── lib/                        # Utility-Funktionen & API
│   ├── api/
│   │   ├── client.ts           # Axios Konfiguration
│   │   ├── items.ts            # Items API-Methoden
│   │   └── index.ts
│   └── utils/                  # Utility-Funktionen (optional)
│       └── helpers.ts
│
├── pages/                      # Page-Komponenten (Top-Level)
│   ├── HomePage.tsx
│   ├── NotFoundPage.tsx
│   └── // Weitere Pages
│
├── routes/                     # Router-Konfiguration
│   └── index.tsx               # Router Setup
│
├── App.tsx                     # Root Component (Providers)
├── main.tsx                    # Entry Point
└── index.css                   # Globale Styles
```

## 🏗️ Best Practices

### 1. Komponenten-Struktur

**UI Components** (`components/ui/`)
- Vollständig wiederverwendbar
- Keine Business Logic
- Vollständig typsicher

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export function Button({ variant = "primary", ...props }: ButtonProps) {
  // ...
}
```

**Shared Components** (`components/shared/`)
- Komponenten die auf mehreren Pages verwendet werden
- Dürfen Business Logic enthalten
- Beispiel: Notification Toast, PageContainer

**Layout Components** (`components/layouts/`)
- Root Layout mit Global Providers
- Dashboard/Admin Layouts
- Error Boundaries

### 2. Contexts (State Management)

```typescript
// contexts/ThemeContext.tsx
import { createContext, useContext } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }) {
  // Context Logic
  return <ThemeContext.Provider value={...}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
```

**Wann Contexts verwenden?**
- Global State (Theme, Auth, Notifications)
- Prop Drilling vermeiden
- Nicht für häufig ändernde Daten (nutze TanStack Query stattdessen)

### 3. Custom Hooks

```typescript
// hooks/custom/useLifecycle.ts
export function useMount(callback: () => void) {
  useEffect(callback, []);
}

export function useUnmount(callback: () => void) {
  useEffect(() => callback, []);
}
```

**Wann Custom Hooks verwenden?**
- Wiederverwendbare Logic
- Komplexe useEffect/useState Kombinationen
- Saubererer Code in Komponenten

### 4. API Layer

```typescript
// lib/api/items.ts
export const itemsAPI = {
  getAll: async () => { /* ... */ },
  create: async () => { /* ... */ },
};

// hooks/queries/useItems.ts
export const useItems = () => {
  return useQuery({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: () => itemsAPI.getAll(),
  });
};
```

**Struktur:**
1. API-Methoden in `lib/api/`
2. React Query Hooks in `hooks/queries/`
3. Komponenten importieren nur Hooks

### 5. Router-Struktur

```typescript
// routes/index.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

// App.tsx
export function App() {
  return <RouterProvider router={router} />;
}
```

### 6. Providers Setup

```typescript
// App.tsx
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NotificationProvider>
          <RouterProvider router={router} />
        </NotificationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```

**Reihenfolge wichtig:**
1. QueryClientProvider (TanStack Query)
2. Context Providers (Global State)
3. RouterProvider (Routing)

## 🚀 Zukünftige Erweiterungen

### Neue Page hinzufügen:

1. **Page erstellen** in `pages/`
2. **Route hinzufügen** in `routes/index.tsx`

```typescript
// routes/index.tsx
{
  path: "/items",
  element: <ItemsPage />,
}
```

### Neue UI-Komponente hinzufügen:

1. **Komponente erstellen** in `components/ui/`
2. **Export** in `components/index.ts`

```typescript
// components/ui/Badge.tsx
export function Badge({ variant, children }) { /* ... */ }

// components/index.ts
export { Badge } from "./ui/Badge";
```

### Neue Query hinzufügen:

1. **API-Methode** in `lib/api/`
2. **Hook** in `hooks/queries/`
3. **Export** in `hooks/index.ts`

### Neue Context hinzufügen:

1. **Context erstellen** in `contexts/`
2. **Export** in `contexts/index.ts`
3. **Provider** in `App.tsx` hinzufügen

## 📊 Import-Pfade (Optional: tsconfig paths)

```typescript
// In tsconfig.json können Aliases definiert werden:
"@components": ["src/components"],
"@hooks": ["src/hooks"],
"@contexts": ["src/contexts"],
"@pages": ["src/pages"],
"@lib": ["src/lib"],

// Verwendung:
import { Button } from "@components";
import { useItems } from "@hooks";
import { useTheme } from "@contexts";
```

## ✅ Checkliste für neue Seiten

- [ ] Page in `pages/` erstellt
- [ ] Route in `routes/index.tsx` hinzugefügt
- [ ] Notwendige Queries/Mutations importiert
- [ ] UI-Komponenten aus `@components` verwendet
- [ ] Fehlerbehandlung implementiert
- [ ] Loading States implementiert

## 💡 Tipps

- ✅ Komponenten-Hierarchie: UI → Shared → Pages
- ✅ Contexts für Global State, TanStack Query für Server State
- ✅ Custom Hooks für wiederkehrende Logic
- ✅ API Layer unabhängig von React
- ✅ Types in separaten Files oder in Interface-Dateien
- ✅ Index-Exports für einfachere Imports
