<template>
    <div class="panel-heading">
        <div class="panel-icon glyphicon glyphicon-stats"></div>
        <div class="panel-name">{{title}}</div>
        <div class="panel-manage">
            <span class="glyphicon glyphicon-menu-down" @click="stateManage('v-show')"></span>
            <span class="glyphicon glyphicon-wrench" @click="modalDisChange('block')"></span>
            <span class="glyphicon glyphicon-refresh" @click="loadingShow"></span>
            <span class="glyphicon glyphicon-remove" @click="stateManage('v-if')"></span>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    stateTool: {
      type: Function
    },
    title: {
      type: String
    }
  },
  methods: {
    ...mapMutations(['modalDisChange']),
    stateManage(mode) {
      this.stateTool(mode)
      this.$emit("changeOverflow")

    },
    loadingShow() {
      this.$emit('loadingShow')
    }
  }
}
</script>
<style lang="less" scoped>
.panel-heading {
  width: 100%;
  display: flex;
  height: 30px;
  background: #f5f4f9;
  padding: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #ddd;
  .panel-icon {
    width: 30px;
    border-right: 1px solid #ddd;
    text-align: center;
    line-height: 30px;
  }
  .panel-name {
    flex: 1;
    line-height: 30px;
    padding-left: 10px;
  }
  .panel-manage {
    // width: 120px;
    span {
      width: 20px;
      line-height: 30px;
      cursor: pointer;
      color: rgb(107, 107, 107);
    }
    span:hover {
      color: rgb(53, 53, 53);
    }
  }
}
</style>
