<template>
  <div id="footer" class="footer-informations">
    <div class="container">
      <footer class="py-3 my-4">
        <div class="my-nav border-bottom">
          <ul class="nav justify-content-center pb-3 mb-3">
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'Home' }"
                >Domov</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'KovinskiRobniki' }"
                >Kovniski Robniki</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'KovinskeOgraje' }"
                >Kovinske Ograje</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'OgrajaPolzi' }"
                >Ograja za polže</router-link
              >
            </li>
          </ul>
          <ul class="nav justify-content-center pb-3 mb-3">
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'Smetarniki' }"
                >Smetarniki</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'OkenskePolice' }"
                >Okenske Police</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'PokroviToplotnih' }"
                >Pokrovi Toplotnih Črpalk</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link px-2 text-muted"
                :to="{ name: 'ContactUs' }"
                >Kontakt</router-link
              >
            </li>
          </ul>
        </div>

        <p class="text-center text-muted mt-2">
          &copy; 2021 Bambic.si, Jani Bambič s.p.,
          <span id="kmeto">
            <a class="kmet" href="https://github.com/blaz-k" target="_blank"
              >Izdelava: paraKmeto</a
            >
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  margin-top: 8rem;
}
</style>
