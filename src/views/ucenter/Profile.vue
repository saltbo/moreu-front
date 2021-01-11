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
      this.$moreu.users.userGet().then((ret) => {
        this.profile = ret;
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