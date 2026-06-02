# Conventional Commit Convention

Proyek ini mengikuti [Conventional Commits](https://www.conventionalcommits.org/) untuk standardisasi pesan commit.

## Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Commit Types

| Type       | Kegunaan                                  |
| ---------- | ----------------------------------------- |
| `feat`     | Fitur baru                                |
| `fix`      | Perbaikan bug                             |
| `docs`     | Perubahan dokumentasi                     |
| `style`    | Formatting, spacing, styling (no logic)   |
| `refactor` | Refactor kode (bukan fitur/fix)           |
| `perf`     | Peningkatan performa                      |
| `test`     | Menambah/mengubah test                    |
| `build`    | Build system, dependencies, config        |
| `ci`       | Perubahan CI/CD                           |
| `chore`    | Maintenance, tugas rutin                  |
| `revert`   | Revert commit sebelumnya                  |

## Scope

Scope yang umum dipakai di proyek ini:

| Scope        | Area                                           |
| ------------ | ---------------------------------------------- |
| `hero`       | Hero section component                         |
| `about`      | About section & content                        |
| `skills`     | Skills section                                 |
| `experience` | Experience section & content                   |
| `contact`    | Contact section                                |
| `project`    | Project pages, list, detail                    |
| `footer`     | Footer component                               |
| `navbar`     | Navbar component                               |
| `content`    | Content data (JSON/TS files)                   |
| `layout`     | Layout components (MainLayout, dll)            |
| `config`     | Astro config, build config, tooling            |
| `deps`       | Dependency updates                             |
| `style`      | Global styling, dark mode, responsive          |
| `a11y`       | Accessibility improvements                     |

Jika perubahan mencakup banyak area, scope bisa dihilangkan.

## Contoh

```
feat(about): add dynamic years of experience calculation
```
```
fix(skills): resolve icon import error for Alpine.js
```
```
refactor(content): convert JSON content to TypeScript
```
```
style: adjust section spacing and typography
```
```
feat(project): add slideshow with auto-play and controls
```
```
chore(deps): update react-icons to v5.5
```

## Best Practices

1. **Satu logical change per commit** — jangan campur fitur dan refactor dalam satu commit
2. **Imperative mood** — "add" bukan "added", "fix" bukan "fixed"
3. **Present tense** — "change" bukan "changed"
4. **Deskripsi < 72 karakter**
5. **Body opsional** untuk menjelaskan *why* dan *what*, bukan *how*
6. **Footer** untuk referensi issue: `Closes #123`, `Refs #456`
7. **Breaking changes** — tambah `!` setelah type/scope: `feat!: remove deprecated endpoint`
