<template>
  <main class="pt-14">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-border">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div class="relative max-w-5xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12">
        <div class="relative shrink-0 justify-self-center md:justify-self-start">
          <div class="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/40 to-teal/20 blur" />
          <img :src="profilePicture" class="relative rounded-full w-28 h-28 object-cover" alt="Warren Parad">
        </div>

        <div class="min-w-0">
          <p class="text-xs font-mono tracking-widest uppercase text-accent mb-3">Fractional CTO</p>
          <h1 class="text-5xl md:text-6xl font-bold text-text leading-tight">Warren Parad</h1>
          <p class="mt-3 text-muted text-base leading-relaxed max-w-xl">
            Technology strategist, DevOps architect, and security expert. I work with growing companies to solve hard engineering challenges and build high-performing teams — on a flexible, fractional basis.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <button
              class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-bg font-medium hover:bg-accent/80 transition-colors cursor-pointer"
              @click="openSchedulingPage"
            >
              <i class="fa-regular fa-calendar-check" /> Schedule a meeting
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-pointer"
              @click="openEmail"
            >
              <i class="fa-solid fa-envelope" /> Drop me a message
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- What's important / The Fractional CTO -->
    <section class="py-14 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">The situation</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 class="text-xl font-bold text-text mb-4">What's important for you</h2>
            <p class="text-muted leading-relaxed">
              You're looking to start, improve, change, or scale your existing product and the teams that deliver it.
            </p>
            <p class="text-muted leading-relaxed mt-3">
              Maybe you're the technical expert, or maybe you're not close to the hands-on side. Perhaps you want to improve your teams' leadership capabilities, delegation, and ownership. Or there's a big architectural change looming, a difficult migration ahead, a hiring question, or a mismatch between technology strategy and business goals.
            </p>
          </div>
          <div class="border-l border-accent/30 pl-8">
            <h2 class="text-xl font-bold text-text mb-4">The Fractional CTO</h2>
            <p class="text-muted leading-relaxed">
              This is where I come in. Transparency matters to me, so here's what that means in practice:
            </p>
            <ul class="mt-4 space-y-3 text-muted">
              <li class="flex gap-3">
                <span class="text-accent mt-1 shrink-0">•</span>
                <span>I come in and manage, organize, and lead your teams to help them deliver — whether that means being hands on, fostering ownership, or setting up the right processes for long-term sustainability.</span>
              </li>
              <li class="flex gap-3">
                <span class="text-accent mt-1 shrink-0">•</span>
                <span>I make sure the direction your teams are heading matches the business, and encourage the right changes at the right velocity.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities -->
    <section id="activities" class="py-14 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">What I do</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-cubes fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Architecture and org design</h3>
              <p class="text-muted text-sm leading-relaxed">Designing new patterns for new usages or reviewing existing architecture solutions for potential improvements and designing the engineering organization to deliver them effectively.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-seedling fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Leading and developing</h3>
              <p class="text-muted text-sm leading-relaxed">Creating high performing teams able to deliver quickly the right solutions at the right time. Focusing on team growth and developing leaders — from team leads to engineers of all levels.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-code-branch fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Engineering</h3>
              <p class="text-muted text-sm leading-relaxed">I work hands on when needed — authoring and reviewing pull requests, solving problems directly. Long experience across many technologies and patterns.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-shield-halved fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">DevOps and cloud security</h3>
              <p class="text-muted text-sm leading-relaxed">Automating and optimizing everything from the SDLC to cloud technologies and access rights. CI/CD, IaC, and Cloud DevSecOps.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-diagram-next fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Prioritization and organization</h3>
              <p class="text-muted text-sm leading-relaxed">Team reviews, retros, planning, OKRs, and initiative creation. The right process at the right time is genuinely effective.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-graduation-cap fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">App security training</h3>
              <p class="text-muted text-sm leading-relaxed">Identifying opportunities to improve application-level security, reviewing internal and external applications for user access and identity patterns.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-regular fa-object-ungroup fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Migrations &amp; site reliability</h3>
              <p class="text-muted text-sm leading-relaxed">Cloud migrations, complex database changes, breaking apart monoliths, microservice choreography. Plus monitoring, logging, alerting, and SLA management.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-magnifying-glass fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Running internal audits</h3>
              <p class="text-muted text-sm leading-relaxed">Diving into existing solutions to lead internal audits for security problems, user data issues, and general best practices.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-money-bill-transfer fa-xl fa-fw text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Build versus buy</h3>
              <p class="text-muted text-sm leading-relaxed">Vendor selection, technology fit analysis, and ongoing cloud spend evaluation to make sure it's inline with expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA banner -->
    <section class="py-8 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="rounded-xl p-6 flex flex-wrap items-center justify-between gap-4 border border-accent/30 bg-accent/5">
          <p class="text-muted">Does this sound like your current situation? Let's set up a meeting to discuss.</p>
          <button
            class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-bg font-medium hover:bg-accent/80 transition-colors cursor-pointer shrink-0"
            @click="openSchedulingPage"
          >
            Schedule a meeting <i class="fa-solid fa-circle-chevron-right" />
          </button>
        </div>
      </div>
    </section>

    <!-- Why Fractional CTO -->
    <section class="py-10 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-8">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Why fractional</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            Not everything moves as fast as we want. Often, putting the chips in the right place is most of the work, then making fine adjustments as we go. This takes a variable amount of time — sometimes 40 hours a week, sometimes 5. Rather than committing to work that might not exist yet, you get exactly what makes sense.
          </p>
          <p>
            It also encourages short feedback loops. If something isn't working, we know immediately because we constantly review the effectiveness of our delivery. It's more affordable and more flexible — in the companies I specialize with, cash is tight and usually all accounted for. Focused value beats paying a multiple for a full-time salary. And fractional CTOs don't need equity.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-14 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Skills and preferences</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-person-dots-from-line fa-xl fa-fw text-accent mt-0.5 shrink-0 hidden md:block" />
            <div>
              <h3 class="font-semibold text-text mb-2">Personal strategy</h3>
              <p class="text-muted text-sm leading-relaxed mb-3">I care about cutting through to the value and delivering it. Here's what I focus on:</p>
              <ul class="space-y-1.5 text-muted text-sm">
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Delivering the business value</span></li>
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Doing it transparently</span></li>
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Holding myself and others accountable</span></li>
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Flexibility — when circumstances shift, I adapt</span></li>
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Long-term sustainability in technology and architecture choices</span></li>
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Right-sized solutions — I break everything into short, medium, and long term</span></li>
              </ul>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-user-check fa-xl fa-fw text-accent mt-0.5 shrink-0 hidden md:block" />
            <div>
              <h3 class="font-semibold text-text mb-2">Strategic preferences</h3>
              <p class="text-muted text-sm leading-relaxed mb-3">I apply what I've learned to every new situation. When given a choice, I default to:</p>
              <ul class="space-y-2.5 text-muted text-sm">
                <li><strong class="text-text"><i class="fa-brands fa-aws fa-fw mr-1" />AWS:</strong> Global reach, serverless-first, strong security posture, and fast delivery match my expectations</li>
                <li><strong class="text-text"><i class="fa-brands fa-js fa-fw mr-1" />Javascript:</strong> Expansive ecosystem, fast iteration, seamless across UI and services, and top-tier serverless performance</li>
                <li><strong class="text-text"><i class="fa-solid fa-lock fa-fw mr-1" />ZeroTrust:</strong> Identity-first security enables remote teams to work effectively without perimeter assumptions</li>
                <li><strong class="text-text"><i class="fa-solid fa-person-running fa-fw mr-1" />Agile with Kanban:</strong> Other flavors slow teams down. The right process at the right time keeps focus on delivery</li>
                <li><strong class="text-text"><i class="fa-solid fa-people-group fa-fw mr-1" />Full stack team ownership:</strong> On-call, support, design, development, testing — the best teams own all of it</li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-2">
            <p class="text-muted text-sm">Have a specific technology in mind? Bring it to our first meeting — I'll support it and help evaluate it when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-10 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <TestimonialCarousel />
      </div>
    </section>

    <!-- Community -->
    <section id="contact" class="py-14 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Community</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="space-y-5">
            <a href="https://linkedin.com/in/warren-parad" target="_blank" class="community-link">
              <i class="fa-brands fa-linkedin fa-xl fa-fw" style="color: #0077B5" />
              <span>Connect on LinkedIn</span>
            </a>
            <a href="https://github.com/wparad" target="_blank" class="community-link">
              <i class="fa-brands fa-github fa-xl fa-fw" />
              <span>OSS on GitHub</span>
            </a>
            <a href="https://oauth.net/2/" target="_blank" class="community-link">
              <i class="fa-solid fa-lock fa-xl fa-fw" />
              <span>IETF OAuth Working Group</span>
            </a>
            <a href="https://discord.com/users/401675887927623692" target="_blank" class="community-link">
              <i class="fa-brands fa-discord fa-xl fa-fw" style="color: #5865F2" />
              <span>Message me on Discord</span>
            </a>
            <a href="#" class="community-link" @click.prevent="openEmail">
              <i class="fa-solid fa-envelope fa-xl fa-fw" />
              <span>Send me an email</span>
            </a>
          </div>
          <div class="space-y-4 text-muted text-sm leading-relaxed">
            <p>I write and answer questions across these communities to help engineers and aspiring leaders discover new technologies and techniques. My talks and engagements lead to new stories that I write down for the benefit of others.</p>
            <p>My skills come from a wide array of industries with a leadership focus everywhere I've been — I owe them to the awesome individuals and companies I've worked with.</p>
            <div class="pt-2">
              <button
                class="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-pointer"
                @click="openSchedulingPage"
              >
                Think this is an opportunity for collaboration? Schedule a meeting <i class="fa-solid fa-circle-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-14 px-4 border-t border-border">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Compensation and rates</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <p class="text-muted text-sm leading-relaxed">
            The optimal fits for me are engagements around 3–10 hours a week. In cases where more time or flexibility is required, I have a standard rate, and further retainers can be arranged for guaranteed and flexible time.
          </p>
          <div>
            <ul class="space-y-3">
              <li class="flex items-baseline gap-3">
                <span class="text-3xl font-bold text-text">{{ pricingSymbol }}8k</span>
                <span class="text-muted text-sm">/ month — guarantees ~4 hours / week</span>
              </li>
              <li class="flex items-baseline gap-3">
                <span class="text-xl font-semibold text-text">{{ pricingSymbol }}380</span>
                <span class="text-muted text-sm">/ hour — standard rate</span>
              </li>
            </ul>
            <button
              class="mt-6 flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-accent text-bg font-medium hover:bg-accent/80 transition-colors cursor-pointer"
              @click="openSchedulingPage"
            >
              <i class="fa-regular fa-calendar-check" /> Schedule a meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import shortUUID from 'short-uuid';
import { DateTime, IANAZone } from 'luxon';

import profilePicture from '../assets/profile.jpg';
import TestimonialCarousel from '../components/TestimonialCarousel.vue';

useHead({ title: 'Fractional CTO — Warren Parad' });

const openSchedulingPage = () => {
  window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4ydEJ2y99C8uDGwI2eoIeu7DVwX9a1slXrRQUquyNAZ-CHGkX98GQk5TDkEEuhZ7QvjFGYvp');
};

const openEmail = () => {
  const email = `"Warren Parad<fractional+${shortUUID.generate().slice(0, 7)}`;
  const subject = 'Fractional CTO Inquiry';
  window.open(`mailto:${encodeURIComponent(email)}@rhosys.ch%3e?subject=${encodeURIComponent(subject)}`);
};

const offset = IANAZone.create(DateTime.now().zoneName).offset(DateTime.utc());
// eslint-disable-next-line yoda
const pricingSymbol = -600 < offset && offset < -110 ? '$' : '€';
</script>

<style scoped>
.community-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.community-link:hover {
  color: var(--color-text);
}
</style>
