<template>
<!-- 盒子 -->
<div id="app">
<div id="loginbox">
    <el-card class="box-card" id="login">
  <div slot="header" class="clearfix">
    <span>用户登录</span>
  
  </div>
  <div class="text item">
      <!-- 表单 -->
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
       
       <el-form-item label="用户名" prop="username">
         <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
       </el-form-item>

        <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
  
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>

</el-form>
  </div>
</el-card>
</div>
</div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm2: {
        checkPass: "",
        username: ""
      },
      rules2: {
        checkPass: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        username: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    //这里是提交方法
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("验证成功");
          //跳转到根目录
          this.$router.push("/");
        } else {
          console.log("验证失败");
          return false;
        }
      });
    },

    //重置方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style>
/* 设置背景图片 */
#loginbox {
  background: url("../assets/images/11.jpg");
  background-size: cover;
}
#login {
  width: 500px;
  height: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>


