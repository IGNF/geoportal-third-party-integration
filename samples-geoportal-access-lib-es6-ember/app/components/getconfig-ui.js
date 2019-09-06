import Component from '@ember/component';

export default Component.extend({
    actions: {
        go() {
            var apiKey = document.getElementById("apiKey").value;
            var resultDiv = document.getElementById("result");
            var rawResultDiv = document.getElementById("rawResult");
            try {
                Gp.Services.getConfig({
                    apiKey: apiKey,
                    onSuccess: function(result) {
                        rawResultDiv.innerHTML = "<p>" + JSON.stringify(result) + "</p>";
                        // interpretation des resultats
                        var strResult = "";
                        var lconf = result.getLayersConf(apiKey);
                        // droits
                        strResult += "<b>Ressources disponibles (" + Object.keys(lconf).length + ")</b> : <br/>";
                        for (var lk in lconf) {
                            var lstr = "";
                            lstr += lconf[lk].title + ' (' + lconf[lk].name + ') - service : ' + lconf[lk].serviceParams.id;
                            strResult += "* " + lstr + "<br/>";
                        }
                        // WMTS layer conf
                        strResult += "<br/><b>Paramètres de la couche WMTS ORTHOIMAGERY.ORTHOPHOTOS</b> :</br>";
                        var lortho = lconf["ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS"];
                        if (lortho) {
                            strResult += "* server URL : " + lortho.serviceParams.serverUrl[apiKey] + "<br/>";
                            strResult += "* layerName : " + lortho.name + "</br>";
                            strResult += "* projection : " + lortho.defaultProjection + "</br>";
                            strResult += "* format : " + lortho.formats[0].name + "</br>";
                            strResult += "* style : " + lortho.styles[0].name + "</br>";
                            strResult += "* tms : " + lortho.wmtsOptions.tileMatrixSetLink + "</br>...";
                        }
                        // TMS..
                        strResult += "<br/><b>TileMatrixSets disponibles</b> :</br>";
                        var tmss = result.getTileMatrixSets();
                        for (var tms in tmss) {
                            strResult += "* " + tms + " (" + tmss[tms].projection + ")<br/>";
                        }

                        resultDiv.innerHTML = "<p>" + strResult + "</p>";

                    },
                    onFailure: function(error) {
                        rawResultDiv.innerHTML = "<p>" + error + "</p>";
                    }
                });
            } catch (e) {
                rawResultDiv.innerHTML = "<p>" + e + "</p>";
            }
        }
    }
});
