<template>
  <app-header
    :title="headerTitle"
  />
  <div class="news-page">
    <the-video-bg/>
    <div class="container">
      <div class="flex">
        <app-content
          :content="posts"
        />
        <app-aside-bar
          :contentTitle="contentTitle"
          :content="contentTopNews"
          :category="category"
        />
      </div>
      <!-- /.flex -->
    </div>
    <!-- /.container -->
  </div>
  <!-- /.news-page -->

</template>

<script>
import AppHeader from "@/components/app-modules/AppHeader";
import AppContent from "@/components/app-modules/AppContent";
import AppAsideBar from "@/components/app-modules/AppAsideBar";
import TheVideoBg from "@/components/the-blocks/TheVideoBg";
export default {
  name: "NewsPage",
  components: {TheVideoBg, AppAsideBar, AppHeader, AppContent},
  data(){
    return {
      headerTitle: 'news',
      category: ['обновления', 'События', 'Акции', 'от разработчиков'],
      contentTitle: 'top news',
      contentTopNews: [
        {
          id: 1,
          date: '08.04.2022',
          img: require('@/assets/img/posts/1.jpeg'),
          imgAlt: 'img',
          title: 'В РАЗРАБОТКЕ: «ОБЪЕКТ 225»',
        },
        {
          id: 2,
          date: '07.04.2022',
          img: require('@/assets/img/posts/2.jpeg'),
          imgAlt: 'img',
          title: 'ЖЕЛЕЗНЫЙ ПОДГОН',
        },
        {
          id: 3,
          date: '19.05.2022',
          img: require('@/assets/img/posts/1.jpeg'),
          imgAlt: 'img',
          title: 'КЕЙС «ЗОЛОТАЯ ЛИХОРАДКА»',
        },
        {
          id: 4,
          date: '19.05.2022',
          img: require('@/assets/img/posts/4.jpeg'),
          imgAlt: 'img',
          title: 'БЛИЖНЕВОСТОЧНАЯ РАСПРОДАЖА',
        },
        {
          id: 5,
          date: '08.04.2022',
          img: require('@/assets/img/posts/teh-work.jpeg'),
          imgAlt: 'img',
          title: 'ТЕХНИЧЕСКИЕ РАБОТЫ [19 МАЯ]',
        },
        {
          id: 6,
          date: '17.05.2022',
          img: require('@/assets/img/posts/5.jpeg'),
          imgAlt: 'img',
          title: 'PERIHELION: ОБНОВЛЕНИЕ №12',
        },
        {
          id: 7,
          date: '17.05.2022',
          img: require('@/assets/img/posts/6.png'),
          imgAlt: 'img',
          title: 'КОМАНДИР СЭМУЭЛЬ ТОРП',
        },
        {
          id: 8,
          date: '13.05.2022',
          img: require('@/assets/img/posts/7.jpeg'),
          imgAlt: 'img',
          title: 'МЕТКИЙ ВЫСТРЕЛ: Т-15 «АРМАТА»',
        },
        {
          id: 9,
          date: '13.05.2022',
          img: require('@/assets/img/posts/8.jpeg'),
          imgAlt: 'img',
          title: 'В РАЗРАБОТКЕ: TYPE 99B',
        },
        {
          id: 10,
          date: '12.05.2022',
          img: require('@/assets/img/posts/9.jpeg'),
          imgAlt: 'img',
          title: 'PERIHELION: ОБНОВЛЕНИЕ №11',
        },
      ],
      posts: [
        {
          id: 1,
          category: 'события',
          date: '08.04.2022',
          img: require('@/assets/img/posts/1.jpeg'),
          imgAlt: 'img',
          title: 'В РАЗРАБОТКЕ: «ОБЪЕКТ 225»',
          text: '<p>Сегодня мы хотим рассказать вам больше о награде будущего события — ОБТ «Объект 225».«Объект 225» (не путать с «Объектом 225» времен ВОВ, известным под индексом КВ-5) разработан на Кировском заводе в Ленинграде в начале 1970-х в рамках конкурса по созданию перспективного ОБТ. Он должен был сменить Т-64А.</p>'
        },
        {
          id: 2,
          date: '07.04.2022',
          category: 'акции',
          img: require('@/assets/img/posts/2.jpeg'),
          imgAlt: 'img',
          title: 'ЖЕЛЕЗНЫЙ ПОДГОН',
          text: '<p>Кейс «Железный подгон» снова в продаже. Ключи для данного кейса вы найдете в «Магазине ключей»! Напоминаем вам, что при покупке ключа к кейсу, покупка самого кейса не требуется. Открыв кейс, вы получите одну из более чем 70 премиумных машин 4–10-го уровня! Обратите внимание: некоторые машины представлены в виде версий техники в особых камуфляжах.</p>'
        },
        {
          id: 3,
          category: 'акции',
          date: '19.05.2022',
          img: require('@/assets/img/posts/3.png'),
          imgAlt: 'img',
          title: 'КЕЙС «ЗОЛОТАЯ ЛИХОРАДКА»',
          text: '<p>Объявляется «Золотая лихорадка»! С 17:00 мск 19 мая до 26 мая 17:00 мск в «Маркете» будет доступен одноименный кейс, из которого можно получить золото. Сколько именно — зависит от вашего везения: счастливчикам достанется до 250 000 золота!</p>'
        },
        {
          id: 4,
          category: 'акции',
          date: '19.05.2022',
          img: require('@/assets/img/posts/4.jpeg'),
          imgAlt: 'img',
          title: 'БЛИЖНЕВОСТОЧНАЯ РАСПРОДАЖА',
          text: '<p>В продажу поступила премиумная техника Ближнего Востока, которую вы можете найти в «Маркете». Присоединяйтесь к распродаже! Вас ждут наборы техники со скидками, камуфляжи, декали, кейс Altay, а также CATTB.</p>'
        },
        {
          id: 5,
          category: 'оновления',
          date: '08.04.2022',
          img: require('@/assets/img/posts/teh-work.jpeg'),
          imgAlt: 'img',
          title: 'ТЕХНИЧЕСКИЕ РАБОТЫ [19 МАЯ]',
          text: '<p>Вынуждены сообщить, что текущие профилактические работы будут стандартными, без обновления версии клиента. Они закончатся раньше и мы обязательно сообщим об этом. </p>'
        },
        {
          id: 6,
          category: 'события',
          date: '17.05.2022',
          img: require('@/assets/img/posts/5.jpeg'),
          imgAlt: 'img',
          title: 'PERIHELION: ОБНОВЛЕНИЕ №12',
          text: '<p>Сегодня мы хотели бы обновить статус события Perihelion.</p>'
        },
        {
          id: 7,
          category: 'от разработчиков',
          date: '17.05.2022',
          img: require('@/assets/img/posts/6.png'),
          imgAlt: 'img',
          title: 'КОМАНДИР СЭМУЭЛЬ ТОРП',
          text: '<p>Сэмюэль Торп — новый командир в Armored Warfare. Его история тесно связана с Perihelion.Сэмюэль Торп родился в первые годы Коллапса, хотя такое название тот период американской истории получил позже. Его родители были убиты разъяренной толпой во время жестокого гражданского восстания. Большую часть своей юности Сэмуэль провел скитаясь между приемными семьями, и у него не было другого выбора, кроме как вступить в армию США, где он овладел базовыми навыками пехотинца и продолжил карьеру уже в виде наемника.'
        },
        {
          id: 8,
          category: 'события',
          date: '13.05.2022',
          img: require('@/assets/img/posts/7.jpeg'),
          imgAlt: 'img',
          title: 'МЕТКИЙ ВЫСТРЕЛ: Т-15 «АРМАТА»',
          text: '<p>Примите участие в состязании — и получите возможность заработать ценные призы. В этот раз вам предстоит продемонстрировать свое мастерство на ИТ 10-го уровня Т-15 «Армата»!</p>'
        },
        {
          id: 9,
          category: 'от разработчиков',
          date: '13.05.2022',
          img: require('@/assets/img/posts/8.jpeg'),
          imgAlt: 'img',
          title: 'В РАЗРАБОТКЕ: TYPE 99B',
          text: '<p>Как следует из названия, Type 99B — это вариант основного боевого танка Type 99A, который вы все знаете и любите. С одной оговоркой — в реальной жизни его не существует. Это машина альтернативной истории, воплощенная в жизнь благодаря идее создать городской боевой вариант танка Type 99A. Основой для нее стал рендер, появившийся в китайской социальной сети Weibo в 2016 году, автором которого, возможно, является пользователь, указанный на изображении выше. По мнению автора рендера, наибольшие изменения по сравнению с Type 99A состоят:</p>'
        },
        {
          id: 10,
          category: 'события',
          date: '12.05.2022',
          img: require('@/assets/img/posts/9.jpeg'),
          imgAlt: 'img',
          title: 'PERIHELION: ОБНОВЛЕНИЕ №11',
          text: '<p>Сегодня мы хотели бы обновить статус события Perihelion.</p>'
        },
      ]
    }
  }
}
</script>
