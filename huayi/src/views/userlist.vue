<template>

<div id="app">
 <!-- -------------------------------------------左部导航栏-------------------------------- -->
 <el-container id="container">
<Leftmenu></Leftmenu>


<el-container id="mainContent">
 

<!-- ---------------------------------------------头部部分-------------------------------------- -->
    <RightTop></RightTop>
<!-- -----------------------------------------------main部分------------------------------------- -->
<!-- //这里是卡片 -->


<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>添加管理</span>
    <el-button style="float: right; padding: 3px 0" type="text"></el-button>
  </div>
  <div class="text item">
   <!-- 表格 -->
    <el-table
    :data="tableData"
    style="width: 100%"
    >
<!-- 分类表格 -->
    <el-table-column
      label="分类名称"
     >
      <template slot-scope="scope">
        <i class="el-icon-star-on"></i>

        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

   
<!-- //管理表格 -->
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
      </template>
    </el-table-column>
  </el-table>



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
       tableData: [{
           date: '你是啥',
         
        }, {
         date: '九九都将',
         
        }, {
         date: '小丸子',
        }, {
         date: '黑色豆腐',
        }]
    
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


</style>



