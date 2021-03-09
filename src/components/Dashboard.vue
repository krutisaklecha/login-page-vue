<template>
  <div class="container col-sm-12 main-block">
    <div class="row">
      <section class="user-form">
        <div class="col-sm-4 column side-bar">
          <h2>admin</h2>
          <a href="" style="color: white" @click="logout">Log out</a>
        </div>
        <div class="col-sm-8 column"></div>
        <ul>
          <li>
            <a><img src="../assets/profile.png" alt="profile"></a>
            <ul class="dropdown">
              <li><a href="#" @click="logout">Log out</a></li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods:{
    logout(){
      this.$store.dispatch('userLogout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
  padding: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.user-form{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 30px;
  border-radius: 10px;
  width: 100%;
  background-color: #FFFFFF;
}
.user-form h3{
  font-size: 2rem;
  margin: 0 0 1rem 0;
}
.side-bar{
  background-color: mediumpurple;
  color: #FFFFFF;
  height: 100%;
}
ul{
  padding: 0;
  list-style: none;
  background: #f2f2f2;
}
ul li{
  display: inline-block;
  position: absolute;
  line-height: 21px;
  text-align: right;
}
ul li a{
  display: block;
  padding: 8px 25px;
  color: #333;
  text-decoration: none;
}
ul li a:hover{
  color: #fff;
  background: #939393;
}
ul li ul.dropdown{
  min-width: 125px; /* Set width of the dropdown */
  background: #f2f2f2;
  display: none;
  position: absolute;
  z-index: 999;
  left: 0;
}
ul li:hover ul.dropdown{
  display: block; /* Display the dropdown */
}
ul li ul.dropdown li{
  display: block;
}
img{
  width: 30%;
  margin-right: 30px;
}
</style>
