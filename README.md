# Rodopis

Statický web s rodokmenem, generovaný nástrojem [Hugo](https://gohugo.io/) (min. verze 0.158).

## Spuštění

```bash
hugo server     # náhled na http://localhost:1313 s automatickým obnovováním
hugo --minify   # build do složky public/
```

Výsledek ve `public/` je samostatný: všechny odkazy jsou relativní, takže funguje na libovolné adrese i otevřený přímo z disku (`public/index.html`), bez serveru.

Build potřebuje celou git historii (`enableGitInfo`, datum „Naposledy upraveno“).

## Struktura

| Cesta | Obsah |
|---|---|
| `content/osoby/` | stránky osob (`prijmeni-jmeno-rok.md`) |
| `content/` | ostatní stránky (matriky, zdroje, …) |
| `static/images/` | fotografie a dokumenty k osobám |
| `static/` | ostatní soubory kopírované beze změny (favicony, PDF, CMS) |
| `data/prijmeni.yaml` | seznam zkoumaných příjmení na úvodní stránce |
| `layouts/`, `assets/` | šablony, styly a skript vyhledávání |

## Psaní stránek

Frontmatter osoby:

```yaml
---
title: Emanuel Mazač
firstName: Emanuel
surname: Mazač
birth: 1895
death: 1949
isGenerated: true   # jen pro stránky vygenerované z GEDCOM
---
```

- Odkaz na jinou osobu: `[Josef Mazač](mazac-josef-1858.md)` – Hugo ho převede na URL a při buildu upozorní na neexistující stránku.
- Fotografie ze `static/images/`:
  `{{< photo src="soubor.jpg" alt="Popisek" size="md" colorized="soubor-barevne.jpg" >}}`
  (`size`: `sm` / `md` / `lg`, `colorized` je nepovinná barevná verze zobrazená při najetí myší).
  Fotky se zobrazují s ditheringem; paleta, algoritmus, kontrast a vypnutí (`enabled = false`) se nastavují v `hugo.toml` v sekci `[params.dither]`.
- Upozornění:

  ```markdown
  > [!WARNING] NEKOMPLETNÍ INFORMACE
  > Chybí matriční záznam o úmrtí nebo úmrtní list.
  ```
