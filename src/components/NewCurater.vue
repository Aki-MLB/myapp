<template>
<v-app>
    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">キュレーター応募</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field 
                prepend-icon="mdi-account-circle" 
                label="mail address" 
                v-model="mail"
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
                <v-btn class="info" @click="submit">ログイン</v-btn> 
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</v-app>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
    name: 'App',
    data(){
    return {
      showPassword : false,
      name:'',
      password:'',
    }
  },
    methods:{
    submit(){
      console.log(this.name,this.password)
    }
  },

});
</script>
