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

### Dodatkowe strony

- `docs/liga-przedsiebiorcow.html` — samowystarczalna wersja gry "Liga Przedsiębiorców" z przechowywaniem stanu w `localStorage`. Do działania wymaga wyłącznie statycznego hostingu (np. GitHub Pages) i plików towarzyszących w katalogach `docs/styles/` oraz `docs/scripts/`.
