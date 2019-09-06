import Component from '@ember/component';

export default Component.extend({
    actions: {
        go() {
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
});
