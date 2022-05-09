<template>
  <div style="margin-bottom: 4rem;">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Fractional CTO - Rhosys AG</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ms-auto me-4 mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Rates</a>
          </li>
        </ul>
        <div class="d-flex">
          <button @click="openSchedulingPage" class="btn btn-outline-success" type="submit">Schedule a meeting</button>
        </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const openSchedulingPage = () => {
  window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1L4ydEJ2y99C8uDGwI2eoIeu7DVwX9a1slXrRQUquyNAZ-CHGkX98GQk5TDkEEuhZ7QvjFGYvp');
};
</script>