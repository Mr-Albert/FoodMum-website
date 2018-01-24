var dummysideBarModel = require('../models/dummysideBarModel');
var dummytopBarModel = require('../models/dummytopBarModel');
var dummydataModel = require('../models/dummydataModel');
var userModel = require('../models/userModel');
var bcrypt = require('bcrypt');


exports.authenticate = function(username, password, role, done)  {
    if(!username || !password ) { return done(null, false); }

    userModel.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          var  salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(password, salt);
          var storedhash=user.getPasswordHash();
          if (bcrypt.compareSync(hash, storedhash) ) { return done(null, false); }
         // if (!user.havePermission()){ return done(null, false); }
          return done(null, user);
        });
     
    
};
exports.serializeUser=function(user,done)
{
    done(null, user.id);

}
exports.deserializeUser=function(id,done)
{
    done(null, userModel.getuser(id));

}
exports.authenticationMiddleware=function  () {
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/login')
    }
  }