<template>
    <div class="">

        <h2>Utilisation de Gp.Services.isoCurve() <a href="http://jsfiddle.net/ignfgeoportail/od5pf6qw/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p>
                longitude :
                <input type="text" id="lon" size="10"/>
                latitude :
                <input type="text" id="lat" size="10"/>
            </p>
            <p>
                <input type="checkbox" value="true" id="reverse" v-model="checked"> Position d'arrivée
            </p>
            <p>Methode de calcul :
                <select id="method" v-model="method.selected">
                    <option value="time">Isochrones</option>
                    <option value="distance">Isodistances</option>
                </select>
            </p>
            <p>
                Limite de temps (secondes) ou de distance (m)
                <input type="text" id="limit" size="10"/>
            </p>
            <p>Graphe :
                <select id="graph" v-model="graph.selected">
                    <option value="Pieton">Piéton</option>
                    <option value="Voiture">Voiture</option>
                </select>
            </p>
        </div>

        <div id="go">
            <input v-on:click="go" type="button" value="isocurve"/>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
  name: "MyCptIsoCurve",
  components: {
      TheVersion
  },
  data : function () {
      return {
          checked : true, // status checkbox
          graph : {
              selected : "Pieton"
          },
          method : {
              selected : "distance"
          }
      };
  },
  methods: {
      go: function () {
          var lon = document.getElementById("lon").value;
          var lat = document.getElementById("lat").value;
          var reverse= document.getElementById("reverse").checked;
          var limit = document.getElementById("limit").value;
          var graphIdx = document.getElementById("graph").selectedIndex;
          var graph = document.getElementById("graph").options[graphIdx].value ;
          var methodIdx = document.getElementById("method").selectedIndex;
          var method = document.getElementById("method").options[methodIdx].value ;
          var resultDiv = document.getElementById("result");
          try {
              Gp.Services.isoCurve({
                  position: {
                      x: lon,
                      y: lat
                  },
                  time: (method=="time" ? limit : null),
                  distance: (method=="distance" ? limit : null),
                  graph: graph,
                  reverse: reverse,
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
