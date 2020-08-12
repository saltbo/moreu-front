<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mutations } from "@/store";
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: '12px/1.5 "Microsoft YaHei", arial, SimSun, 宋体;';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f9f9f9;
  height: 100%;
}

.el-header {
  color: #fff;
  line-height: 60px;
  background-color: #3f51b5;
}
.el-header .logo {
  width: 150px;
  display: inline-block;
  font-size: 35px;
  padding: 0 15px;
  vertical-align: middle;
}
.el-header .search {
  width: 300px;
}

.guest .el-card__header {
  text-align: center;
  border-bottom: none !important;
}
.guest .el-card__header .title {
  font-size: 20px;
  margin-top: 10px;
}
.guest .el-card__header .icon {
  font-size: 30px;
  color: #f50057;
}
</style>