var dummysideBarModel = require('../models/dummysideBarModel');
var dummytopBarModel = require('../models/dummytopBarModel');

exports.index = function (req, res) {
   // res.render('../views/Signup',{params:{title: 'Signup'  }});

    res.render('../views/Signup', {
        userName:dummytopBarModel.userName,
        WebSiteName: dummysideBarModel.username,
        notifications: dummytopBarModel.notifications,
        pages: dummysideBarModel.pages
    });
};