import { useState } from 'react';

function ProductCard({nazwa, cena, staraCena, kategoria, zdjecie}) {
  const [dodano, setDodano] = useState(false);
  const [polubiono, setPolubiono] = useState(false);
  const [licznik, setLicznik] = useState(0);

  function kliknijSerce() {
    setPolubiono(!polubiono);
    setLicznik(prev => prev +1);
  }

  return (
    <div className="product-card">
      <img src={zdjecie} alt={nazwa} />
      <h2>{nazwa}</h2>
      <p>Cena: {cena.toFixed(2)} zł</p>
      <p>Cena sprzed 30 dni: <span className="stara-cena">{staraCena.toFixed(2)} zł</span></p>
      <p>Kategoria: {kategoria}</p>
      <button onClick={() => setDodano(true)} disabled={dodano}>{dodano ? "Dodano" : "Dodaj do koszyka"}</button>
      <button className="heart-button" onClick={kliknijSerce}>{polubiono ? "♥" : "♡"} {licznik}</button>
    </div>
  );
}

export default ProductCard;