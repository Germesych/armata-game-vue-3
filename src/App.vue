<template>
  <div class="main">
    <the-nav-bar/>
    <div class="main__content">
      <router-view/>
    </div>
    <!-- /.content -->
    <the-footer/>
  </div>
  <!-- /.main -->
</template>
<script>
import TheNavBar from "@/components/the-blocks/TheNavBar";
import TheFooter from "@/components/the-blocks/TheFooter";
export default {
  components: {TheFooter, TheNavBar}
}
</script>
