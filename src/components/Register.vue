<template>
<v-app>
    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">新規登録</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field 
                prepend-icon="mdi-account-circle" 
                label="email address"
                v-model="email"
                />
                <v-text-field 
                v-bind:type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                prepend-icon="mdi-lock"
                v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                label="password"
                v-model="password" 
                />
                <v-card-actions>
                <v-btn class="info" @click="register()">メール送信</v-btn> 
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</v-app>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import axios from '@/plugins/axios-for-auth.js'

export default defineComponent({
    name: 'App',
    data(){
    return {
      showPassword : false,
      email:'',
      password:'',
    }
  },
    methods:{
    register(){
      axios.post(
        '/accounts:signUp?key=AIzaSyA3vtf5jZbv_W6NuF5GedwZleGvqKnbDew',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then((response) => {
        this.$store.commit('updateIdToken', response.data.idToken);
        this.$router.push('/dashboard');
      });
      this.email = "";
      this.password = "";
    }
  }
  },
);
</script>
