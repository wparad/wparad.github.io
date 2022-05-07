<template>
  <div>
    <div class="container py-4">
      <!-- <header class="pb-3 mb-4 border-bottom">
        <div class="d-flex align-items-center text-dark text-decoration-none">
          <span class="fs-4"><i class="fa-solid fa-code" /> Warren Parad - Fractional CTO</span>
        </div>
      </header> -->

      <div class="p-5 mb-4 bg-dark text-light" style="border-radius: 0.5rem">
        <div class="container-fluid pt-4">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div class="me-md-5">
              <img :src="profilePicture" style="border-radius: 100%" height="250">
            </div>
            <div class="mt-4">
              <h1 class="display-5 fw-bold">Warren Parad</h1>
              <h4 class="">Fractional CTO</h4>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <div class="p-4 justify-content-end bg-secondary callout-section" style="border-radius: 0.5rem">
            <p>Technology strategist, architecture reviewer with a security expertise. Also focuses on team leadership development.
              <br><br>
              Solve challenging technology issues with a flexible subject matter expert and hands-on fractional CTO.
              <br>
            </p>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary btn-sm" type="button" @click="() => openSchedulingPage()">Schedule a meeting <i class="fa-solid fa-circle-chevron-right" /></button>
            </div>
          </div>
        </div>
      </div>

      <div class="row align-items-lg-stretch">
        <div class="col-lg-6 mb-4">
          <div class="h-100 p-5 text-white bg-dark" style="border-radius: 0.5rem;">
            <h2>What's important?</h2>
            <p>You’re currently out looking to start, improve, change, or scale your existing product and teams that deliver it.
              <br><br>
              It’s possible you are the expert in the area, or potentially don’t know the hands on tech that well. Or perhaps you are interested in improving your teams’ leadership capabilities,
              delegation, and ownership for their solutions.
              <br><br>
            Maybe there’s a big architectural change looming, or the need to perform difficult migration. Does the strategy for the technology we are building match the business initiatives?</p>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="h-100 p-5 bg-light border" style="border-radius: 0.5rem;">
            <h2>The Fractional CTO:</h2>
            <p>This is where I come in. I’m Warren and I’m a Fractional CTO.
              <br><br>Transparency is important for me, so let me share a bit about what that means:
              <ul>
                <li>Those challenging problems I’ve listed above–I come in and join your teams to help them deliver. This may mean being hands on,
                  ruthlessly delegating and fostering ownership in the right places, or setting up the necessary processes to ensure long term sustainability.</li>
                <li>I make sure that the direction your teams and org are going match the business and encourage the changes at the appropriate time and velocity.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100">
      <div class="m-0 p-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">Here’s some of the activities I'll dive into:</h2>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-cubes fa-2x fa-fw" />
            </div>
            <div>
              <h2>Architecture reviews</h2>
              <p>Designing new patterns for new usages or reviewing existing architecture solutions for potential improvements.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-seedling fa-2x fa-fw" />
            </div>
            <div><h2>Developing teams</h2><p>Creating high performing teams. Focusing on team growth and developing leaders, from team leads, tech leads, platform architects to engineers of all levels.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-code-branch fa-2x fa-fw" />
            </div>
            <div><h2>Development</h2><p>I work hands on when needed, authoring and reviewing pull requests, sometimes having extra people jumping into solving a problem is what’s necessary. I have a long experience of using many different technologies and patterns at my disposal.</p></div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-shield-halved fa-2x fa-fw" />
            </div>
            <div><h2>DevOps and Cloud Security</h2>
              <p>Automating and/or optimizing anything and everything that is available, from the software development life-cycle to cloud deployed technologies and access rights for those environments. This includes CI/CD, IaC automation and Cloud DevSecOps.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-diagram-next fa-2x fa-fw" />
            </div>
            <div><h2>Prioritization and organization</h2><p>Setting up and leading team reviews, retros, planning meetings, OKR and initiative creation. When we want to get in writing how we work and why we work that way, at the right time the right process can be really effective.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-graduation-cap fa-2x fa-fw" />
            </div>
            <div>
              <h2>App security training</h2>
              <p>Identifying opportunities to improve application level security, reviewing internal & external applications for user access and identity patterns.</p>
            </div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-regular fa-object-ungroup fa-2x fa-fw" />
            </div>
            <div><h2>Technology migrations</h2><p>Handling all kinds such as--cloud migrations, complex database changes, service orchestration, breaking apart monoliths, choreographing microservices.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-magnifying-glass fa-2x fa-fw" />
            </div>
            <div><h2>Running internal audits</h2><p>Diving into existing solutions to lead and review a internal audits for potential security or other user data related issues.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-money-bill-transfer fa-2x fa-fw" />
            </div>
            <div><h2>Build versus buy</h2>
            <p>Vendor selection can be a challenge, sometimes the right answer isn’t obvious, picking the right technology solution for the situation is important.</p></div>
          </div>
        </div>

      </div>
    </div>

    <div class="container py-4">
      <div class="d-flex mt-4 justify-content-around">
        <div class="p-4 justify-content-end bg-light text-dark d-flex align-items-center" style="border-radius: 0.5rem">
          <div class="me-4">Does this sound like your current situation, we can set up a meeting to discuss:</div>
          <div>
            <button class="btn btn-primary btn-sm" type="button" @click="() => openSchedulingPage()">Schedule a meeting <i class="fa-solid fa-circle-chevron-right" /></button>
          </div>
        </div>
      </div>

      <div class="align-items-lg-stretch mt-4">
        <div class="mb-4">
          <div class="h-100 p-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <h2>Why Fractional CTO?</h2>
            <p>
              I recognize not everything moves as fast as we want it to. Often for what is available to us, putting the chips in the right place is most of the work, and then making fine adjustments as we go. In most cases this takes a variable amount of time. It’s possible it is 40 hours a week, but could also be 5. Rather than attempting to commit to work that might not exist, we get the benefit of utilizing only what makes sense.
            </p>
            <p>
              This also encourages having short feedback loops on our successes. If it isn’t working out, we know as soon as possible, because we are constantly reviewing the effectiveness of our delivery. It is also more affordable and more flexible. In the size of the companies I specialize with, cash is tight and usually all accounted for. It’s better to get the focused value, rather than paying a multiple for a salaried worker. And a further benefit is that Fractional CTOs don’t need equity.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100">
      <div class="m-0 p-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">My Specific Skills</h2>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-person-dots-from-line fa-2x fa-fw" />
            </div>
            <div>
              <h2>Personal strategy</h2>
              <p>This isn’t the same old resume which just lists experiences and some skills. I’ve taken the extra time to craft this document to both chronicle what I’ve accomplished but also who I am. I care a lot about cutting through to the value, and delivering it. Here’s what I like to focus on
                <ul>
                  <li>Delivering the business value</li>
                  <li>Doing it transparently</li>
                  <li>Holding myself and others accountable</li>
                  <li>I’m flexible and when circumstances shift I adapt</li>
                  <li>Long term sustainability in technology and architecture choices</li>
                  <li>Identifying the right level solution for the problem, I break everything down into short, medium, and long term and select the type most appropriate</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="col d-flex align-items-start">
              <div class="flex-shrink-0 me-3">
                <i class="mt-1 fa-solid fa-user-check fa-2x fa-fw" />
              </div>
              <div>
                <h2>Strategic preferences</h2>
                <p>I’ve worked with many technology stacks across many different clouds and platforms, and every time is unique. This makes it hard to gauge which knowledge is necessary, but I like to focus on being flexible so I apply what I’ve learned to every new situation. This list would be too long to enumerate, so instead I’ll list which platforms I prefer to work with, and when given an option would choose by default:
                  <ul>
                    <li><strong><i class="fa-brands fa-aws fa-fw me-2" />AWS:</strong> Their global reach, attention to serverless technology, understanding of security, and speed of delivery match my expectations around Clouds</li>
                    <li><strong><i class="fa-brands fa-js fa-fw me-2" />Javascript:</strong> The expansive community and available packages, allows for quick speed when introducing new features and technology, there’s already a package for that. Also its use in UIs and services, and being one of the most performant serverless technology, makes its usage seamless across applications</li>
                    <li><strong><i class="fa-solid fa-lock fa-fw me-1" /> ZeroTrust:</strong> Utilizing user identity for security focuses on guarantees that we can have remote teams and users work and utilize our tools effectively.</li>
                    <li><strong><i class="fa-solid fa-person-running fa-fw me-1" />Agile with Kanban:</strong> I’ve found other flavors slow teams down focusing on things that aren’t the delivery, I focus on getting teams to be performing that means using the right process at the right time.</li>
                    <li><strong><i class="fa-solid fa-people-group fa-fw me-1" />Full stack team ownership:</strong> On call rotations, customer support, design, development, testing, the best team handles all these aspects and gets external support at the right time.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          <div class="w-100">
            <p>If there’s a specific technology choice you are thinking about, I'll support it, and can help select and challenge them it when necessary. Feel free to bring this up in our first meeting and we can definitely discuss it.</p>
          </div>

        </div>
      </div>
    </div>

    <div class="w-100">
      <div class="m-0 p-5 bg-secondary text-dark">
        <div class="align-items-lg-stretch">
          <div class="">
            <div class="h-100 p-5 text-white bg-primary" style="border-radius: 0.5rem;">
              <h2>My community presence</h2>
              <a href="https://wparad.medium.com/" target="_blank" class="text-dark networking-link">
                <div class="d-flex align-items-center my-4">
                  <i class="fa-brands fa-medium fa-fw fa-2x me-3" />
                  <div>Check out my articles on Medium</div>
                </div>
              </a>
              <a href="https://discord.com/users/401675887927623692" target="_blank" class="text-dark networking-link">
                <div class="d-flex align-items-center my-4">
                  <i class="fa-brands fa-discord fa-fw fa-2x me-3" />
                  <div>
                  Leading multiple communities on Discord
                  </div>
                </div>
              </a>

              <a href="https://github.com/wparad" target="_blank" class="text-dark networking-link">
                <div class="d-flex align-items-center my-4">
                  <i class="fa-brands fa-github fa-fw fa-2x me-3" />
                  <div>
                    Contributing to open source, some of my work on GitHub
                  </div>
                </div>
              </a>

              <a href="https://oauth.net/2/" target="_blank" class="text-dark networking-link">
                <div class="d-flex align-items-center my-4">
                  <i class="fa-solid fa-lock fa-fw fa-2x me-3" />
                  <div>
                    Participating in security community via IETF OAuth Working Group
                  </div>
                </div>
              </a>
              <a href="https://linkedin.com/in/warren-parad" target="_blank" class="text-dark networking-link">
                <div class="d-flex align-items-center my-4">
                  <i class="fa-brands fa-linkedin fa-fw fa-2x me-3" />
                  <div>
                    Growing leaders and mentoring throughout my network
                  </div>
                </div>
              </a>
              <br>
              <p>
                I wouldn’t have been able to do these in a vacuum though; my experiences are from a wide array of industries, with a leadership focus everywhere I’ve been. I owe my skills to the awesome individuals and companies I’ve worked with in exchange for helping them become successful.

              </p>
              <div class="d-flex mt-4 justify-content-around">
                <div class="p-4 justify-content-end bg-light text-dark d-flex align-items-center" style="border-radius: 0.5rem">
                  <div class="me-4">I hope that I’ll be able to add our experience to my personal list. Interested in a meeting:</div>
                  <div>
                    <button class="btn btn-primary btn-sm" type="button" @click="() => openSchedulingPage()">Schedule a meeting <i class="fa-solid fa-circle-chevron-right" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import profilePicture from '../assets/profile.jpg';

const openSchedulingPage = () => {
  window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4ydEJ2y99C8uDGwI2eoIeu7DVwX9a1slXrRQUquyNAZ-CHGkX98GQk5TDkEEuhZ7QvjFGYvp');
};
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.networking-link {
  text-decoration: none;
  color: $light !important;
  &:hover {
    color: $dark !important;
  }
}

.callout-section {
  margin-top: 1rem;
  @include media-breakpoint-up(lg) {
    margin-top: -2rem;
    max-width: 50%;
  }
}

</style>
