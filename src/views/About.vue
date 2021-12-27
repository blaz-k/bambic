<template>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="calendar3" viewBox="0 0 16 16">
      <path
        d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
      />
      <path
        d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </symbol>

    <symbol id="tools" viewBox="0 0 16 16">
      <path
        d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
      />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </symbol>
    <symbol id="geo-fill" viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
      />
    </symbol>
  </svg>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Custom cards</h2>

      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg back-img"
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold pb-4">
                Smetarniki
              </h2>
              <ul class="d-flex list-unstyled mt-4">
                <li class="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill" />
                  </svg>
                  <small>Earth</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3" />
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg back-img"
          >
            <div
              class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
            >
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Kovinski robniki
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill" />
                  </svg>
                  <small>Pakistan</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3" />
                  </svg>
                  <small>4d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg back-img"
          >
            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Kovinske ograje
              </h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  />
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill" />
                  </svg>
                  <small>California</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3" />
                  </svg>
                  <small>5d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div>
    <!-- ------------ Font awesome CDN link ------------------ -->
    <div class="image-area">
      <div class="img-wrapper">
        <img src="../assets/img/aboutme.jpeg" alt="Atul Prajapati" />
        <h2>Bambič Jani</h2>
        <ul>
          <li>
            <a href="# https://www.facebook.com/jani.bambic"
              ><i class="fab fa-github"></i
            ></a>
          </li>

          <li>
            <a href="https://www.facebook.com/jani.bambic" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>

          <li>
            <a href="https://www.instagram.com/atulkprajapati2000/"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/atuljustano"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCf-KfxuY8PZBSD_8RW2nYsw"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .back-img {
  background: url("../assets/img/unsplash-photo-3.jpg");
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #fff;
  border-radius: 0.75rem;
}

.icon-link {
  display: inline-flex;
  align-items: center;
}
.icon-link > .bi {
  margin-top: 0.125rem;
  margin-left: 0.125rem;
  transition: transform 0.25s ease-in-out;
  fill: currentColor;
}
.icon-link:hover > .bi {
  transform: translate(0.25rem);
}

.icon-square {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 0.75rem;
}

.rounded-4 {
  border-radius: 0.5rem;
}
.rounded-5 {
  border-radius: 1rem;
}

.text-shadow-1 {
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
}
.text-shadow-2 {
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}
.text-shadow-3 {
  text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
}

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
} */

* {
  background: #f1f2f6;
  margin: 0;
  padding: 0;
}

.image-area {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.img-wrapper {
  width: 300px;
  height: 400px;
  position: relative;
  overflow: hidden;
}

.img-wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  left: 180%;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 1;
  transform: skew(45deg);
  transition: 0.5s;
}

.img-wrapper:hover:before {
  left: -180%;
}

.img-wrapper img {
  height: 400px;
  width: 300px;
  filter: grayscale(100%);
  transition: 2s;
}
.img-wrapper:hover img {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.img-wrapper h2 {
  background: tomato;
  font-family: Poppins;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: perspective(400px) rotateY(90deg);
  transform-origin: right;
  transition: 1s;
}

.img-wrapper:hover h2 {
  transform: perspective(400px) rotateY(0deg);
}

.img-wrapper ul {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  background: rgba(255, 255, 255, 0);
}

.img-wrapper ul li {
  background: #333;
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 40px;
  transform: perspective(800px) rotateY(90deg);
  transition: 0.5s;
  transform-origin: left;
}

.img-wrapper:hover ul li {
  transform: perspective(800px) rotateY(0deg);
}

.img-wrapper:hover ul li:nth-child(1) {
  transition-delay: 0.2s;
}

.img-wrapper:hover ul li:nth-child(2) {
  transition-delay: 0.6s;
}

.img-wrapper:hover ul li:nth-child(3) {
  transition-delay: 0.8s;
}

.img-wrapper:hover ul li:nth-child(4) {
  transition-delay: 1s;
}

.img-wrapper ul li a {
  color: tomato;
  background: rgba(255, 255, 255, 0);
}

.img-wrapper ul li i {
  color: tomato;
  background: rgba(255, 255, 255, 0);
}

.img-wrapper ul li i:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0);
}
</style>
