// import React from 'react';

const Rankings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Rankings</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Check out the latest rankings and see where you stand!
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-gray-50 shadow-sm rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rank: 1, name: "Alice", score: 98 },
                { rank: 2, name: "Bob", score: 95 },
                { rank: 3, name: "Charlie", score: 90 },
              ].map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.rank}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
