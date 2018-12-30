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
            <el-table :data="tableData" style="width: 100%">

                   <!-- 用户序号 -->
              <el-table-column label="序号">
                <template slot-scope="scope">
                  <i class="el-icon-star-on"></i>
                  <span style="margin-left: 10px">{{ scope.row.userid }}</span>
                </template>
              </el-table-column>


              <!-- 分类表格 -->
              <el-table-column label="添加日期">
                <template slot-scope="scope">
                
                  <span>{{ scope.row.addDate|foramtData}}</span>
                </template>
              </el-table-column>
                         <!-- 用户名 -->
                  <el-table-column label="会员名">
                <template slot-scope="scope">
               
                  <span>{{ scope.row.username }}</span>
                </template>
              </el-table-column>

              <!-- //管理表格 -->
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    <i class="el-icon-edit"></i>编辑</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                    <i class="el-icon-delete"></i>删除</el-button>
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
import Leftmenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import Footer from "../components/footer";
import moment from 'moment';

export default {
  data() {
    return {
      //表格数据
      tableData: []
    };
  },
  components: {
    //注册组件
    Leftmenu,
    RightTop,
    Footer
  },
  filters:{
foramtData(oldDate){
  return moment(oldDate).format('YYYY-MM-DD');
}
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
    }
  },
  created() {
    //创建之前的钩子
    //使用axios发送一个userlist请求
    this.axios
      .get("http://localhost:3000/userlist")
      .then(Response => {
        console.log(Response.data);
       this.tableData = Response.data; //把得到的数据赋值给tabledata里面的数据
      })
      .catch(err => {
        console.log(err.message);
      });
  }
};
</script>
<style>
</style>



