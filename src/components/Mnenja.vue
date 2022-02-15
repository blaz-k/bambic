<template>
  <body>
    <div class="testimonials">
      <div class="inner">
        <div class="row">
          <div class="col">
            <div class="testimonial">
              <div class="name">{{ mnenja[0].name }}</div>

              <p>
                {{ mnenja[0].besedilo }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <div class="name">{{ mnenja[1].name }}</div>

              <p>
                {{ mnenja[1].besedilo }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <div class="name">{{ mnenja[2].name }}</div>

              <p>
                {{ mnenja[2].besedilo }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <div class="name">{{ mnenja[3].name }}</div>

              <p>
                {{ mnenja[3].besedilo }}
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <div class="name">{{ mnenja[4].name }}</div>

              <p>
                {{ mnenja[4].besedilo }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mnenja",

  computed: {
    ...mapState(["mnenja"]),
  },
};
</script>

<style scoped>
.testimonials {
  background: #f1f1f1;
  color: #434343;
  text-align: center;
  padding-top: 3rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.inner {
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  padding: 0 20px;
}

.border {
  width: 160px;
  height: 5px;
  background: #6ab04c;
  margin: 26px auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.col {
  flex: 45.33%;
  max-width: 45.33%;
  box-sizing: border-box;
  padding: 15px;
}
.testimonial {
  background: #fff;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}
.testimonial img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name {
  font-size: 20px;
  text-transform: uppercase;
  margin: 20px 0;
}
.stars {
  color: #6ab04c;
  margin-bottom: 20px;
}

@media screen and (max-width: 960px) {
  .col {
    flex: 100%;
    max-width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .col {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
