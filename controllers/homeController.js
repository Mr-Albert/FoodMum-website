var dummysideBarModel = require('../models/dummysideBarModel');
var dummytopBarModel = require('../models/dummytopBarModel');
var dummydataModel = require('../models/dummydataModel');

exports.index = function (req, res) {
   // res.render('../views/Signup',{params:{title: 'Signup'  }});
 




    res.render('home',{  userName:dummytopBarModel.userName,
        WebSiteName: dummysideBarModel.username,
        notifications: dummytopBarModel.notifications,
        pages: dummysideBarModel.pages,
        params:{title: 'Home',messege:dummydataModel.loginmsg }});
 /*    res.render('../views/Signup', {
        userName:dummytopBarModel.userName,
        WebSiteName: dummysideBarModel.username,
        notifications: dummytopBarModel.notifications,
        pages: dummysideBarModel.pages
    });*/
};