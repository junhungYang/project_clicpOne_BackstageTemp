<template>
  <div class="notifications">
      <header>You have {{quantity}} pending tasks</header>
      <div class="scrollWrap" ref="scrollWrap">
        <ul class="item-list">
          <li v-for="item in notifications">
            <span class="label" :class="item.icon"></span>
              <span>{{item.itemName}}</span>
              <span class="minute">{{item.date}}</span>
          </li>
        </ul>
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
export default {
  data() {
    return {
      notifications: [],
      quantity: 0
    }
  },
  computed: {
    ...mapState('header', ['notificationsState'])
  },
  created() {
    axios.get('/clipfive/notifications').then(res => {
      if (res.data.code === 0) {
        this.notifications = res.data.data.list;
        this.quantity = res.data.data.quantity;
        this.scrollInit()
        let obj = {
          kind: 'notifications',
          quantity: res.data.data.quantity
        }
        this.quantityInit(obj)
      }
    })
  },
  methods: {
    ...mapMutations('header', ['quantityInit']),
    scrollInit() {
      this.scroller = new BScroll(this.$refs.scrollWrap, {
        click: true
      })
    }
  },
  watch: {
    notificationsState() {
      Vue.nextTick(() => {
        this.scroller.refresh()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.notifications {
  position: absolute;
  right: 0;
  width: 270px;
  background: #fff;
  header {
    height: 26px;
    background: #ccc;
    color: #555;
    padding-left: 5px;
    font-family: myriad-Reg;
    line-height: 26px;
  }
  .scrollWrap {
    height: 250px;
    overflow: hidden;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    .item-list {
      padding: 0;
      li {
        border-bottom: 1px solid #ccc;
        height: 35px;
        line-height: 35px;
        margin-left: 5px;
        position: relative;
        font-size: 10px;
        .minute {
          position: absolute;
          right: 5px;
          font-family: myriad-It;
        }
        .label {
          display: inline-block;
          width: 25px;
          height: 25px;
          // vertical-align: middle;
          line-height: 20px;
        }
      }
    }
  }

  footer {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding-left: 5px;
    position: relative;
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
  .notifications {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>