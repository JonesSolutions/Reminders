/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

class Start {
    myModule: ng.IModule;
    myController: ng.IModule;
    public doCreate(angular: ng.IAngularStatic, sfn: Function) {
        this.myModule = angular.module('tsAngularApp', []);
        this.myController = this.myModule.controller('HelloWorld', [sfn]);
    }
}

new Start().doCreate(angular, Reminders.Controllers.HelloWorld);