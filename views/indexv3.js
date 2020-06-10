var app = angular.module('myApp', []);
app.controller('MyCtrl', [
  '$scope',
  function ($scope) {
    // $scope.thisone = "success";
    $scope.NitDevID = '17CBEDA2-BEF9-47D2-9CFC-C24ED460F4ED';
    $scope.NitEID = 'nitheesh.ashraf@landmarkgroup.com';
    $scope.campaignnamepart = [];
    $scope.concepts = ['HB', 'SM', 'SP', 'HC', 'CP', 'LS', 'MX', 'BS', 'MC'];
    $scope.checkedtoggle = false;
    $scope.hideutms = false;
    $scope.elementhide = true;

    $scope.metatag = [
      'lmhomeboxae',
      'lmshoemartae',
      'lmsplashae',
      'lmhomecentreae',
      'lmcentrepointae',
      'lmlifestyleae',
      'lmmaxae',
      'lmbabyshopae',
      'lmmothercareae',
    ];
    $scope.hometag = [
      'homeboxstores',
      'shoemartstores',
      'splashfashions',
      'homecentre',
      'centrepointstores',
      'lifestyleshops',
      'maxfashion',
      'babyshopstores',
      'mothercarestores',
    ];
    $scope.Audiences = [
      'ALL',
      'IOS',
      'AND',
      'WEB',
      'MALE',
      'FEMALE',
      'PLUSSIZE',
      'KIDS',
      'BABY',
      'NONSHOPPERS',
      'SHOPPERS',
      'CLICKED',
      'NOTCLICKED',
    ];
    $scope.days = [
      01,
      02,
      03,
      04,
      05,
      06,
      07,
      08,
      09,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ];
    $scope.months = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];

    // $scope.campaignnamepart[0] = "HC";
    // $scope.campaignnamepart[1] = "UAE";
    // $scope.campaignnamepart[2] = "AR";
    $scope.campaignnamepart[3] = 'RN';
    $scope.campaignnamepart[4] = 'PRM';
    $scope.campaignnamepart[5] = 'PUSH';
    $scope.campaignnamepart[6] = 'ALL';
    $scope.campaignnamepart[7] = '';
    $scope.campaignnamepart[8] = 'ON';

    $scope.campaignname = '';
    $scope.campaignnameen = '';
    $scope.campaignnamear = '';

    $scope.baseUrl = '';
    $scope.countryccode = '';
    $scope.pushtypes = ['AUT', 'PRM', 'TRN', 'ALL'];
    $scope.pushmode = ['ALL', 'PUSH', 'EMAIL'];
    $scope.lengthofutm = 9;
    $scope.countrycodes = ['SA', 'AE', 'BH', 'KW', 'EG', 'OM', 'QA'];
    $scope.countrycodeswithname = [
      'KSA',
      'UAE',
      'BAH',
      'KWT',
      'EGY',
      'OMN',
      'QTR',
    ];
    $scope.country = [
      /([/]sa)/g,
      /([/]ae)/g,
      /([/]bh)/g,
      /([/]kw)/g,
      /([/]eg)/g,
      /([/]om)/g,
      /([/]qa)/g,
    ];
    $scope.languagecodeswithname = ['EN', 'AR'];
    $scope.language = [/([/]en)/g, /([/]ar)/g];
    $scope.appender = '?';
    $scope.utmmedium = 'utm_source=App&utm_medium=Push&utm_campaign=';
    $scope.utmcontent = '';
    // date fetch
    var d = new Date();
    $scope.day = d.getDate();
    $scope.month = d.getMonth() + 1;
    $scope.year = d.getFullYear() - 2000;
    $scope.nowday = '';
    $scope.nowmonth = '';
    $scope.editdate = false;
    $scope.datefetch = function () {
      var checkDate = 0;
      if ($scope.day < 10 && checkDate != $scope.day) {
        $scope.day = '0' + $scope.day;
        checkDate = $scope.day;
        // todayis = checkDate;
      }
      var checkMonth = 0;

      if ($scope.month < 10 && checkMonth != $scope.month) {
        $scope.month = '0' + $scope.month;
        checkMonth = $scope.month;
        // todayis = checkMonth;
      }
      $scope.month = checkMonth;
      console.log($scope.day);
      console.log($scope.month);
      console.log($scope.year);
      $scope.utmcontent = $scope.day + $scope.month + $scope.year;
    };
    $scope.datefetch();

    $scope.conceptselector = function () {
      var countofhometag = 0;
      while (countofhometag < 9) {
        var found_metatag = $scope.baseUrl.match(
          $scope.hometag[countofhometag]
        );
        // console.log(found_metatag);
        if (found_metatag != null) {
          $scope.Selected_Metatag = $scope.metatag[countofhometag];
          $scope.campaignnamepart[0] = $scope.concepts[countofhometag];
          break;
        } else {
          countofhometag++;
        }
      }
    };

    $scope.countryselector = function () {
      var countofcountry = 0;

      while (countofcountry < $scope.countrycodes.length) {
        var found_country = $scope.baseUrl.match(
          $scope.country[countofcountry]
        );

        // console.log(found_country);
        if (found_country != null) {
          $scope.countryccode = $scope.countrycodes[countofcountry];
          $scope.campaignnamepart[1] =
            $scope.countrycodeswithname[countofcountry];
          break;
        } else {
          countofcountry++;
        }
      }
    };

    $scope.languageselector = function () {
      var countoflanguage = 0;

      while (countoflanguage < $scope.languagecodeswithname.length) {
        var found_language = $scope.baseUrl.match(
          $scope.language[countoflanguage]
        );

        // console.log(found_language);
        if (found_language != null) {
          $scope.languageccode = $scope.languagecodeswithname[countoflanguage];
          $scope.campaignnamepart[2] =
            $scope.languagecodeswithname[countoflanguage];
          break;
        } else {
          countoflanguage++;
        }
      }
    };

    $scope.showhide = function () {
      if ($scope.baseUrl == '' || $scope.campaignnamepart[7] == '') {
        $scope.elementhide = true;
      } else {
        $scope.elementhide = false;
      }
    };
    $scope.appenderchange = function () {
      var regex_appender = /\?/g;
      var found_appender = $scope.baseUrl.match(regex_appender);
      if (found_appender == null) {
        $scope.appender = '?';
      } else {
        $scope.appender = '&';
      }
    };

    $scope.generateurls = function () {
      $scope.Launch_URL_Ter = '';
      $scope.Campaign_Url_Ter = '';

      $scope.Launch_URL_Ter = $scope.Selected_Metatag + $scope.baseUrl;
      $scope.Campaign_Url_Ter =
        $scope.baseUrl +
        $scope.appender +
        $scope.utmmedium +
        $scope.campaignnameen;
    };

    $scope.generateutmname = function () {
      $scope.conceptselector();
      $scope.countryselector();
      $scope.languageselector();
      $scope.campaignname = '';
      $scope.campaignnamepart[7] = angular.uppercase(
        $scope.campaignnamepart[7]
      );
      $scope.campaignnamepart[7] = $scope.campaignnamepart[7].replace(' ', '');
      $scope.campaignnamepart[7] = $scope.campaignnamepart[7].replace('_', '');
      $scope.campaignnamepart[7] = $scope.campaignnamepart[7].replace(',', '');
      $scope.campaignnamepart[7] = $scope.campaignnamepart[7].replace('-', '');
      $scope.campaignnamepart[7] = $scope.campaignnamepart[7].replace('.', '');
      if ($scope.campaignnamepart[5] == 'WEB') {
        $scope.hideutms = true;
      } else {
        $scope.hideutms = false;
      }

      $scope.campaignname = '';
      for (i = 0; i < $scope.lengthofutm; i++) {
        if (i != 2) {
          if (i == 0) bitpadding = '';
          $scope.campaignname += bitpadding + $scope.campaignnamepart[i];
          var bitpadding = '-';
          if (i == 1) {
            bitpadding = '[';
          } else if ($scope.campaignnamepart[i] == '' || i == 7) {
            bitpadding = ']';
          }
        }
      }
      $scope.campaignname = angular.uppercase($scope.campaignname);
      $scope.campaignnameen = $scope.campaignname.replace('[', '[EN-');

      $scope.generateurls();
      $scope.appenderchange();
      $scope.showhide();
    };
  },
]);
