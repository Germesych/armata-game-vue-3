<template>
  <app-header
    :title="headerTitle"
  />
  <h1>About Us</h1>
</template>

<script>
import AppHeader from "@/components/app-modules/AppHeader";
export default {
  name: "AboutUsPagePage",
  components: {AppHeader},
  data(){
    return {
      headerTitle: 'About Us'
    }
  }
}
</script>
