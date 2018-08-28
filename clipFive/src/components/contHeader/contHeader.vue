<template>
    <div class="contHeader">
        <div class="header-text">
            <span :class="headerText.icon"></span>
            <a href="#">{{headerText.main}}</a>/
            <span>{{headerText.sur}}</span>
        </div>
        <form class="search">
            <input type="text" id="search" placeholder="Start Searching...">
            <label class="glyphicon glyphicon-search" for="search"></label>
        </form>
    </div>
</template>
<script>
export default {
  props: {
    headerText: {
      type: Object
    }
  }
}
</script>
<style lang="less" scoped>
.contHeader {
  height: 50px;
  background: #f5f5f5;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  color: #777;
  display: flex;
  .header-text {
    flex: 1;
    .glyphicon,
    a {
      color: #007aff;
    }
    .glyphicon {
      margin-left: 10px;
    }
    a {
      margin-right: 10px;
    }
    span:last-of-type {
      margin-left: 10px;
    }
  }
  .search {
    width: 200px;
    background: rgb(224, 224, 224);
    margin: 8px 0;
    height: 34px;
    line-height: 34px;
    border-radius: 5px;
    margin-right: 10px;
    input {
      height: 20px;
      width: 150px;
      border: 0;
      margin-left: 10px;
      background: transparent;
    }
    label {
      outline: none;
      border: none;
      background: transparent;
      padding: 7px 7px;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>