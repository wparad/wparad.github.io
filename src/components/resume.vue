<template>
  <div>
    <div style="margin-bottom: 4rem;">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Warren Parad - CTO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#focus">Focus areas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience">Experience</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#communities">My communities</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="container pt-sm-4">
      <div class="p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem">
        <div class="container-fluid pt-4">
          <div class="d-flex flex-wrap align-items-center justify-content-center">
            <div>
              <img :src="profilePicture" style="border-radius: 100%" height="250">
            </div>
            <div class="p-xl-5 callout-section">
              <div class="name-plate">
                <h1 class="fw-bold">Warren Parad</h1>
                <h4 class="">CTO</h4>
              </div>
              
              <div class="p-4 bg-secondary" style="border-radius: 0.5rem;">
                <p>Hands-on leader, distributed systems and microservices architect, business technology strategist.
                  <br><br>I'm passionate about solving complex business problems using technology and growing engineering leaders. And I do this while
                  creating robust software platforms that deliver meaningful business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="focus" class="w-100 pt-4">
      <div class="m-0 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">My focus areas</h2>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-cubes fa-2x fa-fw" />
            </div>
            <div>
              <h2>Architecture and org design</h2>
              <p>Designing new patterns for new usages or reviewing existing architecture solutions for potential improvements and designing the engineering organization to deliver them effectively.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-seedling fa-2x fa-fw" />
            </div>
            <div><h2>Leading and developing</h2><p>Creating high performing teams able to deliver quickly the right solutions at the right time with right quality. Focusing on team growth and developing leaders--from team leads, product managers, support engineers, platform architects, and analysts to engineers of all levels.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-code-branch fa-2x fa-fw" />
            </div>
            <div><h2>Executive partnership</h2><p>Providing technology insight for product and business refinement by partnering with internal and external leaders throughout the industry. Bringing experience building companies and advising less technical executive teams on being effective. I believe success is a collaboration.</p></div>
          </div>
        </div>

        <div class="row g-4 my-2 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-diagram-next fa-2x fa-fw" />
            </div>
            <div><h2>Prioritization and organization</h2><p>Setting up and leading team reviews, retros, planning meetings, OKR and initiative creation. When we want to get in writing how we work and why we work that way, at the right time the right process can be really effective.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-regular fa-object-ungroup fa-2x fa-fw" />
            </div>
            <div><h2>Technology adoption</h2><p>Supporting and leading all kinds as well as migrations--cloud migrations, complex database changes, service orchestration, breaking apart monoliths, choreographing microservices, changing paradigms, and integrations with external partners.</p></div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-money-bill-transfer fa-2x fa-fw" />
            </div>
            <div><h2>IT management</h2>
            <p>Vendor selection can be a challenge. Sometimes the right answer isn't obvious, and picking the right technology solution for the situation is important. Afterwards, I work to continually evaluate our cloud spend and make sure it's inline with standard expectations.</p></div>
          </div>
        </div>

      </div>
    </div>

    <span id="experience">&nbsp;</span>
    <div class="container">
      <div class="align-items-lg-stretch">
        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>AUTHRESS</h3>
                <h5><strong>CTO & Chief Security Architect</strong></h5>
              </div>
              <strong><small>JAN 2018 - PRESENT</small></strong>
            </div>
            <p>
              I've pioneered security at Authress by building multiple B2B products and scaling up the engineering teams to support these products. They focused in the SaaS security space, with attention on user access control and authorization. I've collaborated and supported other executives and organizations throughout the business to align strategic initiatives, through the creation and partnerships among the different organizational areas. Developed the engineering division by recruiting, interviewing, and hiring talent in different geographic locations.
            </p>
            <p>
              Through my teams, I lead the creation of high quality and innovative product features while culture-focused on our engineers and their teams. Enabling engineers and engineering managers to learn, grow, and enabling them to in turn mentor others to be effective.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Managing engineering budget, cloud and tool selection</li>
              <li>Training and mentoring leaders to build successful teams</li>
              <li>Creating long term sustainable technology through microservice architectures</li>
              <li>OKRs, delivery management, agile</li>
              <li>IaC, DevSecOps, AWS, GitLab, Infrastructure Automation</li>
              <li>Typescript, C#, Terraform, CloudFormation</li>
              <li>Community management</li>
              <li>CCPA, GDPR, CAIQ, ISO27k1, SOC2</li>
            </ul>
          </div>
        </div>

        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>RHOSYS</h3>
                <h5><strong>Fractional CTO</strong></h5>
              </div>
              <strong><small>JAN 2018 - PRESENT</small></strong>
            </div>
            <p>
              Providing fractional tech leadership and CTO services for companies interested scaling
effectiveness, improving technical leadership, and deliver challenging tech solutions quickly.
I've helped companies build and lead impactful, cohesive technology teams and support organizations to deliver world class
software services to businesses and customers. I focus on the software tech and architecture that
drives business decisions, improving technology platforms, leading engineering teams to improve quality,
performance, and skills, and rapidly delivering the next innovation for the business or org.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Scaling up teams, orgs, and companies</li>
              <li>Leading engineering for orgs 4+ agile teams</li>
              <li>Driving new processes and installing entrepreneurial capabilities throughout the org</li>
              <li>Providing technology strategies for translating business, product, and organizational strategies into technical outcomes</li>
              <li>Managing processes, RFC strategy, leadership development, distributed and remote collaboration</li>
              <li>Python, Pulumi, Java, VueJS</li>
            </ul>
          </div>
        </div>

        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>CIMPRESS</h3>
                <h5><strong>Lead Software Architect & Team Lead, Cimpress Technology</strong></h5>
              </div>
              <strong><small>SEPT 2016 - OCT 2019</small></strong>
            </div>
            <p>
              Lead a team of software engineers developing mircroservices for Mass Customization Platform. Collaborated with Support, Product, Marketing, Customer Engagement to design a platform to connect many different types of clients--fulfillers, merchants, content artists, etc--from all over the world. I delivered robust, scalable solutions for handling customer orders and supporting third party manufacturers. With technical requirements of millions of users and billions of requests per day. Fostered collaboration between distributed teams across multiple continents. Coached and mentored junior and senior developers, to further refine, support, maintain, and innovate on the fulfillment side of the platform utilizing the latest cloud technologies.
            </p>
            <p>
              Additionally, I created cross team programs, processes, and design review sessions to further the quality, security, and camaraderie of our product organization. Through it, I introduced a number of different initiatives at multiple different locations, including--hybrid work environment, positive reinforcement training, lunch & learn collaborations, infrastructure as code, security reviews, cross team designs, and customer research reviews. The services were built using RESTful microservices, through agile processes with frequent knowledge sharing sessions.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Infrastructure as Code, Microservices, Agile, creating reusable software design patterns</li>
              <li>Architecture, Test pyramid, DDD, TDD</li>
              <li>Interviewing, training, mentoring</li>
              <li>Extensive use of Javascript, Typescript, C#, as well as a number of other languages</li>
              <li>GDPR, Auth0 user management</li>
            </ul>
          </div>
        </div>

        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>SERIFY</h3>
                <h5><strong>Chief Technology Officer and Executive Advisor</strong></h5>
              </div>
              <strong><small>NOV 2016 - AUG 2017</small></strong>
            </div>
            <p>
              Focused on founding and building a revitalized healthcare platform. The platform helped to spread awareness and reverse concerning trends in healthcare related to dating apps. I built up the initial engineering team as well as the original versions of the mobile apps (Android and iOS), and websites and services. I additionally researched and implemented integrations between different health care providers throughout the US to support secure and various sources of user/patient data.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Founding and then leading the engineering team</li>
              <li>Providing product and business council to the executive team</li>
              <li>CI/CD automated deployment, Javascript, Java, GCP</li>
              <li>HIPAA, user data privacy</li>
            </ul>
          </div>
        </div>

        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>SPACEX</h3>
                <h5><strong>Principle Software Architect, Avionics Manufacturing</strong></h5>
              </div>
              <strong><small>JAN 2016 - AUG 2016</small></strong>
            </div>
            <p>
              Lead various teams in production manufacturing, software development, manufacturing integration, and reliable testing practices to create automated software solutions to build flight vehicles. Projects advanced and implemented Agile Software Design, Software Architecture, RESTful API's, Lean Manufacturing, software services designed to scale, inter-department collaboration, and strategic software planning. Additional responsibilities include collaboration with regulators to deliver external client-facing web services.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Distributed development teams, cross-team collaboration</li>
              <li>Created new development process for the creation of sustainable software among multiple teams</li>
              <li>CI/CD automated deployment, Javascript, Python, AWS</li>
            </ul>
          </div>
        </div>

        <div class="mb-4">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>VISTAPRINT</h3>
                <h5><strong>Senior Software Developer, Manufacturing</strong></h5>
              </div>
              <strong><small>OCT 2012 - DEC 2015</small></strong>
            </div>
            <p>
              Designed and architected manufacturing plants' software capabilities including innovations in volume forecasting, optimizing scheduling, and hardware automation. Projects were completed with a range of tools, and resulted in cross organization improvements in uses of Microservices, git, REST, agile/lean practices, and continuous integration. Additional work included organizing a distributed team of software engineers to introduce an automated build and a deployment technology for continuous delivery, utilizing a number of different technologies. The team's primary responsibility is facilitating the creation of software that works at scale in distributed computing, model and interfacing with multicultural teams throughout the organization's many international locations. To achieve this, I created multiple development processes to focus on achieving increase higher performance, including switching to Kanban, git, and establishing an engineering book club.
            </p>
            <strong>Focus areas:</strong>
            <ul>
              <li>Distributed development teams, cross-team collaboration</li>
              <li>Created new development process for the creation of sustainable software among multiple teams</li>
              <li>Lean development and manufacturing, Kanban</li>
              <li>Jenkins, Atlassian BitBucket, C#, Ruby, IaC, WCF, Windows Services</li>
            </ul>
          </div>
        </div>

        <div class="">
          <div class="h-100 p-4 p-md-5 bg-dark text-light" style="border-radius: 0.5rem;">
            <div class="d-flex justify-content-between">
              <div>
                <h3>Education: Cornell University</h3>
                <h5><strong>Electrical & Computer Engineering - <em>Cum laude</em></strong></h5>
              </div>
              <strong><small>AUG 2006 - MAY 2010</small></strong>
            </div>
            <br>
            <strong>Publications</strong>
            <ul>
              <li>Grossman, James, Warren Parad, Hod Lipson. (2009) Design and Construction of a 6-DoF Fabrication Platform.</li>
              <li>Lipton, Jeffrey L., Warren Parad, et al. (2009) Fab@Home Model 2: Towards Ubiquitous Personal Fabrication Devices.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div id="skills" class="w-100 pt-4">
      <div class="m-0 p-4 p-4 p-md-5 bg-dark text-light">
        <h2 class="pb-2 border-bottom">My Primary Skills</h2>
        <div class="row g-4 my-2 row-cols-1 row-cols-lg-2">
          <div class="col d-flex align-items-start">
            <div class="d-none d-md-flex flex-shrink-0 me-3">
              <i class="mt-1 fa-solid fa-person-dots-from-line fa-2x fa-fw" />
            </div>
            <div>
              <h2>Personal strategy</h2>
              <p>This isn't the same old resume which just lists experiences and some skills. I've taken the extra time to craft this document to both chronicle what I've accomplished but also who I am. I care a lot about cutting through to the value, and delivering it. Here's what I like to focus on
                <ul>
                  <li>Delivering the business value</li>
                  <li>Doing it transparently</li>
                  <li>Holding myself and others accountable</li>
                  <li>I'm flexible, and when circumstances shift, I adapt</li>
                  <li>Long term sustainability in technology and architecture choices</li>
                  <li>Identifying the right level solution for the problem, I break everything down into short, medium, and long term and select the type most appropriate</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="col d-flex align-items-start">
              <div class="d-none d-md-flex flex-shrink-0 me-3">
                <i class="mt-1 fa-solid fa-user-check fa-2x fa-fw" />
              </div>
              <div>
                <h2>Strategic preferences</h2>
                <p>I've worked with many technology stacks across many different clouds and platforms, and every circumstance is unique. This makes it hard to gauge which knowledge is necessary before hand, but I like to focus on being flexible, so I apply what I've learned to every new situation. This list would be too long to enumerate, so instead I'll list which platforms I prefer to work with, and when given an option would choose by default:
                  <ul>
                    <li><strong><i class="fa-brands fa-aws fa-fw me-2" />AWS:</strong> Their global reach, attention to serverless technology, understanding of security, and speed of delivery match my expectations around Clouds</li>
                    <li><strong><i class="fa-brands fa-js fa-fw me-2" />JS/TS:</strong> The expansive community and available packages, allows for quick speed when introducing new features and technology, there's already a package for that. Also its use in UIs and services, and being one of the most performant serverless technology, makes its usage seamless across applications</li>
                    <li><strong><i class="fa-solid fa-lock fa-fw me-1" /> ZeroTrust:</strong> Utilizing user identity for security focuses on guarantees that we can have remote teams and users work and utilize our tools effectively.</li>
                    <li><strong><i class="fa-solid fa-person-running fa-fw me-1" />Agile with Kanban:</strong> I've found other flavors slow teams down focusing on things that aren't the delivery, I focus on getting teams to be performing that means using the right process at the right time.</li>
                    <li><strong><i class="fa-solid fa-people-group fa-fw me-1" />Full stack team ownership:</strong> On call rotations, customer support, design, development, testing, the best team handles all these aspects and gets external support at the right time.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="communities" class="container mb-4 px-0 px-md-4 py-4 align-items-lg-stretch mw-100 bg-secondary">
      <div class="m-0 text-dark">
        <div class="">
          <div class="h-100 p-4 p-md-5 text-white bg-primary mw-100" style="border-radius: 0.5rem;">
            <h2>My community presence</h2>

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
              </div>

              <div class="mb-4 d-flex flex-column justify-content-around" style="max-width: 600px">
                <p>
                  In these communities I write articles and answer questions to help engineers and aspiring leaders discover new technologies and techniques to deliver effectively. I owe my skills to the awesome individuals and companies I've worked with. And these are a great way to learn more about me.
                </p>
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

</script>

<style lang="scss" scoped>
@import "bootstrap/scss/mixins";

a {
  color: #2e6da4;
}

.callout-section {
  @include media-breakpoint-up(xl) {
    max-width: 50%
  }

  @include media-breakpoint-down(xl) {
    .name-plate {
      text-align: center;
    }
  }
}

.networking-link {
  text-decoration: none;
  color: $light !important;
  &:hover, &:hover * {
    color: $dark !important;
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

p:last-child, ul:last-child {
  margin-bottom: 0;
}
</style>
