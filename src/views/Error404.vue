<template>
  <div class="text-center">
    <div class="text-primary-600 text-9xl font-bold my-5 error">404</div>
    <div class="text-2xl text-gray-500 my-5 error-text">
      Oops. Prišlo je do napake. Strani ni bilo mogoče prikazati...
    </div>
    <!-- <div class="flex flex-row justify-center space-x-4">
      <button @click="router.go(-1)" class="btn btn-primary my-5">Nazaj</button>
      <button @click="router.push('/')" class="btn btn-secondary my-5">
        Domov
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style scoped>
.error {
  font-size: 9rem;
}
.error-text {
  font-size: 4rem;
}
</style>
