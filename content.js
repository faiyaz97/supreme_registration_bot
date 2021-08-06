//var reg_status = document.getElementById('closed').innerHTML.indexOf("Registration has closed for this release.") != -1;


// registration page closed text
var p = document.getElementsByTagName("p");
var reg_status = p[0].innerHTML.indexOf("Registration has closed for this release.") != -1;


console.log(p[0].innerHTML);

// refresh the page if registration page is closed 
if (reg_status) {

  console.log("Registration closed - Reloading...");
  setTimeout(function(){
    window.location.reload();
  },1000);

} else {

  console.log("Registration open!");

  step1();

  setTimeout(function(){ 
    step2();
  },333);

  console.log("Registration DONE!");

}





function step1() {

  console.log("Step 1...");

  chrome.storage.local.get([
    'first_name',
    'last_name',
    'email',
    'phone_number'
  ], function(result) {

    document.getElementsByName("first-name")[0].value = result.first_name;
    document.getElementsByName("last-name")[0].value = result.last_name;
    document.getElementsByName("email")[0].value = result.email;
    document.getElementsByName("phone")[0].value = result.phone_number;
    document.getElementsByClassName("el-radio__original")[0].checked = true;

  });

  setTimeout(function(){
    //document.querySelector('#step_1_button').click();
    document.getElementsByClassName("el-button continue-btn el-button--danger")[0].click();
  },333);
  
  console.log("Step 1 DONE!");
}

function step2() {

  console.log("Step 2...");

  chrome.storage.local.get([
    'address',
    'postcode',
    'city',
    'card_number',
    'card_month',
    'card_year',
    'card_cvv'
  ], function(result) {

  document.getElementsByName("address-1")[0].value = result.address;
  document.getElementsByName("zipcode")[0].value = result.postcode;
  document.getElementsByName("city")[0].value = result.city;
  
  
  document.getElementsByName('state')[0].click();
  setTimeout(function(){
    var ul = document.getElementsByClassName("el-scrollbar__view el-select-dropdown__list")[1];
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        // do something with items[i], which is a <li> element
        //console.log(items[i].getElementsByTagName('span')[0].textContent);
        var item = items[i].getElementsByTagName('span')[0].textContent;
        if (item === "London, City of") {
            items[i].click();
        }
    }
  },333);
  

  //document.getElementsByName('country')[0].click();
  var ul = document.getElementsByClassName("el-scrollbar__view el-select-dropdown__list")[0];
  var items = ul.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
      //console.log(items[i].getElementsByTagName('span')[0].textContent);
      var item = items[i].getElementsByTagName('span')[0].textContent;
      if (item === "United Kingdom") {
        items[i].click();
      }
  }
  

  
  

  document.getElementsByName("number")[0].value = result.card_number;
  document.getElementsByName("credit-card-expiry")[0].value = result.card_month + "/" + result.card_year;
  document.getElementsByName("securityCode")[0].value = result.card_cvv;
  



  // var year_menu = document.getElementById('credit_card_year');
  // for (var i = 0; i < year_menu.options.length; i++) {
  //     if (year_menu.options[i].text === result.card_year) {
  //       year_menu.selectedIndex = i;
  //       break;
  //     }
  // }


  });

  
  try {
    setTimeout(function(){
      document.getElementsByClassName("el-button full-width wrap el-button--danger")[0].click();
    },333);
  }
  catch {
    console.log("Registration submition error");
  }
  
  console.log("Step 2 DONE!");
}


