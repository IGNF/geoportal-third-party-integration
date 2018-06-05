import Component from '@ember/component';

export default Component.extend({
    actions: {
        go() {
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
});
