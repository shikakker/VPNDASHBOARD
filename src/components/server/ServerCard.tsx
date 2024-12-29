import React from 'react';
import { Globe, Signal } from 'lucide-react';
import { Server } from '../../types/server';

type Props = {
  server: Server;
  onSelect: (server: Server) => void;
};

export function ServerCard({ server, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(server)}
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
  );
}