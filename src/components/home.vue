<template>
  <div>
    <home-navbar />

    <div class="container pt-sm-4">
      <div class="p-4 p-md-5 mb-4 bg-dark text-light" style="border-radius: 0.5rem">
        <div class="container-fluid pt-4">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div class="me-md-5">
              <img :src="profilePicture" style="border-radius: 100%" height="250">
            </div>
            <div class="mt-4">
              <h1 class="display-5 fw-bold">Warren Parad</h1>
              <a href="https://authress.io" class="authressCallout" target="_blank"><h4 class="">Authress CTO</h4></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="speaker" class="p-4 bg-dark">
      <div class="container px-0 align-items-lg-stretch mw-100 bg-secondary" style="border-radius: 10px">
        <div class="m-0 text-dark">
          <div class="">
            <div class="h-100 p-4 p-md-5 text-white bg-primary mw-100" style="border-radius: 0.5rem;">
              <h2>Speaker engagements</h2>
              <br>
              <div class="d-flex justify-content-around flex-wrap">
                <div class="d-flex align-items-center flex-column mb-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <iframe style="border-radius: 10px" width="400" height="267" src="https://www.youtube.com/embed/bwpoo2bJWaQ" title="Why you should check your secrets into Git"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                  </div>
                  <h5 class="mt-2">Codemotion - Milan</h5>
                </div>

                <div class="d-flex align-items-center flex-column mb-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <iframe style="border-radius: 10px" width="400" height="267" src="https://www.youtube.com/embed/hccFB6uqTIE" title="Adding Security to your Architecture"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                  </div>
                  <h5 class="mt-2">Agile Meets Architecture - Berlin</h5>
                </div>

                <div class="d-flex align-items-center flex-column mb-3">
                  <div class="d-flex align-items-center flex-grow-1">
                    <iframe style="border-radius: 10px" width="400" height="267" src="https://www.youtube.com/embed/exSYwiVKK88" title="The Challenges of Open Source"
                      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                  </div>
                  <h5 class="mt-2">Challenges of Open Source</h5>
                </div>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="contact" class="p-4 bg-dark">
      <div class="container px-0 align-items-lg-stretch mw-100 bg-secondary" style="border-radius: 10px">
        <div class="m-0 text-dark">
          <div class="">
            <div class="h-100 p-4 p-md-5 text-white bg-primary mw-100" style="border-radius: 0.5rem;">
              <h2>My community presence</h2>
              <br>

              <div class="d-flex justify-content-around flex-wrap flex-md-nowrap">
                <div class="flex-shrink-md-0 me-md-4 mb-4">
                  <a href="https://linkedin.com/in/warren-parad" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-brands fa-linkedin fa-fw fa-2x me-3" style="color: #0077B5" />
                      <div>
                        Connect on LinkedIn
                      </div>
                    </div>
                  </a>

                  <a href="https://wparad.medium.com/" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-brands fa-medium fa-fw fa-2x me-3" style="color: #00ab6c" />
                      <div>Medium blog articles</div>
                    </div>
                  </a>

                  <a href="https://dev.to/wparad" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-brands fa-dev fa-fw fa-2x me-3" style="color: #000000" />
                      <div>DEV technical guides</div>
                    </div>
                  </a>

                  <a href="https://github.com/wparad" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-brands fa-github fa-fw fa-2x me-3" style="color: #171515" />
                      <div>
                        OSS on GitHub
                      </div>
                    </div>
                  </a>

                  <a href="https://oauth.net/2/" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-solid fa-lock fa-fw fa-2x me-3" />
                      <div>
                        IETF OAuth Working Group
                      </div>
                    </div>
                  </a>

                  <a href="https://discord.com/users/401675887927623692" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-brands fa-discord fa-fw fa-2x me-3" style="color: #5865F2" />
                      <div>
                      Message me on Discord
                      </div>
                    </div>
                  </a>

                  <a href="#" @click.prevent="() => openEmail()" target="_blank" class="text-dark networking-link">
                    <div class="community-presence-item">
                      <i class="fa-solid fa-envelope fa-fw fa-2x me-3" />
                      <div>
                      Send me an Email
                      </div>
                    </div>
                  </a>
                </div>

                <div class="mb-4 d-flex flex-column justify-content-around" style="max-width: 600px">
                  <p>
                    In these communities I write articles and answer questions to help engineers and aspiring leaders discover new technologies and techniques to deliver effectively. My engagements lead to new stories and experiences that I often write down for the benefit of future opportunities.
                  </p>
                  <p>
                    I wouldn’t have been able to do these in a vacuum though; my experiences are from a wide array of industries, with a leadership focus everywhere I’ve been. I owe my skills to the awesome individuals and companies I’ve worked with.
                  </p>
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
import homeNavbar from './homeNavbar.vue';
import profilePicture from '../assets/profile.jpg';

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

.authressCallout:not(:hover) {
  text-decoration: none;
  color: white
}

a {
  color: #2e6da4;
  text-decoration: none;
}

.networking-link {
  text-decoration: none;
  color: $light !important;
  &:hover, &:hover * {
    color: $dark !important;
  }
}

.callout-section {
  margin-top: 1rem;
  @include media-breakpoint-up(xl) {
    margin-top: -2rem;
    max-width: 50%;
  }
}

.d-flex .fa-brands + div {
  flex-shrink: 0;
}

.community-presence-item {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-width: 300px;
}
</style>
