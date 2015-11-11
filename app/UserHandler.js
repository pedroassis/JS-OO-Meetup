'package com.pedro'

'@RequestHandler("/user")'
function UserHandler (Users) {
    
    '@Get("/all")'
    this.fetchAll = function() {
        return Users;
    };
    
    '@Get("/id/:id")'
    this.getByID = function($id) {
        return {
            userID : $id,
            name : "aSDFGHJKL"
        };
    };

}

module.exports = UserHandler;