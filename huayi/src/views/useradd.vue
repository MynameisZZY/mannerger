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
    <span>添加管理</span>
    <el-button style="float: right; padding: 3px 0" type="text"></el-button>
  </div>
  <div class="text item">
  

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="顶级分类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="分类名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  
  

    <el-form-item label="状态" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="启用"></el-radio>
      <el-radio label="禁止"></el-radio>
    </el-radio-group>
  </el-form-item>

 <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
  
 
 
 

</el-form>
<!-- 输入框 -->

  
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
         
        },
        rules:{
           name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        }
    
    };
  },
  components:{ //注册组件
    Leftmenu,
    RightTop,
    Footer
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
    }
};
</script>


