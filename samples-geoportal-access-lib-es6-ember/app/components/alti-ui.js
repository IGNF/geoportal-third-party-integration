import Component from '@ember/component';

export default Component.extend({
    actions: {
        go() {
            var lon1 = document.getElementById("lon1").value;
            var lat1 = document.getElementById("lat1").value;
            var lon2 = document.getElementById("lon2").value;
            var lat2 = document.getElementById("lat2").value;
            var zonly= document.getElementById("zonly").checked;
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
});
