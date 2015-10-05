/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
var Start = (function () {
    function Start() {
    }
    Start.prototype.doCreate = function (angular, sfn) {
        this.myModule = angular.module('tsAngularApp', []);
        this.myController = this.myModule.controller('HelloWorld', [sfn]);
    };
    return Start;
})();
new Start().doCreate(angular, Reminders.Controllers.HelloWorld);
//# sourceMappingURL=Start.js.map