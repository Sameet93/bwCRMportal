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

$(function () {

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
});

pword.onchange = validatePassword;
cpword.onkeyup = validatePassword;

// Test Code

$(function () {

    var newHash = "",
        $mainContent = $("#main-content"),
        $pageWrap = $("#page-wrap"),
        baseHeight = 0,
        $el;

    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();

    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function () {

        newHash = window.location.hash.substring(1);

        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(200, function () {
                    $mainContent.hide().load(newHash + " #guts", function () {
                        $mainContent.fadeIn(200, function () {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='" + newHash + "']").addClass("current");
                    });
                });
        };

    });

    $(window).trigger('hashchange');
});
