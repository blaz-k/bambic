<template>
  <!-- DELETE THIS ID="NAV" ROUTER LINKS BEFORE END OF PROJECT -->
  <!-- <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'ContactUs' }">ContactUs</router-link>
  </div> -->
  <div id="nav">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg">
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
                <a class="nav-link" href="#">Kovinski Robniki</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kovinske Ograje</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Pokrovi Toplotnih Črpalk</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Smetarniki</a>
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
  background: linear-gradient(90deg, #693c3c, #b10606);
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: rgb(223, 202, 10);
}
</style>
