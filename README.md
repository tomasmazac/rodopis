# Rodopis

Statický web s rodokmenem, generovaný nástrojem [Hugo](https://gohugo.io/) (min. verze 0.158).

## Spuštění

```bash
hugo server     # náhled na http://localhost:1313 s automatickým obnovováním
hugo --minify --cleanDestinationDir   # build do složky public/ (smaže z ní staré soubory)
```

Výsledek ve `public/` je samostatný: všechny odkazy jsou relativní, takže funguje na libovolné adrese i otevřený přímo z disku (`public/index.html`), bez serveru.

Build potřebuje celou git historii (`enableGitInfo`, datum „Naposledy upraveno“).

- `hugo server` zapisuje do `public/` a soubory, které už nevznikají (např. po přejmenování stránky), nemaže. Když lokálně funguje adresa, která by neměla, pomůže `hugo server --cleanDestinationDir`.
- `hugo server` přesměruje `…/index.html` na `…/`. Na produkci je to obráceně: platí jen adresa s `index.html`.
- Verze Huga na Netlify je v `netlify.toml` (`HUGO_VERSION`). Při aktualizaci Huga lokálně změnit i tam.

## Struktura

| Cesta | Obsah |
|---|---|
| `content/osoby/` | stránky osob (`prijmeni-jmeno-id.md`) |
| `content/` | ostatní stránky (matriky, zdroje, …) |
| `static/images/` | fotografie a dokumenty k osobám |
| `static/` | ostatní soubory kopírované beze změny (favicony, PDF) |
| `data/prijmeni.yaml` | seznam zkoumaných příjmení na úvodní stránce |
| `data/presmerovani.yaml` | dřívější adresy stránek osob a id osoby, na kterou přesměrují |
| `scripts/new-id.sh` | vypíše nové volné id osoby |
| `layouts/`, `assets/` | šablony, styly, skript vyhledávání a logo (při buildu se převede do WebP) |

## Adresy

- Každá stránka má jedinou adresu, a to s `.html` (sekce `…/index.html`). Odkazy na webu vedou vždy na ni.
- Adresy bez `.html` přesměrovává pravidlo 301 v `_redirects`, které vzniká při buildu (`layouts/home.redirects`). Ručně se nepíše.
- V `netlify.toml` je vypnuté „Pretty URLs“ Netlify, které by odkazy přepisovalo bez `.html`.

## Psaní stránek

Frontmatter osoby:

```yaml
---
id: p1rxx5          # trvalé id osoby, název souboru jím končí
title: Emanuel Mazač
firstName: Emanuel
surname: Mazač
birth: 1895
death: 1949
father: bn9bff      # id otce, nebo text pro otce bez stránky: "Josef Frumar (?–?)"
mother: q0r7kx      # totéž pro matku
children:           # jen děti bez vlastní stránky; děti se stránkou se doplní samy
  - "Ludmila Volštátová (1906–?)"
mtDna: H1c3         # haploskupina mtDNA; osoba se objeví na stránce /mtdna/h1c3.html
yDna: I-FT413013    # haploskupina Y-DNA; stránka /y-dna/i-ft413013.html
isGenerated: true   # jen pro stránky vygenerované z GEDCOM
draft: true         # stránka se negeneruje; odkazy na ni jsou jen text
---
```

### Název souboru a id

- Soubor osoby se jmenuje `prijmeni-jmeno-id.md`, např. `mazac-emanuel-p1rxx5.md`:
  - `prijmeni` je u žen rodné příjmení, `jmeno` jen první křestní jméno,
  - malá písmena bez diakritiky, mezery a ostatní znaky nahrazuje pomlčka,
  - na konci je `id` z frontmatteru.
- `id` vypíše `scripts/new-id.sh`. Má 6 znaků z abecedy [Crockford Base32](https://www.crockford.com/base32.html) (číslice a malá písmena bez `i`, `l`, `o`, `u`) a vždy začíná písmenem, jinak by YAML id jako `123e45` přečetl jako číslo.
- `id` je trvalá totožnost osoby: nikdy se nemění a nepoužije se znovu, ani po smazání osoby.
- Build skončí chybou, když `id` chybí nebo nemá správný tvar, když ho mají dvě stránky, nebo když jím název souboru nekončí.
- Přejmenování souboru (např. oprava jména) mění adresu stránky. Starý název bez `.md` je potřeba zapsat do `data/presmerovani.yaml` s `id` osoby, jinak stará adresa vrátí 404. Build skončí chybou, když tam je `id`, které žádná stránka nemá.
- Po přejmenování ukáže „Naposledy upraveno“ datum přejmenování: git historii přes přejmenování nesleduje.

### Obsah stránky

- Odkaz na jinou osobu: `[Josef Mazač](mazac-josef-bn9bff.md)` – Hugo ho převede na URL a při buildu upozorní na neexistující stránku. Odkaz na stránku s `draft: true` se zobrazí jako text.
- Odkaz na soubor ve `static/` (PDF, sken) začíná `../`, např. `[Rešerše](../D01_02_Prvopis_verze_3EEA4C20.pdf)`. Existenci souboru build nekontroluje.
- Zdroje jsou poznámky pod čarou: v textu `[^1]`, na konci stránky nadpis `## Zdroje` a pod ním `[^1]: Popis zdroje`. Sousední odkazy (`[^2][^1]`) se na webu spojí do `[1, 2]`. Zdroj, který v textu není citovaný, Hugo nezobrazí; build na to upozorní.
- Sekce „Rodiče“, „Potomci“ a „DNA“ se do textu nepíšou. Vytvoří je šablona z `father`, `mother`, `children`, `mtDna` a `yDna` a vloží je za vyprávění, před sekce „Útržky“, „Jmenovec“, „Externí odkazy“ a „Zdroje“.
- Vztah se zapisuje jen u dítěte (`father`, `mother`). Potomky se stránkou šablona najde sama; do `children` patří jen děti bez stránky, jinak budou na stránce dvakrát. Build skončí chybou, když `father` / `mother` vypadá jako id, ale taková osoba není, nebo když je v `children` id.
- V seznamech příbuzných se ukazuje rodné jméno (`firstName` + `surname`) a roky ze stránky příbuzného, ne titulek.
- Haploskupina se zapisuje do `mtDna` / `yDna` u každé osoby, která ji má (mtDNA dědí všechny děti matky, Y-DNA synové otce). Nic se nedopočítává: osoba bez pole na stránce haploskupiny není. Kdo ji nezdědil (např. adopce), pole nemá.
- Stránka haploskupiny řadí zapsané osoby do stromu podle `mother` (mtDNA) nebo `father` (Y-DNA). Osoba, jejíž matka/otec v seznamu chybí, začíná vlastní větev – to bývá místo, kde pole někomu chybí.
- `isGenerated: true` přidá upozornění „Vygenerovaná stránka“, skryje stránku před vyhledávači (`noindex`) a vynechá ji ze sitemapy.
- Fotografie ze `static/images/`:
  `{{< photo src="soubor.jpg" alt="Popisek" size="md" >}}`
  (`size`: `sm` / `md` / `lg`). Na web se fotka zmenší na šířku max. 1480 px a převede do WebP (kvalita 85); originál zůstává na webu i v repozitáři beze změny. Chybějící fotka build zastaví.
- Upozornění:

  ```markdown
  > [!WARNING] NEKOMPLETNÍ INFORMACE
  > Chybí matriční záznam o úmrtí nebo úmrtní list.
  ```
