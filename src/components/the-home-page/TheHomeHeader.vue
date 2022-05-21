<template>
  <header class="header">
    <video loop="loop" autoplay="autoplay" muted="muted" class="video">
      <source src="@/assets/video/armata-mp.mp4" type="video/mp4">
      <source src="@/assets/video/armata-web.webm" type="video/webm">
    </video>
    <div class="content">
      <h1 class="header-title">Armored Warfare.</h1>
      <div class="header-subtitle"> Боевой путь: «Войны прошлого»</div>
      <a href="https://awru.my.games/" class="btn-border" target="_blank">Скачать игру</a>
    </div>
    <!-- /.content -->
  </header>
</template>

<script>
export default {
  name: "TheHomeHeader"
}
</script>
