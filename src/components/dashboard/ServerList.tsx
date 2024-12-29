import React from 'react';
import { Globe, Signal } from 'lucide-react';

type Server = {
  id: string;
  name: string;
  region: string;
  load: number;
  ping: number;
};

const servers: Server[] = [
  { id: '1', name: 'US East', region: 'New York', load: 45, ping: 23 },
  { id: '2', name: 'US West', region: 'Los Angeles', load: 65, ping: 45 },
  { id: '3', name: 'Europe', region: 'London', load: 30, ping: 89 },
  { id: '4', name: 'Asia', region: 'Tokyo', load: 55, ping: 120 },
];

export function ServerList() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Available Servers</h2>
      <div className="space-y-4">
        {servers.map((server) => (
          <div
            key={server.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <Globe className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="font-medium">{server.name}</h3>
                <p className="text-sm text-gray-500">{server.region}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-medium">Load</p>
                <p className="text-sm text-gray-500">{server.load}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Ping</p>
                <div className="flex items-center">
                  <Signal className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-gray-500">{server.ping}ms</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}