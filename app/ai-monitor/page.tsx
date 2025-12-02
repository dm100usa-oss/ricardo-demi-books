'use client';

import { useEffect, useState } from 'react';

type Visit = {
  timestamp: string;
  path: string;
  method: string;
  referer: string;
  visitorType: string;
  country: string;
};

export default function AIMonitorPage() {
  const [data, setData] = useState<Visit[]>([]);

  useEffect(() => {
    fetch('/api/ai-monitor')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>visits</h1>

      <table border={1} cellPadding={6}>
        <thead>
          <tr>
            <th>time</th>
            <th>type</th>
            <th>path</th>
            <th>referer</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => (
            <tr key={i}>
              <td>{v.timestamp}</td>
              <td>{v.visitorType}</td>
              <td>{v.path}</td>
              <td>{v.referer || '-'}</td>
              <td>{v.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
