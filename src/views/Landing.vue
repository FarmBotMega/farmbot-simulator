<template>
  <v-app>
    <v-main>
      <LandingPage/>
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "Landing",
  components: {
    LandingPage
  }
};
</script>
