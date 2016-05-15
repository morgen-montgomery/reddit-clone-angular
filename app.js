var app = angular.module("RedditClone", []);

app.controller("PostFields", function() {
  $scope.view = {};
  $scope.post = [];
  $scope.view.title = '';
  $scope.view.author = '';
  $scope.view.imgTag = '';
  $scope.view.description = '';
})
