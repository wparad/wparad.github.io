<template>
  <div class="">
    <div class="h-100 p-4 p-md-5 text-white bg-primary mw-100" style="border-radius: 0.5rem;">
      <!-- Testimonials: https://docs.google.com/document/d/1-tPEjvbxgoP0sOS7P_TFKyibh_mkp0jpYmM3xW50_rE/edit#heading=h.z4vfzgar6saq -->
      <h2>Testimonials</h2>

      <section>
        <div style="max-width: 1200px; display: flex; justify-content: space-around; margin: 0em auto 2em; flex-wrap: wrap">
          <div class="carousel-wrapper">
            <div class="carousel">
              <div class="testimonial-wrapper">
                <div class="testimonial">
                  <div class="speech-bubble">
                    <p>Warren started working with us during transitions in both our leadership and our technical direction. He ramped up in virtually no time at all and proved to be an ideal partner helping to lead, mentor, coach, manage, facilitate, and consult on initiatives ranging from our org structure to our interview process to technical decisions up and down the stack to which cloud services and tools we should be leveraging...and the list goes on. Overall, Warren is not just a consultant, but an amazingly bright, talented, and versatile teammate who I hope to work with again in the future.</p>
                  </div>
                  <div class="sig"><img class="avatar" :src="JustinAvatar" alt="Justin Lynch">
                    <p>Justin Lynch, Head of Engineering,<strong>&nbsp; Correlation One</strong></p>
                  </div>
                  <!--edit this-->
                </div>
              </div>
              <div class="testimonial-wrapper">
                <div class="testimonial">
                  <div class="speech-bubble">
                    <p>Warren brought us a badly-needed infusion of energy, drive, and technical depth which was absolutely pivotal to our achievement of ambitious goals in a business-critical cloud migration initiative. They helped us to challenge our own assumptions and re-imagine what was possible. Further, their technical depth and ability to quickly see the essence of a problem ensured that we delivered the best possible solutions for our needs.</p>
                    <p>
                      Perhaps most important, Warren helped our teams to embrace a sense of urgency and possibility in their work, which will have a sustained impact on their performance.</p>
                  </div>
                  <div class="sig"><img class="avatar" :src="HalAvatar" alt="Hal Taylor">
                    <p>
                      Hal Taylor, Head of Technology, <strong>&nbsp;Digital Publishing at TX Group</strong>
                      <br>
                    </p>
                  </div>
                </div>
              </div>
              <div class="testimonial-wrapper">
                <div class="testimonial">
                  <div class="speech-bubble">
                    <p>Pulling Warren in helped us to navigate challenging situations where it looked like there was no better options. His recommendations minimized and help eliminate the amount work required. We were able to pivot and focus on long-term architecture instead of quick hacks! That significantly reduced the amount of wasted engineering resources and kept throw-away effort to a minimum. Overall the maintainability of our software and technology was greatly improved.</p>

                    <p>There were many great insights Warren shared. Frequently, he was able to find solutions that we hadn't thought about, providing a third option when we had none. The solutions he recommended were elegant and amazingly well thought out. Most importantly they were simple to understand and implement, saving a lot of time. Because Warren continually pushed to consider the long-term architectures, the output of our teams became sustainable and reduced the huge mental burden that was once required.</p>
                  </div>
                  <div class="sig"><img class="avatar" :src="AndrejAvatar" alt="Andrej Kincel">
                    <p>
                      Andrej Kincel, Engineering Manager and Architect,<strong>&nbsp; Cimpress Technology</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style="width: 550px; max-width:100%; margin:auto; text-align: center;">
              <div class="carousel-nav"></div>
              <div class="carousel-nav"></div>
              <div class="carousel-nav"></div>
            </div>
          </div>
        </div>
      </section>

      <br>
    </div>
  </div>
</template>

<script setup>
import AndrejAvatar from '../assets/avatar-andrej.jpeg';
import HalAvatar from '../assets/avatar-hal.jpeg';
import JustinAvatar from '../assets/avatar-justin.jpg';
</script>

<style lang="scss" scoped>

.carousel-wrapper {
  width: 550px;
  overflow: hidden;
}

.carousel {
  position: relative;
  overflow-x: hidden;
  height: 25rem;
}

@media screen and (max-width: 567px) {
  .carousel {
    height: 30rem;
  }
}

.carousel-nav {
  display: inline-block;
  background-color: #DEE2E6;
  margin: 0.2em;
  width: 0.7em;
  height: 0.7em;
  border-radius: 100em;
  animation: dot-color 35s linear infinite;
}

.carousel-nav:nth-child(1) {
  animation-name: dot-color-first, dot-color;
  animation-duration: 35s;
  animation-iteration-count: 1, infinite;
  animation-delay: 0s, 35s;
}

.carousel-nav:nth-child(2) {
  animation-delay: Calc(35s * .33);
}

.carousel-nav:nth-child(3) {
  animation-delay: Calc(35s * .66);
}

@keyframes dot-color-first {
  0%, 33.3% {background-color: #98A1A9;}
  37.3%, 100% {background-color: #DEE2E6;}
}

@keyframes dot-color {
  0% {background-color: #DEE2E6;}
  4%, 33.3% {background-color: #98A1A9;}
  37.3%, 100% {background-color: #DEE2E6;}
}

.carousel > .testimonial-wrapper {
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  height: 100%;
  width: 550px;
  max-width: 100%;
  animation: carousel 35s linear infinite;
  transform: translateX(110%);
}

@media screen and (max-width: 567px) {
  .carousel > .testimonial-wrapper {
    align-items: center;
  }
}

.carousel > .testimonial-wrapper:nth-child(1) {
  animation-name: first-testimonial, carousel;
  animation-duration: 35s;
  animation-iteration-count: 1, infinite;
  animation-delay: 0s, 35s;
  transform: translateX(0%);
}
.carousel > .testimonial-wrapper:nth-child(2) {
  animation-delay: Calc(35s * .33);
}
.carousel > .testimonial-wrapper:nth-child(3) {
  animation-delay: Calc(35s * .66);
}

@keyframes first-testimonial {
  0% { transform: translateX(0%); }
  5.5%, 33.3% { transform: translateX(0); }
  38.8%, 100% { transform: translateX(-110%); }
}

@keyframes carousel {
  0% { transform: translateX(110%); }
  5.5%, 33.3% { transform: translateX(0); }
  38.8%, 100% { transform: translateX(-110%); }
}

.speech-bubble {
  background-color: $dark;
  padding: 1em 1.5em;
  border-radius: 1em 1em 1em 0;
  padding-bottom: 4em;
}

.speech-bubble p {
  font-size: 0.8rem;
  font-style: italic;
  margin-top: 0;
}

.sig {
  margin-top: -4em;
  margin-left: 3em;
  display: flex;
  align-items: top;
  justify-content: space-between;
  font-size: 0.8rem;
}
.sig p {
  margin-right: 1.2em;
}

.avatar {
  height: 70px;
  border-radius: 100px;
  margin-right: 2em;
}

</style>
