<template>
  <div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column type="index" width="50" label="№">
      </el-table-column>
      <el-table-column property="date" label="Дата" width="120">
      </el-table-column>
      <el-table-column property="name" label="ФИО" width="120">
      </el-table-column>
      <el-table-column property="address" label="Адрес">
      </el-table-column>
      <el-table-column property="orderNumber" label="№ заказа">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button type="primary" v-on:click="addingRowRequested">Добавить</el-button>
      <el-button type="danger">Удалить</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props:["tableData"],
  data() {
    return {
      currentRow: null
    }
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    addingRowRequested(){
      this.$emit('addingRequested');
    }
  }
}
</script>