<template>
  <main>
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-border">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div class="relative mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12" style="max-width: 76.8rem">
        <div class="relative shrink-0 justify-self-center md:justify-self-start">
          <div class="absolute -inset-1.5 rounded-full bg-gradient-to-br from-accent/40 to-teal/20 blur" />
          <img :src="profilePicture" class="relative rounded-full w-28 h-28 object-cover" alt="Warren Parad">
        </div>

        <div class="min-w-0">
          <p class="text-xs font-mono tracking-widest uppercase text-accent mb-3">CTO · Architect · Engineering Leader</p>
          <h1 class="text-5xl md:text-6xl font-bold text-text leading-tight">Warren Parad</h1>
          <p class="mt-3 text-muted text-base leading-relaxed max-w-xl">
            Hands-on leader, distributed systems architect, and business technology strategist. Passionate about solving complex problems with technology and growing engineering leaders who build lasting things.
          </p>
        </div>
      </div>
    </section>

    <!-- Recognition -->
    <section class="py-10 px-4">
      <div class="mx-auto" style="max-width: 76.8rem">
        <div class="flex items-center gap-3 mb-8">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Recognition</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="flex flex-wrap gap-6 justify-center">
          
          <div class="flex items-center gap-4 rounded-xl px-5 py-4 bg-surface">
            <i class="fa-solid fa-microphone fa-xl text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text text-sm">International Conference Speaker</h3>
              <p class="text-xs text-muted mt-0.5">FOSDEM, Voxxed Days, AWS Summit, and more</p>
            </div>
          </div>

          <div class="flex items-center gap-4 rounded-xl px-5 py-4 bg-surface">
            <i class="fa-brands fa-aws fa-xl text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text text-sm">AWS Community Builder</h3>
              <p class="text-xs text-muted mt-0.5">Security &amp; Serverless · 2024 – Present</p>
            </div>
          </div>
          <div class="flex items-center gap-4 rounded-xl px-5 py-4 bg-surface">
            <i class="fa-solid fa-lock fa-xl text-accent shrink-0" />
            <div>
              <h3 class="font-semibold text-text text-sm">IETF OAuth Working Group</h3>
              <p class="text-xs text-muted mt-0.5">Active contributor</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Focus areas -->
    <section id="focus" class="py-14 px-4">
      <div class="mx-auto" style="max-width: 76.8rem">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Focus areas</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-cubes fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Architecture and org design</h3>
              <p class="text-muted text-sm leading-relaxed">Designing new patterns for new usages or reviewing existing architecture solutions for potential improvements and designing the engineering organization to deliver them effectively.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-seedling fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Leading and developing</h3>
              <p class="text-muted text-sm leading-relaxed">Creating high performing teams able to deliver quickly the right solutions at the right time. Developing leaders — from team leads and product managers to engineers of all levels.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-code-branch fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Executive partnership</h3>
              <p class="text-muted text-sm leading-relaxed">Providing technology insight for product and business refinement by partnering with internal and external leaders throughout the industry. Success is a collaboration.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-diagram-next fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Prioritization and organization</h3>
              <p class="text-muted text-sm leading-relaxed">Setting up and leading team reviews, retros, planning meetings, OKR and initiative creation. The right process at the right time is genuinely effective.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-regular fa-object-ungroup fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">Technology adoption</h3>
              <p class="text-muted text-sm leading-relaxed">Supporting and leading cloud migrations, complex database changes, breaking apart monoliths, microservice choreography, and external integrations.</p>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-money-bill-transfer fa-xl fa-fw text-accent mt-0.5 shrink-0" />
            <div>
              <h3 class="font-semibold text-text mb-1">IT management</h3>
              <p class="text-muted text-sm leading-relaxed">Vendor selection, technology fit, and ongoing cloud spend evaluation to make sure it aligns with business expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="py-14 px-4">
      <div class="mx-auto" style="max-width: 76.8rem">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Experience</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <div class="space-y-8">
          <!-- AUTHRESS -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Authress</h3>
                <p class="text-muted text-sm font-medium">CTO &amp; Chief Security Architect</p>
              </div>
              <span class="text-xs text-muted font-mono">Jan 2018 – Present</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Pioneered security at Authress by building multiple B2B products and scaling engineering teams in the SaaS security space, focused on user access control and authorization. Collaborated with executives across the business to align strategic initiatives, and developed the engineering division by recruiting, hiring, and growing talent across geographic locations.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['IaC', 'DevOps', 'AWS', 'Typescript', 'Rust', 'OpenTofu', 'GDPR']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- RHOSYS -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Rhosys</h3>
                <p class="text-muted text-sm font-medium">Fractional CTO</p>
              </div>
              <span class="text-xs text-muted font-mono">Jan 2018 – Present</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Fractional tech leadership and CTO services for companies scaling effectiveness and engineering teams. Helped build and lead impactful, cohesive technology teams delivering world-class software. Focused on architecture that drives business decisions, improving technology platforms, and rapidly delivering the next innovation.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['Org design', 'Leadership development', 'Architecture', 'DevSecOps', 'AWS', 'ZeroTrust', 'Agile / Kanban', 'OKRs', 'IaC', 'Migrations', 'Security audits', 'Build vs buy']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- CIMPRESS -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Cimpress</h3>
                <p class="text-muted text-sm font-medium">Lead Software Architect &amp; Team Lead, Cimpress Technology</p>
              </div>
              <span class="text-xs text-muted font-mono">Sept 2016 – Oct 2019</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Led a team of software engineers developing microservices for the Mass Customization Platform — connecting fulfillers, merchants, and content artists across the world at billions of requests per day. Fostered collaboration across distributed teams on multiple continents. Created cross-team programs including IaC, security reviews, and cross-team design sessions.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['Microservices', 'IaC', 'Agile', 'DDD', 'TDD', 'Javascript', 'Typescript', 'C#', 'GDPR']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- SERIFY -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Serify</h3>
                <p class="text-muted text-sm font-medium">Chief Technology Officer and Executive Advisor</p>
              </div>
              <span class="text-xs text-muted font-mono">Nov 2016 – Aug 2017</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Founded and built a revitalized healthcare platform addressing concerning trends related to dating apps. Built the initial engineering team and the original mobile apps (Android and iOS), websites, and services. Researched and implemented integrations between healthcare providers across the US for secure patient data exchange.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['CI/CD', 'Javascript', 'Java', 'GCP', 'HIPAA']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- SPACEX -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">SpaceX</h3>
                <p class="text-muted text-sm font-medium">Principal Software Architect, Avionics Manufacturing</p>
              </div>
              <span class="text-xs text-muted font-mono">Jan 2016 – Aug 2016</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Led teams in production manufacturing, software development, and manufacturing integration to create automated software solutions for building flight vehicles. Implemented agile software design, RESTful APIs, lean manufacturing, and cross-department collaboration to deliver at scale.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['CI/CD', 'Javascript', 'Python', 'AWS', 'Distributed teams']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- VISTAPRINT -->
          <div class="border-l-2 border-accent pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Vistaprint</h3>
                <p class="text-muted text-sm font-medium">Senior Software Developer, Manufacturing</p>
              </div>
              <span class="text-xs text-muted font-mono">Oct 2012 – Dec 2015</span>
            </div>
            <p class="text-muted text-sm leading-relaxed mb-3">
              Designed and architected manufacturing plants' software including volume forecasting, scheduling optimization, and hardware automation. Led an engineering book club, introduced Kanban, git, and CI/CD across a distributed multicultural team.
            </p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="tag in ['Kanban', 'Jenkins', 'C#', 'Ruby', 'IaC', 'WCF']" :key="tag"
                class="text-xs px-2 py-0.5 rounded-full bg-surface-2 text-muted">{{ tag }}</span>
            </div>
          </div>

          <!-- Education -->
          <div class="border-l-2 border-border pl-6">
            <div class="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 class="text-lg font-bold text-text">Cornell University</h3>
                <p class="text-muted text-sm font-medium">Electrical &amp; Computer Engineering — <em>Cum laude</em></p>
              </div>
              <span class="text-xs text-muted font-mono">Aug 2006 – May 2010</span>
            </div>
            <p class="text-xs font-semibold text-text mb-2">Publications</p>
            <ul class="space-y-1 text-muted text-sm">
              <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Grossman, James, Warren Parad, Hod Lipson. (2009) Design and Construction of a 6-DoF Fabrication Platform.</span></li>
              <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Lipton, Jeffrey L., Warren Parad, et al. (2009) Fab@Home Model 2: Towards Ubiquitous Personal Fabrication Devices.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="py-14 px-4">
      <div class="mx-auto" style="max-width: 76.8rem">
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
                <li class="flex gap-2"><span class="text-accent shrink-0">•</span><span>Right-sized solutions — short, medium, and long term</span></li>
              </ul>
            </div>
          </div>
          <div class="flex items-baseline gap-4">
            <i class="fa-solid fa-user-check fa-xl fa-fw text-accent mt-0.5 shrink-0 hidden md:block" />
            <div>
              <h3 class="font-semibold text-text mb-2">Strategic preferences</h3>
              <p class="text-muted text-sm leading-relaxed mb-3">I apply what I've learned to every situation. When given a choice, I default to:</p>
              <ul class="space-y-2.5 text-muted text-sm">
                <li><strong class="text-text"><i class="fa-brands fa-aws fa-fw mr-1" />AWS:</strong> Global reach, serverless-first, strong security posture, and fast delivery</li>
                <li><strong class="text-text"><i class="fa-brands fa-js fa-fw mr-1" />JS/TS:</strong> Expansive ecosystem, fast iteration, seamless across UI and services</li>
                <li><strong class="text-text"><i class="fa-solid fa-lock fa-fw mr-1" />ZeroTrust:</strong> Identity-first security enables remote teams without perimeter assumptions</li>
                <li><strong class="text-text"><i class="fa-solid fa-person-running fa-fw mr-1" />Agile with Kanban:</strong> The right process at the right time keeps focus on delivery</li>
                <li><strong class="text-text"><i class="fa-solid fa-people-group fa-fw mr-1" />Full stack team ownership:</strong> On-call, support, design, development, testing — the best teams own all of it</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community -->
    <section id="communities" class="py-14 px-4">
      <div class="mx-auto" style="max-width: 76.8rem">
        <div class="flex items-center gap-3 mb-10">
          <span class="text-xs font-mono tracking-widest uppercase text-accent">Community</span>
          <div class="flex-1 h-px bg-border" />
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="space-y-5">
            <a href="https://linkedin.com/in/warren-parad" target="_blank" class="community-link">
              <i class="fa-brands fa-linkedin fa-xl fa-fw" style="color: #0077B5" /><span>Connect on LinkedIn</span>
            </a>
            <a href="https://github.com/wparad" target="_blank" class="community-link">
              <i class="fa-brands fa-github fa-xl fa-fw" /><span>OSS on GitHub</span>
            </a>
            <a href="https://oauth.net/2/" target="_blank" class="community-link">
              <i class="fa-solid fa-lock fa-xl fa-fw" /><span>IETF OAuth Working Group</span>
            </a>
            <a href="https://discord.com/users/401675887927623692" target="_blank" class="community-link">
              <i class="fa-brands fa-discord fa-xl fa-fw" style="color: #5865F2" /><span>Message me on Discord</span>
            </a>
          </div>
          <p class="text-muted text-sm leading-relaxed">
            I write and answer questions across these communities to help engineers and aspiring leaders discover new technologies and techniques to deliver effectively. I owe my skills to the awesome individuals and companies I've worked with.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useHead } from '@unhead/vue';
import profilePicture from '../assets/profile.jpg';

useHead({ title: 'Resume — Warren Parad' });
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
