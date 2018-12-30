<template>

<div id="app">
 <!-- -------------------------------------------左部导航栏-------------------------------- -->


 <el-container id="container">

<Leftmenu></Leftmenu>
<el-container id="mainContent">
 

<!-- ---------------------------------------------头部部分-------------------------------------- -->
    <RightTop></RightTop>
<!-- -----------------------------------------------main部分------------------------------------- -->
<!-- 卡片 -->
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>添加管理员账号</span>
    <el-button style="float: right; padding: 3px 0" type="text"></el-button>
  </div>
  <div class="text item">
   <!-- 表单元素 -->

<el-form :model="ruleForm" :rules="rules" label-position="top" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  
  <el-form-item label="密码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="确认密码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="选择用户组" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="普通会员" value="普通会员"></el-option>
      <el-option label="超级会员" value="超级会员"></el-option>
    </el-select>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>


  </div>
</el-card>
  


<!-------------------------------------------------------------------------------- footer ------------------- -->
 <Footer></Footer>
<!--  -----------------------------------------------------------分界------------------------------------------ -->
  </el-container>
</el-container>
</div>
</template>

<script>
//引入组件
import Leftmenu from '../components/leftMenu'
import RightTop from '../components/rightTop'
import Footer from '../components/footer'
export default {
  
  data() {
    return {
      //表格数据
      
       ruleForm: {
          name: '',
          region: '',
        
        },rules:{
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        }, resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
    };
  },
  components:{ //注册组件
    Leftmenu,
    RightTop,
    Footer
  }
};
</script>

<style>
.el-card__body{
  overflow-y:scroll;
  height: 470px;
}
</style>


