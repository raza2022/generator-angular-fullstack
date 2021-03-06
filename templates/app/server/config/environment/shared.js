'use strict';
/*eslint no-process-env:0*/

module.exports.default = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || <%= devPort %>,
    // List of user roles
    userRoles: ['guest', 'user', 'admin']
};
