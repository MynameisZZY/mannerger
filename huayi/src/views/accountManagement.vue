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
            <span>账号管理</span>

          </div>
          <div class="text item">
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="用户名称">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="用户组" >
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
export default {
  data() {
    return {
      //表格数据

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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

  components: {
    //注册组件
    Leftmenu,
    RightTop,
    Footer
  }
};
</script>
