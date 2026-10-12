import React from 'react';

type Props = { enabled: boolean; onChange: (enabled: boolean) => void; disabled?: boolean };

export function Toggle({ enabled, onChange, disabled = false }: Props) {
  return (
    <label className={disabled ? 'relative inline-flex items-center cursor-not-allowed opacity-60' : 'relative inline-flex items-center cursor-pointer'}>
      <input type="checkbox" className="sr-only peer" checked={enabled} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
    </label>
  );
}
