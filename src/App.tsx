import React, { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { useVPNConnection } from './hooks/useVPNConnection';
import type { Server } from './types/server';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected, selectedServer, connect, disconnect } = useVPNConnection();

  const handleServerSelect = (server: Server) => {
    connect(server);
  };

  const handleToggleConnection = () => {
    if (isConnected) {
      disconnect();
    } else if (selectedServer) {
      connect(selectedServer);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  return (
    <Dashboard 
      isConnected={isConnected}
      selectedServer={selectedServer}
      onToggleConnection={handleToggleConnection}
      onServerSelect={handleServerSelect}
    />
  );
}

export default App;