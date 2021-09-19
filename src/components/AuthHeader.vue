<template>
  <v-app-bar app light>
    <v-toolbar-title>Japan Submit</v-toolbar-title>
     <v-text-field
   v-model="message"
   label="Message"
   type="text"
 >
 <template v-slot:append-outer></template>
   <v-btn color="primary" v-if="isloggedIn">検索</v-btn>
</v-text-field>
    <v-spacer></v-spacer>
    <v-tabs>
      <v-tab v-for="(authItem, index) in authItems" :key="index">
        {{ menuItem.name }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import constants from "@/common/constants";

export default defineComponent({
  data() {
    return {
      drawer: false,
      authItems: constants.authItems,
    };
  }
});
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 20px !important;
}
</style>
