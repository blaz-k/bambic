<template>
  <div id="contact-us">
    <h1 class="title">Kontaktne informacije</h1>
    <hr />

    <div class="row"></div>

    <div class="container">
      <div class="cot">
        <div class="front side">
          <div class="content">
            <h2>Kontaktirajte nas</h2>

            <div v-for="lastnik in kontakt" :key="lastnik">
              <div class="call">
                <div class="jaz">
                  <span class="mr">{{ lastnik.name }} </span>
                  <span> {{ lastnik.surname }}</span>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <span class="naslov">Tel:</span>
                    <div>
                      <span>{{ lastnik.tel }}</span>
                    </div>

                    <span class="naslov">Email:</span>
                    <div>
                      <span>{{ lastnik.email }}</span>
                    </div>
                  </div>

                  <div class="col nas">
                    <span class="naslov">Naslov:</span>
                    <div>
                      <span>{{ lastnik.address }}</span>
                    </div>
                    <div>
                      <span>{{ lastnik.postalCode }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        class="cot"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.192231970362!2d14.143070915658598!3d46.10707639833658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac32fccda7ea9%3A0xd715e5148a37a3fd!2sPot%20na%20Pretov%C4%8D%205%2C%204224%20Gorenja%20vas!5e0!3m2!1sen!2ssi!4v1642161702760!5m2!1sen!2ssi"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

export default {
  name: "ContactUs",
  computed: {
    ...mapState["products"],
    ...mapState(["kontakt"]),
  },
  components: { Footer },
};
</script>

<style scoped>
hr {
  background-color: rgb(255, 17, 0);
  height: 2px;
  border: solid rgb(255, 17, 0);
  width: 55%;
  margin: 0 auto 3rem;
}

.title {
  text-transform: uppercase;
  font-size: 3rem;
  color: #272525;
  margin: 40px 0 20px 0;
  text-align: center;
}

@media only screen and (max-width: 419px) {
  .title {
    text-transform: uppercase;
    font-size: 2rem;
    color: #272525;
    margin: 40px 0 20px 0;
    text-align: center;
  }
}
.jaz {
  font-size: 25px;
  margin-bottom: 2rem;
}
.naslov {
  border-bottom: 3px solid #444;
  color: red;
}
.mr {
  margin-right: 2vh;
}

.call {
  margin-top: 50px;
  line-height: 2em;
  font-size: 22px;
}

#contact-us {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-width: 120px;
  min-height: 425px;
  border-radius: 20px;
  /* position: relative; */
  /* -webkit-transition: 1.5s ease-in-out;
  transition: 1.5s ease-in-out;
  transform-style: preserve-3d; */
  /* display: flex; */
  /* margin-right: auto;
    margin-left: auto; */
  margin-top: 3rem;
  margin-bottom: 15rem;
}

.cot {
  min-width: 150px;
  min-height: 455px;
  border-radius: 20px;
  /* position: absolute; */
  -webkit-transition: 1.5s ease-in-out;
  transition: 1.5s ease-in-out;
  transform-style: preserve-3d;
  display: flex;
  align-content: center;
  align-items: center;

  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.side {
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  color: #fff;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 20px;
}
.side-down {
  /* position: absolute;
    text-align: center;*/
  width: 100%;
  height: 100%;

  padding: 20px 50px;
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 20px;
}
.content {
  transform: translatez(70px) scale(0.8);
  line-height: 1.5em;
}
.content h2 {
  position: relative;
}
.content p {
  margin-top: 50px;
  line-height: 2em;
  font-size: 32px;
}

.content .kontakt {
  line-height: 8em;
  font-size: 28px;
}
.content h2:before {
  content: "";
  position: absolute;
  bottom: -20px;
  height: 3px;
  background-color: rgb(156, 151, 150);

  width: 40%;
  left: 50%;
  transform: translateX(-50%);
}
.front {
  z-index: 2;
  background-size: 100vh;
  background-size: cover;
  background-image: url("../assets/img/dark-background.jpeg");
}
.back {
  background-color: #333;
  transform: rotateY(180deg);
  z-index: 0;
  padding-top: 10px;
  background-image: url("../assets/img/front-background.jpeg");
}

form {
  text-align: left;
}
.back h2 {
  margin: 0;
}
form label,
form input {
  display: block;
}
form input,
form textarea {
  background: transparent;
  border: 0;
  border-bottom: 2px solid #444;
  padding: 5px;
  width: 100%;
  color: #fff;
}
form label {
  margin: 15px 0;
}
form input[type="submit"] {
  display: block;
  width: auto;
  margin: 10px auto;
  padding: 5px 10px;
  border: 3px solid #555;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
/* my button style  */
.white-mode {
  text-decoration: none;
  padding: 7px 10px;
  background-color: #122;
  border-radius: 3px;
  color: #fff;
  transition: 0.35s ease-in-out;
  position: fixed;
  left: 15px;
  bottom: 15px;
  font-family: "Montserrat";
}

.white-mode:hover {
  background-color: #fff;
  color: #122;
}

@media (max-width: 575px) {
  .nas {
    /* display: none; */
  }
  .call {
    margin-top: 25px;
    line-height: 1.5em;
    font-size: 22px;
  }
}

@media (max-width: 432px) {
  .nas {
    /* display: none; */
  }
  .call {
    margin-top: 25px;
    line-height: 1.7em;
    font-size: 18px;
  }
}
</style>
