<template>
  <div class="container main-block col-sm-12">
    <div class="row">
      <section class="user-form">
      <div class="col-sm-4 column side-bar">
        <img src="../assets/mainlogo.png" alt="mainlogo">
        <h2 class="clearfix">finship</h2>
        <h2>Don't have an account?</h2>
        <button class="btn btn-primary"> Sign Up</button>
      </div>

      <div class="col-sm-8 column">
        <h3>Login to Dashboard</h3>
        <form>
          <div class="form-group">
            <label for="userNameId" class="userName">Login</label>
            <input type="text" class="form-control" id="userNameId" v-model="user.username"
                  placeholder="example@gmail.com">
          </div>
          <div class="form-group">
            <label for="passwordId"></label>
            <input type="password" class="form-control" id="passwordId"
               v-model="user.password" >
          </div>
          <div class="col-sm-3">
            <input type="checkbox" id="rememberMe">
            <label for="rememberMe">Remember me</label>
            </div>
          <div class="tailer">
            <button class="btn btn-dark col-sm-3" @click="signIn">Sign In</button>
            <a href="">Forgot password?</a>
          </div>
        </form>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      user:{
        username:'',
        password:''
      }
    }
  },
  computed:{
  },
  methods:{
    signIn(){
      this.$store.dispatch('loginUser',this.user)
      this.$router.push({
        name: 'Dashboard',
      });
   /*   this.$store.dispatch('loginUser',this.user)
      .then((response) =>{
        console.log(response)
        /!*this.$router.push({
          name: 'Dashboard',
        });*!/
      })
       .catch(error => console.log(error));*/

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
.main-block{
  background: royalblue;
  padding : 50px 0;
}
img{
  height:15%;
  width: 15%;
  float: left;
}
.btn-primary{
  background-color: #FFFFFF;
  color: royalblue;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
}
.user-form{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 30px;
  border-radius: 10px;
  width: 100%;
  background-color: #FFFFFF;
}
#userNameId , #passwordId{
  width: 60%;
}
.userName{
  position:absolute;
  left:4%;
  color: mediumpurple;
  font-weight:bold;
  font-size:0.8em;
  top:23%;
 /* font: 16px "Arial";
  height: 30px;
  padding-left: 50px;
  width: 300px;*/
}
.user-form h3{
  font-size: 2rem;
  margin: 0 0 1rem 0;
}
a{
  margin-left: 13%;
}
.side-bar{
  background-color: darkblue;
  color: #FFFFFF;
  height: 100%;
}
.tailer{
  text-align: left;
}
</style>
