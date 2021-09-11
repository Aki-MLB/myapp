<template>
  <v-app>
    <Header>
    </Header>
  <v-content>
    <router-view>
      <Home>
      </Home>
    </router-view>
  </v-content>
  <Footer></Footer>
  </v-app>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
import HomeComponent from "@/components/Home.vue";

export default defineComponent({
  components: {
    Header: HeaderComponent,
    Home: HomeComponent,
    Footer: FooterComponent
  },
});
</script>