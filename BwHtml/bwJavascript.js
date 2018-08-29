


//Sidenav open and close
function openNav() {
    document.getElementById("mysidenav").style.width = "100%";
} 

function closeNav() {
    document.getElementById("mysidenav").style.width = "0%";

}

//FAQ Search
function searchFilter() {
    var input, filter, ol, li,  a, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ol = document.getElementById("faqlist");
    li = ol.getElementsByClassName("faq_question");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


//Panel active when opened
/*$('.panel-heading a').click(function() {
    $('.panel-heading').removeClass('active');
    
    //If the panel was open and would be closed by this click, do not active it
    if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        $(this).parents('.panel-heading').addClass('active');
 });*/


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

 /* $(function () {

    // if the function argument is given to overlay,
    // it is assumed to be the onBeforeLoad event listener
    $("a[rel]").overlay({

        mask: 'darkred',
        effect: 'apple',

        onBeforeLoad: function () {

            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");

            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href"));
        }

    });
}); */

pword.onchange = validatePassword;
cpword.onkeyup = validatePassword;

