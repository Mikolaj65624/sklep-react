import { produkty } from '../models/productModel'

export function pobierzProdukty() {
    return produkty;
}

export function znajdzProdukt(id) {
    return produkty.find(produkt => produkt.id === id);
}

export function filtrujProdukty(kategoria) {
    if (kategoria === "wszystkie") {
        return produkty;
    }

    return produkty.filter(produkt => produkt.kategoria === kategoria);
}

export function wyszukajProdukty(lista, fraza) {
    return lista.filter(produkt => produkt.nazwa.toLowerCase().includes(fraza.toLowerCase()));
}

export function sortujProdukty(lista, sposob) {
    const kopia = [...lista];

    if (sposob === "rosnaco") {
        return kopia.sort((a,b) => a.cena - b.cena)
    }

    if (sposob === "malejaco") {
        return kopia.sort((a,b) => b.cena - a.cena)
    }

    if (sposob === "nazwa-az") {
        return kopia.sort((a, b) => a.nazwa.localeCompare(b.nazwa, "pl"));
    }

    if (sposob === "nazwa-za") {
        return kopia.sort((a, b) => b.nazwa.localeCompare(a.nazwa, "pl"));
    }

    return kopia;
}

export const DOMYSLNE_FILTRY = {
    kategoria: "wszystkie",
    szukaj: "",
    sortowanie: "domyslne"
}

export function handleWyczyscFiltry(setKategoria, setSzukaj, setSortowanie) {
    setKategoria(DOMYSLNE_FILTRY.kategoria);
    setSzukaj(DOMYSLNE_FILTRY.szukaj);
    setSortowanie(DOMYSLNE_FILTRY.sortowanie);
}