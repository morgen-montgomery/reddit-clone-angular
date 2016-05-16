var app = angular.module("redditClone", []);

app.controller("PostFields", function($scope) {
  $scope.view = {};
  $scope.post = [];
  $scope.view.title = '';
  $scope.view.author = '';
  $scope.view.imgTag = '';
  $scope.view.description = '';
  $scope.submit = function() {
    $scope.post.push($scope.view);
    $scope.view = {};
    console.log($scope.view);
  }
  $scope.reset = function() {
    $scope.post = [];
  }
})

app.controller("MainController", ['$scope', function($scope) {
  $scope.title = 'Reddit Clone'
  $scope.posts = [
    {
      title: 'Socotra Skyline',
      author: 'Morgen F',
      img: 'http://api.ning.com/files/5Y36hMbSNo9NOgUVXxbW6texH1-oUjaYa*CHOB7oFh3pjfs6gRSGVh84nNEdRDCzEQQaRnPJEyrLYrpQd*KCyeRTn2M1v*dg/quora_com_.jpg',
      desc: "'Dragon Trees' on the desolate island of Socotra.  Located in Yemen, Socotra is one of the most beautiful, untouched, places on the Earth.",
      pubdate: new Date('2016', '05', '16'),
      likes: 0
    }
  ];
  $scope.plusOne = function(index) {
    $scope.posts[index].likes += 1;
  };
}]);
