<template>
    <div id="app">

        <TheHeader title="Exemples d'utilisation de l'API des Services"/>

        <div class="header-vuejs">
            <p class="">
                <a href="http://ignf.github.io/geoportal-access-lib/">
                    <img src="./assets/logoIGN.png" alt="IGN" width="94" height="100">
                </a>
            </p>
            <h1>Accès à la <a href="http://ignf.github.io/geoportal-access-lib/latest/jsdoc/">JSDOC</a> de la bibliothèque d’accès aux services</h1>
        </div>

        <TheListSample/>

        <router-view></router-view>

        <TheFooter/>

    </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import TheListSample from "./components/TheListSample";

export default {
  name: "App",
  components: {
    TheHeader,
    TheListSample,
    TheFooter
  }
};
</script>

<style>
#app {

}
.header-vuejs {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
</style>
