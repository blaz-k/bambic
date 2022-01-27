<template>
  <div class="wrapper">
    <div class="box">
      <i class="fas fa-quote-left quote"></i>
      <p>
        {{ mnenje.besedilo }}
      </p>
      <div class="content">
        <div class="info">
          <div class="name mt-3">{{ mnenje.name }}</div>
          <!-- <div class="job">{{ Designer | Developer }}</div> -->
        </div>
        <!-- <div class="image">
            <img src="images/profile-1.jpeg" alt="" />
          </div> -->
      </div>
    </div>
    <!-- <div class="box">
        <i class="fas fa-quote-left quote"></i>
        <p>
          Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
          elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
          repellendus repudiandae deleniti ideas fuga molestiae, alias.
        </p>
        <div class="content">
          <div class="info">
            <div class="name">Steven Chris</div>
            <div class="job">YouTuber | Blogger</div>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
          <div class="image">
            <img src="images/profile-2.jpeg" alt="" />
          </div>
        </div>
      </div> -->
    <!-- <div class="box">
        <i class="fas fa-quote-left"></i>
        <p>
          Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing
          elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos
          repellendus repudiandae deleniti ideas fuga molestiae, alias.
        </p>
        <div class="content">
          <div class="info">
            <div class="name">Kristina Bellis</div>
            <div class="job">Freelancer | Advertiser</div>
          </div>
          <div class="image">
            <img src="images/profile-3.jpeg" alt="" />
          </div>
        </div>
      </div> -->
  </div>

  <!-- <div>
    <div id="content">
      <div class="testimonial">
        <blockquote>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta
          gravida at eget metus. Nulla vitae elit libero, a pharetra augue.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </blockquote>
        <div></div>
        <p>John Doe &mdash; Worcestershire, UK</p>
      </div>
    </div>
  </div> -->
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "Testimonials",
  props: ["mnenje"],
  computed: {
    // ...mapState["mnenja"],
  },
};
</script>

<!-- <style scoped>
body {
  color: #1a1a1a;
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  text-align: center;
  background: #757f9a;
  background: -webkit-linear-gradient(to left, #d7dde8, #757f9a);
  background: linear-gradient(to left, #d7dde8, #757f9a);
}

#content {
  max-width: 600px;
  margin: 25vh auto;
}

.testimonial blockquote {
  margin: 10px 10px 0;
  background: #efefef;
  padding: 20px 60px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-style: italic;
}

.testimonial blockquote:before,
.testimonial blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 80px;
  line-height: 1;
  color: #757f9a;
  font-style: normal;
}

.testimonial blockquote:before {
  top: 0;
  left: 10px;
}

.testimonial blockquote:after {
  content: "\201D";
  right: 10px;
  bottom: -0.5em;
}

.testimonial div {
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #efefef;
  margin: 0 0 0 60px;
}

.testimonial p {
  margin: 8px 0 0 20px;
  text-align: left;
  color: rgb(49, 45, 45);
}
</style> -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
html,
body {
  display: grid;
  height: 100%;
  place-items: center;
  background: #17a2b8;
}
::selection {
  background: rgba(23, 162, 184, 0.3);
}
.wrapper {
  /* margin-top: 7rem; */
  /* max-width: 1200px; */
  /* margin: auto;
  padding: 0 20px; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* align-items: center; */
  /* justify-content: space-between; */
  /* display: none; */
  /* position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 35vh;
  width: 100vw; */
}
.wrapper .box {
  background: #fff;
  width: calc(33% - 10px);
  padding: 25px;
  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);
  min-height: 35vh;
}
.wrapper .box i.quote {
  font-size: 20px;
  color: #17a2b8;
}
.wrapper .box .content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
.box .info .name {
  font-weight: 600;
  font-size: 17px;
}
.box .info .job {
  font-size: 16px;
  font-weight: 500;
  color: #17a2b8;
}
.box .info .stars {
  margin-top: 2px;
}
.box .info .stars i {
  color: #17a2b8;
}
.box .content .image {
  height: 75px;
  width: 75px;
  padding: 3px;
  background: #17a2b8;
  border-radius: 50%;
}
.content .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
}
.box:hover .content .image img {
  border-color: #fff;
}

@media (max-width: 1045px) {
  .wrapper .box {
    width: calc(50% - 10px);
    margin: 10px 0;
  }
}
@media (max-width: 702px) {
  .wrapper .box {
    width: 100%;
  }
}
</style>
