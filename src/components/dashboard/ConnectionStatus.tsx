import React from 'react';
import { Shield, Power, AlertTriangle } from 'lucide-react';
import type { Server } from '../../types/server';

type Props = {
  isConnected: boolean;
  selectedServer: Server | null;
  onToggleConnection: () => void;
};

export function ConnectionStatus({ isConnected, selectedServer, onToggleConnection }: Props) {
  const canToggle = Boolean(selectedServer);
  let statusText = 'Select a sample server to preview the connection state.';
  if (selectedServer && !isConnected) statusText = selectedServer.name + ' selected. No VPN tunnel is active.';
  if (selectedServer && isConnected) statusText = 'UI simulation active for ' + selectedServer.name + '. No VPN tunnel has been created.';

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start space-x-4">
          <Shield className={isConnected ? 'h-8 w-8 text-amber-500' : 'h-8 w-8 text-gray-400'} aria-hidden="true" />
          <div>
            <h2 className="text-xl font-semibold">Connection simulation</h2>
            <p className="text-sm text-gray-600">{statusText}</p>
            <div className="mt-2 flex items-center gap-2 text-xs text-amber-700">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Traffic is not encrypted or routed by this prototype.
            </div>
          </div>
        </div>
        <button
          onClick={onToggleConnection}
          disabled={!canToggle}
          className={isConnected
            ? 'flex items-center justify-center px-5 py-2 rounded-lg text-white bg-gray-700 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300'
            : 'flex items-center justify-center px-5 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300'}
        >
          <Power className="h-5 w-5 mr-2" aria-hidden="true" />
          {isConnected ? 'End simulation' : 'Simulate connection'}
        </button>
      </div>
    </div>
  );
}
