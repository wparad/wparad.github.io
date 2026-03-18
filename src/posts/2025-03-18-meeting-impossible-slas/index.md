---
title: Meeting Impossible SLAs
description: How we got to 99.999% uptime and what it actually took.
tags: [reliability, sla, devops]
---

# Meeting Impossible SLAs

When we first committed to 99.999% uptime, most engineers on the team thought it was a marketing number. Five nines means less than **5.26 minutes of downtime per year**. That's not a target — it's a constraint that reshapes every architectural decision you make.

## What 99.999% Actually Means

The math is unforgiving. At four nines (99.99%), you have 52 minutes of downtime budget per year. Add another nine and you're down to 5 minutes. A single botched deploy can consume your entire annual budget in one incident.

This changes how you think about:

- **Deployment windows** — rolling deploys with canary traffic, not blue/green flips
- **Database migrations** — zero-downtime schema changes only; backward-compatible columns, never drops
- **Dependency failures** — every external call needs a timeout, circuit breaker, and graceful fallback
- **On-call rotations** — the pager goes off at 3am because 5 minutes matters

## The Architecture Shifts

### Circuit Breakers Everywhere

We wrapped every downstream dependency — database, cache, third-party APIs — in a circuit breaker. When error rates spike, the breaker opens and we serve from cache or return a degraded response rather than letting failures cascade.

### Async by Default

Synchronous request chains are reliability liabilities. We moved writes to durable queues wherever consistency could tolerate eventual delivery. A failed queue publish is retried automatically; a failed HTTP call just fails the user.

### Observability as a First-Class Concern

You can't hit 99.999% if you can't measure it. We added:

- Synthetic probes from multiple regions every 30 seconds
- Error budgets tracked in real-time dashboards
- Automatic incident creation when the burn rate exceeds threshold

## What We Got Wrong First

The first year we hit 99.97% — three nines and change. The gap came from two unexpected sources:

1. **Third-party auth provider outages** — we had no fallback; if they went down, logins failed
2. **Noisy neighbor database contention** — shared connection pools spiked latency under load

Both were fixable. Neither was on our radar when we started.

## The Takeaway

Five nines is achievable, but it's not a performance goal — it's a design philosophy. Every decision has to be made with the question: *what happens when this fails?*

The answer can never be "the service goes down."
