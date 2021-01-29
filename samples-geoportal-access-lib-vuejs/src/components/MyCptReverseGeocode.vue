<template>
    <div class="">

        <h2>Utilisation de Gp.Services.reverseGeocode() <a href="http://jsfiddle.net/ignfgeoportail/4t0wfey5/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p>
                longitude :
                <input type="text" id="lon" size="10" value="2.4244"/>
                latitude :
                <input type="text" id="lat" size="10" value="48.8449"/>
            </p>
            <p>Type de Géocodage :
                <select id="type" v-model="selected">
                    <option value="PositionOfInterest">Toponymes</option>
                    <option value="StreetAddress">Adresses</option>
                    <option value="CadastralParcel">Parcelles Cadastrales</option>
                </select>
            </p>
            <p>
                rayon de recherche :
                <input type="text" id="rayon" size="5" value="100"/>
            </p>
        </div>

        <div id="go">
            <input v-on:click="go" type="button" value="reversegeocode"/>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
  name: "MyCptReverseGeocode",
  components: {
      TheVersion
  },
  data : function () {
      return {
          selected : "PositionOfInterest"
      };
  },
  methods: {
      go: function () {
          var lon = document.getElementById("lon").value;
          var lat = document.getElementById("lat").value;
          var typeIdx = document.getElementById("type").selectedIndex;
          var fo = {
              type: [document.getElementById("type").options[typeIdx].value]
          } ;
          var rayon= document.getElementById("rayon").value;
          if (rayon) {
              fo.circle= {
                  x: lat,
                  y: lon,
                  radius: rayon
              };
          }
          var resultDiv = document.getElementById("result");
          try {
              Gp.Services.reverseGeocode({
                  position: {
                      x: lat,
                      y: lon
                  },
                  filterOptions: fo,
                  srs: 'EPSG:4326',
                  apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                  onSuccess: function(result) {
                      resultDiv.innerHTML = "<p>" + JSON.stringify(result) + "</p>"
                  },
                  onFailure: function(error) {
                      resultDiv.innerHTML = "<p>" + error + "</p>"
                  }
              });
          } catch (e) {
              resultDiv.innerHTML = "<p>" + e + "</p>"
          }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
