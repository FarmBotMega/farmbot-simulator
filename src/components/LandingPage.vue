<template>
  <div id="app">
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/fullpage.js/dist/fullpage.min.css"
    />

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Farmbot</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">FarmbotMega</span>
        <v-icon>fas fa-external-link-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <!-- <h3> -->
        <v-container fluid>
          <!-- <row :gutter="12" :columns="12" style="background:green;">
            <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
            <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
            <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
            <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
            <column :xs="10" :md="5" :lg="2">xs=10 md=5 lg=2</column>
            <column :xs="10" :lg="3">xs=10 lg=3</column>
            <column :xs="10" :lg="3">xs=10 lg=3</column>
            <column :xs="10" :lg="3">xs=10 lg=3</column>
          </row>
          <row fluid :gutter="12" style="background:green;">
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
          </row>
          <div style="background:green;">
            This is atest div
            <row class="noContainer" :gutter="12" :columns="12" style="background:yellow;">
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
            <column :xs="12" :md="4" :lg="3">xs=12 md=4 lg=3</column>
          </row>
          </div>-->
          <row container :gutter="12" style="background:yellow;width:100%;">
            <column :xs="12" :md="7" :lg="9">
              <h3>FarmBot Simulator</h3>

              <h1>Learn how to use farmbot without a physical farmbot.</h1>
              <v-spacer></v-spacer>

              <row container :gutter="12" style>
                <column :xs="12" :md="6" :lg="6">
                  <v-btn class="primary" @click="$refs.fullpage.api.moveSectionDown()">
                    Explore
                    <v-icon>fa-arrow-down</v-icon>
                  </v-btn>
                </column>
                <column :xs="12" :md="6" :lg="6">
                  <v-btn class="primary">
                    Documentation
                    <v-icon>fa-arrow-right</v-icon>
                  </v-btn>
                </column>
              </row>
            </column>
            <column :xs="12" :md="5" :lg="3">
              <v-card>
                <form>
                  <h1>Login</h1>
                  <div class="error" v-bind:class="good" v-show="alert.message">{{ alert.message }}</div>
                  <input type="text" v-model="login.login" placeholder="Username" />
                  <input type="password" v-model="login.password" placeholder="Password" />
                  <v-btn class="primary" v-on:click="onSubmit">Log in</v-btn>
                </form>
              </v-card>
            </column>
          </row>

          <!-- <v-row class="mb-6" justify="center" no-gutters>
            <v-col lg="2">
              <v-card class="pa-2" outlined tile>1 of 3</v-card>
            </v-col>
            <v-col md="auto">
              <v-card class="pa-2" outlined tile>Variable width content</v-card>
            </v-col>
            <v-col lg="2" xs="12">
              <v-card class="pa-2" outlined tile>3 of 3</v-card>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-card class="pa-2" outlined tile>1 of 3</v-card>
            </v-col>
            <v-col md="auto">
              <v-card class="pa-2" outlined tile>Variable width content</v-card>
            </v-col>
            <v-col lg="2">
              <v-card class="pa-2" outlined tile>3 of 3</v-card>
            </v-col>
          </v-row>

          <v-row class="mb-6" no-gutters>
            <v-col v-for="n in 4" :key="n">
              <v-card class="pa-2" tile outlined>col</v-card>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col v-for="n in 2" :key="n" :cols="n === 1 ? 8 : 4">
              <v-card class="pa-2" tile outlined>col-{{ n === 1 ? 8 : 4 }}</v-card>
            </v-col>
          </v-row>

          <v-row justify="center" class="ma-0 pa-0">
            <v-col id="vote-col" cols="auto" class="blue py-0 d-flex flex-column align-center">
              <v-icon size="24">mdi-thumb-up</v-icon>
              <span>0</span>
            </v-col>
            <v-col id="question-col" class="pa-0">
              <v-row class="ma-0 replyFont">...</v-row>
            </v-col>
          </v-row>

          <v-row class="fill-height flex-column flex-nowrap">
            <v-col cols="12">1</v-col>
            <v-col cols="12">2</v-col>
            <v-col cols="12">3</v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-row justify="center">
                <v-col cols="9" md="2">Some Text</v-col>

                <v-col cols="3" md="2">
                  <v-card class="ma-3 pa-6" outlined tile>Column</v-card>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-row justify="center">
                <v-card v-for="n in 3" :key="n" class="ma-3 pa-6" outlined tile>Column</v-card>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-row justify="center">
                <v-col cols="6" md="2">
                  <v-select v-model="alignment" :items="alignmentsAvailable" label="Align"></v-select>
                </v-col>

                <v-col cols="6" md="2">
                  <v-select v-model="justify" :items="justifyAvailable" label="Justify"></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>-->
        </v-container>
        <!-- <v-btn>Explore</v-btn>
        <v-btn>Log in</v-btn>
        <v-btn>Register</v-btn>
        <ul class="actions">
          <li @click="$refs.fullpage.api.moveSectionDown()" class="actions-button">Down</li>
          <li @click="$refs.fullpage.api.moveSectionUp()" class="actions-button">Up</li>
        </ul>-->
        <!-- </h3> -->
      </div>
      <div class="section">
        Simulations
        <div class="slide">
          <h3>2D</h3>
        </div>
        <div class="slide">
          <h3>3D</h3>
        </div>
      </div>
      <div class="section">
        Simulated Hardware
        <div class="slide">
          <h3>farmbotMega</h3>
        </div>
        <div class="slide">
          <h3>farmbotMega XL</h3>
        </div>
        <div class="slide">
          <h3>farmbot Genesis</h3>
        </div>
        <div class="slide">
          <h3>farmbot Genesis XL</h3>
        </div>
        <div class="slide">
          <h3>farmbot Express</h3>
        </div>
        <div class="slide">
          <h3>farmbot Express XL</h3>
        </div>
      </div>

      <div class="section">
        Downloads
        <div class="slide">
          <h3>farmbotMega</h3>
        </div>
        <div class="slide">
          <h3>farmbotMega XL</h3>
        </div>
        <div class="slide">
          <h3>farmbot Genesis</h3>
        </div>
        <div class="slide">
          <h3>farmbot Genesis XL</h3>
        </div>
        <div class="slide">
          <h3>farmbot Express</h3>
        </div>
        <div class="slide">
          <h3>farmbot Express XL</h3>
        </div>
      </div>

      <div class="section">
        <h3>Footer</h3>
      </div>
    </full-page>

    <!-- <a class="view-github" href="https://github.com/alvarotrigo/vue-fullpage.js" target="_blank">View on Github</a> -->

    <!-- <ul class="actions">
      <li @click="$refs.fullpage.api.moveSectionDown()" class="actions-button">Down</li>
      <li @click="$refs.fullpage.api.moveSectionUp()" class="actions-button">Up</li>
      <li @click="$refs.fullpage.api.moveTo(2,2)" class="actions-button">MoveTo</li>
      <li @click="$refs.fullpage.api.silentMoveTo(2,2)" class="actions-button">Silent Move</li>
      <li @click="$refs.fullpage.api.moveSlideRight()" class="actions-button">Move right</li>
      <li @click="$refs.fullpage.api.moveSlideLeft()" class="actions-button">Move lef</li>
      <li @click="$refs.fullpage.api.setAutoScrolling(false)" class="actions-button">Set autoScroll</li>
      <li @click="$refs.fullpage.api.setFitToSection(false)" class="actions-button">Set fitTo</li>
      <li
        @click="$refs.fullpage.api.setAllowScrolling(false)"
        class="actions-button"
      >Set allowScroll</li>
      <li
        @click="$refs.fullpage.api.setKeyboardScrolling(false)"
        class="actions-button"
      >Set keyboardScroll</li>
      <li
        @click="$refs.fullpage.api.setScrollingSpeed(4000)"
        class="actions-button"
      >setScrollingSpeed</li>
      <li @click="$refs.fullpage.api.destroy('all')" class="actions-button">Destroy</li>
      <li @click="addSection()" class="actions-button">Add section</li>
      <li @click="removeSection()" class="actions-button">Remove section</li>
    </ul>-->
  </div>
</template>

<script>
import stateController from "@/services/stateController";
import to from "await-to-js"
const FARMBOTURL = "https://my.farmbot.io/api/tokens"; // save this somewhere else...
export default {
  name: "LandingPage",

  data: () => ({
    options: {
      // afterLoad: this.afterLoad,
      licenseKey: null,
      navigation: true,
      anchors: ["page1", "page2", "page3"],
      // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      sectionsColor: ["#54424B", "#BBA5B0", "#00A68F", "#006F5D", "#EE44AA"]
      // sectionsColor: [
      //   "#ff5f45",
      //   "#0798ec",
      //   "#fec401",
      //   "#1bcee6",
      //   "#ee1a59",
      //   "#2c3e4f",
      //   "#ba5be9",
      //   "#b4b8ab"
      // ]
    },
    alert: {
      message: ""
    },
    login: {
      login: "",
      password: ""
    },
    shake: false,
    good: "",
    fake: {
      login: "",
      password: ""
    }
  }),
  async created() {
    let [err, care] = await to(
      stateController().checkTokenAndRefresh(this.$store)
    );
    if (care) {
      this.$router.push({ path: "/home" });
    }
  },
  methods: {
    onSubmit: async function(event) {
      event.preventDefault();
      this.shake = false;
      let url = FARMBOTURL;
      let [err, care] = [];
      let params = {
        user: {
          email: this.login.login,
          password: this.login.password
        }
      };

      [err, care] = await to(stateController().logIn(params));
      // // console.log(err)
      if (err) {
        let error = "Unknown error. Please try again.";
        try {
          error = err.data.auth;
          this.alert.message = error;
        } catch (error) {}
        throw err;
      }
      stateController().loggedIn(care, this.$store);
      [err, care] = await to(
        stateController().checkTokenAndRefresh(this.$store)
      );
      if (care) {
        this.$router.push({ path: "/home" });
      }
    },
    afterLoad: function(origin, destination, direction) {
      console.log("After load....");
      console.log(destination);
    },
    addSection: function(e) {
      var newSectionNumber =
        document.querySelectorAll(".fp-section").length + 1;

      // creating the section div
      var section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `<h3>Section ${newSectionNumber}</h3>`;

      // adding section
      document.querySelector("#fullpage").appendChild(section);

      // creating the section menu element
      var sectionMenuItem = document.createElement("li");
      sectionMenuItem.setAttribute(
        "data-menuanchor",
        "page" + newSectionNumber
      );
      sectionMenuItem.innerHTML = `<a href="#page${newSectionNumber}">Section${newSectionNumber}</a>`;

      // adding anchor for the section
      this.options.anchors.push(`page${newSectionNumber}`);

      // we have to call `update` manually as DOM changes won't fire updates
      // requires the use of the attribute ref="fullpage" on the
      // component element, in this case, <full-page>
      // ideally, use an ID element for that element too
      this.$refs.fullpage.build();
    },

    removeSection: function() {
      var sections = document
        .querySelector("#fullpage")
        .querySelectorAll(".fp-section");
      var lastSection = sections[sections.length - 1];

      // removing the last section
      lastSection.parentNode.removeChild(lastSection);

      // removing the last anchor
      this.options.anchors.pop();

      // removing the last item on the sections menu
      var sectionsMenuItems = document.querySelectorAll("#menu li");
      var lastItem = sectionsMenuItems[sectionsMenuItems.length - 1];
      lastItem.parentNode.removeChild(lastItem);
    }
  }
};
</script>

<style scoped>
/*
 * for fullpage.js
 */
@charset "ISO-8859-1";
/* Reset CSS
 * --------------------------------------- */
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
table {
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-weight: normal;
  font-style: normal;
}
strong {
  font-weight: bold;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
  margin: 0;
  padding: 0;
}
q:before,
q:after {
  content: "";
}
abbr,
acronym {
  border: 0;
}
* {
  -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
  -moz-box-sizing: border-box; /* <=28 */
  box-sizing: border-box;
}

/* Custom
 * --------------------------------------- */
body {
  font-family: arial, helvetica;
}
.section {
  position: relative;
  text-align: center;
}
#section-1 h2 {
  color: #fff;
  font-size: 10em;
  font-weight: 900;
}
#section-1 h1 {
  font-size: 2em;
  font-weight: 100;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  margin: 1.5em auto 1em auto;
  color: #35495e;
  padding-right: 30px;
  padding-left: 30px;
}
#section-1 li {
  display: inline-block;
  margin: 1.25em 0.3em;
}
.section-1-button {
  padding: 0.93em 1.87em;
  background: #35495e;
  border-radius: 5px;
  display: block;
  color: #fff;
}
h3 {
  font-size: 5em;
  text-align: center;
  color: #fff;
  font-weight: bold;
}
#logo {
  position: fixed;
  top: 20px;
  left: 20px;
  color: #fff;
  font-weight: bold;
  z-index: 99;
  font-size: 1.9em;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
}

/* Menu
 * --------------------------------------- */
#menu-line {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 159px;
  height: 2px;
  background: #fff;
}

#menu {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 70;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  letter-spacing: 1px;
  font-size: 1.1em;
}
#menu li {
  display: inline-block;
  margin: 10px 0px;
  position: relative;
}
#menu a {
  color: #fff;
  padding: 0 1.1em 1.1em 1.1em;
}
#menu li.active a:after {
  content: "";
  margin: 0 1.1em 0 1.1em;
  height: 2px;
  background: #fff;
  display: block;
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  display: block;
}

/* Actions buttons
 * --------------------------------------- */
.actions {
  position: fixed;
  bottom: 2%;
  margin: 0 auto;
  z-index: 99;
  left: 0;
  right: 0;
  text-align: center;
}
.actions li {
  display: inline-block;
  margin: 0.3em 0.3em;
}
.actions-button {
  padding: 0.73em 1.47em;
  background: rgba(53, 73, 94, 0.47);
  border-radius: 5px;
  display: block;
  color: #fff;
  cursor: pointer;
}

/* Twitter
 * --------------------------------------- */
.twitter-share i {
  vertical-align: middle;
  position: relative;
  top: 2px;
  display: inline-block;
  width: 38px;
  height: 14px;
  color: white;
  top: -4px;
  left: -2px;
  fill: #fff;
}
.twitter-share svg {
  height: 40px;
  margin-top: -10px;
}
.view-github {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  padding: 0.93em 1.87em;
  background: #35495e;
  border-radius: 5px;
  display: block;
  color: #fff;
}

/*
 * for https://vue-grid-responsive.netlify.app/
 */
.container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 1264px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 1904px) {
  .container {
    max-width: 100%;
  }
}
.container--fluid {
  max-width: 100%;
}

/*
 * Log in Form
 */
form {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
h2 {
  font-family: "Archivo Black", sans-serif;
  color: #e0dada;
  margin-left: auto;
  margin-right: auto;
}

.info {
  width: 100%;
  padding: 1em 5px;
  text-align: center;
  min-height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.info.error {
  border: 1px solid #a90e0;
  background-color: #ff3c41;
  color: #a90e0;
}
.info p {
  margin: auto;
  padding: 5px;
}
.info.good {
  border: 1px solid #416d50;
  background-color: #47cf73;
  color: #416d50;
}

input {
  height: 35px;
  padding: 5px 5px;
  margin: 10px 0px;
  background-color: #e0dada;
  border: none;
}
button {
  height: 40px;
  padding: 5px 5px;
  margin: 10px 0px;
  font-weight: bold;
  background-color: #be5256;
  border: none;
  color: #e0dada;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #711f1b;
}

@-webkit-keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate(10px, 0, 0);
  }
}

.shake {
  animation-name: shake;
  animation-duration: 1s;
  /*animation-fill-mode: both;*/
}

@media screen and (max-width: 780px) {
  section {
    width: 90%;
  }
}
</style>
