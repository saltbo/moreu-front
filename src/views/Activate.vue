<template></template>

<script>
import moreu from "@/libs/moreu.js";
export default {
  mounted() {
    let token64 = this.$route.params.token64;
    let [email, token] = atob(token64).split("|moreu|");
    moreu.activate(email, token).then((ret) => {
      this.$message({
        type: "success",
        message: "激活成功，请输入密码登录。",
      });
      this.$router.push({ name: "signin" });
    });
  },
};
</script>

<style>
</style>