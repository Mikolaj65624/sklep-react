import { useState } from 'react'
import ProductList from './views/ProductList';
import { filtrujProdukty, wyszukajProdukty, sortujProdukty, handleWyczyscFiltry, DOMYSLNE_FILTRY } from './controllers/productController';
import './App.css'

function App() {
  const [ kategoria, setKategoria ] = useState("wszystkie");
  const [ szukaj, setSzukaj ] = useState("");
  const [ sortowanie, setSortowanie ] = useState("domyslne");
  const produktyPoKategorii = filtrujProdukty(kategoria);
  const produktyPoWyszukiwaniu = wyszukajProdukty(produktyPoKategorii, szukaj);
  const produkty = sortujProdukty(produktyPoWyszukiwaniu, sortowanie);

  return (
    <div>
      <h1>Sklep konkurencyjny dla wszystkich</h1>

      <input type="text" placeholder="Wyszukaj produkt" value={szukaj} onChange={(e) => setSzukaj(e.target.value)} />
      
      <div className="filtry-container">
        <label htmlFor="filtr">Wybierz kategorię: </label>
        <select name="filtr" id="filtr" value={kategoria} onChange={(e) => setKategoria(e.target.value)}>
          <option value="wszystkie">Wszystkie</option>
          <option value="owoce">Owoce</option>
          <option value="pieczywo">Pieczywo</option>
          <option value="nabiał">Nabiał</option>
          <option value="elektronika">Elektronika</option>
          <option value="sport">Sport</option>
          <option value="akcesoria">Akcesoria</option>
        </select>
      </div>

      <div className="sortowanie-container">
        <label htmlFor="sortowanie">Sortuj według ceny: </label>
        <select name="sortowanie" id="sortowanie" value={sortowanie} onChange={(e) => setSortowanie(e.target.value)}>
          <option value="domyslne">Domyślne</option>
          <option value="rosnaco">Rosnąco</option>
          <option value="malejaco">Malejąco</option>
          <option value="nazwa-az">Według nazwy (A-Z)</option>
          <option value="nazwa-za">Według nazwy (Z-A)</option>
        </select>
      </div>

      <p className="liczba-produtkow">Liczba znalezionych produktów: {produkty.length}</p>

      <button className="wyczysc-filtry" type="button" onClick={() => handleWyczyscFiltry(setKategoria, setSzukaj, setSortowanie)}>Wyczyść filtry</button>
      
      <ProductList produkty={produkty}></ProductList>
    </div>
  );
}

export default App;