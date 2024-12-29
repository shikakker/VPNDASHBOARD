import React from 'react';
import { ServerCard } from './ServerCard';
import { servers } from '../../data/servers';
import type { Server } from '../../types/server';

export function ServerList() {
  const handleServerSelect = (server: Server) => {
    console.log('Selected server:', server);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Available Servers</h2>
      <div className="space-y-4">
        {servers.map((server) => (
          <ServerCard
            key={server.id}
            server={server}
            onSelect={handleServerSelect}
          />
        ))}
      </div>
    </div>
  );
}