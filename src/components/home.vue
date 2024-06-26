<template>
  <div>
    <div style="margin-bottom: 4rem;">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Warren Parad - Authress CTO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#speaker">Speaking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="?fractional">Fractional</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="?resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="container my-4">
        <div class="text-light">
          <div class="container-fluid d-flex justify-content-center">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start bg-dark p-5" style="border-radius: 0.5rem">
              <div class="me-md-5">
                <img :src="profilePicture" style="border-radius: 100%" height="250">
              </div>
              <div class="mt-4">
                <h1 class="display-5 fw-bold">Warren Parad</h1>
                <h4>
                  <div><a href="https://authress.io" class="authressCallout" target="_blank">Authress</a> CTO • Public Speaker</div>
                  <div class="mt-2">Adventures in DevOps Host</div>
                </h4>

                <div class="mt-4">
                  <div class="d-flex justify-content-around flex-md-nowrap">
                    <a href="https://warrenparad.net/links/linkedin" target="_blank" class="text-dark networking-link">
                      <div>
                        <i class="fa-brands fa-linkedin fa-2x" style="color: #0077B5" title="LinkedIn" />
                      </div>
                    </a>

                    <a href="https://dev.to/wparad" target="_blank" class="text-dark networking-link">
                      <div>
                        <i class="fa-brands fa-dev fa-2x" title="Blog" />
                      </div>
                    </a>

                    <a href="https://github.com/wparad" target="_blank" class="text-dark networking-link">
                      <div>
                        <i class="fa-brands fa-github fa-2x" title="GitHub" />
                      </div>
                    </a>

                    <a href="https://rhosys.ch/community" target="_blank" class="text-dark networking-link">
                      <div>
                        <img :src="oauthImage" title="IETF OAuth Working Group" width="32">
                      </div>
                    </a>

                    <a href="https://rhosys.ch/community" target="_blank" class="text-dark networking-link">
                      <div>
                        <i class="fa-brands fa-discord fa-2x" style="color: #5865F2" title="Connect with me on discord" />
                      </div>
                    </a>
                  </div>
                </div>

                <div class="mt-4">
                  <h5 class="mb-0">Get in touch</h5>
                  <div class="d-flex flex-wrap justify-content-center">
                    <button class="btn btn-outline-info flex-shrink-0 me-2 mt-2" type="submit" @click="() => openEmail('speaker')">Speaking Engagement</button>
                    <button class="btn btn-outline-info flex-shrink-0 me-2 mt-2" type="submit" @click="() => openEmail('fractional')">Fractional CTO</button>
                    <button class="btn btn-outline-info flex-shrink-0 me-2 mt-2" type="submit" @click="() => openEmail('podcast')">Podcast Request</button>
                  </div>
                </div>

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

                <videos />

                <div class="mt-4">
                  <div class="d-flex flex-wrap justify-content-center">
                    <button class="btn btn-dark flex-shrink-0 me-2 mt-2" type="submit" @click="() => openEmail('speaker')">Book a speaking engagement with me</button>
                  </div>
                </div>

                <br><br>
                <div class="d-flex justify-content-center">
                  <h4 id="engagements">All engagements</h4>
                </div>
                <div class="speaker-history-list-wrapper d-flex justify-content-center">
                  <ul class="speakerhistory-list">
                    <li><a href="https://authress.io/knowledge-base/articles/2024/07/02/devweek-why-you-should-check-your-secrets-into-git">
                      <span>DWX24 2024 - Nuremberg</span><br>
                      <span>Why you Should Check Your Secrets Into Git</span>
                    </a></li>
                    <li><a href="https://authress.io/knowledge-base/articles/2024/05/10/techspot-building-security-first-apis">
                      <span>TechSpot 2024 Warsaw</span>
                      <br><span>Build a Security-First API</span>
                    </a></li>
                    <li><a href="https://conferences.codemotion.com/madrid2024/en/speakers/">
                      <span>Code Motiion 2024 - Madrid</span>
                      <br><span>Build a Security-First API</span>
                    </a></li>
                    <li><a href="https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture">
                      <span>Decompiled 2024 - Dresden</span>
                      <br><span>Adding security to your architecture and mindset</span>
                    </a></li>
                    <li><a href="https://authress.io/knowledge-base/articles/2024/02/04/fosdem-building-security-first-apis">
                      <span>FOSDEM 2024 - Brussels</span>
                      <br><span>Stoping all the attacks</span>
                    </a></li>
                    <li><a href="https://authress.io/knowledge-base/articles/2023/07/11/codemotion-why-you-should-check-your-secrets-into-git">
                      <span>Code Motiion 2023 - Madrid</span>
                      <br><span>Why you should check your secrets into Git</span>
                    </a></li>
                    <li><a href="https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture">
                      <span>Agile Meets Architecture 2022 - Berlin</span>
                      <br><span>Adding security to your architecture one step at a time</span>
                    </a></li>
                  </ul>
                </div>

                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import shortUUID from 'short-uuid';

import profilePicture from '../assets/profile.jpg';
import Videos from './videos.vue';
import oauthImage from './oauth.svg';

const key = shortUUID.generate().slice(0, 7);
const openEmail = type => {
  const props = {
    speaker: {
      email: `${encodeURIComponent(`Warren Parad<speaking+${key}`)}@rhosys.ch`,
      subject: 'Speaking appearence request for Warren Parad'
    },
    fractional: {
      email: `${encodeURIComponent(`Warren Parad<fractional+${key}`)}@rhosys.ch`,
      subject: 'Fractional CTO Inquiry'
    },
    podcast: {
      email: `${encodeURIComponent(`Warren Parad<podcast+${key}`)}@authress.io`,
      subject: 'Adventures in DevOps Podcast invite request'
    }
  }[type];
  window.open(`mailto:${props.email}%3e?subject=${encodeURIComponent(props.subject)}`);
};

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

.authressCallout:not(:hover) {
  text-decoration: none;
  color: white
}

.networking-link {
  text-decoration: none;
  color: #0077B5 !important;
  &:hover, &:hover * {
    color: white !important;
  }
}

.speaker-history-list-wrapper {
  .speakerhistory-list > * {
    margin: 0.5rem 0;
  }

  a, li {
    text-decoration: none;
    color: white;
    &:hover, &:hover * {
      color: $info;
    }
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
</style>
