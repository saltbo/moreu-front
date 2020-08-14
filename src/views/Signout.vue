<template></template>

<script>
import moreu from "@/libs/moreu.js";
export default {
  mounted() {
    moreu.signout().then((ret) => {
      this.$message({
        type: "success",
        message: "登出成功，欢迎下次再来~",
      });
      this.$router.push({ name: "signin" });
    });
  },
};
</script>

<style>
</style>