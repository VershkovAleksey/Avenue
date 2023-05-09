<template>
  <div id="app">
    <Table :tableData="tableData" v-on:addingRequested="addingRow"/>
    <Card :cardVisible="cardVisible"/>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Table,
    Card
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      cardVisible:false
    }
  },
   methods:{
    addingRow(){
      this.cardVisible = true;
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
