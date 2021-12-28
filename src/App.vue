<template>
  <!-- DELETE THIS ID="NAV" ROUTER LINKS BEFORE END OF PROJECT -->
  <!-- <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'ContactUs' }">ContactUs</router-link>
  </div> -->
  <div id="nav">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" :to="{ name: 'Home' }"
            >Bambič</router-link
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'KovinskeOgraje' }"
                  >Kovinske Ograje</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'KovinskiRobniki' }"
                  >Kovniski Robniki</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'OgrajaPolzi' }"
                  >Ograja za polže</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'OkenskePolice' }"
                  >Okenske Police</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'PokroviToplotnih' }"
                  >Pokrovi Toplotnih Črpalk</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Smetarniki' }"
                  >Smetarniki</router-link
                >
              </li>
            </ul>
            <ul class="d-flex mb-2 mb-md-0 list-unstyled">
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'About' }"
                  >O nas</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'ContactUs' }"
                  >Kontakt</router-link
                >
              </li>
              <!-- <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Test' }">
                Test
              </router-link>
            </li> -->
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  <router-view />
  <div class="footer-informations">
    <footer>
      <p class="float-end"><a href="#">Back to top</a></p>
      <p>
        &copy; 2021 Bambic &middot; <a href="#">Privacy</a> &middot;
        <a href="#">Terms</a>&middot; Website created by
        <a href="https://para-kmeto.herokuapp.com/" target="_blank"
          >ParaKmeto</a
        >
      </p>
    </footer>
  </div>
</template>

<style>
.footer-informations {
  margin-top: 53rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* color: #2c3e50; */
}

#nav {
  padding: 32px;
  /* background-color: rgb(218, 15, 15); */
  /* background: linear-gradient(90deg, #9c9c9c, #8d8989); */
  text-transform: uppercase;
  /* font-size: 17px; */
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: rgb(156, 156, 150);
}
</style>
