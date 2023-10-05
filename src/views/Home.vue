<template>
  <NavBar />
  <LandingPage />
  <FeatureSection />
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
import FeatureSection from "../components/FeatureSection.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    LandingPage,
    FeatureSection,
  },
};
</script>
