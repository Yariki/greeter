

(function(global, $){
    "use strict";

    var Greeter = function(firstName, lastName, language){
        return new Greeter.init(firstName,lastName,language);
    };

    var supportedLangs = ['en','ua'];

    var greetings = {
        en:'Hello',
        ua: 'Привіт'
    };

    var formalGreetings = {
        en:'Greetings',
        ua: 'Вельмишановний(а)'
    };

    var logMessages = {
        en:'Logged in',
        ua: 'Ввійшов(ла)'
    };



    Greeter.prototype = {

        fullname: function () {
            return this.firstName + ' '+ this.lastName;
        },
        validate: function () {
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting : function () {
            return formalGreetings[this.language] + ' ' +  this.fullname();
        },
        greet: function (formal) {
            var msg;
            if(!formal){
                msg = this.greeting();
            } else{
                msg = this.formalGreeting();
            }
            if(console){
                console.log(msg);
            }

            return this;
        },
        log: function () {
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            return this;
        },
        setLang: function (language) {
            this.language = language;
            this.validate();

            return this;
        },
        htmlGreeting: function (selector, formal) {
            if(!$){
                throw "jQuery not loaded";
            }
            if(!selector){
                throw "Missing selector";
            }
            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            $(selector).html(msg);

            return this;
        }
    };

    Greeter.init = function (firstName, lastName,language){
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    // trick borrowed from jQuery so we don't have to use 'new' keyword;
    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = global.g$ = Greeter;


})(window,jQuery);