import React from 'react';
import { Globe, Signal } from 'lucide-react';
import type { Server } from '../../types/server';

type Props = { server: Server; onSelect: (server: Server) => void };

export function ServerCard({ server, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(server)}
      className="w-full flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-4 border rounded-lg hover:bg-gray-50 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={'Select sample server ' + server.name + ', ' + server.region}
    >
      <div className="flex items-center space-x-4">
        <Globe className="h-6 w-6 text-blue-500" aria-hidden="true" />
        <div><h3 className="font-medium">{server.name}</h3><p className="text-sm text-gray-500">{server.region}</p></div>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <div><span className="font-medium">Demo load</span><span className="ml-2 text-gray-500">{server.load}%</span></div>
        <div className="flex items-center"><Signal className="h-4 w-4 text-gray-400 mr-1" aria-hidden="true" /><span className="font-medium">Demo ping</span><span className="ml-2 text-gray-500">{server.ping}ms</span></div>
      </div>
    </button>
  );
}
