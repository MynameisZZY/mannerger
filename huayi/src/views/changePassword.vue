<template>

<div id="app">
 <!-- -------------------------------------------左部导航栏-------------------------------- -->


 <el-container id="container">

<Leftmenu></Leftmenu>
<el-container id="mainContent">
 

<!-- ---------------------------------------------头部部分-------------------------------------- -->
    <RightTop></RightTop>
<!-- -----------------------------------------------main部分------------------------------------- -->

  


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
    
    };
  },
  components:{ //注册组件
    Leftmenu,
    RightTop,
    Footer
  }
};
</script>


