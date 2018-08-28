<template>
  <div>
    <div class="modal fade in" :style="{'display':modalDisplay}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" @click.stop="modalDisChange('none')">×</button>
                    <h4 class="modal-title">Panel Configuration</h4>
                </div>
                <div class="modal-body">
                    Here will be a configuration form
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" @click.stop="modalDisChange('none')">
                        Close
                    </button>
                    <button class="btn btn-primary">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapState(['modalDisplay'])
    },
    methods: {
        ...mapMutations(['modalDisChange'])
    }
}
</script>

<style lang="less" scoped>
.modal {
  background: rgba(5, 5, 5, 0.39);
  height: 100%;
  .modal-dialog {
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
