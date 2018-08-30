$(document).ready(function(){
  $("#hide-menu").click(function(){
    $("#full-view").toggleClass("mob-hide-menu");
  });
  $("#hide-menu1").click(function(){
    $("#full-view").toggleClass("mob-hide-menu");
  });
  $("#mck-contact-list").click(function(){
    $("#full-view").removeClass("mob-hide-menu");
  });
  $("#show-option").click(function(){
    $(".user-option").toggleClass("active");
  });
  $("#close-menu").click(function(){
    $(".user-option").removeClass("active");
  });
  $("#close_menu").click(function(){
    $(".user-option").removeClass("active");
  });
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/windows phone/i.test(userAgent)) {
          $("#page-top").addClass("Windows");
      }
      else if (/android/i.test(userAgent)) {
          $("#page-top").addClass("Android");
      }
     else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          $("#page-top").addClass("iOS");
      }

});
$("#mck-text-box").blur();

var noAccess = localStorage.homeUrl;

window.onload = intializeChat;
/**
 *this method logs in a user.
 */
function intializeChat() {
// test raj@simplyweight.co.uk 2408
// 		var appId = "simplyweight28c4ce7c983ad3ee07";
  var appId = "applozic-sample-app";
    var userId = localStorage.uid;
      var pass = "Sw"+localStorage.uid;
    var userName = localStorage.uname;
    var noAccess = localStorage.homeUrl;
    if(localStorage.uimg != "/public/user/"){
       var imageLink = localStorage.uimg;
    }
    else{
        var imageLink ="";
    }
    if (userId == 2752 ) {
       // || userId == 2792
           userId = '8';
           pass = 'test';
      } else if (userId == 2792 ) {
           userId = '000';
           pass = 'test';
      } else if (userId == 2760 ) {
           userId = '7';
           pass = 'test';
      } else if (userId == 2771 ) {
           userId = '6';
           pass = 'test';
      } else if (userId == 2840 || userId == 2408) {
           userId = '5';
           pass = 'test';
      } else if (userId == 2855 ) {
           userId = '4';
           pass = 'test';
      } else if (userId == 2730 ) {
           userId = '3';
           pass = 'test';
      } else if (userId == 2879 ) {
           userId = '2';
           pass = 'test';
      } else if (userId == 2860 ) {
           userId = '10';
           pass = 'test';

      } else if (userId == 2837 ) {
           userId = '101';
           pass = 'test';
      } else if (userId == "2889" ) {
           userId = 'hello@simplyweight.co.uk';
           pass = 'Swdev2018!';
      }

   // var userImg = localStorage.uimg;
    if(typeof userId === "undefined" || typeof userId == ""){
          alert("Sorry, you don't have access for chat try again later");
         window.location.href = noAccess;
    }
    else{
   sessionStorage.clear();
   localStorage.clear();
   var contactsJSON = [{
        "userId": "hello@simplyweight.co.uk",
        "displayName": "simplyweight"
    }];
$applozic.fn.applozic({
                    baseUrl : 'https://apps-test.applozic.com',
                    appId: "applozic-sample-app",
                    userId: "debug5",
                    userName: "debug5",
                    imageLink: imageLink,
                    email: '',
                    contactNumber: '',
                    desktopNotification: true,
                    source: '1',
                    notificationIconLink: 'https://www.simplyweight.co.uk/images/chat_group/icon-01.jpg',
                    authenticationTypeId: 1,
                    accessToken: 'debug5',
                    locShare: true,
                    googleApiKey: "",
                    googleMapScriptLoaded: false,
                    //   mapStaticAPIkey: "AIzaSyCWRScTDtbt8tlXDr6hiceCsU83aS2UuZw",
                    autoTypeSearchEnabled: true,
                    loadOwnContacts: true,
                    olStatus: true,
                    onInit: function(response) {
                        if (response.status === "success") {
                            var settings = {
                                "async": true,
                                "crossDomain": true,
                                "url": "https://apps.applozic.com/rest/ws/group/add/member",
                                "method": "POST",
                                "headers": {
                                  "apz-appid": "simplyweight2061797dbdcdcd0d8f",
                                  "apz-token": "Basic aGVsbG9Ac2ltcGx5d2VpZ2h0LmNvLnVrOlN3ZGV2MjAxOCE=",
                                  "content-type": "application/json",
                                  "of-user-id": "hello@simplyweight.co.uk",
                                },
                                "processData": false,
                                "data": " { \r\n\t\"userId\":\""+userId+"\",\r\n    \"clientGroupId\":\"9340532\" \r\n }"
                              }
                              $.ajax(settings).done(function (response) {
                                console.log(response);
                              });
                           // $applozic.fn.applozic('addGroupMember',{'groupId': "9340532",'userId': userId,'role' :  3,'callback': function(response) {}});
                            document.getElementById("full-view").classList.remove('n-vis');

                            document.getElementById("full-view").classList.add('vis');
                            $applozic.fn.applozic('loadGroupTab', '9340532');
                            $applozic.fn.applozic('loadContacts', { "contacts": contactsJSON });
                            // login successful, perform your actions if any, for example: load contacts, getting unread message count, etc
                        } else {
                            // error in user login/register (you can hide chat button or refresh page)
                        }
                    },
                    contactDisplayName: function(otherUserId) {
                        //return the display name of the user from your application code based on userId.
                       // return "";
                    },
                    contactDisplayImage: function(otherUserId) {
                        //return the display image url of the user from your application code based on userId.
                        return "";
                    },
                    onTabClicked: function(response) {
                        // write your logic to execute task on tab load
                        //   object response =  {
                        //    tabId : userId or groupId,
                        //    isGroup : 'tab is group or not'
                        //  }
                    }

            });
}

}
  function readMessage() {
    //console.log(userId);
  }
  //Callback Function to return display name by userId
  /*  function displayName(userId) {
        //Todo: replace this with users display name
        var contact = contacts[userId];   // contacts sample given above
        if (typeof contact !== 'undefined') {
            return contact.displayName;
        }
    }*/
  //Callback Function to return contact image url by userId
  /*  function contactImageSrc(userId) {
        var contact = contacts[userId]; // contacts sample given above
        if (typeof contact !== 'undefined') {
            return contact.imageLink;
        }
    }*/
  //callback function execute after plugin initialize.
  function onInitialize(response,data) {
    if (response.status === 'success') {

      // $applozic.fn.applozic('loadContacts', {'contacts':contactsJSON});
      // $applozic.fn.applozic('loadTab', 'shanki.connect');
      //write your logic exectute after plugin initialize.
    } else {
      alert(response.errorMessage);
      window.location.href = noAccess;
    }
  }
