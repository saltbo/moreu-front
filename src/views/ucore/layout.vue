<template>
  <section style="height: 100%">
    <!-- <Topbar /> -->
    <el-container style="height: 100%">
      <el-aside width="200px" style="height: 100%; background-color: #f4f4f5">
        <el-menu :default-active="$route.name" class="left-menu" router>
          <el-menu-item index="profile">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="account" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">账号管理</span>
          </el-menu-item>
          <el-menu-item index="security">
            <i class="el-icon-setting"></i>
            <span slot="title">账号安全</span>
          </el-menu-item>
          <el-menu-item index="emails" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">邮箱管理</span>
          </el-menu-item>
          <el-menu-item index="notifications" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">通知管理</span>
          </el-menu-item>
          <el-menu-item index="developers" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">应用管理</span>
          </el-menu-item>
          <el-menu-item index="about">
            <i class="el-icon-setting"></i>
            <span slot="title">关于</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
.left-menu {
  height: 100%;
}
</style>