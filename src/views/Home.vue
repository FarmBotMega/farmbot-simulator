<template>
  <v-app id="sandbox">
    <v-app-bar color="primary" dark :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>FarmBot-Simulator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="logout" text>
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :mini-variant.sync="mini"
      fixed
      app
      temporary
      clipped
      :style="`margin-top: ${$vuetify.application.top}px`"
      :height="`calc(100vh - ${$vuetify.application.top}px)`"
    >
      <v-list dense>
        <v-list-item class="mt-4" v-on:click="tab='home';primaryDrawer.model=false">
          <v-list-item-action>
            <v-icon color="darken-1">mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item class="mt-4" v-on:click="tab='settings';primaryDrawer.model=false">
          <v-list-item-action >
            <v-icon color="darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list-item link v-on:click="tab='license';primaryDrawer.model=false">
          <v-list-item-action>
            <v-icon color="grey darken-1">fas fa-id-card</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">License</v-list-item-title>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">HELP</v-subheader>
        <v-list-item link href="https://docs.farmbot-simulator.com" target="_blank">
          <v-list-item-action>
            <v-icon>fas fa-file</v-icon>
          </v-list-item-action>
          <v-list-item-title>Documentation</v-list-item-title>
        </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1">EXTERNAL LINKS</v-subheader>
        <v-list-item link href="https://www.farmbotmega.com" target="_blank">
          <v-list-item-action>
            <v-icon>fas fa-external-link-alt</v-icon>
          </v-list-item-action>
          <v-list-item-title>FarmbotMega</v-list-item-title>
        </v-list-item>
        <v-list-item link href="https://www.farmbot.io" target="_blank">
          <v-list-item-action>
            <v-list-item-avatar>
              <img
                :src="`https://cdn.shopify.com/s/files/1/2040/0289/files/FarmBot.io_Trimmed_Logo_Gray_on_Transparent_1_1ec606e9-8aed-4af9-ad98-3b14a2fc0602_218x100.png?v=1588622523`"
                alt
              />
            </v-list-item-avatar>
          </v-list-item-action>
          <v-list-item-title>Farmbot</v-list-item-title>
        </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1">PROFILE</v-subheader>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon color="grey darken-1">fas fa-sign-out-alt</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Home v-if="tab==='home'" />
      <Settings v-if="tab==='settings'" />
      <License v-if="tab==='license'" />
    </v-main>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Settings from "@/components/Settings.vue";
import Home from "@/components/Home.vue";
import License from "@/components/License.vue";
import stateController from "@/services/stateController";
import to from "await-to-js";
export default {
  components: {
    Settings,
    Home,
    License
  },
  data: () => ({
    /* tab select*/
    tab: "home",
    items: [
      { icon: "mdi-trending-up", text: "Most Popular" },
      { icon: "mdi-youtube-subscription", text: "Subscriptions" },
      { icon: "mdi-history", text: "History" },
      { icon: "mdi-playlist-play", text: "Playlists" },
      { icon: "mdi-clock", text: "Watch Later" }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ],
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
    }
  }),
  methods: {
    logout: function() {
      stateController().logout();
      this.$router.push({ path: "/" });
    }
  },
  async created() {
    let [err, care] = await to(
      stateController().checkTokenAndRefresh(this.$store)
    );
    if (err) {
      this.$router.push({ path: "/" });
    }else{
      // stateController().connectMQTT();
      // make the mqtt connection,,, and monitor the connection with events... on message and push messages,,,
    }
  }
};
</script>