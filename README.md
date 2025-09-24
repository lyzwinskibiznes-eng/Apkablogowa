# ATEXpert – statyczna baza wiedzy ATEX

Projekt zawiera statyczną aplikację blogową poświęconą bezpieczeństwu przeciwwybuchowemu. Wszystkie pliki serwisu znajdują się w katalogu głównym repozytorium, dzięki czemu witrynę można publikować bezpośrednio z gałęzi `main` w GitHub Pages.

## Uruchomienie lokalne

```bash
python -m http.server 8000
```

Po uruchomieniu wejdź na `http://localhost:8000/`, aby zobaczyć stronę główną. Podstrony `category.html` oraz `post.html` korzystają z tych samych zasobów (stylów i skryptów), więc będą działać automatycznie.

## Struktura katalogów

- `index.html` – strona główna z kafelkami sekcji, blokiem kontaktowym i grą edukacyjną.
- `category.html` – lista tematów wybranej sekcji.
- `post.html` – renderer pojedynczego artykułu.
- `scripts/` – logika interfejsu oraz zestaw danych udostępniany jako `window.ATEX_DATA`.
- `styles/` – arkusze stylów witryny.
- `images/` – grafiki używane w sekcji hero i elementach dekoracyjnych.
- `.nojekyll` – plik wyłączający przetwarzanie Jekylla w GitHub Pages.

Całość działa jako aplikacja typu SPA z prostym routowaniem parametrami zapytania, dzięki czemu nie jest wymagane żadne środowisko wykonawcze po stronie serwera.
