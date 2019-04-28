$('#login').click(function () {

    var selectedLang = $('#lang').val();

    G$('John','Doe',selectedLang).htmlGreeting('#greeting',true);

});

