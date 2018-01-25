var dummysideBarModel = require('../models/dummysideBarModel');
var dummytopBarModel = require('../models/dummytopBarModel');
var dummydataModel = require('../models/dummydataModel');
var userModel = require('../models/userModel');
var bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local-roles');


exports.authenticate =function (req,username, password, done){
  console.log(done);
  
  
  //if(!username || !password ) { return done(null, false); }

  var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';

  
    //if (err) return done("");

        //return "";//done(null, false,"");

   

   return done(null,"");

  };

/*function(username, password, done)  {
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
     
    
};*/







exports.serializeUser=function(user,done)
{
    done(null,0);

}
exports.deserializeUser=function(id,done)
{
    done(null,  { firstName: 'Foo', lastName: 'Bar' });

}
exports.authenticationMiddleware=function  () {
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.redirect('/login')
    }
  }