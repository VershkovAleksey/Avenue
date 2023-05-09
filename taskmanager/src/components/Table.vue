<template>
  <div>
    <el-table ref="singleTable" :data="tableData" highlight-current-row @row-click="handleCurrentChange"
      style="width: 100%">
      <el-table-column class="column" type="index" width="50">
      </el-table-column>
      <el-table-column property="date" label="Дата" width="120">
      </el-table-column>
      <el-table-column property="name" label="ФИО" width="120">
      </el-table-column>
      <el-table-column property="address" label="Адресс">
      </el-table-column>
      <el-table-column property="orderNumber" label="№ заказа">
      </el-table-column>
    </el-table>
    <el-switch v-model="value1" active-text="Pay by month" inactive-text="Pay by year">
    </el-switch>
    <el-switch style="display: block" v-model="value2" active-color="#13ce66" inactive-color="#ff4949"
      active-text="Pay by month" inactive-text="Pay by year">
    </el-switch>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data() {
    return {
      currentRow: null,
      value1: true,
      value2: true
    }
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.$emit('rowselected', val);
    }
  }
}
</script>

<style scoped>
.el-table__cell{
  background-color: red;
}
</style>