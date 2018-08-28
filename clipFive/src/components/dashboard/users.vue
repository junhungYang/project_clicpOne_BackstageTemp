<template>
    <div class="users" v-if="usersState.if">
        <v-panelHeading :title="'users'" :stateTool="usersShowManage" @loadingShow="loadingShow"></v-panelHeading>
        <div class="cont-wrap">
            <transition name="mod">
            <div v-show="usersState.show" class="scrollWrap" ref="scrollWrap">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item,index in usersList" :key="item.name">
                            <td>
                                <img class="proPic" :src="item.proPic" alt="">
                            </td>
                            <td class="username">{{item.name}}</td>
                            <td class="mail">
                                <a href="#">{{item.mail}}</a>
                            </td>
                            <td class="menu">
                                <div class="btn btn-primary btn-sm" @click="menuShow(index)">
                                    <span class="glyphicon glyphicon-asterisk"></span>
                                    <span class="glyphicon glyphicon-triangle-bottom"></span>
                                </div>
                                <ul v-show="item.menuShow">
                                    <li @click.stop="moveToTop">
                                        <span class="glyphicon glyphicon-edit"></span>
                                        <span>Edit</span>
                                    </li>
                                    <li @click.stop="moveToTop">
                                        <span class="glyphicon glyphicon-share-alt"></span>
                                        <span>Share</span>
                                    </li>
                                    <li @click.stop="remove(index)">
                                        <span class="glyphicon glyphicon-trash"></span>
                                        <span>Remove</span>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </transition>
        <transition name="load">
            <v-loading v-show="loadShow"></v-loading>
        </transition>
        </div>
    </div>
</template>
<script>
import panelHeading from '../panelHeading/panelHeading'
import loading from '../loadingMask/loading'
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
export default {
    data() {
        return {
            loadShow: false,
            usersList: [{
                proPic: "/static/img/9.jpg",
                name: "Nicole Bell",
                mail: "Nicole@example.com",
                menuShow: false
            }, {
                proPic: "/static/img/10.jpg",
                name: "Steven Thompson",
                mail: "Steven@example.com",
                menuShow: false
            }, {
                proPic: "/static/img/11.jpg",
                name: "Ella Patterson",
                mail: "Ella@example.com",
                menuShow: false
            }, {
                proPic: "/static/img/12.jpg",
                name: "Kenneth Ross",
                mail: "Kenneth@example.com",
                menuShow: false
            }, {
                proPic: "/static/img/13.jpg",
                name: "Leborn James",
                mail: "Leborn@example.com",
                menuShow: false
            }]
        }
    },
    components: {
        'v-panelHeading': panelHeading,
        'v-loading': loading
    },
    computed: {
        ...mapState('dashboard', ['usersState']),
    },
    methods: {
        ...mapMutations('dashboard', ['usersShowManage']),
        loadingShow() {
            clearTimeout(this.timer)
            this.loadShow = true
            this.timer = setTimeout(() => {
                this.loadShow = false
            }, 1000);
        },
        menuShow(index) {
            let item = this.usersList[index]
            Vue.set(item, 'menuShow', !item.menuShow)
        },
        remove(index) {
            this.usersList.splice(index, 1)
        },
        moveToTop() {
            window.scrollTo(0, 0)
        }
    },
    mounted() {
        this.scroller = new BScroll(this.$refs.scrollWrap, {
            click: true
        })
    },
    // watch: {
    //     usersShowState() {
    //         Vue.nextTick(() => {
    //             this.scroller.refresh()
    //         })
    //     }
    // }
}
</script>
<style lang="less" scoped>
.users {
  width: 100%;
  margin-top: 20px;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  .cont-wrap {
    width: 100%;
    height: 300px;
    position: relative;
    overflow: hidden;
    .scrollWrap {
      height: 300px;
      flex: 1;
      overflow: hidden;
      border: 1px solid #ddd;
      border-top: 0;
      // z-index: -1;
      .table {
        margin: 0;
        .proPic {
          width: 50px;
          height: 50px;
          border-radius: 3px;
        }
        td {
          line-height: 50px;
        }
        .mail,
        .username {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        @media screen and (min-width: 769px) {
          .mail,
          .username {
            max-width: 120px;
          }
        }
        @media screen and (max-width: 769px) and (min-width: 415px) {
          .mail,
          .username {
            max-width: 100px;
          }
        }
        @media screen and (max-width: 415px) and (min-width: 321px) {
          .mail,
          .username {
            max-width: 80px;
          }
        }
        @media screen and (max-width: 321px) {
          .mail,
          .username {
            max-width: 60px;
          }
        }
        .menu {
          position: relative;
          .glyphicon-triangle-bottom {
            transform: scale(0.7);
          }
          ul {
            position: absolute;
            background: #fff;
            border: 1px solid #ccc;
            z-index: 1;
            top: 53px;
            right: 23px;
            border-radius: 5px;
            li {
              height: 30px;
              line-height: 30px;
              width: 120px;
              padding-left: 15px;
              cursor: pointer;
            }
            li:hover {
              background: #ddd;
            }
          }
        }
        tr:last-of-type {
          border-bottom: 1px solid #ddd;
        }
      }
    }
  }
}
</style>



