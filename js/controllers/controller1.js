angular.module('unicornio').controller('Template1Controller', Template1Controller)

function Template1Controller($scope,$firebaseArray,$state) {
    $scope.querer = function() {
        $state.go('le-emocao')
    }
}
