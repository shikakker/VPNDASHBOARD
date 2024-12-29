import { Server } from '../types/server';

export const servers: Server[] = [
  { id: '1', name: 'US East', region: 'New York', load: 45, ping: 23 },
  { id: '2', name: 'US West', region: 'Los Angeles', load: 65, ping: 45 },
  { id: '3', name: 'Europe', region: 'London', load: 30, ping: 89 },
  { id: '4', name: 'Asia', region: 'Tokyo', load: 55, ping: 120 },
];