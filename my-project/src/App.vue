<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/">测试</router-link>
      </li>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/blog">日志</router-link>
      </li>
      <li>
        <router-link to="/about">关于</router-link>
      </li>
    </ul>
    
    
    
    
    <div class="enen">
      <router-view></router-view>
    </div> 
  </div>
</template>
<script>
  export default {
    data: function(){
      
    }
  }
</script>

<style>
.container {
  width: 100%;
  height: 50px;
  font-size: 14px;
  background-color: #ea572b;
}
.container ul {
  width: 100%;
  list-style: none;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}
.container ul li {
  width: 25%;
  line-height: 50px;
  text-align: center;
  float: left;
}
.container ul li a{
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
.container ul li.active a {
  color: red;
}
</style>
