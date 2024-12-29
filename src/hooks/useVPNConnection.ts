import { useState, useCallback } from 'react';
import type { Server } from '../types/server';

export function useVPNConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  const connect = useCallback((server: Server) => {
    setSelectedServer(server);
    setIsConnected(true);
  }, []);

  const disconnect = useCallback(() => {
    setIsConnected(false);
  }, []);

  return {
    isConnected,
    selectedServer,
    connect,
    disconnect
  };
}