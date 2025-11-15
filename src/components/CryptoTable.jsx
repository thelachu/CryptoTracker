import "./CryptoTable.css";
function CryptoTable({ visibleData }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price INR</th>
            <th>Circulating supply</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((data) => (
            <tr key={data.id}>
              <td>{data.market_cap_rank}</td>
              <td>
                <img src={data.image} />
              </td>
              <td>{data.name}</td>
              <td>{data.symbol.toUpperCase()}</td>
              <td>{data.market_cap.toLocaleString()}</td>
              <td>{data.current_price.toLocaleString()}</td>
              <td>{data.circulating_supply.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CryptoTable;
