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

              <el-form-item label="密码" prop="pwd">
                <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="repwd">
                <el-input type="password" v-model="ruleForm.repwd" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="选择用户组" prop="usergroup">
                <el-select v-model="ruleForm.usergroup" placeholder="请选择用户级别">
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
    import Leftmenu from "../components/leftMenu";
    import RightTop from "../components/rightTop";
    import Footer from "../components/footer";
    export default {
      data() {
        var validatePass = (rule, value, callback) => {
          //验证两次的密码是否一致
          if (value === "") {
            callback(new Error("请输入密码"));
          } else {
            if (this.ruleForm.repwd !== "") {
              this.$refs.ruleForm.validateField("repwd");
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === "") {
            callback(new Error("请再次输入密码"));
          } else if (value !== this.ruleForm.pwd) {
            callback(new Error("两次输入密码不一致!"));
          } else {
            callback();
          }
        };

        return {
          //表格数据
          ruleForm: {
            name: "",
            usergroup: "",
            pwd: ""
          },
          rules: {
            //表单验证
            name: [
              { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
            ],
            pwd: [
              { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
            ],
            repwd: [
              { validator: validatePass2, trigger: "blur" },
              { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
            ],
            usergroup: [
              { required: true, message: "请选择活动区域", trigger: "change" }
            ]
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        };
      },
      components: {
        //注册组件
        Leftmenu,
        RightTop,
        Footer
      },
      resetForm(formName) {
        //重置表单的方法
        this.$refs[formName].resetFields();
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate(valid => {
            ///
            if (valid) {
              alert("提交成功");
              //这里使用axios发送一个post请求
              this.axios.post("http://127.0.0.1:3000/user/AcountAdd",this.qs.stringify(this.ruleForm) )
              .then((Response)=>{
                console.log(Response.data);//打印返回的对象
                if(Response.data.isOK){//这里是判断isok的值来进行跳转
                  this.$message({
                    message:Response.data.message,
                    type:'sucess'
                  });
                  setTimeout(()=>{
                    this.$router.push("/userlist");//跳到userlist 
                  },100);
                }
              })

              .catch((err)=>{
                 console.log(err);//打印返回的错误
              })


            } else {
              console.log("error submit!!");
              return false;
            }
          });
        }
      }
    };
    </script>

    <style>
    .el-card__body {
      overflow-y: scroll;
      height: 470px;
    }
    </style>




