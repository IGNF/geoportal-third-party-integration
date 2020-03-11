<template>
    <div id="samples">
        Liste des exemples :
        <ul>
            <li><router-link to="/geocode" class="button">[Géocoder des adresses, toponymes et parcelles cadastrales](geocode)</router-link></li>
            <li><router-link to="/autocomplete" class="button">[Obtenir des suggestions d'adresses ou de toponymes à partir de textes incomplets](autocomplete)</router-link></li>
            <li><router-link to="/reversegeocode" class="button">[Obtenir des localisants (toponymes, adresses, parcelles cadastrales) proche d'une position donnée](reverseGeocode)</router-link></li>
            <li><router-link to="/alti" class="button">[Obtenir des altitudes en un ou plusieurs points ou calculer des profils altimétriques](alti)</router-link></li>
            <li><router-link to="/route" class="button">[Calculer un itinéraire piéton ou routier](route)</router-link></li>
            <li><router-link to="/isocurve" class="button">[Calculer des isochrones / isodistances autour d'un point](isoCurve)</router-link></li>
            <li><router-link to="/getconfig" class="button">[Obtenir des informations relatives à un contrat d'accès au Géoportail](getConfig)</router-link></li>

        </ul>
    </div>
</template>

<script>
export default {
  name: "TheListSample"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#samples {}
</style>
