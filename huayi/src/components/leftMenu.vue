<template>
   

  <el-aside width="200px">
<div id="title">
<h1>莲花超市管理系统</h1>

<p><span>您好，</span>admin</p>
<p><router-link to="/">管理系统</router-link>|<a href="">退出系统</a> </p>
</div>
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
     
      text-color="#fff"
      active-text-color="#fff"
      :unique-opened="true"
      
      >

      <el-submenu index="1" >
        <template slot="title">
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userlist"><router-link to="/userlist"> 分类管理</router-link></el-menu-item>
          <el-menu-item index="/useradd"><router-link to="/useradd">添加分类</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">商品管理</el-menu-item>
          <el-menu-item index="2-2">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
          <span>进货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">库存管理</el-menu-item>
          <el-menu-item index="3-2">添加库存</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">销售列表</el-menu-item>
          <el-menu-item index="4-2">商品出库</el-menu-item>
          <el-menu-item index="4-3">商品退货</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">统计管理</el-menu-item>
          <el-menu-item index="5-2">销售统计</el-menu-item>
          <el-menu-item index="5-3">进货统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/accountManagement"><router-link to="/accountManagement"> 账号管理</router-link></el-menu-item>
          <el-menu-item index="/acountAdd"><router-link to="/acountAdd"> 添加账号</router-link></el-menu-item>
          <el-menu-item index="/changePassword"><router-link to="/changePassword"> 密码修改</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">账号管理</el-menu-item>
          <el-menu-item index="7-2">添加账号</el-menu-item>
      </el-menu-item-group>
      </el-submenu>

       <el-submenu index="8">
        <template slot="title">
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">系统信息</el-menu-item>
          <el-menu-item index="8-2">系统配置</el-menu-item>
          <el-menu-item index="8-3">权限管理</el-menu-item>
          <el-menu-item index="8-4">添加管理组</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     
    </el-menu>
  </el-aside>

   
</template>
<script>
export default {
   methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
    
}
</script>

<style>

</style>


