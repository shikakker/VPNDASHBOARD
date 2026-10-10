import React from 'react';

export function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">VPN Dashboard Prototype</h1>
      <p className="mt-2 text-sm text-gray-600">
        UX preview only — no WireGuard, OpenVPN, system VPN API, tunnel, encryption, or real server telemetry is connected.
      </p>
    </header>
  );
}
