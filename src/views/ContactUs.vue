<template>
  <div class="container">
    <div class="front side">
      <div class="content">
        <h1>Kontaktirajte nas!</h1>
        <p>
          Ali vas kakšen izdelek zanima bolj podrobno, ali bi radi izvedeli kaj
          več?
        </p>
        <span class="kontakt">Kontakt</span>
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ContactUs",
  computed: {
    ...mapState["products"],
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
  margin-top: 15rem;
  margin-bottom: 15rem;
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
  background-color: rgb(223, 202, 10);
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
