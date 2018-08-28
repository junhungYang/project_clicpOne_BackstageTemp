<template>
  <div class="message">
      <header>You have {{quantity}} pending tasks</header>
      <div class="scrollWrap" ref="scrollWrap">
        <ul class="item-list">
          <li v-for="item in messages">
            <div class="pro-pic">
              <img :src="item.proPic" alt="">
            </div>
            <div class="describe">
              <span class="name">{{item.name}}</span>
              <span class="preview">{{item.cont}}</span>
            </div>
            <div class="date">{{item.date}}</div>
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
      quantity: 12,
      messages: []
    }
  },
  created() {
    axios.get('/clipfive/messages').then(res => {
      if (res.data.code === 0) {
        this.quantity = res.data.data.quantity
        this.messages = res.data.data.list
        this.scrollInit()
        let obj = {
          kind: 'messages',
          quantity: res.data.data.quantity
        }
        this.quantityInit(obj)
      }
    })
  },
  computed: {
    ...mapState('header', ['messagesState'])
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
    messagesState() {
      Vue.nextTick(() => {
        this.scroller.refresh()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.message {
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
        padding-left: 5px;
        padding-top: 5px;
        position: relative;
        line-height: 20px;
        .pro-pic {
          float: left;
          margin-right: 5px;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .describe {
          .name {
            display: block;
            font-size: 14px;
            color: #007aff;
          }
          .preview {
            font-size: 12px;
            font-family: -apple-system;
            color: rgb(87, 87, 87);
            // 多行情况下的行级元素除非多行的line-height总和高于盒子，否则设置的line-height将不生效
            // 块级元素中文本无法检测到浮动了的.pro-pic，假如既想.pro-pic无法摆脱文字流，同时.preview又能设置恰当的line-height的话
            // 应该在包裹.pro-pic,与.preview的总容器 li 上设置
          }
        }
        .date {
          font-family: myriad-It;
          font-size: 12px;
          color: rgb(87, 87, 87);
          text-align: right;
          padding-right: 10px;
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
  .message {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>