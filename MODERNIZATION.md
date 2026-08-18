# VPN Dashboard — Modernization Roadmap

The current application is a VPN control-plane UX prototype. Login and connection state are simulated; no tunnel or traffic protection is implemented.

## 10 tasks
1. Keep all connection UI explicitly marked as demo/simulated until a native tunnel client reports verified state.
2. Define a typed server catalog with region, protocol capability, latency/health and availability metadata.
3. Replace simulated login with a real identity/session layer only when a backend is introduced.
4. Design a native-client bridge contract for connect, disconnect, tunnel state and errors.
5. Choose a real tunnel implementation such as WireGuard through platform-native VPN APIs rather than browser JavaScript.
6. Model DNS, routing, kill-switch and split-tunnel states explicitly in the native architecture.
7. Make UI connection state derive from the tunnel/service, never from an optimistic React boolean alone.
8. Add tests for server selection, state transitions, reconnect/error UX and account/session behavior.
9. Add CI/build/accessibility validation and document platform/browser limitations prominently.
10. Position as VPN product/control-plane design until a native client and verified tunnel are actually implemented.

## Portfolio value
Good security/network-product UX case; engineering value depends on connecting this dashboard to a real native VPN client.