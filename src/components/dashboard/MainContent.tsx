import React from 'react';
import { ConnectionStatus } from './ConnectionStatus';
import { ServerList } from '../server/ServerList';
import { SecuritySettings } from '../settings/SecuritySettings';
import type { Server } from '../../types/server';

type Props = {
  isConnected: boolean;
  selectedServer: Server | null;
  onToggleConnection: () => void;
  onServerSelect: (server: Server) => void;
};

export function MainContent({ isConnected, selectedServer, onToggleConnection, onServerSelect }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6">
      <ConnectionStatus 
        isConnected={isConnected}
        selectedServer={selectedServer}
        onToggleConnection={onToggleConnection}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ServerList onServerSelect={onServerSelect} />
        <SecuritySettings />
      </div>
    </div>
  );
}