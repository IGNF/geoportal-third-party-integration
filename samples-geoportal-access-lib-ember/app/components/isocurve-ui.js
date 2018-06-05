import Component from '@ember/component';

export default Component.extend({
    actions: {
        go() {
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
});
