import React from 'react';
import { Shield, Globe, Wifi, AlertTriangle } from 'lucide-react';
import { Toggle } from '../ui/Toggle';
import { Select } from '../ui/Select';
import { SecurityOption } from './SecurityOption';

const DNS_OPTIONS = [{ value: 'automatic', label: 'Automatic' }, { value: 'cloudflare', label: 'Cloudflare DNS' }];
const PROTOCOL_OPTIONS = [{ value: 'openvpn', label: 'OpenVPN' }, { value: 'wireguard', label: 'WireGuard' }, { value: 'ikev2', label: 'IKEv2/IPSec' }];

export function SecuritySettings() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-2">Security settings preview</h2>
      <div className="mb-6 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        These controls are disabled because this frontend cannot change operating-system VPN, DNS, or kill-switch settings.
      </div>
      <div className="space-y-6">
        <SecurityOption icon={Shield} title="Kill Switch" description="Requires a native/system VPN integration"><Toggle enabled={false} onChange={() => undefined} disabled /></SecurityOption>
        <SecurityOption icon={Globe} title="DNS Settings" description="Requires a native/system networking integration"><Select options={DNS_OPTIONS} value="automatic" onChange={() => undefined} disabled /></SecurityOption>
        <SecurityOption icon={Wifi} title="Protocol" description="Requires a real VPN engine and configured gateways"><Select options={PROTOCOL_OPTIONS} value="wireguard" onChange={() => undefined} disabled /></SecurityOption>
      </div>
    </div>
  );
}
