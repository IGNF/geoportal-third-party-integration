<template>
    <div class="">

        <h2>Utilisation de Gp.Services.getAltitude() <a href="http://jsfiddle.net/ignfgeoportail/owxffaf3/embedded/result,js,html,css/">(jsfiddle)</a>.</h2>

        <div id="params">
            <p>
                longitude 1 :
                <input type="text" id="lon1" size="10" value="2.4244"/>
                latitude 1 :
                <input type="text" id="lat1" size="10" value="48.8449"/>
            </p>
            <p>
                longitude 2 :
                <input type="text" id="lon2" size="10" value="2.4236"/>
                latitude 2 :
                <input type="text" id="lat2" size="10" value="48.8459"/>
            </p>
            <p>
                sampling (nombre de points intermédaires) :
                <input type="text" id="sampling" size="5" value="10"/>
            </p>
            <p>
                zonly
                <input type="checkbox" id="zonly" v-model="checked"/>
            </p>
        </div>

        <div id="go">
            <input v-on:click="go" type="button" value="getAltitude"/>
        </div>

        <div id="result"></div>

        <TheVersion/>

    </div>
</template>

<script>
import Gp from "geoportal-access-lib";
import TheVersion from "./TheVersion";

export default {
    name: "MyCptAlti",
    components: {
        TheVersion
    },
    data : function () {
        return {
            checked : false // status checkbox
        };
    },
    methods: {
        go: function () {
            var lon1 = document.getElementById("lon1").value;
            var lat1 = document.getElementById("lat1").value;
            var lon2 = document.getElementById("lon2").value;
            var lat2 = document.getElementById("lat2").value;
            var zonly= this.checked;
            var sampling = document.getElementById("sampling").value;
            var resultDiv = document.getElementById("result");
            var positions = [];
            if (lon1 && lat1) positions.push({
                lon: lon1,
                lat: lat1
            });
            if (lon2 && lat2) positions.push({
                lon: lon2,
                lat: lat2
            });
            try {
                Gp.Services.getAltitude({
                    positions: positions,
                    sampling: sampling,
                    apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
                    zonly:zonly,
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
