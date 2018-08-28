<template>
      <div class="scrollWrap" ref="scrollWrap">
        <ul class="task-list">
          <li v-for="item in taskList">
              <input type="checkbox">
              <span>{{item.taskName}}</span>
              <span class="label" 
              :class="{'label-danger': item.date === 'today',
                        'label-warning': item.date === 'tommorow',
                        'label-success': item.date === 'this week',
                        'label-info': item.date === 'this month'}"
              >{{item.date}}</span>
          </li>
        </ul>
      </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
export default {
    computed: {
        ...mapState('header', ['taskList', 'penddingTaskState'])
    },
    mounted() {
        this.scroller = new BScroll(this.$refs.scrollWrap, {
            click: true
        })
    },
    watch: {
        penddingTaskState() {
            Vue.nextTick(() => {
                this.scroller.refresh()
            })
        }
    }
}
</script>
<style lang="less" scoped>
.scrollWrap {
  flex: 1;
  overflow: hidden;
  border-top: 0;
  height: 300px;
  border: 1px solid #ddd;
  border-top: 0;
  .task-list {
    padding: 0;
    li {
      border-bottom: 1px solid #ccc;
      height: 45px;
      line-height: 45px;
      padding-left: 5px;
      position: relative;
      font-size: 12px;
      background: #fff;
      .label {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        line-height: 15px;
      }
    }
  }
}
</style>