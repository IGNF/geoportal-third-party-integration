<template>
    <div id="info">
        <p> Bibliothèque d'accès version {{version}} ( {{date}} )</p>
    </div>
</template>

<script>
import Gp from "geoportal-access-lib";

export default {
    name: "TheVersion",
    data : function () {
        return {
            version : Gp.servicesVersion,
            date : Gp.servicesDate
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
