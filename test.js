document.getElementsByName('state')[0].click();

document.getElementsByName("address-1")[0].value = "New Value asda";

document.getElementsByClassName("testffu")[0].checked = true;

document.getElementsByClassName("test-btn")[0].click();

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