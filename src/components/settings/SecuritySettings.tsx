import React, { useState } from 'react';
import { Shield, Globe, Wifi } from 'lucide-react';
import { Toggle } from '../ui/Toggle';
import { Select } from '../ui/Select';
import { SecurityOption } from './SecurityOption';

const DNS_OPTIONS = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'custom', label: 'Custom' },
  { value: 'google', label: 'Google DNS' },
  { value: 'cloudflare', label: 'Cloudflare DNS' },
];

const PROTOCOL_OPTIONS = [
  { value: 'openvpn', label: 'OpenVPN' },
  { value: 'wireguard', label: 'WireGuard' },
  { value: 'ikev2', label: 'IKEv2/IPSec' },
];

export function SecuritySettings() {
  const [killSwitch, setKillSwitch] = useState(false);
  const [dnsServer, setDnsServer] = useState('automatic');
  const [protocol, setProtocol] = useState('openvpn');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
      
      <div className="space-y-6">
        <SecurityOption
          icon={Shield}
          title="Kill Switch"
          description="Prevent data leaks if VPN disconnects"
        >
          <Toggle enabled={killSwitch} onChange={setKillSwitch} />
        </SecurityOption>

        <SecurityOption
          icon={Globe}
          title="DNS Settings"
          description="Custom DNS server configuration"
        >
          <Select
            options={DNS_OPTIONS}
            value={dnsServer}
            onChange={setDnsServer}
          />
        </SecurityOption>

        <SecurityOption
          icon={Wifi}
          title="Protocol"
          description="VPN protocol selection"
        >
          <Select
            options={PROTOCOL_OPTIONS}
            value={protocol}
            onChange={setProtocol}
          />
        </SecurityOption>
      </div>
    </div>
  );
}