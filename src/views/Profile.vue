<template>
  <div>{{ profile }}</div>
</template>

<script>
import moreu from "@/libs/moreu.js";
export default {
  data() {
    return {
      username: "",
      profile: {},
    };
  },
  methods: {
    loadInfo(username) {
      moreu.find(username).then((profile) => {
        this.profile = profile;
      });
    },
  },
  mounted() {
    let params = this.$route.params;
    this.username = params.username;
    this.loadInfo(this.username);
  },
};
</script>

<style>
</style>