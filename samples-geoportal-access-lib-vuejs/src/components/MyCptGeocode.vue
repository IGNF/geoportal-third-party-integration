<template>
    <div class="">

        <h2>Utilisation de Gp.Services.geocode() <a href="http://jsfiddle.net/ignfgeoportail/saye4oaz/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p>Localisant à géocoder :
                <input type="text" id="location" value="Saint-Mandé"/>
            </p>
            <p>Reponse non structurée :
                <input type="checkbox" id="returnfreeform" v-model="checked"/>
            </p>
            <p>Critères de Filtrages :</p>
            <p>
                <input type="text" size="15" id="filterProp"/> :
                <input type="text" size="15" id="filterValue"/>
            </p>
            <p>Type de Géocodage :
                <select id="type" v-model="selected">
                    <option value="PositionOfInterest">Toponymes</option>
                    <option value="StreetAddress">Adresses</option>
                    <option value="CadastralParcel">Parcelles Cadastrales</option>
                    <option value="PositionOfInterest,StreetAddress">Toponymes et Adresses</option>
                </select>
            </p>
        </div>

        <div id="go">
            <input v-on:click="go" type="button" value="geocode"/>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
  name: "MyCptGeocode",
  components: {
      TheVersion
  },
  data : function () {
      return {
          selected : "PositionOfInterest",
          checked : false // status checkbox
      };
  },
  methods: {
      go: function () {
          var resultDiv = document.getElementById("result");
          var typeIdx = document.getElementById("type").selectedIndex;
          var filterProp = document.getElementById("filterProp").value;
          var filterValue = document.getElementById("filterValue").value;
          var location = document.getElementById("location").value;
          var returnfreeform = document.getElementById("returnfreeform").checked;
          var fo = {};
          if (filterProp && filterValue) fo[filterProp] = filterValue;
          fo.type = [document.getElementById("type").options[typeIdx].value];
          try {
              Gp.Services.geocode({
                  apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                  location: location,
                  returnFreeForm : returnfreeform,
                  filterOptions: fo,
                  onSuccess: function (result) {
                      resultDiv.innerHTML = "<p>" + JSON.stringify(result) + "</p>"
                  },
                  onFailure: function (error) {
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
