import React from 'react';
import { ServerCard } from './ServerCard';
import { servers } from '../../data/servers';
import type { Server } from '../../types/server';

type Props = {
  onServerSelect: (server: Server) => void;
};

export function ServerList({ onServerSelect }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Available Demo Servers</h2>
      <p className="mb-4 text-sm text-gray-500">
        Selecting a server starts only the local connection simulation. No VPN tunnel is created.
      </p>
      <div className="space-y-4">
        {servers.map((server) => (
          <ServerCard
            key={server.id}
            server={server}
            onSelect={onServerSelect}
          />
        ))}
      </div>
    </div>
  );
}
