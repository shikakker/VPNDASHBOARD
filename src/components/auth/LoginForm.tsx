import React from 'react';
import { LogIn, ShieldAlert } from 'lucide-react';

type Props = { onLogin: () => void };

export function LoginForm({ onLogin }: Props) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4 text-amber-700">
        <ShieldAlert className="h-6 w-6" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-wide">Prototype mode</span>
      </div>
      <h2 className="text-2xl font-bold mb-3">VPN dashboard preview</h2>
      <p className="text-sm text-gray-600 mb-6">
        Authentication is not implemented. This preview intentionally does not collect an email address or password.
      </p>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <LogIn className="h-5 w-5 mr-2" aria-hidden="true" />
          Open demo dashboard
        </button>
      </form>
    </div>
  );
}
