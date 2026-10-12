import type { Server } from '../types/server';

export type VpnSimulationState = {
  selectedServer: Server | null;
  isConnected: boolean;
};

export function selectSampleServer(_current: VpnSimulationState, server: Server): VpnSimulationState {
  return { selectedServer: server, isConnected: false };
}

export function toggleSimulation(current: VpnSimulationState): VpnSimulationState {
  if (!current.selectedServer) return current;
  return { ...current, isConnected: !current.isConnected };
}
