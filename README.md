# VPN Dashboard

VPN service-management **frontend prototype** for sign-in, server selection, connection-state presentation, and dashboard UX.

Live / historical deployment reference from the previous README:

```text
https://vpndashboad.whoisegor.ru
```

The current repository does **not** create a VPN tunnel. Authentication and VPN connection state are simulated entirely in React state.

## Current product flow

```text
login form
   |
   v
VPN dashboard
   |
   +-- choose server
   +-- connect / disconnect
   `-- connection state UI
```

## Authentication is simulated

`LoginForm.tsx` contains a clear TODO for real authentication.

The current behavior is:

```text
email is non-empty
AND
password is non-empty
      |
      v
onLogin()
      |
      v
isLoggedIn = true
```

No credentials are validated against a backend, identity provider, database, OAuth service, or session token.

Therefore the sign-in screen is **UI only**, not a security boundary.

## VPN connection is simulated

`useVPNConnection.ts` maintains:

```text
isConnected
selectedServer
```

in React state.

Calling `connect(server)` simply:

```text
set selectedServer
set isConnected = true
```

and `disconnect()` sets the boolean back to false.

There is no implementation of:

- WireGuard;
- OpenVPN;
- IPsec;
- system VPN APIs;
- TUN / TAP device;
- proxy routing;
- DNS configuration;
- split tunneling;
- server authentication;
- key exchange;
- traffic encryption.

A green “connected” state in this UI does not mean network traffic is protected.

## Browser limitation

A normal React website cannot establish a system-level VPN tunnel by itself.

A real VPN product would normally require a native / platform component, such as:

- Android `VpnService`;
- iOS Network Extension;
- macOS Network Extension;
- Windows VPN / WFP / native service;
- desktop WireGuard / OpenVPN client integration;
- browser extension or proxy only for browser-scoped traffic.

The dashboard could remain the control plane while a native client performs the actual network work.

## Intended architecture

```text
web / desktop dashboard
       |
       +-- account / subscription
       +-- server catalog
       +-- connection controls
       |
       v
native VPN client / service
       |
       +-- key management
       +-- tunnel protocol
       +-- DNS
       +-- routing
       |
       v
VPN gateway
       |
       v
internet
```

## Security requirements for a real product

A production VPN service should define and test:

- account authentication;
- device authorization;
- tunnel protocol;
- ephemeral / long-lived key handling;
- gateway identity;
- DNS leak prevention;
- IPv6 behavior;
- kill-switch behavior;
- split tunneling;
- network change / reconnect logic;
- logging and retention policy;
- subscription / entitlement checks;
- server health;
- abuse controls;
- client update security.

Privacy claims should be tied to actual infrastructure and policy, not dashboard copy.

## Tech stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Lucide React

No VPN protocol library or native-networking SDK is present in the current package.

## Local development

### Requirements

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/shikakker/VPNDASHBOARD.git
cd VPNDASHBOARD
npm install
```

Run:

```bash
npm run dev
```

Build / lint / preview:

```bash
npm run lint
npm run build
npm run preview
```

## Current status

**VPN dashboard / control-plane UX prototype.** Login, server-selection, connection-state, and dashboard interactions are represented. Real authentication, VPN tunneling, traffic routing, encryption, DNS handling, subscriptions, and gateway infrastructure are not implemented by the current repository.

## Product intent

The project explores the user-facing control surface of a VPN product: sign in, understand available servers, select a location, connect, and see connection state clearly. The next engineering milestone is connecting this interface to a real native VPN client / gateway architecture.

## License

See repository files for licensing information.