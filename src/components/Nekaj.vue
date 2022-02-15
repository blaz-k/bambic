<template>
  <div class="row g-0">
    <div class="col-sm-6">
      <section class="cards-wrapper">
        <div class="card-grid-space">
          <div class="num">01</div>
          <a
            class="card"
            href="https://codetheweb.blog/2017/10/06/html-syntax/"
            style="
              --bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg);
            "
          >
            <div>
              <h1>HTML Syntax</h1>
              <p>besedio</p>
              <div class="date">6 Oct 2017</div>
              <div class="tags">
                <div class="tag">HTML</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mnenje"],
};
</script>

<style scoped>
.row {
  border: none;
}

.main-change {
  background-color: black;
}

.myMenu {
  background-color: #4e4e4e;
}

.nav-link {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
}
#showVideo {
  margin: 0.2rem;
}

#showVideo .card-body {
  background-color: black;
}
#showVideo .cardName {
  display: flex;
  justify-content: space-between;
  color: #aaaaaa;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

#showVideo .card-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
}

.my-card {
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(247, 3, 3, 0.13);
  transition: 0.2s;
  cursor: context-menu;
}

.my-card:hover {
  transform: translateY(-0.5%);
  box-shadow: 0 4rem 8rem rgba(8, 238, 27, 0.877);
}

/* dcdc */
@import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700");

:root {
  --color: #3c3163;
  --transition-time: 0.5s;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 50vh;
  font-family: "Open Sans";
  background: #fafafa;
}

a {
  color: inherit;
}

.cards-wrapper {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
  width: max-content;
}

.card {
  font-family: "Heebo";
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  /*margin: 2em;*/
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 5em -1em black;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;
}

.card:hover {
  transform: rotate(0);
}

.card h1 {
  margin: 0;
  font-size: 1.5em;
  line-height: 1.2em;
}

.card p {
  font-size: 0.75em;
  font-family: "Open Sans";
  margin-top: 0.5em;
  line-height: 2em;
}

.card .tags {
  display: flex;
}

.card .tags .tag {
  font-size: 0.75em;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  transition: all, var(--transition-time);
}

.card:hover .tags .tag {
  background: var(--color);
  color: white;
}

.card .date {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75em;
  padding: 1em;
  line-height: 1em;
  opacity: 0.8;
}

.card:before,
.card:after {
  content: "";
  transform: scale(0);
  transform-origin: top left;
  border-radius: 50%;
  position: absolute;
  left: -50%;
  top: -50%;
  z-index: -5;
  transition: all, var(--transition-time);
  transition-timing-function: ease-in-out;
}

.card:before {
  background: #ddd;
  width: 250%;
  height: 250%;
}

.card:after {
  background: white;
  width: 200%;
  height: 200%;
}

.card:hover {
  color: var(--color);
}

.card:hover:before,
.card:hover:after {
  transform: scale(1);
}

.card-grid-space .num {
  font-size: 3em;
  margin-bottom: 1.2rem;
  margin-left: 1rem;
}

.info {
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;
}

.info img {
  height: 3em;
  margin-right: 0.5em;
  margin-left: auto;
}

.info h1 {
  font-size: 1em;
  font-weight: normal;
}
</style>
