import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_CODESPACE_NAME
  ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setEntries(results);
        console.log('Fetched leaderboard:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i}>
              <td>{e.team?.name || e.team}</td>
              <td>{e.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
