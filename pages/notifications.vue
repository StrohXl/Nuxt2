<template>
  <div>
    <h2>Contador:</h2>

  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:{
    getNotifications(){
      return this.$store.getters.getNotifications
    },
    ...mapState(['msg','notifications'])
  }
}
</script>
