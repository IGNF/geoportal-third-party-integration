<template>
    <div id="samples">
        Liste des exemples :
        <ul>
            <li><router-link to="/geocode" class="button">Geocodage</router-link> [Géocoder des adresses, toponymes et parcelles cadastrales]</li>
            <li><router-link to="/autocomplete" class="button">Autocompletion</router-link> [Obtenir des suggestions d'adresses ou de toponymes à partir de textes incomplets]</li>
            <li><router-link to="/reversegeocode" class="button">Geocodage inverse</router-link> [Obtenir des localisants (toponymes, adresses, parcelles cadastrales) proche d'une position donnée]</li>
            <li><router-link to="/alti" class="button">Calcul altimétrique</router-link> [Obtenir des altitudes en un ou plusieurs points ou calculer des profils altimétriques]</li>
            <li><router-link to="/route" class="button">Calcul d'itinéraire</router-link> [Calculer un itinéraire piéton ou routier]</li>
            <li><router-link to="/isocurve" class="button">Calcul d'isochrone</router-link> [Calculer des isochrones / isodistances autour d'un point]</li>
            <li><router-link to="/getconfig" class="button">Autoconfiguration</router-link> [Obtenir des informations relatives à un contrat d'accès au Géoportail]</li>

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
