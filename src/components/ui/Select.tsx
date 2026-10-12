import React from 'react';
type Option = { value: string; label: string };
type Props = { options: Option[]; value: string; onChange: (value: string) => void; className?: string; disabled?: boolean };

export function Select({ options, value, onChange, className = '', disabled = false }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} className={'block w-48 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed ' + className}>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  );
}
