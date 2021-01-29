<template>
    <div class="">

        <h2>Utilisation de Gp.Services.route() <a href="http://jsfiddle.net/ignfgeoportail/g51jh882/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p>
                lon départ:
                <input type="text" id="lon1" size="10" value="2.4236"/>
                lat départ :
                <input type="text" id="lat1" size="10" value="48.8559"/>
            </p>
            <p>
                lon inter :
                <input type="text" id="lon2" size="10" value="2.4270"/>
                lat inter :
                <input type="text" id="lat2" size="10" value ="48.8556"/>
            </p>
            <p>
                lon arrivée:
                <input type="text" id="lon3" size="10" value="2.4282"/>
                lat arrivée :
                <input type="text" id="lat3" size="10" value="48.8455"/>
            </p>
            <p> Eviter :
                <input type="checkbox" id="toll" v-model="constraint.toll.checked"> péages
                <input type="checkbox" id="bridge" v-model="constraint.bridge.checked"> ponts
                <input type="checkbox" id="tunnel" v-model="constraint.tunnel.checked"> tunnels
            </p>
            <p>Graphe :
                <select id="graph" v-model="graph.selected">
                    <option value="Pieton">Piéton</option>
                    <option value="Voiture">Voiture</option>
                </select>
                Methode de calcul :
                <select id="method" v-model="method.selected">
                    <option value="fastest">le plus rapide</option>
                    <option value="shortest">le plus court</option>
                </select>
            </p>
        </div>

        <div id="go">
            <input v-on:click="go" type="button" value="route"/>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
  name: "MyCptRoute",
  components: {
      TheVersion
  },
  data : function () {
      return {
          constraint : {
              toll : {
                  checked : true
              },
              tunnel : {
                  checked : true
              },
              bridge : {
                  checked : true
              }
          },
          graph : {
              selected : "Pieton"
          },
          method : {
              selected : "fastest"
          }
      };
  },
  methods: {
      go: function () {
          var lon1 = document.getElementById("lon1").value;
            var lat1 = document.getElementById("lat1").value;
            var lon2 = document.getElementById("lon2").value;
            var lat2 = document.getElementById("lat2").value;
            var lon3 = document.getElementById("lon3").value;
            var lat3 = document.getElementById("lat3").value;
            var avoidFeatures = [];
            var noToll = document.getElementById("toll").checked;
            if (noToll) avoidFeatures.push("toll");
            var noBridge = document.getElementById("bridge").checked;
            if (noBridge) avoidFeatures.push("bridge");
            var noTunnel = document.getElementById("tunnel").checked;
            if (noTunnel) avoidFeatures.push("tunnel");
            var graphIdx = document.getElementById("graph").selectedIndex;
            var graph = document.getElementById("graph").options[graphIdx].value;
            var methodIdx = document.getElementById("method").selectedIndex;
            var method = document.getElementById("method").options[methodIdx].value;
            var resultDiv = document.getElementById("result");
              try {
                Gp.Services.route({
                  startPoint: {
                    x: lon1,
                    y: lat1
                  },
                  endPoint: {
                    x: lon3,
                    y: lat3
                  },
                  viaPoints: [{
                    x: lon2,
                    y: lat2
                  }],
                  graph: graph,
                  avoidFeature: avoidFeatures,
                  routePreference: method,
                  apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                  onSuccess: function(result) {
                    resultDiv.innerHTML = "<p>" + JSON.stringify(result) + "</p>" ;
                  },
                  onFailure: function(error) {
                    resultDiv.innerHTML = "<p>" + error + "</p>" ;
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
