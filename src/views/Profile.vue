<template>
  <div>{{ profile }}</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      profile: {},
    };
  },
  methods: {
    loadInfo(username) {
      this.$moreu.profile().then((profile) => {
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