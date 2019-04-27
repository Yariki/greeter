

(function(global, $){
    "use strict";

    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName,lastNamem,language);
    };

    Greeter.prototype = {};

    Greeter.init = function (firstName, lastName,language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    Greeter.init.prototype = Greeter.prototype;




})(window,jQuery);