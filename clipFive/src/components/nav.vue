<template>
   <div class="nav" :class="[foldClass,navColor]" >
       <div class="showNav" v-show="spreadBtn">
           <button class="showBtn glyphicon glyphicon-menu-left" @click="spreadOperate"></button>
       </div>
       <div class="scrollWrap" ref="scrollWrap">
            <ul class="nav-list">
                <li class="nav-list-child" 
                    v-for="item in nav" 
                    @click="item.childShowState = !item.childShowState" 
                    :key="item.name">
                    <router-link :to="item.to" style="text-decoration: none">
                      <div class="nav-item">
                          <span class="front-icon" :class="item.icon"></span>
                          <span class="nav-name" v-show="spread">{{item.name}}</span>
                          <span v-if="item.itemList" 
                              v-show="spread"
                          :class="item.childShowState ? 'glyphicon glyphicon-menu-left' : 'glyphicon glyphicon-menu-down'"
                          class="childState-icon"
                          ></span>
                      </div>
                    </router-link>
                    <div class="itemListWrap">
                        <div class="wrapChild">
                          <div v-if="!spread" class="title">{{item.name}}</div>
                          <ul v-if="item.itemList" v-show="item.childShowState && spread" class="item-list">
                              <li class="child-list" v-for="item1,index in item.itemList" 
                                  :key="item1.name + index ">
                              <span>{{item1.name}}</span>
                              <span class="new" v-if="item1.hasNew">new</span>
                              </li>
                          </ul>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
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
      itemListState: false,
      spreadBtn: true
    }
  },
  created() {
    window.onresize = () => {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (window.innerWidth < 950 && this.spread === true) {
          this.spreadOperate(false)
        } else if (window.innerWidth > 950 && this.spread === false) {
          this.spreadOperate(true)
        }
      }, 250);
    }
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.scrollWrap, {
      click: true
    })
  },
  methods: {
    ...mapMutations('nav', ['spreadOperate'])
  },
  computed: {
    ...mapState('nav', ['nav', 'spread']),
    ...mapState('styleSelector', ['navColor']),
    foldClass() {
      return this.spread === true ? '' : 'fold'
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
  position: relative;
  width: 225px;
  border: 1px solid #ccc;
  border-bottom: 0;
  border-top: 0px;
  min-height: ~"calc(100vh - 50px)";
  z-index: 10;
  .showNav {
    height: 50px;
    border-bottom: 1px solid #ccc;
    .showBtn {
      outline: none;
      border: none;
      width: 30px;
      height: 30px;
      background: #e6e6e6;
      float: right;
      margin-top: 10px;
      margin-right: 10px;
      color: #666;
    }
    .showBtn:hover {
      background: #c9c9c9;
    }
  }
  .scrollWrap {
    // position: absolute;
    // top: 50px;
    // bottom: 0;
    // overflow: hidden;
    width: 100%;
    .nav-list {
      cursor: pointer;
      .nav-item {
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        display: flex;
        .front-icon {
          width: 40px;
          line-height: 40px;
          text-align: center;
          // color: #007aff;
        }
        .nav-name {
          line-height: 40px;
          flex: 1;
        }
        .childState-icon {
          width: 40px;
          line-height: 40px;
          font-size: 12px;
          transform: scale(0.8);
        }
      }
      .nav-item:hover {
        background: #ccc;
      }
      .itemListWrap {
        transition: all 0.25s linear;
        .item-list {
          border-bottom: 1px solid #ccc;
          li {
            height: 30px;
            line-height: 30px;
            padding-left: 40px;
            position: relative;
            .new {
              position: absolute;
              right: 10px;
              top: 5px;
              background: #007aff;
              height: 20px;
              line-height: 20px;
              padding: 0 5px;
              border-radius: 10px;
              font-size: 12px;
              transform: scale(0.7);
              color: #fff;
            }
          }
          li:hover {
            background: #ccc;
          }
        }
      }
    }
  }
}
.fold {
  width: 50px;
  .scrollWrap {
    top: 50px;
    width: 100%;
    overflow: visible;
    .nav-list {
      .nav-list-child:hover {
        .item-list {
          display: block !important;
        }
        .title {
          padding-left: 40px;
          display: block !important;
        }
      }
      .itemListWrap {
        position: relative;
        .wrapChild {
          position: absolute;
          top: -40px;
          left: 50px;
          width: 200px;
          .title {
            background: rgb(226, 226, 226);
            height: 40px;
            line-height: 40px;
            display: none;
          }
          .item-list {
            background: #f5f5f5;
            border: 0;
            li {
              height: 30px;
              line-height: 30px;
              padding-left: 40px;
              position: relative;
              .new {
                position: absolute;
                right: 10px;
                top: 10px;
                background: #007aff;
                height: 20px;
                line-height: 20px;
                padding: 0 5px;
                border-radius: 10px;
                font-size: 12px;
                transform: scale(0.7);
                color: #fff;
              }
            }
            li:hover {
              background: rgb(226, 226, 226);
            }
          }
        }
      }
      // .itemListWrap:after {
      //   content: "";
      //   display: block;
      //   border-left: 10px solid red;
      //   border-top: 10px solid transparent;
      //   border-bottom: 10px solid transparent;
      //   position: absolute;
      //   top: -30px;
      //   left: 50px;
      // }
    }
  }
}
.navColor0 {
  background: #f5f5f5;
  .front-icon {
    color: #007aff;
  }
}
.navColor1 {
  background: rgb(36, 36, 36);
  border-color: #222222 !important;
  .title {
    color: #fff !important;
    background: #a47441 !important;
  }
  .item-list {
    background: rgb(36, 36, 36) !important;
  }
  .front-icon,
  .childState-icon {
    color: #a47441 !important;
  }
  .nav-name {
    color: #fff;
  }
  .nav-item,
  .showNav {
    border-color: #585858 !important;
  }
  .nav-item:hover {
    background: #a47441 !important;
    .front-icon,
    .childState-icon {
      color: #fff !important;
    }
  }
  .showBtn {
    background: rgba(59, 59, 59, 0.9) !important;
    &:hover {
      color: #a47441 !important;
    }
  }
  .child-list {
    &:hover {
      background: #a47441 !important;
      .new {
        background: #fff !important;
        color: #a47441 !important;
      }
    }
    span:first-of-type {
      color: #fff;
    }
    .new {
      background: #a47441 !important;
    }
  }
}
.navColor2 {
  background: #f5f5f5;
  border-color: #ccc !important;
  .front-icon,
  .childState-icon {
    color: rgba(35, 35, 35, 0.9) !important;
  }
  .nav-item:hover {
    background: rgba(35, 35, 35, 0.9) !important;
    .front-icon,
    .childState-icon,
    .nav-name {
      color: #fff !important;
    }
  }
}
.navColor3 {
  background: linear-gradient(to bottom, #466078 0, #334c68 100%);
  border-color: #2d446191 !important;
  .title {
    color: #fff !important;
    background: #d9534f !important;
  }
  .item-list {
    background: linear-gradient(to bottom, #466078 0, #334c68 100%) !important;
  }
  .front-icon {
    color: #d9534f;
  }
  .nav-name,
  .childState-icon {
    color: #fff;
  }
  .nav-item,
  .showNav {
    border-color: #2d446191 !important;
  }
  .nav-item:hover {
    background: #d9534f !important;
    .front-icon,
    .childState-icon,
    .nav-name {
      color: #fff !important;
    }
  }
  .child-list {
    &:hover {
      background: #d9534f !important;
    }
    span:first-of-type {
      color: #fff;
    }
    .new {
      background: #fff !important;
      color: #d9534f !important;
    }
  }
}
.navColor4 {
  background: rgba(38, 53, 17, 0.9);
  border-color: rgba(20, 27, 9, 0.356) !important;
  .title {
    color: #fff !important;
    background: rgba(38, 53, 17, 0.9) !important;
  }
  .item-list {
    background: rgba(38, 53, 17, 0.9) !important;
  }
  .front-icon {
    color: #d9534f;
  }
  .nav-name,
  .childState-icon {
    color: #fff;
  }
  .nav-item,
  .showNav {
    border-color: rgba(20, 27, 9, 0.356) !important;
  }
  .nav-item:hover {
    background: #d9534f !important;
    .front-icon,
    .childState-icon,
    .nav-name {
      color: #fff !important;
    }
  }
  .child-list {
    &:hover {
      background: #d9534f !important;
    }
    span:first-of-type {
      color: #fff;
    }
    .new {
      background: #fff !important;
      color: #d9534f !important;
    }
  }
}
@media screen and (max-width: 767px) {
  .nav {
    display: none;
  }
}
</style>
