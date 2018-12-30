<template>

  <div id="app">
    <!-- -------------------------------------------左部导航栏-------------------------------- -->

    <el-container id="container">

      <Leftmenu></Leftmenu>
      <el-container id="mainContent">

        <!-- ---------------------------------------------头部部分-------------------------------------- -->
        <RightTop></RightTop>
        <!-- -----------------------------------------------main部分------------------------------------- -->

        <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>系统信息</span>
              <el-button style="float: right; padding: 3px 0" type="text"></el-button>
            </div>
            <div class="text item">
              <template>

                <el-alert title="商品总数：5。已经销售的总金额：890.00。库存总价：1235" type="info" show-icon>
                </el-alert>
                <el-alert title="导入数据" type="success" show-icon>
                </el-alert>

                <!-- 表格部分 -->
                <div id="body">
                  <el-row :gutter="20">
                    <!-- 第一个表格 -->
                    <el-col :span="12">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>销售排行</span>
                          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                        </div>
                        <div class="text item">
                          <!-- 表格 -->
                          <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="goodsname" label="商品名称">
                            </el-table-column>
                            <el-table-column prop="num" label="销量">
                            </el-table-column>
                          </el-table>

                        </div>
                      </el-card>
                    </el-col>

                    <!-- 第二个表格 -->
                    <el-col :span="12">
                      <el-card class="box-card">
                        <div slot="header" class="clearfix">
                          <span>缺货的商品</span>
                          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
                        </div>
                        <div class="text item">
                          <!-- 表格 -->
                          <el-table :data="tableData2" style="width: 100%">
                            <el-table-column prop="goodsname" label="商品名称">
                            </el-table-column>
                            <el-table-column prop="num" label="库存">
                            </el-table-column>
                            <el-table-column prop="operate" label="操作">
                            </el-table-column>
                          </el-table>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </template>
</div>
</el-card> 
</el-main>


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
      tableData: [
        {
          goodsname: "辣条",
          num: "78"
        },
        {
          goodsname: "大辣条",
          num: "8"
        }
      ],
      tableData2: [
        {
          goodsname: "辣条",
          num: "69",
          operate: "上海市普陀区金沙江路 1518 弄"
        },
        {
          goodsname: "薯片",
          num: "13",
          operate: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  components: {
    //注册组件
    Leftmenu,
    RightTop,
    Footer
  }
};
</script>


