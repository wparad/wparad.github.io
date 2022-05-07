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
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-start">
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
              <button class="btn btn-primary btn-sm" type="button">Schedule a meeting <i class="fa-solid fa-circle-chevron-right" /></button>
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
            <button class="btn btn-primary btn-sm" type="button">Schedule a meeting <i class="fa-solid fa-circle-chevron-right" /></button>
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

    <!-- <div class="w-100">
      <div class="m-0 p-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">What about my skills specifically?</h2>
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
      </div>
    </div> -->

  </div>
</template>

<script setup>
import profilePicture from '../assets/profile.jpg';

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.callout-section {
  margin-top: 1rem;
  @include media-breakpoint-up(lg) {
    margin-top: -3rem;
    max-width: 50%;
  }
}

</style>
