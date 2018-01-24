var dummysideBarModel = require('../models/dummysideBarModel');
var dummytopBarModel = require('../models/dummytopBarModel');
var dummydataModel = require('../models/dummydataModel');

exports.index = function (req, res) {
   // res.render('../views/Signup',{params:{title: 'Signup'  }});
 

heads=['<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>\
 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"> </script>\
  <script src="/javascripts/login.js"></script>\
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">\
  <link rel="stylesheet" type="text/css" href="/stylesheets/login.css"> '];



    res.render('login',{  userName:dummytopBarModel.userName,
        WebSiteName: dummysideBarModel.username,
        notifications: dummytopBarModel.notifications,
        pages: dummysideBarModel.pages,
        params:{title: 'Login',messege:dummydataModel.loginmsg,heads:heads}});
 /*    res.render('../views/Signup', {
        userName:dummytopBarModel.userName,
        WebSiteName: dummysideBarModel.username,
        notifications: dummytopBarModel.notifications,
        pages: dummysideBarModel.pages
    });*/
};