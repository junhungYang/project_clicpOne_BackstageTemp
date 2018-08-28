<template>
  <div class="aboutMe">
      <ul>
        <li>
          <span class="glyphicon glyphicon-user"></span>
          <span>My Profile</span>
        </li>
        <li>
          <span class="glyphicon glyphicon-list-alt"></span>
          <span>My Calendar</span>
        </li>  
        <li>
          <span class="glyphicon glyphicon-envelope"></span>
          <span>My Messages</span>
        </li>               
      </ul>
      <ul>
        <li>
          <span class="glyphicon glyphicon-lock"></span>
          <span>Lock Screen</span>
        </li>
        <router-link to="login">
          <li>
            <span class="glyphicon glyphicon-log-out"></span>
            <span>Log Out</span>
          </li>   
        </router-link>     
      </ul>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.aboutMe {
  width: 150px;
  background: #fff;
  position: absolute;
  right: 40px;
  top: 47px;
  border: 1px solid #ccc;
  // color: rgb(49, 49, 49);
  ul {
    padding: 0;
    margin: 0;
    a {
      text-decoration: none;
    }
    li {
      margin-left: 5px;
      height: 30px;
      line-height: 30px;
      span {
        color: #979797;
      }
    }
  }
  ul:first-of-type {
    border-bottom: 1px solid #ccc;
  }
}
</style>
