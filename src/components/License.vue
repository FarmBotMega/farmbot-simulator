<template>
   <v-container fluid>
        License
      </v-container>
</template>

<script>
import stateController from "@/services/stateController";
import to from "await-to-js"
const FARMBOTURL = "https://my.farmbot.io/api/tokens"; // save this somewhere else...
export default {
  name: "License",

  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
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
