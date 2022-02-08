<template>
  <div id="contact-us">
    <h1 class="title">Kontaktne informacije</h1>
    <hr />

    <div class="row">
      <!-- <div class="cot">
        <div class="front side">
          <div class="content">
            <h1>Ali pa nas pokličete</h1>

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

                  <div class="col">
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
            <span class="kontakt"></span>
          </div>
        </div>
      </div> -->
      <!-- <div class="col-md-4">
        <div>
          <iframe
            class="cot"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.192231970362!2d14.143070915658598!3d46.10707639833658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac32fccda7ea9%3A0xd715e5148a37a3fd!2sPot%20na%20Pretov%C4%8D%205%2C%204224%20Gorenja%20vas!5e0!3m2!1sen!2ssi!4v1642161702760!5m2!1sen!2ssi"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div> -->
      <!-- <div class="col-md-8">
        <div class="container">
          <div class="front side">
            <div class="content">
              <h1>Lahko nam pošljete sporočilo</h1>
              <p>
                Ali vas kakšen izdelek zanima bolj podrobno, ali bi radi
                izvedeli kaj več? Pošljite nam sporočilo!
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
        <div class="cot">
          <div class="front side">
            <div class="content">
              <h1>Ali pa nas pokličete</h1>

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

                    <div class="col">
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
              <span class="kontakt"></span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <!-- <div>
      <iframe
        class="cot"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.192231970362!2d14.143070915658598!3d46.10707639833658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac32fccda7ea9%3A0xd715e5148a37a3fd!2sPot%20na%20Pretov%C4%8D%205%2C%204224%20Gorenja%20vas!5e0!3m2!1sen!2ssi!4v1642161702760!5m2!1sen!2ssi"
        width="1300"
        height="550"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div> -->
    <!-- <div class="container">
      <div class="cot">
        <div class="front side">
          <div class="content">
            <h1>Kontaktirajte nas</h1>

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

                  <div class="col">
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
            <span class="kontakt"></span>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="cot">
        <div class="front side">
          <div class="content">
            <h1>Kontaktirajte nas</h1>

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
            <!-- <span class="kontakt"></span> -->
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

    <!-- <div class="row">
      <div class="col-sm-4">
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
      <div class="col-sm-8">
        <div class="cot">
          <div class="front side">
            <div class="content">
              <h1>Ali pa nas pokličete</h1>

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

                    <div class="col">
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
              <span class="kontakt"></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <Footer />
  </div>
  <!-- <div id="contact-us">
    <section class="container mx-auto mt-6">
      <div class="md:grid md:grid-cols-3 md:gap-4">
        <div class="col-span-1">
          <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
          >
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">
                <iframe
                  class="cot"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.192231970362!2d14.143070915658598!3d46.10707639833658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac32fccda7ea9%3A0xd715e5148a37a3fd!2sPot%20na%20Pretov%C4%8D%205%2C%204224%20Gorenja%20vas!5e0!3m2!1sen!2ssi!4v1642161702760!5m2!1sen!2ssi"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe
              ></span>
            </div>
            <div class="p-6">
              <div
                class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
              >
                <h5>Drop your files here</h5>
              </div>
              <hr class="my-6" />
              <div class="mb-4">
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 75%"
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 35%"
                  ></div>
                </div>
              </div>
              <div class="mb-4">
                <div class="font-bold text-sm">Just another song.mp3</div>
                <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                  <div
                    class="transition-all progress-bar bg-blue-400"
                    style="width: 55%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3">
          <div class="bg-white rounded border">
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">
                <iframe
                  class="cot"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.192231970362!2d14.143070915658598!3d46.10707639833658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ac32fccda7ea9%3A0xd715e5148a37a3fd!2sPot%20na%20Pretov%C4%8D%205%2C%204224%20Gorenja%20vas!5e0!3m2!1sen!2ssi!4v1642161702760!5m2!1sen!2ssi"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe
              ></span>
            </div>
            <div class="p-6">
              
              <div
                class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
              >
                <h5>Drop your files here</h5>
              </div>
              <hr class="my-6" />
              
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
          >
            <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
              <span class="card-title">My Songs</span>
              <i
                class="fa fa-compact-disc float-right text-green-400 text-2xl"
              ></i>
            </div>
            <div class="p-6">
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                </div>
                <div>
                  <form>
                    <div class="mb-3">
                      <label class="inline-block mb-2">Song Title</label>
                      <input
                        type="text"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Song Title"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="inline-block mb-2">Genre</label>
                      <input
                        type="text"
                        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                        placeholder="Enter Genre"
                      />
                    </div>
                    <button
                      type="submit"
                      class="py-1.5 px-3 rounded text-white bg-green-600"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="py-1.5 px-3 rounded text-white bg-gray-600"
                    >
                      Go Back
                    </button>
                  </form>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                </div>
              </div>
              <div class="border border-gray-200 p-3 mb-4 rounded">
                <div>
                  <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <button
                    class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                  >
                    <i class="fa fa-pencil-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> -->
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
/* .col-span-1 {
  display: flex;
  position: relative;
}

.col-span-2 {
}
#contact-us {
  margin-top: 7rem;
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
a {
  transition: all 0.15s ease;
}

a:hover {
  color: #f59e0b;
  text-decoration: none;
}

.text-orange {
  color: #f59e0b !important;
  fill: #f59e0b !important;
}

.player-scrub,
.player-song-info {
  width: calc(100% - 250px);
}

.top-neg-8 {
  top: -8px;
}

.player-song-info {
  margin-top: -24px;
}

.card-header .fa.text-orange,
.card .card-header .fas.text-orange {
  color: #ff5e3a;
  fill: #ff5e3a;
}

.introduction-bg {
  animation: slide 50s linear infinite;
  will-change: background-position;
  z-index: -1;
}

#playlist li:first-child {
  padding-top: 25px;
}

.upload-dropbox.upload-dropbox-drag {
  color: #fff;
  background-color: #20d862;
  border-color: #20d862;
  border-style: solid;
}

input[type="file"] {
  margin-top: 20px;
}

.progress-bar {
  background-size: 1rem 1rem;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  animation: progress-bar-stripes 1s linear infinite;
}

.music-bg {
  animation: slide 50s linear infinite;
  will-change: background-position;
  background-image: url(/assets/theme/img/song-header.png);
}

@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -4000px 0;
  }
} */

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
  color: #ff1100;
  margin: 40px 0 20px 0;
  text-align: center;
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
/* .title {
  font-size: 2.8rem;
  color: rgb(209, 14, 14);
  margin: 40px 0 20px 0;
  text-align: center;
} */

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
/* .container:hover {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
} */

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

@media (max-width: 575px) {
  .nas {
    display: none;
  }
}
</style>
