9<template>

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
    <span>修改账号密码</span>
   
  </div>
  <div class="text item">
    <!-- 表单 -->
<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
 <el-form-item label="旧密码" prop="name">
    <el-input v-model="ruleForm2.name"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
   
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      //表格数据
         ruleForm2: {
          pass: '',
         
       name:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' },
               { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' },
               { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name:[
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
       
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      
    
    }
  },
  components:{ //注册组件
    Leftmenu,
    RightTop,
    Footer
  }
};
</script>


