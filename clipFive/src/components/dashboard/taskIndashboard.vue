<template>
    <div class="taskIndashboard" v-if="taskState.if">
        <v-panelHeading :title="'To Do'" :stateTool="taskShowManage" @loadingShow="loadingShow"></v-panelHeading>
        <div class="cont-wrap">
            <transition name="mod">
                <v-taskList v-show="taskState.show"></v-taskList>
            </transition>
            <transition name="load">
                <v-loading v-show="loadShow"></v-loading>
            </transition>
        </div>
    </div>
</template>
<script>
import taskList from '../header/taskList'
import panelHeading from '../panelHeading/panelHeading'
import loading from '../loadingMask/loading'
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            loadShow: false
        }
    },
    components: {
        'v-taskList': taskList,
        'v-panelHeading': panelHeading,
        'v-loading': loading
    },
    computed: {
        ...mapState('dashboard', ['taskState'])
    },
    methods: {
        ...mapMutations('dashboard', ['taskShowManage']),
        loadingShow() {
            clearTimeout(this.timer)
            this.loadShow = true
            this.timer = setTimeout(() => {
                this.loadShow = false
            }, 1000);
        },
    },
}
</script>
<style lang="less" scoped>
.taskIndashboard {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .cont-wrap {
    width: 100%;
    position: relative;
    overflow: hidden;
    // border: 1px solid #ddd;
    border-top: 0;
  }
}
</style>

