<template>
  <div id="app">
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column property="date" label="Дата" width="120">
      </el-table-column>
      <el-table-column property="name" label="ФИО">
      </el-table-column>
      <el-table-column property="address" label="Адрес">
      </el-table-column>
      <el-table-column property="orderNumber" label="№ заказа" width="120">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button type="success" round @click="openDialog">Добавить</el-button>
      <el-button type="danger" round @click="deleteItem">Удалить</el-button>
    </div>
    <Card :isVisible="isVisible" @addElement="addElement" />
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: "app",
  components: {
    Card
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        orderNumber: '345213'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        orderNumber: '345213'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        orderNumber: '345213'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        orderNumber: '345213'
      }],
      currentRow: null,
      isVisible: false
    }
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    openDialog() {
      this.isVisible = !this.isVisible;
    },
    addElement(val) {
      /* var date = val.date.toLocaleDateString("ru");
      console.log(date);
      val.date = date; */
      //val.date = val.date.toLocaleDateString("ru");
      /* let obj = {
        date:val.date.toLocaleDateString("ru"),
        name:val.name,
        address:val.address,
        orderNumber:val.orderNumber
      } */
      this.tableData.push({
        date: val.date.toLocaleDateString("ru"),
        name: val.name,
        address: val.address,
        orderNumber: val.orderNumber
      });
      this.isVisible = false;
    },
    deleteItem() {
      this.tableData.splice(this.tableData.indexOf(this.currentRow), 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
