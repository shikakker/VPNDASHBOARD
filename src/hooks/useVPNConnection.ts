import { useState, useCallback } from 'react';
import type { Server } from '../types/server';
import { selectSampleServer, toggleSimulation, type VpnSimulationState } from '../lib/vpnSimulation';

export function useVPNConnection() {
  const [state, setState] = useState<VpnSimulationState>({
    selectedServer: null,
    isConnected: false,
  });

  const selectServer = useCallback((server: Server) => {
    setState(current => selectSampleServer(current, server));
  }, []);

  const toggle = useCallback(() => {
    setState(current => toggleSimulation(current));
  }, []);

  return {
    isConnected: state.isConnected,
    selectedServer: state.selectedServer,
    selectServer,
    toggle,
  };
}
