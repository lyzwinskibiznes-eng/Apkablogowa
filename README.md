# ATEXpert – statyczna baza wiedzy ATEX

Ten projekt zawiera statyczną aplikację blogową przygotowaną na potrzeby publikacji w GitHub Pages.

## Uruchomienie lokalne

```bash
cd docs
python -m http.server 8000
```

Po uruchomieniu wejdź na `http://localhost:8000/`.

## Struktura

Cała zawartość serwisu znajduje się w katalogu `docs/`, co umożliwia bezpośrednie hostowanie w GitHub Pages (opcja *Deploy from branch* → `main` / `docs`).

W katalogu głównym znajduje się uproszczony `index.html` oraz `post.html`, które przekierowują na `/docs/…`. Dzięki temu serwis będzie działał poprawnie niezależnie od tego, czy GitHub Pages jest skonfigurowane na katalog główny czy na `docs/`.
