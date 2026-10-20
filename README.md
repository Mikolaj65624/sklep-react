# Sklep React

Prosta aplikacja sklepu internetowego napisana w React. Wyświetla listę produktów z możliwością wyszukiwania, filtrowania i sortowania.

## Funkcje

- wyszukiwanie produktów po nazwie
- filtrowanie według kategorii (owoce, pieczywo, nabiał, elektronika, sport, akcesoria)
- sortowanie po cenie (rosnąco / malejąco) i po nazwie (A-Z / Z-A)
- licznik znalezionych produktów
- przycisk „Wyczyść filtry"
- karta produktu z aktualną ceną, ceną sprzed 30 dni, przyciskiem „Dodaj do koszyka" oraz polubieniem (serduszko z licznikiem)

## Struktura projektu

```
src/
├── App.jsx                      # główny komponent, stan filtrów
├── App.css                      # style
├── components/
│   └── ProductCard.jsx          # karta pojedynczego produktu
├── views/
│   └── ProductList.jsx          # lista produktów
├── controllers/
│   └── productController.js     # filtrowanie, wyszukiwanie, sortowanie
├── models/
│   └── productModel.js          # dane produktów
└── assets/                      # zdjęcia produktów
```

Projekt jest podzielony na model, widok i kontroler (MVC), dzięki czemu logika jest oddzielona od interfejsu.

## Uruchomienie

```bash
npm install
npm run dev
```