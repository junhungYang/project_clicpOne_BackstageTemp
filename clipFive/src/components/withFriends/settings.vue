<template>
  <div class="setting">
      <div class="title">GENERAL SETTINGS</div>
      <ul>
        <li v-for="item,index in settingList" :key="item.name">
          <div class="check-box" 
            :class="item.choosed ? 'glyphicon glyphicon-ok' :''" 
            @click.stop="changeState(index)"></div>
          <span class="item">{{item.name}}</span>
        </li>
      </ul>
      <button class="btn btn-success">Save Changes</button>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data() {
    return {
      settingList: [{
        name: "Enable Notifications",
        choosed: false
      }, {
        name: "Show your E-mail",
        choosed: false
      }, {
        name: "Show Offline Users",
        choosed: false
      }, {
        name: "E-mail Alerts",
        choosed: false
      }, {
        name: "SMS Alerts",
        choosed: false
      },]
    }
  },
  methods: {
    changeState(index) {
      Vue.set(this.settingList[index], 'choosed', !this.settingList[index].choosed)
    }
  }
}
</script>
<style lang="less" scoped>
.setting {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background: rgb(245, 245, 245);
  overflow: hidden;
  .title {
    height: 30px;
    line-height: 30px;
    margin-left: 7px;
    color: rgb(100, 100, 100);
  }
  ul {
    li {
      height: 60px;
      border-bottom: 1px solid #ccc;
      line-height: 60px;
      font-size: 16px;
      .check-box {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-left: 10px;
        border: 1px solid #ccc;
        vertical-align: middle;
        color: rgb(66, 66, 66);
      }
    }
  }
  .btn {
    margin-left: 10px;
  }
}
</style>