'package com.pedro'

'@RequestHandler("/user")'
function UserHandler (q) {
    
    
    '@Get("/all")'
    this.fetchAll = function() {
        var deferred = q.defer();
        setTimeout(function () {
            deferred.resolve({name : "pedro"});
        }, 5000);
        
        return deferred.promise;
    };
    

}

module.exports = UserHandler;