<template>
    <div class="manage-warp container-fluid ">
        <ul class="row">
            <li v-for="item in 3" class="col-sm-4">
                <div class="title">
                    <div class="icon-box ">
                        <span class="glyphicon glyphicon-user"></span>
                    </div>
                    <span class="text">Manage Users</span>
                </div>
                <div class="desc">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </div>
                <div class="view-more">
                    <a href="#">
                    <span class="link-text">View More</span>
                    <span class="glyphicon glyphicon-arrow-right"></span>
                    </a>
                </div>
            </li>
        </ul>
        </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.manage-warp {
  ul {
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(235, 235, 235);
    li {
      .title {
        display: flex;
        .icon-box {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          color: #fff;
          background: #3d9400;
          text-align: center;
          .glyphicon {
            font-size: 20px;
            line-height: 55px;
          }
        }
        .text {
          margin-left: 10px;
          line-height: 55px;
          font-size: 18px;
          font-family: myriad-Thin;
          color: #666;
        }
      }
      .desc {
        margin-top: 15px;
        color: #777;
        font-size: 14px;
      }
      .view-more {
        margin-top: 20px;
        text-align: right;
        color: #337ab7;
        a {
          text-decoration: none;
          .link-text {
            font-size: 14px;
          }
          .glyphicon {
            width: 20px;
            height: 20px;
            color: #fff;
            background: #337ab7;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
            transform: scale(0.7);
          }
        }
      }
    }
    li:last-of-type {
      margin: 0;
    }
  }
}
</style>


