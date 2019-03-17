
var app = angular.module("myApp", [])
app.controller("MyCtrl", ['$scope', function ($scope) {
    $scope.metatag = ["lmhomeboxae", "lmshoemartae", "lmsplashae", "lmhomecentreae", "lmcentrepointae", "lmlifestyleae", "lmmaxae", "lmbabyshopae",];
    var d = new Date();
    $scope.day = d.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    $scope.month = months[d.getMonth()];
    $scope.year = d.getFullYear() - 2000;
    $scope.Selected_Metatag = "";
    $scope.baseUrl = "";
    $scope.CampaignName1 = "PP_" + $scope.day + $scope.month + $scope.year + "_";
    $scope.CampaignName2 = "";
    $scope.CampaignName = "";
    $scope.Campaign_Url = "";
    $scope.Launch_URL = "";
    $scope.elementhide = true;
    $scope.editdate = false;
    $scope.dateRange= ($scope.day-7 )+ $scope.month + $scope.year+"|"+($scope.day-6 )+ $scope.month + $scope.year+"|"+($scope.day-5) + $scope.month + $scope.year+"|"+($scope.day-4) + $scope.month + $scope.year+"|"+($scope.day-3) + $scope.month + $scope.year+"|"+($scope.day-2) + $scope.month + $scope.year+"|"+($scope.day-1) + $scope.month + $scope.year;


    $scope.selectionMade = function () {


        console.log("done");

        var regex = /([/]sa|[/]bh|[/]en|[/]ae|[/]ar)/g;
        var regex_appender = /\?/g;
        var regex_http = /(https:[/][/]|http:[/][/])/g;
        var appendchar = '&';
        var found_next = "";
        var Launch_URL = "";
        $scope.editdate = false;

        var found = $scope.baseUrl.replace(regex, "/escWord");
        var found_appender = $scope.baseUrl.match(regex_appender);
        var found_http = $scope.baseUrl.match(regex_http);
        $scope.CampaignName = $scope.CampaignName1 + $scope.CampaignName2;

        $scope.tempCampaign_Url = found.replace("/escWord/escWord", "/[[COUNTRY_CODE]]/[[LANG_CODE]]");

        if ($scope.baseUrl != "" && $scope.CampaignName2 != "" && $scope.Selected_Metatag != "") {
            $scope.elementhide = false;

        } else {

            $scope.elementhide = true;
        }

        if (found_appender == null) {
            appendchar = '?';
        }

        if (found_http == null) {
            $scope.tempCampaign_Url = "https://" + $scope.baseUrl;
        }


        $scope.Campaign_Url = $scope.tempCampaign_Url + appendchar + "utm_source=App&utm_medium=Push&utm_campaign=" + $scope.CampaignName + "_[[COUNTRY_CODE]]_[[LANG_CODE]]";
        $scope.Launch_URL = $scope.tempCampaign_Url.replace(regex_http, $scope.Selected_Metatag + "://");

    };

    $scope.prestine = function () {
        $scope.Selected_Metatag = "";
        $scope.baseUrl = "";
        $scope.CampaignName = "";
        $scope.Campaign_Url = "";
        $scope.Launch_URL = "";
        $scope.elementhide = true;
        $scope.day = d.getDate();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        $scope.month = months[d.getMonth()];
        $scope.year = d.getFullYear() - 2000;
        $scope.CampaignName1 = "PP_" + $scope.day + $scope.month + $scope.year + "_";
        $scope.CampaignName2 = "";
        $scope.CampaignName = "";
        $scope.editdate = false;

    };

    $scope.setdate = function () {
        $scope.CampaignName1 = "PP_" + $scope.day + $scope.month + $scope.year + "_";
        $scope.CampaignName = $scope.CampaignName1 + $scope.CampaignName2;

    }


}]);


app.controller("CountCtrl", ['$scope', function ($scope) {
    
    $scope.copyToClipboard=function(flagg){
        var text = "You failed to click on the text";
        if (flagg == '1') {
            text = document.getElementById("title").textContent;

        } else {
            text = document.getElementById("description").textContent;

        }
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

    }

}]);

