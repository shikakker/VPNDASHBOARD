import { Shield, Power } from 'lucide-react';
import type { Server } from '../../types/server';

type Props = {
  isConnected: boolean;
  selectedServer: Server | null;
  onToggleConnection: () => void;
};

export function ConnectionStatus({ isConnected, selectedServer, onToggleConnection }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Shield className={`h-8 w-8 ${isConnected ? 'text-green-500' : 'text-gray-400'}`} />
          <div>
            <h2 className="text-xl font-semibold">VPN Demo Status</h2>
            <p className={`text-sm ${isConnected ? 'text-green-500' : 'text-gray-500'}`}>
              {isConnected ? `Simulating connection to ${selectedServer?.name}` : 'Simulation disconnected'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleConnection}
          disabled={!isConnected && !selectedServer}
          aria-pressed={isConnected}
          aria-label={
            isConnected
              ? 'Stop VPN connection simulation'
              : selectedServer
                ? `Simulate connection to ${selectedServer.name}`
                : 'Select a demo server before starting the simulation'
          }
          className={`flex items-center px-6 py-2 rounded-lg text-white disabled:cursor-not-allowed disabled:opacity-50 ${
            isConnected ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          <Power className="h-5 w-5 mr-2" />
          {isConnected
            ? 'Stop simulation'
            : selectedServer
              ? 'Simulate connection'
              : 'Select a server first'}
        </button>
      </div>
    </div>
  );
}