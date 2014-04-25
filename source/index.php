<!doctype html>
<html lang="en" ng-app="myApp">
<head>
  <meta charset="utf-8">
  <title>My Calabrian Seed App</title>
  <link href='assets/styles/css/style.css' rel='stylesheet' type='text/css'>
</head>
<body>
  <body>
    <div class='top'>
      <div class='main'>
        <ul class="menu">
         <li><a href="#/view1">view1</a></li>
          <li><a href="#/view2">view2</a></li>
        </ul>
        <div ng-view></div>
      </div>

    </div>
    <div class='contentinfo'></div>
  </body>
  

  

  <div>Angular seed app: v<span app-version></span></div>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
  -->
  <script src="assets/lib/angular/angular.js"></script>
  <script src="assets/lib/angular/angular-route.js"></script>
  <script src="assets/js/app.js"></script>
  <script src="assets/js/services.js"></script>
  <script src="assets/js/controllers.js"></script>
  <script src="assets/js/filters.js"></script>
  <script src="assets/js/directives.js"></script>
</body>
</html>
