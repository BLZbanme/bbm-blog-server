const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const keys = require('./keys.js');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
const User = require('../models/Users');

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async function(jwt_payload, done) {
            const user = await User.findById(jwt_payload.id);
            // const user = await User.findOne(
            //     {
            //         name: jwt_payload.name
            //     }
            // );
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
    }));
}