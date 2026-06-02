# Coding Standards & Project Structure

## 1. Project Structure

```
src/
├── assets/        # Images processed by Astro <Image> (optimized)
├── components/    # Reusable UI components (PascalCase.astro)
├── config/        # App constants, env, configuration
├── content/       # Data/content as TypeScript modules
├── layouts/       # Page layout wrappers
├── pages/         # File-based routing (lowercase, [param].astro)
├── styles/        # Global CSS only (Tailwind imports)
└── types/         # Shared TypeScript interfaces (kebab-case.ts)

public/
└── images/        # Static assets served as-is (screenshots, etc.)
```

### Aturan Folder

| Directory               | Isi                                              |
| ----------------------- | ------------------------------------------------ |
| `src/components/`       | Satu file per komponen, PascalCase               |
| `src/content/`          | Data module `.ts`, default export                 |
| `src/pages/`            | Routing, lowercase, `[slug].astro` untuk dinamis |
| `src/layouts/`          | Satu layout utama (`MainLayout.astro`)           |
| `src/types/`            | Hanya interface/shared types                     |
| `src/styles/`           | Satu file `global.css`                           |

---

## 2. Component Architecture

### Struktur Komponen Astro

```astro
---
// 1. Imports (relative, .astro extension untuk komponen)
import { Image } from 'astro:assets';
import type { Props } from '../types/project-card';

// 2. Props interface
interface Props {
  title: string;
  items?: string[];
  delay?: number;
}

// 3. Destructuring dengan default value
const { title, items = [], delay = 0 } = Astro.props;

// 4. Logic (computed values, data transformation)
const computedValue = items.length > 0 ? items.length : 0;
---

<!-- 5. Template HTML -->
<section id="example" class="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100 dark:border-slate-900">
```

### Aturan Komponen

1. **Satu komponen per file** — jangan gabung multiple components dalam satu file
2. **Props didefinisikan sebagai `interface Props`** di frontmatter, di-destructure dari `Astro.props`
3. **Default value** untuk optional props: `const { title, delay = 0 } = Astro.props`
4. **React component** (`.tsx`) hanya jika perlu `client:*` directive interaktif
5. **Avoid logic in template** — semua computed values di frontmatter

### Fragment & Loops

```astro
{items.map((item, index) => (
  <Fragment key={index}>
    <div>{item.name}</div>
    {index === 0 && <div class="divider" />}
  </Fragment>
))}
```

---

## 3. Naming Conventions

### File Names

| Item              | Convention     | Contoh                               |
| ----------------- | -------------- | ------------------------------------ |
| Components        | PascalCase     | `Navbar.astro`, `ProjectCard.astro`  |
| Pages             | lowercase      | `index.astro`, `project.astro`       |
| Dynamic routes    | `[param]`      | `[slug].astro`                       |
| Layouts           | PascalCase     | `MainLayout.astro`                   |
| Content data      | camelCase      | `about.ts`, `experience.ts`          |
| Types             | kebab-case     | `project-card.ts`                    |
| Config            | `index.ts`     | `config/index.ts`                    |

### Code Names

| Item            | Convention     | Contoh                                |
| --------------- | -------------- | ------------------------------------- |
| Variables       | camelCase      | `menuItems`, `currentSlide`           |
| Functions       | camelCase      | `toggleMenu()`, `formatText()`        |
| Constants       | UPPER_SNAKE    | `API_CONFIG`, `BREAKPOINTS`           |
| Interfaces      | PascalCase     | `Props`, `MenuItem`                   |
| CSS classes     | kebab-case     | `.project-card`, `.loading-state`     |
| HTML IDs        | kebab-case     | `mobile-menu`, `slideshow-wrapper`    |
| Content fields  | camelCase      | `shortDesc`, `techStack`              |
| Section IDs     | lowercase EN   | `#about`, `#skills`, `#experience`    |

---

## 4. TypeScript Standards

### Interface Definition

```typescript
interface MenuItem {
  label: string;
  href: string;
  external?: boolean;   // optional dengan ?
}
```

### Props Pattern

```typescript
---
interface Props {
  title: string;
  description?: string;       // optional
  tags?: string[];            // optional array, default []
  delay?: number;             // optional number, default 0
}
const { title, description = "", tags = [], delay = 0 } = Astro.props;
---
```

### Import Rules

```typescript
// ✅ Astro components — sertakan .astro extension
import Navbar from './Navbar.astro';

// ✅ TypeScript/JS modules — tanpa extension atau .ts
import { skillsData } from '../data/skills';
import projects from '../content/projects.ts';

// ✅ React components — tanpa extension (JSX resolver)
import { ModeToggle } from './ModeToggle';

// ✅ Astro built-in
import { Image } from 'astro:assets';

// ✅ Icons dari package
import { FaReact, FaDocker } from 'react-icons/fa';
import { SiLaravel, SiPhp } from 'react-icons/si';

// ❌ JANGAN import JSON — semua content harus .ts
```

### Type Annotations

```typescript
// Type assertion untuk DOM elements
const iframe = card.querySelector('iframe') as HTMLIFrameElement;

// Type untuk interval/setTimeout
let autoSlideInterval: ReturnType<typeof setInterval> | null = null;
```

---

## 5. Styling Conventions (Tailwind)

### Section Pattern

Setiap section component mengikuti pola yang sama:

```astro
<section id="skills" class="max-w-6xl mx-auto px-6 py-24 border-t border-slate-100 dark:border-slate-900">
  <!-- heading -->
  <div class="mb-12 text-center md:text-left" data-aos="fade-right">
    <h2 class="text-sm font-bold tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase mb-2">
      Label Section
    </h2>
    <h3 class="text-4xl font-black text-slate-900 italic dark:text-white">
      Judul Section.
    </h3>
  </div>
</section>
```

### Card Pattern

```astro
<div class="p-6 md:p-7 bg-white dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 rounded-2xl
            hover:border-blue-500/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/50
            transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
```

### Badge/Tag Pattern

```astro
<span class="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400
           text-[10px] font-bold rounded-lg uppercase tracking-wide
           border border-transparent hover:bg-blue-500 hover:text-white hover:border-blue-500
           transition-all duration-200 cursor-default">
  {label}
</span>
```

### Color Palette

| Token        | Light                              | Dark                                   |
| ------------ | ---------------------------------- | -------------------------------------- |
| Background   | `bg-white`, `bg-slate-50`          | `dark:bg-slate-950`, `dark:bg-slate-900/30` |
| Text primer  | `text-slate-900`                   | `dark:text-white`                      |
| Text body    | `text-slate-600`                   | `dark:text-slate-400`                  |
| Text label   | `text-slate-400`                   | `dark:text-slate-500`                  |
| Accent       | `text-blue-600`, `bg-blue-50`      | `dark:text-blue-400`, `dark:bg-blue-900/20` |
| Card border  | `border-slate-100`                 | `dark:border-slate-800/60`             |
| Accent glow  | `shadow-blue-500/10`               | `dark:shadow-blue-900/20`              |
| Gradient     | `from-blue-600 to-cyan-500`        | `dark:from-blue-400 dark:to-cyan-300`  |

### Dark Mode

```html
<!-- class-based dark mode, .dark on <html> -->
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
```

### Responsive

```html
<!-- Mobile-first -->
<div class="flex flex-col md:flex-row gap-4">
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
<div class="hidden md:flex">   <!-- desktop only -->
<div class="md:hidden">        <!-- mobile only -->
```

### AOS Animations

```html
<div data-aos="fade-up" data-aos-delay={index * 100}>
<div data-aos="fade-right">
<div data-aos="zoom-in" data-aos-delay="500">
```

---

## 6. Content Management

### Content File Rules

1. **Semua content di `src/content/` sebagai `.ts`** — jangan pernah pakai `.json`
2. **Default export** — `export default { ... }` atau `export default [...]`
3. **Field names camelCase** — `shortDesc`, bukan `short_desc`
4. **Dynamic values** — gunakan template literal atau computed expressions

### Content File Pattern

```typescript
// src/content/experience.ts
export default {
  title: "Judul",
  subtitle: "Subtitle",
  items: [
    {
      year: "2026",
      company: "Nama Perusahaan",
      role: "Posisi",
      desc: "Deskripsi pekerjaan.",
      tech: ["Laravel", "React", "MySQL"],
    },
  ],
};
```

### Project Data Pattern

```typescript
// src/content/projects.ts
export default [
  {
    slug: "kebab-case-slug",
    title: "Judul Project",
    shortDesc: "Deskripsi singkat.",
    thumbnail: "/images/projects/ABBR/thumbnail-ABBR.png",
    screenshots: [
      "/images/projects/ABBR/ABBR 1.png",
      "/images/projects/ABBR/ABBR 2.png",
    ],
    tags: ["Laravel", "React", "MySQL"],
    challenge: "Paragraf tantangan...",
    solution: "Paragraf solusi...",
    features: [
      { title: "Nama Fitur", desc: "Deskripsi fitur." },
    ],
    techStack: {
      Backend: "Laravel 10 (PHP 8.1)",
      Frontend: "React 19 & Inertia.js",
    },
    result: "Paragraf hasil...",
  },
];
```

---

## 7. Clean Code Practices

### Prinsip

1. **DRY** — jangan duplikasi kode. Buat komponen reusable untuk pola yang berulang
2. **Single Responsibility** — satu komponen = satu tanggung jawab
3. **No magic numbers/strings** — gunakan constants dari `config/index.ts`
4. **Minimal comments** — kode harus self-documenting. Tambah komentar hanya untuk *why*, bukan *what*
5. **No debug leftovers** — hapus `console.log`, `debugger` sebelum commit

### Komponen

```astro
---
// ✅ BAIK — props explicit, logic di frontmatter
interface Props {
  items: string[];
}
const { items } = Astro.props;
const total = items.length;
---

// ❌ JANGAN — logic bercampur di template
{items.map(() => ...)}  // fine di template
{items.length > 3 ? "banyak" : "sedikit"}  // pindahkan ke frontmatter
```

### Imports

```typescript
// ✅ BAIK — grouped dan terurut
import { Image } from 'astro:assets';
import { FaReact } from 'react-icons/fa';

import Navbar from './Navbar.astro';
import projects from '../content/projects.ts';
```

### Template

```astro
// ✅ BAIK — conditional sederhana
{isLoading && <div>Loading...</div>}

// ✅ BAIK — map dengan key
{items.map((item, i) => <div key={i}>{item}</div>)}

// ❌ JANGAN — nested ternary panjang
{cond1 ? (cond2 ? a : b) : c}
```

### Naming

```typescript
// ✅ BAIK — deskriptif
const mobileMenuOpen = false;
function toggleMobileMenu() { ... }
const projectCards = projects.map(...)  // noun untuk data, verb untuk function

// ❌ JANGAN — singkatan tidak jelas
const mm = false;
function tgl() { ... }
const pc = projects.map(...)
```

### FormatText Utility (Project Detail)

Fungsi `formatText()` di `[slug].astro` untuk parsing markdown-like syntax:

- `**bold**` → `<strong>`
- `- list item` → `<ul><li>`

Jangan modifikasi fungsi ini tanpa memastikan backward compatibility dengan semua project data.

---

## 8. Commit Convention

Lihat `COMMIT_CONVENTION.md` untuk aturan lengkap.

```
<type>(<scope>): <description>

Contoh:
feat(skills): add hover animations on tech badges
fix(about): resolve invalid JSON syntax
refactor(content): convert JSON to TypeScript modules
style(hero): adjust responsive typography
```
