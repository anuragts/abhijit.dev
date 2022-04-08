<template>
  <div class="sm:py-8 text-xl font-custom sm:text-3xl text-center">
    <div class="flex flex-row justify-center items-center md:block">
      <router-link class="my-5 md:my-0 float-left text-third text-3xl" to="/"
        >abhijit.dev</router-link
      >
    </div>
    <div class="flex flex-row justify-center items-center md:block">
      <router-link class="mx-2 float-right sm:ml-10" to="/contact" id="lh"
        >contact</router-link
      >
      <router-link class="mx-2 float-right sm:mx-10" to="/about" id="lh"
        >about</router-link
      >
      <router-link class="mx-2 float-right sm:mx-10" to="/projects" id="lh"
        >projects</router-link
      >
    </div>
  </div>
</template>
<style scoped>
#lh {
  display: inline-block;
  position: relative;
  padding-bottom: 7px;

}
#lh:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #769fcd;
  transform-origin: bottom right;
  transition: transform 0.35s ease-out;
}
#lh:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
