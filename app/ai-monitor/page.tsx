"use client";

import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function AIMonitorPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRequests: 0,
    perFile: {},
    perHour: Array(24).fill(0),
    bots: {}
  });

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/ai-monitor");
      const data = await res.json();
      setLogs(data.logs);
      setStats(data.stats);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 40 }}>
        Loading AI Indexing Dashboard...
      </div>
    );
  }

  const lineData = {
    labels: Array.from({ length: 24 }).map((_, i) => `${i}:00`),
    datasets: [
      {
        label: "Requests per hour",
        data: stats.perHour,
        borderColor: "rgba(52, 152, 219, 1)",
        backgroundColor: "rgba(52, 152, 219, 0.3)",
        tension: 0.4
      }
    ]
  };

  const pieData = {
    labels: Object.keys(stats.perFile),
    datasets: [
      {
        label: "Requests by file",
        data: Object.values(stats.perFile),
        backgroundColor: [
          "rgba(231, 76, 60, 0.6)",
          "rgba(46, 204, 113, 0.6)",
          "rgba(52, 152, 219, 0.6)",
          "rgba(241, 196, 15, 0.6)",
          "rgba(155, 89, 182, 0.6)",
          "rgba(26, 188, 156, 0.6)"
        ]
      }
    ]
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>AI Indexing Dashboard</h1>

      <div style={{ marginTop: 20 }}>
        <h2>Total Requests: {stats.totalRequests}</h2>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Requests by hour (24h)</h2>
        <Line data={lineData} />
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>Requests by API file</h2>
        <Pie data={pieData} />
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>Detected AI Bots (last 500 requests)</h2>
        <ul>
          {Object.entries(stats.bots).map(([bot, count]) => (
            <li key={bot}>
              {bot}: {count}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 60 }}>
        <h2>Latest Requests</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: 20
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: 10 }}>Time</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: 10 }}>File</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: 10 }}>User-Agent</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                  {log.time}
                </td>
                <td style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                  {log.file}
                </td>
                <td style={{ borderBottom: "1px solid #eee", padding: 10 }}>
                  {log.ua}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
