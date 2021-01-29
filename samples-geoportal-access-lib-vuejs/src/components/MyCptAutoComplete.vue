<template>
    <div class="">

        <h2>Utilisation de Gp.Services.autoComplete() <a href="http://jsfiddle.net/ignfgeoportail/jsjqk4wq/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p> Restriction spatiale : </p>
                <select id="territory" v-model="territory.selected">
                    <option value="no">-Aucune-</option>
                    <option value="METROPOLE">Métropole</option>
                    <option value="DOMTOM">Outre-mer</option>
                    <option value="01">Ain</option>
                    <option value="20">Corse</option>
                    <option value="30">Gard</option>
                    <option value="75">Paris</option>
                    <option value="974">La Réunion</option>
                </select>
            <p> Type de localisants :
                <select id="localisant" v-model="localisant.selected">
                    <option value="PositionOfInterest">Toponymes</option>
                    <option value="StreetAddress">Adresses</option>
                </select>
            </p>
            <p> Localisant :
                <input v-on:keyup="suggest" type="text" id="location"/>
            </p>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
  name: "MyCptAutoComplete",
  components: {
      TheVersion
  },
  data : function () {
      return {
          localisant : {
              selected : "PositionOfInterest"
          },
          territory : {
              selected : "no"
          }
      };
  },
  methods: {
      suggest: function () {
          console.log(this.localisant.selected, this.territory.selected);
          var location = document.getElementById("location").value;
          var resultDiv = document.getElementById("result");
          var typeIdx = document.getElementById("localisant").selectedIndex;
          var typeValue= document.getElementById("localisant").options[typeIdx].value ;
          var geoIdx = document.getElementById("territory").selectedIndex;
          var geoValue= document.getElementById("territory").options[geoIdx].value ;
          var fo= {} ;
          if (geoValue && geoValue != "no") fo.territory= [geoValue] ;
          fo.type= [typeValue] ;
          try {
              Gp.Services.autoComplete({
                  text: location,
                  apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                  filterOptions: fo,
                  onSuccess: function(result) {
                      var resultStr= ""
                      if (result.suggestedLocations) {
                          for (var i=0 ; i<result.suggestedLocations.length; i++) {
                              var loc= result.suggestedLocations[i] ;
                              resultStr+= "<p>" + loc.fullText + "</p>" ;
                          }
                      }
                      resultDiv.innerHTML = resultStr ;
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
