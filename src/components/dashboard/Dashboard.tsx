import React from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';
import type { Server } from '../../types/server';

type Props = {
  isConnected: boolean;
  selectedServer: Server | null;
  onToggleConnection: () => void;
  onServerSelect: (server: Server) => void;
};

export function Dashboard({ isConnected, selectedServer, onToggleConnection, onServerSelect }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Header />
        <MainContent 
          isConnected={isConnected}
          selectedServer={selectedServer}
          onToggleConnection={onToggleConnection}
          onServerSelect={onServerSelect}
        />
      </div>
    </div>
  );
}