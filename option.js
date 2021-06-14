// salvare full name, email e indirizzo nel local storage e fare check se nell'autofill sono uguali 

window.onload = function(){ 

    var options_month = "";
    for(var i = 1 ; i <= 12; i++){
        options_month += "<option value='" + i +"'>"+ i +"</option>";
    }
    document.getElementById("card_month").innerHTML = options_month;

    var options_year = "";
    for(var i = 21 ; i <= 50; i++){
        options_year += "<option value='" + i +"'>"+ i +"</option>";
    }
    document.getElementById("card_year").innerHTML = options_year;
    

    chrome.storage.local.get([
        'first_name',
        'last_name',
        'email',
        'phone_number',
        'address',
        'postcode',
        'city',
        'card_number',
        'card_month',
        'card_year',
        'card_cvv'
    ], function(result) {

        document.getElementById("first_name").value = result.first_name;
        document.getElementById("last_name").value = result.last_name;
        document.getElementById("email").value = result.email;
        document.getElementById("phone_number").value = result.phone_number;
        document.getElementById("address").value = result.address;
        document.getElementById("postcode").value = result.postcode;
        document.getElementById("city").value = result.city;
        document.getElementById("card_number").value = result.card_number;
        document.getElementById("card_month").value = result.card_month;
        document.getElementById("card_year").value = result.card_year;
        document.getElementById("card_cvv").value = result.card_cvv;
        
    });  


    document.getElementById('save').onclick = function() {

        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var email = document.getElementById("email").value;
        var phone_number = document.getElementById("phone_number").value;
        var address = document.getElementById("address").value;
        var postcode = document.getElementById("postcode").value;
        var city = document.getElementById("city").value;
        var card_number = document.getElementById("card_number").value;
        var card_month = document.getElementById("card_month").value;
        var card_year = document.getElementById("card_year").value;
        var card_cvv = document.getElementById("card_cvv").value;
      
        chrome.storage.local.set({
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'phone_number': phone_number,
            'address': address,
            'postcode': postcode,
            'city': city,
            'card_number': card_number,
            'card_month': card_month,
            'card_year': card_year,
            'card_cvv': card_cvv
        }, function() {
            alert("Saved!")
        });
      
    };
    
    document.getElementById('show').onclick = function() {
        
        chrome.storage.local.get([
            'first_name',
            'last_name',
            'email',
            'phone_number',
            'address',
            'postcode',
            'city',
            'card_number',
            'card_month',
            'card_year',
            'card_cvv'
        ], function(result) {
            alert("test: " + result.last_name);
        }); 

    };

};

  