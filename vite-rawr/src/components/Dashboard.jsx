import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-black text-white p-8">
        <div className="bg-violet-900 rounded-lg shadow-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Table</h1>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">1</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">Judi Klod</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">judiklod@example.com</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">2</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">Jofafs Joestar</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">jofafs@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
