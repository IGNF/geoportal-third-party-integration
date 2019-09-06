import Component from '@ember/component';

export default Component.extend({
    actions: {
        suggest() {
            var location = document.getElementById("location").value;
            var resultDiv = document.getElementById("result");
            var typeIdx = document.getElementById("type").selectedIndex;
            var typeValue= document.getElementById("type").options[typeIdx].value ;
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
});
