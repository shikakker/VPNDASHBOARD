import test from 'node:test';
import assert from 'node:assert/strict';

const simulation = await import('../src/lib/vpnSimulation.ts').catch(() => null);

const first = { id: '1', name: 'US East', region: 'New York', load: 45, ping: 23 };
const second = { id: '2', name: 'Europe', region: 'London', load: 30, ping: 89 };
const empty = { selectedServer: null, isConnected: false };

test('selecting a sample server does not start the connection simulation', () => {
  assert.equal(typeof simulation?.selectSampleServer, 'function', 'selectSampleServer should exist');
  assert.deepEqual(simulation.selectSampleServer(empty, first), { selectedServer: first, isConnected: false });
});

test('connection simulation starts only on explicit toggle after selection', () => {
  assert.equal(typeof simulation?.toggleSimulation, 'function', 'toggleSimulation should exist');
  const selected = { selectedServer: first, isConnected: false };
  assert.deepEqual(simulation.toggleSimulation(selected), { selectedServer: first, isConnected: true });
});

test('simulation cannot begin without a selected server', () => {
  assert.equal(typeof simulation?.toggleSimulation, 'function', 'toggleSimulation should exist');
  assert.deepEqual(simulation.toggleSimulation(empty), empty);
});

test('changing sample server stops any existing simulated connection', () => {
  assert.equal(typeof simulation?.selectSampleServer, 'function', 'selectSampleServer should exist');
  const active = { selectedServer: first, isConnected: true };
  assert.deepEqual(simulation.selectSampleServer(active, second), { selectedServer: second, isConnected: false });
});

test('explicit toggle stops an active simulated connection', () => {
  assert.equal(typeof simulation?.toggleSimulation, 'function', 'toggleSimulation should exist');
  const active = { selectedServer: first, isConnected: true };
  assert.deepEqual(simulation.toggleSimulation(active), { selectedServer: first, isConnected: false });
});
