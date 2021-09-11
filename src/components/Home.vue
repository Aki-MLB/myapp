<template>
  <section class="main">
    <Main>
    </Main>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import MainComponent from "@/components/Main.vue";

export default defineComponent({
  components: {
    Main: MainComponent,
  },
});
</script>

<style lang="scss" scoped>
.main{
  padding-bottom:50px;
}
</style>