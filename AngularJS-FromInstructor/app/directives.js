app.directive('movie', function(){
    return{
        restrict: 'E',
        scope: {
            title: '@',
            released: '@',
            id:'@'
        },
        template: '<a ng-href="#/movie/{{id}}">{{title}} ({{released}})</a>'
    }
});