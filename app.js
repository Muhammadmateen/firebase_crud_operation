/**
 * Created by Mateen Bhai on 1/21/2016.
 */


var app = angular.module("myApp",['firebase']);

app.controller("indexCtrl",['$firebaseArray','$firebaseObject',abc]);

function abc($firebaseArray,$firebaseObject)
{

    var _self = this;

    var ref = new Firebase("https://practiceabc.firebaseio.com");


    var childRef = ref.child("/names");
    console.log(childRef);


    _self.objData = $firebaseObject(ref);
    _self.arrayData = $firebaseArray(ref);



}