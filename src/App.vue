<template>
  <v-app>
    <Header v-if = "!isloggedIn">
    </Header>
    <AuthHeader v-if = "isLoggedIn">
    </AuthHeader>
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
import AuthHeaderComponent from "@/components/AuthHeader.vue";
import FooterComponent from "@/components/Footer.vue";
import HomeComponent from "@/components/Home.vue";

export default defineComponent({
  components: {
    Header: HeaderComponent,
    AuthHeader: AuthHeaderComponent,
    Home: HomeComponent,
    Footer: FooterComponent
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.idToken !== null;
    }
  }
});
</script>