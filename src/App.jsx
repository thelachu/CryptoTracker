import { useEffect, useState } from "react";
import CryptoTable from "./components/CryptoTable";
import "./App.css";
function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCryptoData(data);
    }
    fetchData();
  }, []);
  const filteredCrypto = cryptoData.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );
  const visibleData = search
    ? filteredCrypto
    : cryptoData.slice(0, visibleCount);
  return (
    <div className="container">
      <h1>Crypto Tracker</h1>
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <CryptoTable visibleData={visibleData} />
      {visibleCount < 99 && (
        <button onClick={() => setVisibleCount((pre) => pre + 10)}>
          Show More
        </button>
      )}
    </div>
  );
}

export default App;
