<template>
  <div class="pendding-task">
      <header>You have {{quantity}} pending tasks</header>
      <div class="taskList">
        <v-taskList></v-taskList>
      </div>
      <footer>
        <span>See all tasks</span>
        <span class="glyphicon glyphicon-circle-arrow-right"></span>
      </footer>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import taskList from './taskList'
export default {
  data() {
    return {
      quantity: 0,
    }
  },
  components: {
    'v-taskList': taskList
  },
  created() {
    axios.get('/clipfive/penddingTask').then(res => {
      if (res.data.code === 0) {
        this.quantity = res.data.data.quantity
        this.taskListInit(res.data.data.list)
        let obj = {
          kind: 'tasks',
          quantity: res.data.data.quantity
        }
        this.quantityInit(obj)
      }
    })
  },
  methods: {
    ...mapMutations('header', ['taskListInit', 'quantityInit'])
  },
}
</script>
<style lang="less" scoped>
.pendding-task {
  position: absolute;
  right: 0;
  width: 270px;
  background: #fff;
  display: flex;
  flex-direction: column;
  header {
    height: 26px;
    background: #ccc;
    color: #555;
    padding-left: 5px;
    font-family: myriad-Reg;
    line-height: 26px;
  }
  footer {
    padding-left: 5px;
    position: relative;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .glyphicon {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 12px;
      transform: scale(0.8);
      color: #555;
    }
  }
  footer:hover {
    background: rgb(230, 230, 230);
  }
}
@media screen and (max-width: 768px) {
  .pendding-task {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

