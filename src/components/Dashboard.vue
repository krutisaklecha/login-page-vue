<template>
  <div>
<p>Welcome</p>
  <button class="btn btn-primary" @click="logout()">Logout</button>
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

</style>
