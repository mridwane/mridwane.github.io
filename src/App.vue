<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/12">
      <div class="h-screen flex items-center">
        <nav class="nav">
          <a href="#">
            <div class="nav-link active">
              <i class="iconoir-home-simple-door"></i>
            </div>            
          </a>
          <a href="#">
            <div class="nav-link">
              <i class="iconoir-puzzle"></i>
            </div>            
          </a>
          <a href="#">
            <div class="nav-link">
              <i class="iconoir-dribbble"></i>
            </div>            
          </a>
          <a href="#">
            <div class="nav-link">
              <i class="iconoir-info-empty"></i>
            </div>            
          </a>
        </nav>          
      </div>
    </div>
    <div class="basis-11/12">
      <div class="h-screen flex items-center">
        <div class="basis-6/12">
          <h1>Hello world</h1>
        </div>
        <div class="basis-6/12">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
