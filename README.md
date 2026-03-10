<<<<<<< HEAD
# MDEF 2026 — Website

Sito personale per il **Master in Design for Emergent Futures 2026** presso IAAC, Barcellona.

---

## Struttura del progetto

```
iaac/
├── index.html           ← Homepage (scroll lungo)
├── css/
│   └── style.css        ← Tutti gli stili
├── js/
│   └── main.js          ← Animazioni e interazioni
├── images/              ← Metti qui le tue immagini
│   └── (vuota per ora)
└── pages/
    ├── term-1.html      ← Pagina Term One
    ├── term-2.html      ← Pagina Term Two
    ├── term-3.html      ← Pagina Term Three
    ├── portfolio.html   ← Portfolio
    └── notes.html       ← Note, poesie, link
```

---

## Come pubblicare su GitHub Pages

### 1. Crea il repository
```bash
# Nella cartella del progetto:
git init
git add .
git commit -m "first commit"
```

### 2. Collega a GitHub
```bash
git remote add origin https://github.com/agmnesi4/iaac.git
git branch -M main
git push -u origin main
```

### 3. Attiva GitHub Pages
1. Vai su **github.com/agmnesi4/iaac**
2. Clicca **Settings** → **Pages**
3. In "Source" seleziona **Deploy from a branch**
4. Scegli il branch **main** e la cartella **/ (root)**
5. Clicca **Save**

Il sito sarà online su: `https://agmnesi4.github.io/iaac/`

---

## Come aggiornare il sito

Dopo ogni modifica in VS Code:
```bash
git add .
git commit -m "descrizione della modifica"
git push
```
GitHub Pages si aggiorna automaticamente in 1-2 minuti.

---

## Come personalizzare i contenuti

### Cambiare la citazione hero
In `index.html`, cerca il blocco `<blockquote class="hero-quote">` e sostituisci il testo.

### Aggiungere un'immagine a una card
In `index.html`, dentro `.grid-item-image`, aggiungi:
```html
<img src="images/nome-file.jpg" alt="descrizione">
```
L'immagine andrà nella cartella `/images/`.

### Aggiungere un progetto a un Term
In `pages/term-1.html`, duplica il blocco `.project-card` e modifica il titolo.

### Aggiungere una nota
In `pages/notes.html`, copia il blocco `.note-entry` e incolla sopra gli altri.

---

## Palette colori

| Nome        | Hex       |
|-------------|-----------|
| Chiffon     | `#F8F8EB` |
| Champagne   | `#E4E0CF` |
| Rosé        | `#E4CDB7` |
| Pistachio   | `#D4CDAA` |
| Pear        | `#95894A` |
| Mahogany    | `#3C1503` |

---

*IAAC · Barcelona · 2026*
=======
# iaac
>>>>>>> ff2d160b4431e279ecee679b73361b3796f929b3
