import { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { useVPNConnection } from './hooks/useVPNConnection';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isConnected, selectedServer, selectServer, toggle } = useVPNConnection();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  return (
    <Dashboard
      isConnected={isConnected}
      selectedServer={selectedServer}
      onToggleConnection={toggle}
      onServerSelect={selectServer}
    />
  );
}

export default App;
