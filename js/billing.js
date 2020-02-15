/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){

var a= document.getElementById("shippingName");
var b= document.getElementById('billingName');

var c= document.getElementById('shippingZip');
var d= document.getElementById('billingZip');

if (same.checked==true){
b.value=a.value;
d.value=c.value;

}

else {
    b.value='';
    d.value='';
}
}

