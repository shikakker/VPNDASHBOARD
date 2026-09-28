import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('server selection is wired into dashboard state instead of console-only behavior', () => {
  const list = read('src/components/server/ServerList.tsx');
  const main = read('src/components/dashboard/MainContent.tsx');

  assert.match(list, /onServerSelect: \(server: Server\) => void/);
  assert.match(list, /onSelect=\{onServerSelect\}/);
  assert.doesNotMatch(list, /console\.log\(/);
  assert.match(main, /<ServerList onServerSelect=\{onServerSelect\}/);
});

test('connection simulation cannot silently run without a selected server', () => {
  const status = read('src/components/dashboard/ConnectionStatus.tsx');

  assert.match(status, /disabled=\{!isConnected && !selectedServer\}/);
  assert.match(status, /aria-pressed=\{isConnected\}/);
  assert.match(status, /Select a server first/);
  assert.match(status, /VPN Demo Status/);
  assert.match(status, /Simulating connection/);
});

test('product continues to state that no real tunnel is created', () => {
  const list = read('src/components/server/ServerList.tsx');
  assert.match(list, /No VPN tunnel is created/);
});
