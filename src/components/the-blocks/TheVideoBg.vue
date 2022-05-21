<template>
  <div class="bg">
    <video loop="loop" autoplay="autoplay" muted="muted" class="video video-bg">
      <source src="@/assets/video/bg-fire.mp4" type="video/mp4">
      <!--      <source src="/media/armata-web.b3cf72fb.webm" type="video/webm">-->
    </video>
  </div>
  <!-- /.bg -->
</template>

<script>
export default {
  name: "TheVideoBg"
}
</script>
<style scoped lang="scss">
.bg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  .video{
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
  &::before{
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.85));
    z-index: 0;
  }
}
</style>
