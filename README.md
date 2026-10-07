# VPN Dashboard Prototype

Frontend control-plane prototype for VPN product UX: server selection, connection-state presentation, and security-setting concepts.

**This repository does not create a VPN tunnel.** It has no native VPN engine, traffic routing, encryption, DNS control, or production authentication.

## Current flow

```text
open demo dashboard
  -> choose a sample server
  -> simulate connection state
  -> inspect disabled security-setting concepts
```

The previous fake sign-in form was removed because it collected email/password-like data without any authentication backend.

## Implemented

- explicit demo entry instead of fake credential collection;
- server selection wired through the real component contract;
- simulated connection / disconnection state;
- clear warning that traffic is not encrypted or routed;
- static server load / ping values labelled as demo telemetry;
- keyboard-accessible server selection buttons;
- disabled kill-switch / DNS / protocol controls;
- responsive React dashboard.

## Not implemented

- WireGuard / OpenVPN / IKEv2 engine;
- OS VPN APIs / TUN/TAP;
- gateway infrastructure;
- key exchange;
- real server telemetry;
- DNS routing;
- kill switch;
- authentication / subscriptions;
- privacy / no-log enforcement.

A real VPN product requires a native/system client or service. A browser React app can be the control plane, not the tunnel engine.

## Tech stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- Lucide React

## Development

```bash
npm ci
npm run typecheck
npm run lint
npm run build
npm run dev
```

## Verification

Product-completion branch:

```text
ai/product-completion/vpndashboard
```

GitHub Actions verified the current runtime changes:

```text
npm ci      PASS
typecheck   PASS
lint        PASS
build       PASS
```

Vercel project linking is currently blocked because the connected Vercel account requires a GitHub Login Connection before this repository can be linked.

## Current status

**PARTIAL / build-verified UX prototype.** Core misleading states were removed and the repository passes install, typecheck, lint, and build. Real VPN functionality remains intentionally absent until a native networking architecture exists.
