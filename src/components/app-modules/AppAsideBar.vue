<template>
  <aside class="aside-bar">
    <div class="search-block">
      <div class="search-title">Search</div>
      <form method="post" class="search">
        <input type="text" placeholder="search">
      </form>
    </div>
    <!-- /.search-block -->
    <div class="category-block">
      <div class="category-title">Category</div>
      <!-- /.category-title -->
      <ul class="ul-res category-list">
        <li class="category-items" v-if="category.length" v-for="items in category" :key="items">
          {{ items }}
        </li>
        <!-- /.category-items -->
        <li class="category-items__error" v-else>
          I not category...
        </li>
        <!-- /.category-items__error -->
      </ul>
      <!-- /.reset-ul category-list -->
    </div>
    <!-- /.category-block -->
    <div class="top-news__block">
      <div class="news-title">{{ contentTitle }}</div>
      <!-- /.news-title -->
      <div class="row" v-if="content.length" v-for="items in content" :key="items.id">
        <router-link to="/"/>
        <img :src="items.img" :alt="items.imgAlt">
        <div class="content">
          <div class="date">{{items.date}}</div>
          <div class="news-top__title row-2">
            {{items.title}}
          </div>
        </div>
        <!-- /.content -->
      </div>
      <!-- /.row -->
      <div class="row-error" v-else>
        Not content...
      </div>
      <!-- /.row-error -->
    </div>
    <!-- /.top-news__block -->
  </aside>
</template>

<script>
export default {
  name: "AppAsideBar",
  props: ['content', 'contentTitle', 'category']
}
</script>
