<template>
  <div class="nav-bar">
    <div class="container">
      <nav class="nav">
        <ul class="ul-res nav-list">
          <li class="nav-items">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="nav-items">
            <router-link to="/news">Новости</router-link>
          </li>
          <li class="nav-items">
            <router-link to="/game">О игре</router-link>
          </li>
          <li class="nav-items">
            <router-link to="/community">Сообщество</router-link>
          </li>
          <li class="nav-items">
            <router-link to="/media">Медиа контент</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /.container -->
  </div>
  <!-- /.nav-bar -->
</template>

<script>
export default {
  name: "TheNavBar"
}
</script>

<style scoped>

</style>
