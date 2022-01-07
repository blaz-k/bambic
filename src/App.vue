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
            >Bambic.si</router-link
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
                <router-link class="nav-link" :to="{ name: 'KovinskiRobniki' }"
                  >Kovinski Robniki</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'KovinskeOgraje' }"
                  >Kovinske Ograje</router-link
                >
              </li> -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ograje
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <!-- <li><a class="dropdown-item" href="#">Action</a></li> -->
                  <li class="dropdown-item">
                    <router-link
                      class="nav-link"
                      :to="{ name: 'KovinskeOgraje' }"
                      >Kovinske Ograje</router-link
                    >
                  </li>
                  <li class="dropdown-item">
                    <router-link class="nav-link" :to="{ name: 'OgrajaPolzi' }"
                      >Ograja za polže</router-link
                    >
                  </li>
                  <!-- <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li> -->
                </ul>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'Smetarniki' }"
                  >Smetarniki</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ostalo
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li class="dropdown-item">
                    <router-link
                      class="nav-link"
                      :to="{ name: 'OkenskePolice' }"
                      >Okenske Police</router-link
                    >
                  </li>
                  <li class="dropdown-item">
                    <router-link
                      class="nav-link"
                      :to="{ name: 'PokroviToplotnih' }"
                      >Pokrovi Toplotnih Črpalk</router-link
                    >
                  </li>
                  <li class="dropdown-item">
                    <router-link class="nav-link" :to="{ name: 'DimniskeKape' }"
                      >Dimniške Kape</router-link
                    >
                  </li>
                </ul>
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

              <!----- Uncomment if you want to use nav items instead of dropdowns ----->

              <!-- <li class="nav-item">
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
                <router-link class="nav-link" :to="{ name: 'DimniskeKape' }"
                  >Dimniške Kape</router-link
                >
              </li> -->
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
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <div id="footer" class="footer-informations">

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
                :to="{ name: 'KovinskeOgraje' }"
                >Kovinske Ograje</router-link
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
                :to="{ name: 'OgrajaPolzi' }"
                >Ograja za polže</router-link
              >
            </li>
          </ul>
          <ul class="nav justify-content-center pb-3 mb-3">
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
                :to="{ name: 'Smetarniki' }"
                >Smetarniki</router-link
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
  </div> -->
</template>

<style>
.container {
  max-width: 85%;
}
.dropdown-menu {
  border: none;
  background-color: rgb(107, 27, 27);
  /* -webkit-box-shadow: 0px 10px 34px -20px rgba(5, 27, 0, 0.41); */
  /* -moz-box-shadow: 0px 10px 34px -20px rgba(0, 0, 0, 0.41); */
  box-shadow: 0px 30px 54px -10px rgba(177, 155, 31, 0.91);
  border-radius: 86px;
  /* width: 200%; */
}
.dropdown-item {
  color: greenyellow;
  background-color: red;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.my-nav {
  color: red;
  display: flex;
  justify-content: space-between;
}
/* .footer-informations {
  margin-top: 43rem;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* color: #2c3e50; */
}

#nav {
  padding: 32px;
  /* background-color: rgb(218, 15, 15);
  background: linear-gradient(90deg, #9c9c9c, #8d8989); */
  text-transform: uppercase;
  /* font-size: 17px; */
}
#footer a {
  font-weight: bold;
  color: #000000;
}
#footer a:hover {
  background-color: rgb(153, 153, 45);
  border-radius: 22px 0px 22px 0px;
  /* color: #cf2187; */
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  color: rgb(151, 150, 156);
}

a:link {
  text-decoration: none;
  transition: all 1.2s ease-out;
}

#nav a:hover {
  background-color: rgb(107, 107, 89);
  border-radius: 22px 0px 22px 0px;
  /* color: #cf2187; */
}

#footer a {
  color: rgb(202, 199, 11);
}
#footer a:hover {
  background-color: rgb(153, 153, 45);
  border-radius: 22px 0px 22px 0px;
  /* color: #cf2187; */
}

#footer a:hover {
  color: rgb(10, 10, 10);
}
#footer #kmeto a:hover {
  background-color: rgb(255, 255, 255);
}
</style>
