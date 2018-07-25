function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty, 10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}

var password = document.getElementById("pword")
    , cpword = document.getElementById("cpword");

function validatePassword() {
    if (pword.value != cpword.value) {
        cpword.setCustomValidity("Passwords Don't Match");
    } else {
        cpword.setCustomValidity('');
    }
}

$(function() {
 
    // if the function argument is given to overlay,
    // it is assumed to be the onBeforeLoad event listener
    $("a[rel]").overlay({
 
        mask: 'darkred',
        effect: 'apple',
 
        onBeforeLoad: function() {
 
            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");
 
            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href"));
        }
 
    });
});

pword.onchange = validatePassword;
cpword.onkeyup = validatePassword;