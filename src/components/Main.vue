<template>
<section class="main">
    <v-container fluid fill-height class="main__content">
        <v-row>
            <v-col class="main__content-text">
                <p>Japan</p>
                <p>submit</p>
            </v-col>
        </v-row>
        <v-row class="icons__content">
            <v-col md="4"> 
                <v-btn to="register" rounded color="indigo" class="white--text font-weight-bold">
                新規登録
                </v-btn>
            </v-col>
            <v-col md="4">
                <v-btn to="login" rounded color="pink" class="white--text font-weight-bold">
                ログイン
                </v-btn>
            </v-col>
            <v-col md="4">
                <v-btn to="application" rounded color="cyan" class="white--text font-weight-bold">
                キュレーター応募
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
});
</script>

<style lang="scss" scoped>
.main__content{
    background: url("../assets/back.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;

    @include display_pc{
        height: 100vh;
    }

    &-text{
        color: white;
        text-align:center;
        font-size:28px;
        font-weight: bold;

        @include display_pc{
            font-size: 80px;
            padding-right: 50%;
            padding-top: 5%;
        }
    }
}
.icons__content{
    text-align: center;
    padding-right: 20%;
    padding-left: 20%;
    padding-bottom: 10%;
}
</style>