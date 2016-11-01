//used for pagination
$(document).ready(function () {
    $(".pageNumberInput").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            window.location.href = "?page=" + $(this).val() + "&search=" + $("#pageNumberText").val();
        }

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {                        
            return false;
        }
    });

    $('.pageNumberInput').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $(".pageNumberInputPR").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            window.location.href = "?page=" + $(this).val() + "&year=" + $("#currentYear").val();
        }

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.pageNumberInputPR').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $(".pageNumberInputJob").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            window.location.href = "?page=" + $(this).val() + "&list=" + $("#list").val();
        }

        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.pageNumberInputJob').bind("cut copy paste", function (e) {
        e.preventDefault();
    });
});


function ShowSuccess(data) {    
    if (data != null && data.success == true) {
        $(".overlay, .formDiv").fadeOut();
        var winwidth = $(window).width();
        var winheight = $(window).height();

        var queryString = "";

        var ua = window.navigator.userAgent.toLowerCase();
        if (ua != null && ua != 'undefined' && ua.indexOf("msie") > 0) {
            queryString = "?IE=1";
        }

        window.open(data.path + queryString, "_blank", 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,width=' + winwidth + ',height=' + winheight, true);
    }
    else {
    }
}


$(".formLink").on("click", function (e) {    
    //$("#hdnPageID").val($(this).attr('data-pageid'));
    //$("#hdnPageProperty").val($(this).attr('data-property'));

    //var mediapath = $(this).attr('href');
    var mediapath = $(this).attr('data-mediapath');
    var pageid = $(this).attr('data-pageid');
    var pageproperty = $(this).attr('data-property');
    var downloadlink = $(this).attr('data-downloadlink')
    var umbPath = $(this).attr('data-path');
    var umbDoctype = $(this).attr('data-doctype');

    $.cookie("hdnPageID", pageid, { path: "/" });
    $.cookie("hdnPageProperty", pageproperty, { path: "/" });
    
    $.get(umbPath + "/Surface/Lead/CheckIfTrackEnable",
        { PageID: pageid },

         function (result) {             
             if (result != null && result.isenabled == true) {

                 if ($.cookie("userName") != null && $.cookie("userEmail") != null && $.cookie("userCompanyName") != null && $.cookie("userMobileNumber") != null && $.cookie("userPhoneNumber") != null) {
                 //if(result.isCookieSet == false){

                     var form = $('#downloadForm');
                     var securityToken = $('[name=__RequestVerificationToken]').val();
                     var headers = {};
                     headers["__RequestVerificationToken"] = securityToken;

                     $.ajax({
                         cache: false,
                         async: true,
                         headers: headers,
                         type: "POST",
                         dataType: "json",
                         contentType: "application/json; charset=utf-8",
                         url: umbPath + "/Surface/Lead/Download",
                         data: JSON.stringify({
                             FullName: $.cookie("userName"),
                             Email: $.cookie("userEmail"),
                             CompanyName: $.cookie("userCompanyName"),
                             MobileNumber: $.cookie("userMobileNumber"),
                             PhoneNumber: $.cookie("userPhoneNumber"),
                             PageID: pageid,
                             PageProperty: pageproperty
                         }),
                         success: function (result) {
                             ShowSuccess(result);
                         },
                         error: function (result) {
                         }
                     });
                 }
                 else {
                                          
                     if (umbDoctype !=null && umbDoctype != 'undefined') {
                         window.open(downloadlink + "?returnurl=" + window.location.pathname + "&doctype=" + umbDoctype, "_self", "", true);
                     }
                     else {
                         window.open(downloadlink + "?returnurl=" + window.location.pathname, "_self", "", true);
                     }
                                          
                     //e.preventDefault();
                     //$('html, body').animate({ scrollTop: 0 }, '500');
                     //$(".formDiv").fadeIn();
                     //$(".overlay").fadeIn().css({ width: winWidth, height: winheight });
                     //$(".formDiv").css({ width: formWidth, height: popHeight + 100, marginLeft: -formLeft, marginTop: -top });
                 }
             }
             else {
                 var winwidth = $(window).width();
                 var winheight = $(window).height();                 
                 var queryString = "";

                 var ua = window.navigator.userAgent.toLowerCase();
                 if (ua != null && ua!= 'undefined' && ua.indexOf("msie") > 0)                                
                 {
                     queryString = "?IE=1";
                 }
                 window.open(mediapath + queryString, "_blank", 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes,width=' + winwidth + ',height=' + winheight, true);
             }
         }
    );
    e.preventDefault();

});

