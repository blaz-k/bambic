<template>
  <h2>Kontaktne informacije</h2>

  <div class="container">
    <div class="front side">
      <div class="content">
        <h1>Lahko nam pošljete sporočilo</h1>
        <p>
          Ali vas kakšen izdelek zanima bolj podrobno, ali bi radi izvedeli kaj
          več? Pošljite nam sporočilo!
        </p>
        <span class="kontakt"></span>
      </div>
    </div>
    <div class="back side">
      <div class="content">
        <h1>Kontaktirajte nas!</h1>
        <form>
          <label>Ime :</label>
          <input type="text" placeholder="Janez Novak" />
          <label>Vaš email :</label>
          <input type="text" placeholder="janez-novak@mail.com" />
          <label>Vaše sporočilo :</label>
          <textarea placeholder="Kaj vas zanima?"></textarea>
          <input type="submit" value="Pošlji" />
        </form>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div>
        <iframe
          class="cot"
          style="border: 0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.504540882342!2d14.558149515783624!3d46.14069839606831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765348c4b0f00e9%3A0xeb678a12f303563a!2sJem%C4%8Deva%20cesta%2026%2C%201236%20Trzin!5e0!3m2!1ssl!2ssi!4v1615888889122!5m2!1ssl!2ssi"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="col-md-6">
      <div class="cot">
        <div class="front side">
          <div class="content">
            <h1>Ali pa nas pokličete</h1>

            <div v-for="lastnik in kontakt" :key="lastnik">
              <p>
                <span>{{ lastnik.name }}</span>
                <span>{{ lastnik.surname }}</span>
                <br />
                Tel: <span>{{ lastnik.tel }}</span> <br />
                Naslov:
                <span>{{ lastnik.address }}</span>
              </p>
            </div>
            <span class="kontakt"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ContactUs",
  computed: {
    ...mapState["products"],
    ...mapState(["kontakt"]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
  background-color: #111;
  font-family: "Montserrat";
}

.container {
  min-width: 700px;
  min-height: 425px;
  border-radius: 20px;
  position: relative;
  -webkit-transition: 1.5s ease-in-out;
  transition: 1.5s ease-in-out;
  transform-style: preserve-3d;
  display: flex;
  /* margin-right: auto;
  margin-left: auto; */
  margin-top: 3rem;
  margin-bottom: 15rem;
}

.cot {
  min-width: 700px;
  min-height: 525px;
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
.content {
  transform: translatez(70px) scale(0.8);
  line-height: 1.5em;
}
.content h1 {
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
.content h1:before {
  content: "";
  position: absolute;
  bottom: -20px;
  height: 3px;
  background-color: rgb(156, 156, 150);

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
.container:hover {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

form {
  text-align: left;
}
.back h1 {
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
</style>
