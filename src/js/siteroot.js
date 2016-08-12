function _updateDocDims() {
    "use strict";
    docWidth = parseInt($(document).width(), 10);
    docHeight = parseInt($(document).height(), 10);
    winW = parseInt($(window).innerWidth(), 10);
    winH = parseInt($(window).innerHeight(), 10)
}

function createGCRURL(n) {
    var r, u, f, t, i;
    $(".hidGCRWidgetParameters").length > 0 && (gcrWidgetURL = $(".hidGCRWidgetParameters").attr("gcr-widgeturl"), $(".iframe-gcr-widget").length > 0 && (gcrWidgetDesktopURL = gcrWidgetURL + "?brand=" + $(".hidGCRWidgetParameters").attr("gcr-brand") + "&language=" + $(".hidGCRWidgetParameters").attr("gcr-lang") + "&country=" + $(".hidGCRWidgetParameters").attr("gcr-country") + "&GTIN=" + n + "&username=" + $(".hidusername").attr("username"), $(".iframe-gcr-widget").attr("src", gcrWidgetDesktopURL)), $(".iframe-gcr-widget-footer").length > 0 && (r = window.location.href, r.indexOf("#gtin=") > 0 && (u = r.substr(r.indexOf("#gtin="), r.length).substring(6))), f = gcrWidgetURL + "?brand=" + $(".hidGCRWidgetParameters").attr("gcr-brand") + "&language=" + $(".hidGCRWidgetParameters").attr("gcr-lang") + "&country=" + $(".hidGCRWidgetParameters").attr("gcr-country") + "&GTIN=" + u + "&username=" + $(".hidusername").attr("username"), $(".iframe-gcr-widget-footer").attr("src", f));
    $(".hidSKUID").length > 0 && $(".lnk-gcr-footer").length > 0 && (t = $(".lnk-gcr-footer").find("a").attr("href"), t.indexOf("#gtin") >= 0 && (t = t.substr(0, t.indexOf("#gtin"))), $(".lnk-gcr-footer").find("a").attr("href", t + "#gtin=" + n));
    $(".hidGCRtableturl").length > 0 && (i = $(".hidGCRtableturl").attr("tablet-itemurl"), $(".hidSKUID").length > 0 && (i.indexOf("#gtin") >= 0 && i.substr(0, i.indexOf("#gtin")), i += "#gtin=" + n), $(".lnk-gcr-component-touch").attr("href", i), $(".lnk-gcr-component-touch").attr("target", "_blank"))
}

function getNumberOfAds(n) {
    for (var t in n) $(".ads-count").html(n[t]), buyNowAdsenseSettings.BuyNowAdSenseSupportType == "query" ? $(".ads-count").html() == "undefined" || $(".ads-count").html() == "0" || $(".ads-count").html() == "" || $(".ads-count").html() == "" || $(".ads-count").html().indexOf("adsCount") >= 0 ? $(".ads-count-container").css("display", "none") : $(".ads-count-container").css("display", "block") : $(".ads-count-container").css("display", "none")
}

function InitialiseGoogleParameters() {
    if (buyNowAdsenseSettings = $(".hidBuyNowAdsenseSettings").val(), productShopTypeEnabled = $(".hidProductShopTypeEnabled").val(), buyNowAdsenseSettings = buyNowAdsenseSettings != null && buyNowAdsenseSettings != "undefined" && buyNowAdsenseSettings != "" ? eval("(" + $(".hidBuyNowAdsenseSettings").val() + ")") : "", hideFallbackContainers(), buyNowAdsenseSettings != "" && buyNowAdsenseSettings.BuyNowShoppingType == "true" && buyNowAdsenseSettings.BuyNowProductShoppingTypeEnabled == "true" && (showGoogleContainers(), hideFallbackContainers(), pageOptions = {
            pubId: buyNowAdsenseSettings.BuyNowBrandPubID,
            adsafe: buyNowAdsenseSettings.BuyNowAdSafeLevel,
            adtest: buyNowAdsenseSettings.BuyNowEnableAdsTest,
            hl: buyNowAdsenseSettings.BuyNowAdLanguage,
            channel: buyNowAdsenseSettings.BuyNowChannelId,
            linkTarget: "_blank",
            adsResponseCallback: getNumberOfAds,
            adLoadedCallback: function(n, t) {
                if (t) try {
                    showGoogleContainers();
                    hideFallbackContainers();
                    $(".buyitnow-adblocker").hide();
                    isAdsLoaded = "true"
                } catch (i) {
                    showFallbackContainers(fallBackText);
                    hideGoogleContainers(fallBackText);
                    isAdsLoaded = "false"
                } else showFallbackContainers(fallBackText), hideGoogleContainers(fallBackText), isAdsLoaded = "false";
                LogAFshData();
                googAds = !0
            }
        }, SetGtinAndQueryValue(), pageOptions.adtest === "on" && QueryVal && QueryVal.hasOwnProperty("testgl"))) {
        var locationVal = $.QueryString.testgl;
        locationVal.match(/^([a-zA-Z][a-zA-Z])$/g) && (pageOptions.testgl = locationVal)
    }
}

function ShowHideCount(n) {
    n == "query" ? $(".ads-count").html() == "undefined" || $(".ads-count").html() == "0" || $(".ads-count").html() == "" || $(".ads-count").html() == "" || $(".ads-count").html().indexOf("adsCount") >= 0 ? $(".ads-count-container").css("display", "none") : $(".ads-count-container").css("display", "block") : $(".ads-count-container").css("display", "none")
}

function SetGtinAndQueryValue() {
    fallBackText = $(".buyitnow-fallback").val();
    buyNowAdsenseSettings.BuyNowAdSenseSupportType == "gtin" ? ($("#binModal").removeClass("query-results").addClass("gtin-results"), pageOptions.gtin = $("#hidSKUID").val(), adSenseFormat = "single-product") : buyNowAdsenseSettings.BuyNowAdSenseSupportType == "query" ? ($("#binModal").removeClass("gtin-results").addClass("query-results"), pageOptions.query = $("#hidQuery").val(), adSenseFormat = "plas") : (showFallbackContainers(fallBackText), hideGoogleContainers(fallBackText))
}

function SetGtinAndQueryValueForQuickView() {
    fallBackText = $(".fallBackQV").val();
    buyNowAdsenseSettings.BuyNowAdSenseSupportType == "gtin" ? (pageOptions.gtin = $("#hidSKUQV").val(), adSenseFormat = "single-product") : buyNowAdsenseSettings.BuyNowAdSenseSupportType == "query" ? (pageOptions.query = $("#hidQueryQV").val(), adSenseFormat = "plas") : (showFallbackContainers(fallBackText), hideGoogleContainers(fallBackText))
}

function CallGoogleModule(n) {
    try {
        adbcheck == !1
    } catch (i) {
        adbcheck = !0
    }
    if (ga_mpURL = "", counter = 0, n ? SetGtinAndQueryValueForQuickView() : SetGtinAndQueryValue(), (buyNowAdsenseSettings.BuyNowAdSenseSupportType == "query" || buyNowAdsenseSettings.BuyNowAdSenseSupportType == "gtin") && ($("#afshcontainer").html(""), $("#afshcontainerquickview").html(""), hideFallbackContainers(), buyNowAdsenseSettings != "")) {
        showGoogleContainers();
        hideFallbackContainers();
        n ? (buyNowAdsenseSettings.BuyNowProductShoppingTypeEnabled = productShopTypeEnabled, afshContainer = "afshcontainerquickview", fallBackText = $(".fallBackQV").val()) : (afshContainer = "afshcontainer", fallBackText = $(".buyitnow-fallback").val());
        afshblock = {
            container: afshContainer,
            width: buyNowAdsenseSettings.BuyNowAdBlockWidth,
            height: buyNowAdsenseSettings.BuyNowAdBlockHeight
        };
        ShowAds();
        var t;
        t = n ? $("#afshcontainerquickview iframe") : $("#afshcontainer iframe");
        setTimeout(function() {
            adbcheck && googAds == !1 && t.length == 0 && adbTextShow()
        }, 1e3)
    }
}

function CallBuyNowChannelAdvisor() {
    var n = $(".hidProductID").val(),
        t = $(".hidSKUID").val(),
        i = $(".hidVariantItemID").val();
    $(".popup-retailers .modal-body").html("");
    $.ajax({
        url: "/layouts/abbs/handlers/desktop/BuyNowChannelAdvisor.aspx",
        type: "get",
        data: {
            productid: n,
            SKUID: t,
            itemid: i,
            buynowtypeattribute: hidBuyNowTypeAttribute.trim()
        },
        contenttype: "application/json;charset=utf-8",
        traditional: !0,
        success: function(n) {
            var t = $(n).filter(".product-description").html();
            $(".product-title h2").html(t);
            $(".popup-retailers .modal-body").html(n);
            $(".popup-retailers").modal("show");
            hidBuyNowTypeAttribute != undefined && hidBuyNowTypeAttribute.trim() == "binchanneladvisor" && (logSkuID = $(".hidSKUID").val(), logItemID = $(".hidProductID").val(), LogAFshData())
        }
    })
}

function LogAFshData() {
    var f = window.location.href,
        n, t, i, r;
    if (hidBuyNowTypeAttribute.trim() == "binchanneladvisor") n = logSkuID, t = $(".hidRequestStatus").val(), i = hidBuyNowTypeAttribute.trim(), r = logItemID;
    else if (hidBuyNowTypeAttribute.trim() == "bingoogleadsense") {
        n = pageOptions.gtin;
        t = isAdsLoaded;
        var e = pageOptions.pubId,
            u = u,
            o = pageOptions.query,
            s = buyNowAdsenseSettings.BuyNowBrandName
    }
    $.ajax({
        url: "/Layouts/ABBs/Handlers/Common/AFshDataLogHandler.ashx",
        type: "get",
        data: {
            clientid: e,
            adformat: u,
            gtin: n,
            querytext: o,
            requeststatus: t,
            brand: s,
            pageurl: f,
            productId: r,
            buyNowType: i
        },
        contenttype: "application/json;charset=utf-8",
        datatype: "json",
        traditional: !0,
        success: function() {},
        error: function() {}
    })
}

function ShowAds() {
    typeof generate_ga_url == "function" && (ga_mpURL = adSenseFormat == "single-product" ? generate_ga_url(pageOptions.gtin) : generate_ga_url(""));
    ga_mpURL.length > 0 && asci_pixel.length > 0 ? load_adsense_trackers() : counter <= timeout ? (setTimeout(ShowAds, step), counter = counter + step) : load_adsense_trackers()
}

function load_adsense_trackers() {
    ga_mpURL != "" && ga_mpURL != "undefined" && ga_mpURL.length > 0 && asci_pixel != "" && asci_pixel != "undefined" && asci_pixel.length > 0 && (pageOptions.clicktrackUrl = [ga_mpURL, asci_pixel]);
    _googCsa(adSenseFormat, pageOptions, afshblock)
}

function checkAdsload(n, t) {
    setTimeout(function() {
        $("#afshcontainer iframe").css("visibility") != "hidden" && $("#afshcontainer iframe").length != 0 || t || toggleFallBackText(n);
        ($("#afshcontainerquickview iframe").css("visibility") == "hidden" || $("#afshcontainerquickview iframe").length == 0) && t && toggleFallBackText(n)
    }, 700)
}

function adbTextShow() {
    $(".buyitnow-adblocker").show();
    $(".ads-count-container").css("display", "none")
}

function toggleFallBackText(n) {
    showFallbackContainers(n);
    hideGoogleContainers()
}

function showFallbackContainers(n) {
    $("#binModal").removeClass("gtin-results query-results");
    n == "" || ($(".buyitnow-fallback").html(n), $(".buyitnow-fallback-in-quickview").html(n));
    $(".buyitnow-fallback-in-quickview").css("display", "block");
    $(".buyitnow-fallback").css("display", "block");
    $(".ads-count-container").css("display", "none")
}

function hideFallbackContainers() {
    $(".buyitnow-fallback-in-quickview").css("display", "none");
    $(".buyitnow-fallback").css("display", "none")
}

function showGoogleContainers() {
    $(".buyitnow-google-in-quickview").css("display", "block");
    $(".buyitnow-google").css("display", "block");
    buyNowAdsenseSettings.BuyNowAdSenseSupportType == "query" && $(".ads-count-container").css("display", "block")
}

function hideGoogleContainers() {
    $(".buyitnow-google-in-quickview").css("display", "none");
    $(".buyitnow-google").css("display", "none");
    $(".ads-count-container").css("display", "none")
}

function ShowResultForQuickView(n) {
    $(".popup-quick-view").html(n);
    $(".popup-quick-view select").uniform();
    hideExpanAllOverlayCommon();
    window.setTimeout(function() {
        quickView();
        n.indexOf("color-swatch") > 0 && colorSwatch();
        hideExpanAllOverlayCommon();
        labelFunctionalityOverlay()
    }, 200)
}

function ShowErrorForQuickView() {
    $(".popup-quick-view").html(results)
}

function quickView() {
    function f() {
        if (Fcounter != 0) {
            if (Fcounter--, $("#hidModalAutoHeight").val() == "True")(Fcounter + 1 - n.length % 4) % totalThumbs == 0 && Fcounter < n.length - 1 && $(".popup-quick-view .thumb-leftarrow").trigger("click");
            else if ((Fcounter + 1) % totalThumbs == 0 && Fcounter < n.length - 1) i.animate({
                marginLeft: -n.outerWidth(!1) * (Fcounter - (totalThumbs - 1)) + "px"
            });
            else {
                var t = n.length - n.length % totalThumbs - totalThumbs;
                Fcounter + totalThumbs + 1 == n.length && i.animate({
                    marginLeft: -n.outerWidth(!1) * t + "px"
                })
            }
            r(Fcounter)
        }
    }

    function e() {
        if (Fcounter != n.length - 1) {
            if (Fcounter++, $("#hidModalAutoHeight").val() == "True") Fcounter % totalThumbs == 0 && Fcounter < n.length && $(".popup-quick-view .thumb-rightarrow").trigger("click");
            else if (Fcounter % totalThumbs == 0 && Fcounter < n.length)
                if (Fcounter + totalThumbs - 1 < n.length) i.animate({
                    marginLeft: -n.outerWidth(!1) * Fcounter + "px"
                });
                else {
                    var t = totalThumbs - n.length % totalThumbs;
                    i.animate({
                        marginLeft: -n.outerWidth(!1) * (Fcounter - t) + "px"
                    })
                }
            r(Fcounter)
        }
    }

    function o() {
        t > 0 ? (t--, t == 0 ? i.animate({
            marginLeft: "0px"
        }) : i.animate({
            marginLeft: parseInt(i.css("marginLeft")) + n.outerWidth(!1) * 4 + "px"
        }), $(".popup-quick-view .thumb-rightarrow").removeClass("disablearrow"), t <= 0 && $(".popup-quick-view .thumb-leftarrow").addClass("disablearrow")) : $(".popup-quick-view .thumb-leftarrow").addClass("disablearrow")
    }

    function s() {
        t < Math.floor(n.length / 4) && Math.floor(n.length / 4) > 0 ? (t++, t == Math.floor(n.length / 4) ? i.animate({
            marginLeft: -n.outerWidth(!1) * (n.length / 4 - 1) * 4 + "px"
        }) : i.animate({
            marginLeft: -n.outerWidth(!1) * t * 4 + "px"
        }), $(".popup-quick-view .thumb-leftarrow").removeClass("disablearrow"), t >= Math.floor(n.length / 4) && $(".popup-quick-view .thumb-rightarrow").addClass("disablearrow"), t >= Math.ceil(n.length / 4 - 1) && $(".popup-quick-view .thumb-rightarrow").addClass("disablearrow")) : $(".popup-quick-view .thumb-rightarrow").addClass("disablearrow")
    }

    function r(t) {
        n.removeClass("active-img");
        $(n[t]).addClass("active-img");
        u.css("display", "none");
        $(u[Fcounter]).css("display", "block");
        Fcounter == 0 ? isRTL ? $(".popup-quick-view .rightarrow").addClass("disablearrow") : $(".popup-quick-view .leftarrow").addClass("disablearrow") : isRTL ? $(".popup-quick-view .rightarrow").removeClass("disablearrow") : $(".popup-quick-view .leftarrow").removeClass("disablearrow");
        Fcounter == n.length - 1 ? isRTL ? $(".popup-quick-view .leftarrow").addClass("disablearrow") : $(".popup-quick-view .rightarrow").addClass("disablearrow") : isRTL ? $(".popup-quick-view .leftarrow").removeClass("disablearrow") : $(".popup-quick-view .rightarrow").removeClass("disablearrow")
    }
    var t;
    Fcounter = 0;
    clearInterval(delay);
    var n = $(".popup-quick-view .img-thumb ul li"),
        i = $(".popup-quick-view .img-thumb"),
        u = $(".popup-quick-view .im-preview ul li"),
        h = $(".popup-quick-view .im-preview");
    $(".popup-quick-view .carousel").css("width", n.outerWidth(!1) * totalThumbs + "px");
    $(n[0]).addClass("active-img");
    i.css("width", n.outerWidth(!1) * n.length + "px");
    isRTL && (i.animate({
        marginLeft: -n.outerWidth(!1) * (n.length / 4 - 1) * 4 + "px"
    }), t = Math.floor(n.length / 4));
    (n.length <= 1 || n.length == 0) && ($(".popup-quick-view .leftarrow").addClass("hide"), $(".popup-quick-view .rightarrow").addClass("hide"));
    Math.floor(n.length / 1) == 0 ? ($(".popup-quick-view .leftarrow").addClass("disablearrow"), $(".popup-quick-view .rightarrow").addClass("disablearrow")) : isRTL ? $(".popup-quick-view .rightarrow").addClass("disablearrow") : $(".popup-quick-view .leftarrow").addClass("disablearrow");
    n.each(function(t) {
        $(n[t]).click(function() {
            Fcounter = t;
            r(Fcounter)
        })
    });
    t = 0;
    $(".popup-quick-view .leftarrow").click(function() {
        isRTL ? e() : f()
    });
    $(".popup-quick-view .rightarrow").click(function() {
        isRTL ? f() : e()
    });
    $(".popup-quick-view .thumb-leftarrow").click(function() {
        isRTL ? s() : o()
    });
    $(".popup-quick-view .thumb-rightarrow").click(function() {
        isRTL ? o() : s()
    });
    $(".popup-carousel-wrapper .img-thumb li").length <= 4 && $(".popup-quick-view .thumb-leftarrow, .popup-quick-view .thumb-rightarrow").addClass("disablearrow");
    $(".popup-carousel-wrapper .img-thumb li").length > 4 && (isRTL ? $(".popup-quick-view .thumb-rightarrow").addClass("disablearrow") : $(".popup-quick-view .thumb-leftarrow").addClass("disablearrow"))
}

function setSameHeightCart() {
    var n = 0;
    $(".popup-add-cart .product-list li").each(function() {
        $(this).height() > n && (n = $(this).height())
    });
    $(".popup-add-cart .product-list.thumbnails li").height(n)
}

function setSameHeightEmptyCart() {
    var n = 0;
    $(".reatiler-section .related-product .product-list li").each(function() {
        $(this).height() > n && (n = $(this).height())
    });
    $(".reatiler-section .related-product .product-list.thumbnails li").height(n)
}

function CreateJasonObject(n) {
    var i = "",
        r = $(".hidProductType").val(),
        u = $(".hidBundleType").val(),
        t;
    return $(n).attr("data-IsQuickView") ? (t = $(".hidQuickViewProductID").val(), t != null && t != "undefined" && t != "" && (i = createPrimaryJasonObject($(".quick-view-variant"), t))) : (t = $(".hidProductID").val(), t != null && t != "undefined" && t != "" && (i = createPrimaryJasonObject($(".primary-details-variants"), t)), r == u && (i += bundleProductValues())), i != null && i != "" && i != "undefined" ? i + "]}" : i
}

function createPrimaryJasonObject(n, t) {
    var i = "";
    return $(n).find(".variants").each(function() {
        var n;
        $(this).find(".Variation1").length > 0 ? n = $(this).find(".Variation1").find(".value").val() : $(this).find(".color-swatch").length > 0 && (n = $(this).find(".color-swatch").find(".color-swatch-body").find(".active-color").attr("data-id"));
        i = i == "" ? '{level: "' + $(this).attr("data-level") + '", selectedItem: "' + n + '"}' : i + ',{"level":"' + $(this).attr("data-level") + '", selectedItem:"' + n + '"}'
    }), '{ProductList:[{ProductId: "' + t + '", VariantList: [' + i + '] ,Quantity: "' + getQuantity(n) + '"}'
}

function bundleProductValues() {
    var n = "";
    return $(".related-product .product-list li").each(function() {
        var i = $(this).find(".product-id").val(),
            t;
        i != null && i != "undefined" && i != "" && (t = "", $(this).find(".variants").each(function() {
            var n;
            $(this).find(".Variation1").length > 0 && (n = $(this).find(".Variation1 select").val());
            t = t == "" ? '{level: "' + $(this).attr("data-level") + '", selectedItem: "' + n + '"}' : t + ',{"level":"' + $(this).attr("data-level") + '", selectedItem:"' + n + '"}'
        }), n = n + ',{ProductId: "' + i + '", VariantList: [' + t + '] ,Quantity: "' + getQuantity(this) + '"}')
    }), n
}

function getQuantity(n) {
    var t = $(n).find(".product-quantity").val();
    return t == null && t == "undefined" && t == "" && (t = 0), t
}

function AddToCart(n) {
    var i, t;
    return $(".popup-add-cart").html(""), i = CreateJasonObject(n), ajaxResponse = !0, t = "", t = "/Layouts/ABBs/Handlers/Desktop/AddToCartConfirmation.aspx", $.ajax({
        url: t,
        type: "get",
        data: {
            cartdata: i,
            currentproductid: $(".hidQuickViewProductID").val()
        },
        contenttype: "application/json;charset=utf-8",
        datatype: "json",
        traditional: !0,
        success: function(t) {
            n.attr("redirect-url") != null && n.attr("redirect-url") != "" && (document.location.href = n.attr("redirect-url"));
            $(".popup-add-cart").html(t);
            var i = $(".popup-add-cart").find(".cart-total").html();
            $(".cart-item").html(i)
        },
        error: function() {
            ajaxResponse = !1
        }
    }), !1
}

function LogonOverlay() {
    ajaxResponse = !0;
    var n = "";
    return n = "/Layouts/ABBs/Handlers/Desktop/LogonPage.aspx", $.ajax({
        url: n,
        type: "get",
        data: {},
        contenttype: "application/json;charset=utf-8",
        datatype: "json",
        traditional: !0,
        success: function(n) {
            $(".popup-login").html(n)
        },
        error: function() {
            ajaxResponse = !1
        }
    }), !1
}

function mtonYouTubeIframeAPIReady() {
    var n, t, i;
    if (carouselSlide = youTubeSlide, youTubeSlide != null && (n = youTubeSlide.data("videoid")), n != null) {
        t = n.substring(n.lastIndexOf("/") + 9);
        youTubeSlide.children("iframe").length > 0 && youTubeSlide.html("<div id=" + youTubeSlide.children("iframe").attr("id") + " class='player'><\/div>");
        i = youTubeSlide.children("div").attr("id");
        try {
            player = new YT.Player(i, {
                height: "332",
                width: "100%",
                videoId: t,
                playerVars: {
                    controls: 1,
                    showinfo: 0,
                    modestbranding: 0,
                    rel: 0,
                    wmode: "opaque",
                    cc_load_policy: youtubeCCOn,
                    cc_lang_pref: youTubeCCLang
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        } catch (r) {}
    }
}

function promoOnYouTubeIframeAPIReady() {
    var n, t, i;
    if (promoSlide = youTubeSlide, youTubeSlide != null && (n = youTubeSlide.data("videoid")), n != null) {
        t = n.substring(n.lastIndexOf("/") + 9);
        i = youTubeSlide.children("div").attr("id");
        try {
            player = new YT.Player(i, {
                height: "332",
                width: "100%",
                videoId: t,
                playerVars: {
                    controls: 1,
                    showinfo: 0,
                    modestbranding: 0,
                    rel: 0,
                    wmode: "opaque",
                    cc_load_policy: youTubeCCOn,
                    cc_lang_pref: youTubeCCLang
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange1
                }
            })
        } catch (r) {}
    }
}

function onYouTubeIframeAPIReadyProduct(n) {
    var t = n,
        i, u, r;
    if (t != null) {
        i = t.substring(t.lastIndexOf("/") + 9);
        youTubeSlide.children("iframe").length > 0 && youTubeSlide.html("<div id=" + youTubeSlide.children("iframe").attr("id") + " class='player'><\/div>");
        r = youTubeSlide.children("div").attr("id");
        try {
            u = new YT.Player(r, {
                height: "332",
                width: "100%",
                videoId: i,
                playerVars: {
                    controls: 1,
                    showinfo: 0,
                    modestbranding: 0,
                    rel: 0,
                    wmode: "opaque",
                    cc_load_policy: youtubeCCOn,
                    cc_lang_pref: youTubeCCLang
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        } catch (f) {}
    }
}

function onPlayerReady() {}

function onPlayerStateChange(n) {
    n.data == YT.PlayerState.PLAYING && $(".carousel-video-content").css("zIndex", "-1");
    n.data == YT.PlayerState.PAUSED || n.data == YT.PlayerState.ENDED ? ($(".carousel").carousel("cycle"), $(".carousel-video-content").css("zIndex", "1"), console.log(carouselSlide.parent().parent().attr("class"))) : $(".carousel").carousel("pause")
}

function stopVideo() {
    player.stopVideo()
}

function onPlayerStateChange1(n) {
    n.data == YT.PlayerState.PLAYING && $(n.target.c).closest(".flexible-promo-container").find(".promo-video-content").css("zIndex", "-1");
    (n.data == YT.PlayerState.PAUSED || n.data == YT.PlayerState.ENDED) && ($(".carousel").carousel("cycle"), $(n.target.c).closest(".flexible-promo-container").find(".promo-video-content").css("zIndex", "1"))
}

function stopVideo() {
    player.stopVideo()
}

function hideExpanAllOverlay() {
    $(".popup-quick-view .color-swatch .fewer-text").hide();
    $(".popup-quick-view .color-swatch .expand-text").hide();
    $(".popup-quick-view .color-swatch-body").attr("style", "")
}

function hideExpanAllOverlayCommon() {
    $(".popup-quick-view .label-selector  .fewer-text").hide();
    $(".popup-quick-view .label-selector  .expand-text").hide()
}

function checkForExpanAllCommon(n, t, i) {
    var r = i.find(".expand-text"),
        f = i.find(".fewer-text"),
        u, e;
    n.attr("style", "");
    f.hide();
    u = t.outerHeight(!0) * 2;
    e = n.outerHeight(!0);
    e > u ? (n.css("height", u + 2 + "px"), n.css("maxHeight", "none"), n.css("overflow", "hidden"), n.css("height", u + 2 + "px"), r.show()) : r.hide();
    r.click(function() {
        n.animate({
            height: e
        }, 200, function() {
            r.hide();
            f.show()
        })
    });
    f.click(function() {
        n.animate({
            height: u
        }, 200, function() {
            r.show();
            f.hide()
        })
    })
}

function labelFunctionalityOverlay() {
    $(".popup-quick-view .label-selector li").click(function() {
        $(this).closest(".label-selector").find("li.active-label").removeClass("active-label");
        $(this).addClass("active-label")
    });
    $(".popup-quick-view .label-selector").each(function() {
        checkForExpanAllCommon($(this).find("ul"), $(this).find("li"), $(this))
    })
}

function checkForExpanAllOverlay() {
    $(".expand-all-link").children().off();
    hideExpanAllOverlay();
    var n = $(".popup-quick-view .color-swatch-body  li").outerHeight(!0) * 2,
        t = $(".popup-quick-view .color-swatch-body").outerHeight(!0);
    t > n ? ($(".popup-quick-view .color-swatch-body").css("height", n + 2 + "px"), $(".popup-quick-view .color-swatch-body").css("maxHeight", "none"), $(".popup-quick-view .color-swatch-body").css("overflow", "hidden"), $(".popup-quick-view .color-swatch-body").css("height", n + 2 + "px"), $(".popup-quick-view .color-swatch .expand-text").show()) : $(".popup-quick-view .expand-text").hide();
    $(".popup-quick-view .expand-text").click(function() {
        $(".popup-quick-view .color-swatch-body").animate({
            height: t
        }, 200, function() {
            $(".popup-quick-view .expand-text").hide();
            $(".popup-quick-view .color-swatch .fewer-text").show()
        })
    });
    $(".popup-quick-view .fewer-text").click(function() {
        $(".popup-quick-view .color-swatch-body").animate({
            height: n
        }, 200, function() {
            $(".popup-quick-view .color-swatch .expand-text").show();
            $(".popup-quick-view .color-swatch .fewer-text").hide()
        })
    });
    n <= $(".active-color").offset().top - $(".color-swatch-body li:first").offset().top && $(".popup-quick-view .color-swatch-body").animate({
        height: t
    }, 200, function() {
        $(".popup-quick-view .color-swatch .expand-text").hide();
        $(".popup-quick-view .color-swatch .fewer-text").show()
    })
}

function colorSwatch() {
    $(".color-swatch *").off();
    $(".popup-quick-view select").uniform();
    $(".popup-quick-view .image-color-group").length > 0 && ($(".color-group").val($(".popup-quick-view .active-color").attr("data-group")).change(), $(".popup-quick-view .color-swatch-img").each(function() {
        $(this).attr("data-group") == $(".color-group").val() ? $(this).parent().css("display", "block") : $(this).parent().css("display", "none")
    }));
    hideExpanAllOverlay();
    $(".popup-quick-view .swatch-selection").click(function() {
        var n, t;
        hideExpanAllOverlay();
        $(".popup-quick-view .color-swatch-body").attr("style", "");
        n = $(".popup-quick-view .color-swatch-body");
        n.jScrollPane();
        t = n.data("jsp");
        t.destroy();
        $(".popup-quick-view .color-swatch").removeClass("image-color-name image-color-group dropdown-selection").addClass("image-color");
        $(".popup-quick-view .color-swatch-img").each(function() {
            $(this).parent().css("display", "block")
        })
    });
    $(".popup-quick-view .name-selection").click(function() {
        hideExpanAllOverlay();
        $(".popup-quick-view .color-swatch-body").attr("style", "");
        $(".popup-quick-view .color-swatch-body").outerHeight() > parseInt($(".popup-quick-view .color-swatch-body").css("max-height")) && window.setTimeout("$('.popup-quick-view .color-swatch-body').jScrollPane();", 100);
        $(".popup-quick-view .color-swatch").removeClass("image-color image-color-group dropdown-selection").addClass("image-color-name");
        $(".popup-quick-view .color-swatch-img").each(function() {
            $(this).parent().css("display", "block")
        });
        var n = $(".image-color-name .color-swatch-body li").outerHeight() * 10,
            t = $(".image-color-name .color-swatch-body").outerHeight(!0);
        t > n && ($(".image-color-name .color-swatch-body").css("max-height", n), $(".image-color-name .color-swatch-body").css("overflow", "auto"))
    });
    $(".popup-quick-view .group-selection").click(function() {
        var n, t;
        hideExpanAllOverlay();
        $(".popup-quick-view .color-swatch-body").attr("style", "");
        n = $(".popup-quick-view .color-swatch-body");
        n.jScrollPane();
        t = n.data("jsp");
        t.destroy();
        $(".popup-quick-view .color-swatch").removeClass("image-color image-color-name dropdown-selection").addClass("image-color-group");
        $(".color-group").val($(".popup-quick-view .active-color").attr("data-group")).change();
        $(".popup-quick-view .color-swatch-img").each(function() {
            $(this).attr("data-group") == $(".color-group").val() ? $(this).parent().css("display", "block") : $(this).parent().css("display", "none")
        })
    });
    $(".popup-quick-view .color-group").change(function() {
        var n = $(this).val();
        $(".color-swatch-img").each(function() {
            $(this).attr("data-group") == n ? $(this).parent().css("display", "block") : $(this).parent().css("display", "none")
        })
    });
    $(".popup-quick-view .dropdown-swatch-selection").click(function() {
        var n = $(".popup-quick-view .color-swatch-body"),
            t;
        n.jScrollPane();
        t = n.data("jsp");
        t.destroy();
        $(".popup-quick-view .color-swatch").removeClass("image-color-name image-color-group").addClass("dropdown-selection image-color");
        $(".popup-quick-view .color-swatch-img").each(function() {
            $(this).parent().css("display", "block")
        });
        checkForExpanAllOverlay()
    });
    $(".popup-quick-view .label-selector li").click(function() {
        $(this).closest(".label-selector").find("li.active-label").removeClass("active-label");
        $(this).addClass("active-label")
    });
    $(".popup-quick-view .color-swatch-dropdown select").change(function() {
        var n = $(this).val();
        $(".color-swatch-img").each(function() {
            $(this).attr("data-name") == n ? ($(this).addClass("active-color"), $(this).trigger("click")) : $(this).removeClass("active-color")
        });
        $(".popup-quick-view .expand-text").is(":visible") && checkForExpanAllOverlay()
    });
    $(".dropdown-selection").length > 0 && checkForExpanAllOverlay();
    $(".popup-quick-view .color-swatch-img").each(function(n) {
        $($(".popup-quick-view .color-swatch-img")[n]).on("click", function() {
            $(".popup-quick-view .swatch-name span").last().html($(this).attr("data-name"));
            $(".popup-quick-view .color-swatch-img").each(function(n) {
                $($(".popup-quick-view .color-swatch-img")[n]).removeClass("active-color")
            });
            $($(".popup-quick-view .color-swatch-img")[n]).addClass("active-color");
            $(".popup-quick-view .color-swatch-dropdown span").val($(".active-color span").html().trim());
            $(".popup-quick-view .color-swatch-dropdown select option[value='" + $(".active-color span").html().trim() + "']").attr("selected", "selected")
        })
    });
    $(".popup-quick-view .swatch-name span").html($(".popup-quick-view .active-color span").html())
}

function VariantQuickViewRepeaterClick(n, t) {
    var u = "",
        i, r;
    ajaxResponse = !0;
    i = $(".hidQuickViewProductID").val();
    r = $(".hidQuickViewVariantID").val();
    u = "/layouts/abbs/handlers/desktop/VariantForQuickView.aspx";
    n < 3 ? ($.ajax({
        url: u,
        type: "get",
        data: {
            itemid: t,
            productid: i,
            level: n
        },
        contenttype: "application/json;charset=utf-8",
        traditional: !0,
        beforeSend: function() {
            toggleQuickViewAjaxLoadDisplay()
        },
        success: function(t) {
            var i;
            n == "1" ? i = ".VariantForQuickViewLevel2and3" : n == "2" && (i = ".VariantForQuickView3");
            $(i).html(t);
            t.indexOf("color-swatch") > 0 && colorSwatch();
            t.indexOf("label") > 0 && labelFunctionalityOverlay();
            toggleQuickViewAjaxLoadDisplay()
        },
        error: ShowErrorForQuickView
    }), loadQuickViewImages(n, t, i, r)) : n == 3 && loadQuickViewImages(n, t, i, r)
}

function VariantsQuickViewDropdownSelect(n, t) {
    var u = "";
    ajaxResponse = !0;
    var i = $(".hidQuickViewProductID").val(),
        f = $(".hidQuickViewVariantID").val(),
        e = document.getElementById(t),
        r = e.options[e.selectedIndex].value;
    u = "/layouts/abbs/handlers/desktop/VariantForQuickView.aspx";
    n < 3 ? ($.ajax({
        url: u,
        type: "get",
        data: {
            itemid: r,
            productid: i,
            level: n
        },
        contenttype: "application/json;charset=utf-8",
        beforeSend: function() {
            toggleQuickViewAjaxLoadDisplay()
        },
        traditional: !0,
        success: function(t) {
            var i;
            n == "1" ? i = ".VariantForQuickViewLevel2and3" : n == "2" && (i = ".VariantForQuickView3");
            $(i).html(t);
            t.indexOf("color-swatch") > 0 && colorSwatch();
            t.indexOf("label") > 0 && labelFunctionalityOverlay();
            toggleQuickViewAjaxLoadDisplay()
        },
        error: ShowErrorForQuickView
    }), loadQuickViewImages(n, r, i, f)) : n == 3 && loadQuickViewImages(n, r, i, f)
}

function loadQuickViewImages(n, t, i, r) {
    var u = "",
        f = hidBuyNowTypeAttribute;
    u = "/layouts/abbs/handlers/desktop/QuickViewImageGallery.aspx";
    $.ajax({
        url: u,
        type: "get",
        data: {
            itemid: t,
            productid: i,
            level: n,
            variantid: r,
            buynowtypeattribute: f
        },
        contenttype: "application/json;charset=utf-8",
        traditional: !0,
        success: function(n) {
            var i;
            $(".popup-carousel-wrapper").html(n);
            quickView();
            var t = $(".hidSKUQVIG").val(),
                r = $(".hidQueryQVIG").val(),
                u = $(n).filter(".fallBackQV").html();
            $("#hidSKUQV").val(t);
            $("#hidQueryQV").val(r);
            $(".fallBackQV").val(u);
            $(".add-to-cart-btn").attr("data-action-detail", t);
            $(".popup-quick-view select").uniform();
            $(".popup-product-price.product-price span.price").text($(n).filter(".hidVariantPrice").val());
            hidBuyNowTypeAttribute != undefined && (hidBuyNowTypeAttribute.trim() == "binchanneladvisor" || hidBuyNowTypeAttribute.trim() == "fallbackonly" ? (i = $(n).filter(".buyitnow-variant-click").html(), $(".buyitnow-channel-advisor").html(i), hidBuyNowTypeAttribute.trim() == "binchanneladvisor" && LogAFshData()) : hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && CallGoogleModule(!0))
        },
        error: ShowErrorForQuickView
    })
}

function toggleQuickViewAjaxLoadDisplay() {
    $(".popup-quick-view .loadwait-container").is(":visible") ? $(".popup-quick-view .loadwait-container").hide() : $(".popup-quick-view .loadwait-container").show()
}

function ShowErrorForSmartSearch() {
    $(".autocomplete-suggestions").html("")
}

function GetWeather() {
    var n = $("[id*=hdnWeatherWidgetApi]").length > 0 ? $("[id*=hdnWeatherWidgetApi]").val() : "";
    n != "" && $.ajax({
        url: n,
        dataType: "jsonp",
        async: !0,
        success: function(n) {
            ShowResultForWeatherWidgets(n)
        }
    })
}

function ShowResultForWeatherWidgets(n) {
    var t = $("[id*=hdnCheckAutoIp]").val();
    n.location != "" && n.location != null && n.location != "undefined" && n.current_observation != "" && n.current_observation != null && n.current_observation != "undefined" && t == "false" ? (RenderWeatherWidgetApiResults(n), $(".weather-search").hide(), $(".weather-error-msg").hide(), $(".weather-details").show()) : n.location == "" || n.location == null || n.location == "undefined" || n.current_observation == "" || n.current_observation == null || n.current_observation == "undefined" && t == "true" ? (RenderWeatherWidgetApiResults(n), $(".class-method-render-for-handler").hide(), $(".wearther-wrapper").hide(), $(".ambiguous-poup").hide()) : n.location != "" && n.location != null && n.location != "undefined" && n.current_observation != "" && n.current_observation != null && n.current_observation != "undefined" && t == "true" && (RenderWeatherWidgetApiResults(n), $(".class-method-render-for-handler").hide(), $(".wearther-wrapper").show(), $(".smart-suggestion-container").hide())
}

function RenderWeatherWidgetApiResults(n) {
    $(".weather-temp").remove();
    $(".divCity").remove();
    $(".method-handler").remove();
    $(".divmessage").remove();
    $(".recommend-message").remove();
    $(".weather-Image").remove();
    $(".products-container").remove();
    $(".weather-temp-show").append($("#weatherTempShow").render(n));
    $(".weather-location").append($("#weatherCityShow").render(n));
    $(".class-method-render-for-handler").append($("#methodRenderForHandler").render(n));
    $(".class-method-render-for-handler").hide()
}

function ShowResultError() {}

function ShowResultMessage(n) {
    n.WeatherWidget.length != 0 && ($(".divmessage").remove(), $(".weather-time").append($("#GreetingMessage").render(n)), $(".recommend-message").remove(), $(".weather-time").append($("#recommendMessage").render(n)), $(".weather-Image").remove(), $(".weather-icon-Image").append($("#weatherImage").render(n)), n.WeatherWidget[0].RelatedProduct.ProductId != null && ($(".products-container").hide(), $(".related-product-region").append($("#RelatedProduct").render(n))))
}

function ShowNoResultForLocationResults(n, t) {
    var i = $("[id*=hdnCheckAutoIp]").val();
    n.location == "" || n.location == null || n.location == "undefined" || n.current_observation == "" || n.current_observation == null || n.current_observation == "undefined" && i == "false" ? ($(".weather-search").show(), $(".weather-error-msg").show(), $(".weather-details").hide()) : (GetResultsByHandler(t), $(".weather-search").hide(), $(".weather-details").show(), $(".weather-icon").show(), $(".wearther-wrapper").show(), $("[id*=txtWeatherEnterLocation]").val(""), $("[id*=hdnCheckAutoIp]").val("false"))
}

function GetResultsByHandler(n) {
    var t = encodeURIComponent(n),
        i = $("[id*=hdnItemId]").val();
    $.ajax({
        url: "/Layouts/ABBs/Handlers/Common/WeatherWidget.ashx",
        data: {
            weatherZipCode: t,
            itemId: i
        },
        dataType: "json",
        success: function(n) {
            ShowResultForLocation(n)
        }
    })
}

function ShowResultForLocation(n) {
    $("[id*=hdnWeatherWidgetApi]").val(n.WeatherWidget[0].WeatherWidgetApi);
    GetWeather()
}

function jQuery_callback(n) {
    smartSearchAPIResults = n;
    $(".smart-search-ul").remove();
    $(".smart-suggestion-container").append($("#Script1").render(n));
    $(".smart-suggestion-container").show();
    $(".smart-suggestion-container li").on("click", function() {
        $(".weather-location-input").val($(this).html());
        $(".smart-suggestion-container").hide()
    })
}
var totalThumbs = 4,
    docWidth, docHeight, winW, winH, debug, pageEditorMode = !1,
    pageOptions, buyNowAdsenseSettings, productShopTypeEnabled, afshContainer, adSenseFormat = "",
    afshblock, fallBackText, isAdsLoaded = "false",
    logSkuID, logItemID, hidBuyNowTypeAttribute, ga_mpURL = "",
    asci_pixel = "",
    timeout = 2e3,
    step = 100,
    counter = 0,
    headersEnabled = !1,
    gcrWidgetURL, gcrWidgetDesktopURL, isRTL = !1,
    youtubeCCParam = "",
    youtubeCCOn = 0,
    youTubeCCLang = "en",
    googAds, QueryVal, youTubeSlide, tag, firstScriptTag, player, carouselSlide, promoSlide, done, smartSearchAPIResults;
$(document).ready(function() {
    function v() {
        var n = 0;
        $(".popup-add-cart .product-list li").each(function() {
            $(this).height() > n && (n = $(this).height())
        });
        $(".popup-add-cart .product-list.thumbnails li").height(n)
    }
    var u, f, c, r, p, w, b, g, l, k, nt, i, n, a, s, it, rt, y, d, h;
    hidBuyNowTypeAttribute = $(".hidBuyNowAdsenseSettings").attr("data-buynowtype");
    $(".footer-sticky-disclaimer").length > 0 && $("#page-footer").css("margin-bottom", $(".footer-sticky-disclaimer").outerHeight() + "px");
    navigator.sayswho = function() {
        var i = navigator.userAgent,
            t, n = i.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(i) || [], "IE" + (t[1] || "")) : n[1] === "Chrome" && (t = i.match(/\bOPR\/(\d+)/), t != null) ? "Opera" + t[1] : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"], (t = i.match(/version\/(\d+)/i)) != null && n.splice(1, 1, t[1]), n[0] + " " + n[0] + "" + n[1])
    }();
    u = navigator.sayswho.toLowerCase().replace(/\msie/g, "ie");
    f = "win";
    navigator.appVersion.indexOf("Win") != -1 && (f = "win");
    navigator.appVersion.indexOf("Mac") != -1 && (f = "macos");
    navigator.appVersion.indexOf("X11") != -1 && (f = "unix");
    navigator.appVersion.indexOf("Linux") != -1 && (f = "linux");
    (navigator.appVersion.indexOf("iPad") != -1 || navigator.appVersion.indexOf("iPhone") != -1) && (f = "ios");
    $("html").hasClass(f) || $("html").addClass(f);
    $("html").hasClass(u) || ($("html").addClass(u), u.indexOf("ie") < 0 && $("html").addClass("not-ie"), u.indexOf("ie6") >= 0 && $("html").addClass("ielt10 ielt9 ielt8 ielt7"), u.indexOf("ie7") >= 0 && $("html").addClass("ielt10 ielt9 ielt8"), u.indexOf("ie8") >= 0 && $("html").addClass("ielt10 ielt9"), u.indexOf("ie9") >= 0 && $("html").addClass("ielt10"));
    $("meta[name='language']").length > 0 && $("html").attr("lang", $("meta[name='language']").attr("content"));
    hidBuyNowTypeAttribute != undefined && hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && InitialiseGoogleParameters();
    $(".lnk-gcr-component").attr("href", "javascript:return(0)"),
        function() {
            var n = document.createElement("link"),
                t = $("link[rel='icon']").attr("href");
            n.type = "image/x-icon";
            n.rel = "shortcut icon";
            n.href = t;
            document.getElementsByTagName("head")[0].appendChild(n)
        }();
    c = "reset";
    r = !1;
    $(".sub-menu,.sub-menu-second").hide();
    $(".disabledbody-mask, .disabledheader-mask, .disabledsearch-mask, .logo").live("click touchstart", function() {
        $(".sub-menu,.sub-menu-second").css("display", "none")
    });
    $(".disabledbody-mask, .disabledheader-mask, .disabledsearch-mask").live("click touchend", function(n) {
        return $(".disabledbody-mask, .disabledheader-mask").css({
            height: "10px",
            width: "20px"
        }), $(".disabledsearch-mask").hide(), $(document).trigger("click"), $(".menu li,.menu-second li").removeClass("active-menu"), n.preventDefault(), n.stopPropagation(), r = !1, !1
    });
    $(document).on("click", function(n) {
        if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
            if ($("*").css("cursor", "pointer"), $(n.target).hasClass("menu-slide") || $(n.target).hasClass("menu-slide-second") || $(n.target).hasClass("sub-menu") || $(n.target).closest(".sub-menu").length > 0)($(n.target).hasClass("menu-slide") || $(n.target).hasClass("menu-slide-second")) && $(n.target).attr("href") && r && (n.stopPropagation(), n.preventDefault());
            else if ($(".menu li,.menu-second li").removeClass("active-menu"), $(".sub-menu,.sub-menu-second").hide(), r && $(n.target).closest(".sub-menu,.sub-menu-second").length == 0 && $(n.target).closest(".logo").length == 1) return n.stopPropagation(), n.preventDefault(), r = !1, !1
    });
    p = 0;
    $(".sub-menu-items li,.view-all-section").on("touchstart", function() {
        p = $(window).scrollTop()
    });
    $(".sub-menu-items li,.view-all-section").on("touchend", function() {
        p == $(window).scrollTop() && $(this).find("a").attr("href") && (window.location.href = $(this).find("a").attr("href"))
    });
    $(".menu-ph a").on("touchstart", function(n) {
        $(n.target).attr("href") && (window.location.href = $(this).attr("href"))
    });
    $(".menu li,.menu-second li").on("touchstart", function(n) {
        var f, t, e, i, o, s;
        if ($(n.target).closest(".sub-menu,.sub-menu-second").length == 0)
            if ($(".sub-menu,.sub-menu-second").hide(), $(this).hasClass("active-menu")) $(n.target).attr("href") ? window.location.href = $(this).find("a").attr("href") : $(this).find(".sub-menu").hide();
            else {
                $(".menu li,.menu-second li").removeClass("active-menu");
                $(this).addClass("active-menu");
                $(this).find(".sub-menu").show();
                r = !0;
                var h = $(window).width(),
                    u = $(".nav-background").outerWidth();
                try {
                    f = $(".nav-background").offset().left
                } catch (c) {}
                for (t = 0, $(this).find(".sub-menu").css("display", "block"), e = $(".sub-menu > .sub-sub "), i = 0; i < e.length; i += 5) e.slice(i, i + 5).wrapAll('<div class="line-row"><\/div>');
                o = $(this).offset().left - f;
                s = $(window).width() - $(this).offset().left - f - $(this).outerWidth();
                $(this).find(".sub-menu").children().each(function() {
                    t = t + $(this).outerWidth(!0)
                });
                t > 825 && (t = $(this).find(".sub-menu").width());
                $(this).find(".sub-menu").css("width", t);
                o + t > u && $(this).find(".sub-menu").css("left", (o + t) % u * -1 + "px");
                $(".disabledbody-mask").length <= 0 && ($("<div class='disabledbody-mask'><\/div>").insertAfter("#page-header"), $("<div class='disabledheader-mask'><\/div>").insertBefore("#page-header"), $("<div class='disabledsearch-mask'><\/div>").insertBefore(".search-icon-section"));
                $(".disabledbody-mask").css({
                    top: $("#page-header").outerHeight(),
                    width: "100%",
                    height: docHeight - $("#page-header").outerHeight()
                });
                $(".disabledheader-mask").css({
                    top: "0",
                    width: "100%",
                    height: $("#page-header .brand-country-section").outerHeight()
                });
                $(".disabledsearch-mask").show();
                $(".disabledsearch-mask").css({
                    top: "0",
                    width: $(".form-search").outerWidth(),
                    height: $(".form-search").outerHeight()
                })
            }
        else $(this).find(".sub-menu").show();
        if (r == !1) return $(this).closest("li").find(".sub-menu").show(), $(".disabledbody-mask").length <= 0 && ($("<div class='disabledbody-mask'><\/div>").insertAfter("#page-header"), $("<div class='disabledheader-mask'><\/div>").insertBefore("#page-header"), $("<div class='disabledsearch-mask'><\/div>").insertBefore(".search-icon-section")), $(".disabledbody-mask").css({
            top: $("#page-header").outerHeight(),
            width: "100%",
            height: docHeight - $("#page-header").outerHeight()
        }), $(".disabledheader-mask").css({
            top: "0",
            width: "100%",
            height: $("#page-header .brand-country-section").outerHeight()
        }), $(".disabledsearch-mask").show(), $(".disabledsearch-mask").css({
            top: "0",
            width: $(".form-search").outerWidth(),
            height: $(".form-search").outerHeight()
        }), r = !0, n.preventDefault(), n.stopPropagation(), !1
    });
    if (w = null, navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        $("#pagemainwrapper").css("cursor", "pointer");
        $(".carousel-indicators li").each(function() {
            $(this).click(function() {
                $(".carousel").carousel(parseInt($(this).attr("data-slide-to")));
                $(".carousel-indicators li.active").removeClass("active");
                $(this).addClass("active")
            })
        });
        $(".productdetail .product-image a").on("click touchend", function() {
            var i = $(this),
                n, t;
            i.is(w) && (n = $(this), t = n.attr("href"), window.location = t);
            w = $(this)
        });
        $(".product-image").hover(function() {
            $(this).find(".quick-view").show();
            $(this).find(".quick-view-bg").show()
        }, function() {
            $(this).find(".quick-view").hide();
            $(this).find(".quick-view-bg").hide()
        });
        $(".menu li,.menu-second li").hover(function() {
            var u, n, f, t, e, o;
            $(".sub-menu,.sub-menu-second").hide();
            $(this).find(".sub-menu").show();
            r = !0;
            var s = $(window).width(),
                i = $(".nav-background").outerWidth();
            try {
                u = $(".nav-background").offset().left
            } catch (h) {}
            for (n = 0, $(this).find(".sub-menu").css("display", "block"), f = $(".sub-menu > .sub-sub "), t = 0; t < f.length; t += 5) f.slice(t, t + 5).wrapAll('<div class="line-row"><\/div>');
            e = $(this).offset().left - u;
            o = $(window).width() - $(this).offset().left - u - $(this).outerWidth();
            $(this).find(".sub-menu").children().each(function() {
                n = n + $(this).outerWidth(!0)
            });
            n > 825 && (n = $(this).find(".sub-menu").width());
            $(this).find(".sub-menu").css("width", n);
            e + n > i && $(this).find(".sub-menu").css("left", (e + n) % i * -1 + "px");
            $(".disabledbody-mask").length <= 0 && ($("<div class='disabledbody-mask'><\/div>").insertAfter("#page-header"), $("<div class='disabledheader-mask'><\/div>").insertBefore("#page-header"), $("<div class='disabledsearch-mask'><\/div>").insertBefore(".search-icon-section"));
            $(".disabledbody-mask").css({
                top: $("#page-header").outerHeight(),
                width: "100%",
                height: docHeight - $("#page-header").outerHeight()
            });
            $(".disabledheader-mask").css({
                top: "0",
                width: "100%",
                height: $("#page-header .brand-country-section").outerHeight()
            });
            $(".disabledsearch-mask").show();
            $(".disabledsearch-mask").css({
                top: "0",
                width: $(".form-search").outerWidth(),
                height: $(".form-search").outerHeight()
            })
        }, function() {
            $(this).find(".sub-menu,.sub-menu-second").hide();
            $(".disabledbody-mask").length && $(".disabledbody-mask").css({
                height: "10px",
                width: "20px"
            });
            $(".disabledheader-mask").length && $(".disabledheader-mask").css({
                height: "10px",
                width: "20px"
            });
            $(".disabledsearch-mask").length && $(".disabledsearch-mask").hide()
        });
        $(".menu li").click(function() {
            $(this).find(".sub-menu").is(":visible") || $(this).find(".sub-menu").show()
        })
    }
    $("body").attr("dir") == "rtl" && (isRTL = !0);
    $(".headers-enabled").val() == "True" && (headersEnabled = !0);
    $(".recently-viewed-left").hide();
    $(".recently-viewed-right").hide();
    _updateDocDims();
    $(window).resize(function() {
        _updateDocDims()
    });
    (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) && $(".promo-nonempty").css({
        "-webkit-overflow-scrolling": "touch",
        overflow: "scroll"
    });
    b = !1;
    $("link").each(function() {
        $(this).attr("href").indexOf("pageeditor.css") >= 0 && (b = !0)
    });
    b == !1 ? $(".footer-sticky-disclaimer").length > 0 && ($(".floating-disclaimer-height").length > 0 && $(".floating-disclaimer-height").val() > 0 ? ($(".footer-sticky-disclaimer").height($(".floating-disclaimer-height").val()), $("#page-footer").css("margin-bottom", $(".footer-sticky-disclaimer").outerHeight() + "px")) : $(".footer-sticky-disclaimer").hide()) : $(".footer-sticky-disclaimer").length > 0 && $(".footer-sticky-disclaimer").find(".scWebEditInput").length <= 0 && $(".footer-sticky-disclaimer").height(20);
    navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) && ($(".quick-view").remove(), $(".quick-view-bg").remove());
    navigator.userAgent.match(/iPad/i) && (viewport = document.querySelector("meta[name=viewport]"), viewport && viewport.setAttribute("content", "width=800"));
    try {
        $(".hidProductHeroAreaWidth").val().toLowerCase() == "full" ? ($("#product-HeroCarousel").removeClass("span9").removeClass("pull-right").removeClass("three-quarter-width").removeClass("full-bleed"), $("#product-HeroCarousel").addClass("span12 full-width"), $(".home-page-carousel").removeClass("full-bleed"), $(".home-page-carousel").addClass("full-width")) : $(".hidProductHeroAreaWidth").val().toLowerCase() == "full bleed" ? ($("#product-HeroCarousel").removeClass("span12").removeClass("full-width").removeClass("span9").removeClass("pull-right").removeClass("three-quarter-width"), $("#product-HeroCarousel").addClass("span12 full-bleed"), $(".home-page-carousel").removeClass("full-width"), $(".home-page-carousel").addClass("full-bleed")) : ($("#product-HeroCarousel").removeClass("span12").removeClass("full-width").removeClass("full-bleed"), $("#product-HeroCarousel").addClass("span9 pull-right three-quarter-width"))
    } catch (lt) {}
    $(".carousel .item, .flexible-promo-container").click(function(n) {
        var t = n.target,
            i, r;
        t.nodeName.toLowerCase() == "img" || t.nodeName.toLowerCase() == "a" || $(this).attr("data-url") && (i = $(this).attr("data-url"), r = $(this).attr("data-target"), window.open(i, r))
    });
    g = $(".hidden-field-interval").children().attr("value");
    l = $(".hidden-field-autoplay").children().attr("value");
    l != null && l != undefined && (l.toLowerCase() == "false" ? $(".carousel").carousel({
        interval: !1
    }) : $(".carousel").carousel({
        interval: g
    }));
    k = !1;
    $(document).on("click", ".carousel-control , .carousel-indicators ", function() {
        k = !0
    });
    $(".carousel").on("slid", "", function() {
        k == !0 && $(".carousel").carousel("pause")
    });
    if ($($("#carousel-pagination li")[0]).removeClass("item"), $(".hidden-field-looping input").val() === "false") {
        $(".carousel").each(function() {
            var n = $(this);
            n.children(".carousel-control").show();
            $(".carousel-inner .item:first").hasClass("active") ? n.children(".left.carousel-control").hide() : $(".carousel-inner .item:last").hasClass("active") && n.children(".right.carousel-control").hide()
        });
        $(".carousel").on("slid", "", function() {
            var n = $(this);
            n.children(".carousel-control").show();
            $(".carousel-inner .item:first").hasClass("active") ? n.children(".left.carousel-control").hide() : $(".carousel-inner .item:last").hasClass("active") && (n.children(".right.carousel-control").hide(), $(".carousel").carousel("pause"))
        })
    }
    $(document.documentElement).addClass("js-ready");
    $(".carousel").on("swipeleft", function() {
        $(".carousel").carousel("pause");
        $(".carousel-inner .item:last").hasClass("active") || $(".hidden-field-looping input").val() !== "false" ? $(".hidden-field-looping input").val() === "true" && $(".carousel").carousel("next") : $(".carousel").carousel("next")
    });
    $(".carousel").on("swiperight", function() {
        $(".carousel").carousel("pause");
        $(".carousel-inner .item:first").hasClass("active") || $(".hidden-field-looping input").val() !== "false" ? $(".hidden-field-looping input").val() === "true" && $(".carousel").carousel("prev") : $(".carousel").carousel("prev")
    });
    if ($(".carousel").each(function() {
            $(this).hasClass("vertical") && $(".carousel-inner").each(function() {
                var n = $(this).height(),
                    t = n / 2,
                    i = $(this).next(".carousel-indicators").children("li").height(),
                    r = $(this).next(".carousel-indicators").children("li").size(),
                    u = i * r,
                    f = u / 2,
                    e = t - f,
                    o = e / 2;
                $(this).next(".carousel-indicators-vertical").css("top", o)
            })
        }), $(".video-popup-btn").attr("href", "#video-overlay"), $(".video-popup-btn").click(function() {
            function t(n) {
                n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
                    t = i.exec($("#video-popup .video-player-flash").attr("data-videoid"));
                return t == null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            }
            if ($("#video-popup").modal("show"), $("#video-popup .video-player-flash").attr("data-videoid", $(this).parent().attr("data-videoid")), $("#video-popup .video-player-flash"))
                if (youTubeSlide = "", youTubeSlide = $("#video-popup .video-player-flash"), $("#video-popup .video-player-flash iframe").length == 0) mtonYouTubeIframeAPIReady();
                else {
                    var n = "https://www.youtube.com/embed/" + t("v") + "?controls=1&showinfo=0&modestbranding=0&rel=0&wmode=opaque&enablejsapi=1" + youtubeCCParam;
                    $("#video-popup .video-player-flash iframe").attr("src", n)
                }
            $("#video-popup").on("hide", function() {
                $("#video-popup .video-player-flash iframe").attr("src", "")
            })
        }), $("html").hasClass("ie7")) {
        $(".carousel-control").css("top", "0");
        try {
            nt = $(".carousel-inner").offset().top
        } catch (lt) {}
        var ut = $(".carousel-inner").height(),
            tt = ut / 2,
            at = nt + tt,
            ft = $(".carousel-control").height(),
            et = ft / 2,
            ot = tt - et;
        $(".carousel-control").css("margin-top", ot);
        $(".video-popup-btn").click(function() {
            var n, i, r;
            $(".carousel").css("position", "static");
            $(".carousel-inner").css("position", "static");
            $(".carousel-inner > .item").css("position", "static");
            n = $(".carousel-inner").offset().left;
            $(".carousel-control-left").css("margin-left", n);
            i = $(".carousel-inner").offset();
            r = $(window).width() - (i.left + $(".carousel-inner").outerWidth(!0));
            $(".carousel-control-right").css("margin-right", r);
            var o = $(".carousel-inner").offset().top,
                s = $(".carousel-inner").height(),
                h = s / 2,
                c = o + h,
                u = $(".slider-video-btn").height(),
                l = u / 3,
                rt = c - u + l;
            $(".carousel-control").css("top", "0");
            var a = $(".carousel-inner").offset().top,
                v = $(".carousel-inner").height(),
                y = v / 2,
                p = a + y,
                w = $(".carousel-control").height(),
                b = w / 2,
                k = p - b;
            $(".carousel-control").css("margin-top", k);
            var d = $(".carousel-inner").width(),
                t = d / 2,
                g = t + n,
                nt = $(".carousel-inner").next(".carousel-indicators").children("li").width(),
                tt = $(".carousel-inner").next(".carousel-indicators").children("li").size(),
                f = nt * tt,
                e = f / 2,
                it = g - e,
                ut = t - f,
                ft = t + e;
            $(".carousel-inner").next(".ie7 .carousel-indicators").css("left", "0");
            $(".carousel-inner").next(".ie7 .carousel-indicators").css("margin-left", it)
        });
        $(".modal").on("hide", function() {
            $(".carousel").css("position", "relative");
            $(".carousel-inner").css("position", "relative");
            $(".carousel-inner > .item").css("position", "relative");
            $(".carousel-control-left").css("margin-left", "0px");
            $(".carousel-control-right").css("margin-right", "0px");
            $(".carousel-inner").next(".ie7 .carousel-indicators").css("margin-left", "0");
            $(".carousel-control").css("margin-top", "");
            $(".carousel-control").css("margin-top", "0");
            $(".carousel-control").css("top", "");
            var n = $(".carousel-inner").width(),
                t = n / 2,
                i = $(".carousel-inner").next(".carousel-indicators").children("li").width(),
                r = $(".carousel-inner").next(".carousel-indicators").children("li").size(),
                u = i * r,
                f = u / 2,
                e = t - f;
            $(".carousel-inner").next(".ie7 .carousel-indicators").css("margin-left", "0");
            $(".carousel-inner").next(".ie7 .carousel-indicators").css("left", e)
        });
        $(".carousel").each(function() {
            $(this).children(".carousel-vertical-control.left").css("margin-top", "0px");
            var n = $(this).height(),
                t = $(this).children(".carousel-vertical-control.right").height();
            margintopvalue = n - t;
            $(this).children(".carousel-vertical-control.right").css("margin-top", margintopvalue)
        })
    }
    try {
        var st = $(".carousel-inner").offset().top,
            ht = $(".carousel-inner").height(),
            ct = ht / 2,
            vt = st + ct
    } catch (lt) {}
    $(".carousel-inner").each(function() {
        var t = $(this).width(),
            i = t / 2,
            r = $(this).next(".carousel-indicators").children("li").width(),
            u = $(this).next(".carousel-indicators").children("li").size(),
            f = r * u,
            e = f / 2,
            n = i - e;
        $(this).next(".carousel-indicators").css("left", n);
        $(this).next(".ie7 .carousel-indicators").css("left", n)
    });
    $(".modal").live("shown", function() {
        try {
            $(".carousel").carousel("pause")
        } catch (n) {}
    });
    $(".modal").live("hide", function() {
        try {
            $(".carousel").carousel()
        } catch (n) {}
    });
    $(".search-pic-fix").click(function() {
        var t = $(".search-query").attr("data-DefaultText"),
            i = $(".search-query").attr("data-ErrorMessage"),
            n = $(".search-query").val().trim();
        n != null && n != "" && n != t && n != $(".search-query").attr("data-ErrorMessage") ? ($(".search-box").removeClass("error"), window.location.href = $(".search_btn").attr("data-searchResultsPage") + "?term=" + encodeURIComponent(n)) : ($(".search-query").val(i), $(".search-box").addClass("error"))
    });
    $("#searchbox .search-query").on("focus", function() {
        var n = $(".search-query").attr("data-DefaultText"),
            t = $(".search-query").attr("data-ErrorMessage");
        ($(".search-query").val() == n || $(".search-query").val() == t) && ($(".search-box").removeClass("error"), $(this).val(""))
    });
    $("#searchbox .search-query").on("keypress", function(n) {
        var i = n.keyCode ? n.keyCode : n.which;
        if (i == 13 && $(".autocomplete-selected").length == 0) {
            n.preventDefault();
            var r = $(".search-query").attr("data-DefaultText"),
                u = $(".search-query").attr("data-ErrorMessage"),
                t = $(".search-query").val();
            t != null && t != "" && t != r && t != $(".search-query").attr("data-ErrorMessage") ? ($(".search-box").removeClass("error"), window.location.href = $(".search_btn").attr("data-searchResultsPage") + "?term=" + encodeURIComponent(t)) : ($(".search-query").val(u), $(".search-box").addClass("error"), $("input").blur())
        }
    });
    $(".mt-accordion li a").each(function() {
        var n = $(this);
        n.hasClass("active") && ($(this).closest("ul").closest("li").children("a").addClass("active"), $(this).closest("ul").closest("li").closest("ul").closest("li").children("a").addClass("active"), n.parents("ul").slideDown("fast"), n.siblings("ul").slideDown("fast"))
    });
    $(".share a").each(function() {
        $(this).attr("href", "#warning-Window");
        $(this).on("click", function() {
            return $(".share-btn").attr("href", $(this).attr("data-share")), $(".share-btn .social-name").html($(this).attr("data-title")), $("#warning-modal").modal("show"), !1
        })
    });
    $(".share a").attr("data-share");
    $(".modal").live("shown", function() {
        $("#warning-modal .agree-check input").length ? ($(".share-btn").attr("data-share", $(".share-btn").attr("href")), $(".share-btn").attr("href", "#share"), $(".share-btn").removeAttr("target"), $(".share-btn").click(function() {
            $(this).attr("target") ? $("#warning-modal").modal("hide") : $(this).closest(".modal-body").find(".validator").css("visibility", "visible")
        }), $(".modal").live("hide", function() {
            $(".agree-check input").prop("checked", !1);
            $(".validator").css("visibility", "hidden")
        }), $("#warning-modal .agree-check input").change(function() {
            $(this).is(":checked") ? ($(".share-btn").attr("href", $(".share-btn").attr("data-share")), $(".share-btn").attr("target", "_blank")) : ($(".share-btn").attr("href", "#share"), $(".share-btn").removeAttr("target"))
        })) : $(".share-btn").live("click", function() {
            $("#warning-modal").modal("hide")
        })
    });
    $(".logoutbtn").attr("href", "#logout-confirmation-modal");
    $(".logoutbtn").on("click", function() {
        $("#logout-confirmation-modal").modal("show")
    });
    if ($(".add-to-cart-btn").live("click", function() {
            AddToCart($(this))
        }), $(".menu-second").hasClass("edit-mode-expand-bottom")) {
        var e = "left",
            o = $(window).width(),
            t = $(".nav-background-expand").outerWidth(),
            i = (o - t) / 2,
            n = 0;
        $(".menu-slide-second").each(function() {
            $(this).attr("href", "#");
            $(this).click(function() {
                var r = $(this).closest("li").find(".sub-menu-second"),
                    f, u, o, s;
                if ($("ul.menu li ul.sub-menu").slideUp(900), r.hasClass("activeTab5")) r.slideToggle(900), $(".activeTab5").slideUp(900), r.removeClass("activeTab5");
                else {
                    for ($("ul.menu-second li ul.sub-menu-second").removeClass("activeTab5"), $("ul.menu-second li ul.sub-menu-second").slideUp(900), r.addClass("activeTab5"), $(".activeTab5").slideToggle(900), f = $(".sub-menu-second > .sub-sub "), u = 0; u < f.length; u += 5) f.slice(u, u + 5).wrapAll('<div class="line-row"><\/div>');
                    n = 0;
                    o = $(this).offset().left - i;
                    s = $(window).width() - $(this).offset().left - i - $(this).outerWidth();
                    r.children().each(function() {
                        n = n + $(this).outerWidth(!0)
                    });
                    n > 825 && (n = r.width());
                    r.css("width", n);
                    e != "right" ? o + n > t && r.css("left", (o + n) % t * -1 + "px") : (r.css("right", "0"), s + n > t && r.css("right", (s + n) % t * -1 + "px"))
                }
            })
        })
    } else {
        var e = "left",
            o = $(window).width(),
            t = $(".nav-background-expand").outerWidth(),
            i = (o - t) / 2,
            n = 0;
        $(".nav-background-expand .menu-second > li").each(function() {
            $(this).mouseenter(function() {
                var u, r, f, o;
                for (n = 0, $(this).find(".sub-menu-second").css("display", "block"), u = $(".sub-menu-second > .sub-sub "), r = 0; r < u.length; r += 5) u.slice(r, r + 5).wrapAll('<div class="line-row"><\/div>');
                f = $(this).offset().left - i;
                o = $(window).width() - $(this).offset().left - i - $(this).outerWidth();
                $(this).find(".sub-menu-second").children().each(function() {
                    n = n + $(this).outerWidth(!0)
                });
                n > 825 && (n = $(this).find(".sub-menu-second").width());
                $(this).find(".sub-menu-second").css("width", n);
                e != "right" ? f + n > t && $(this).find(".sub-menu-second").css("left", (f + n) % t * -1 + "px") : ($(this).find(".sub-menu-second").css("right", "0"), o + n > t && $(this).find(".sub-menu-second").css("right", (o + n) % t * -1 + "px"))
            });
            $(this).mouseleave(function() {
                $(this).find(".sub-menu-second").css("display", "none")
            })
        })
    }
    if ($(".menu").hasClass("edit-mode")) {
        var e = "left",
            o = $(window).width(),
            t = $(".nav-background").outerWidth(),
            i = (o - t) / 2,
            n = 0;
        $(".menu-slide").each(function() {
            $(this).attr("href", "#");
            $(this).click(function() {
                var r = $(this).closest("li").find("ul.sub-menu"),
                    f, u, o, s;
                if (r.hasClass("activeTab2")) r.slideToggle(900), $(".activeTab2").slideUp(900), r.removeClass("activeTab2");
                else {
                    for ($("ul.menu li ul.sub-menu").removeClass("activeTab2"), $("ul.menu li ul.sub-menu").slideUp(900), r.addClass("activeTab2"), $(".activeTab2").slideToggle(900), f = $(".sub-menu > .sub-sub "), u = 0; u < f.length; u += 5) f.slice(u, u + 5).wrapAll('<div class="line-row"><\/div>');
                    n = 0;
                    o = $(this).offset().left - i;
                    s = $(window).width() - $(this).offset().left - i - $(this).outerWidth();
                    r.children().each(function() {
                        n = n + $(this).outerWidth(!0)
                    });
                    n > 825 && (n = r.width());
                    r.css("width", n);
                    e != "right" ? o + n > t && r.css("left", (o + n) % t * -1 + "px") : (r.css("right", "0"), s + n > t && r.css("right", (s + n) % t * -1 + "px"))
                }
            })
        })
    } else {
        var e = "left",
            o = $(window).width(),
            t = $(".nav-background").outerWidth();
        try {
            i = $(".nav-background").offset().left
        } catch (yt) {}
        n = 0;
        $(".menu > li").each(function() {
            $(this).mouseenter(function() {
                var u, r, f, o;
                for (n = 0, $(this).find(".sub-menu").css("display", "block"), u = $(".sub-menu > .sub-sub "), r = 0; r < u.length; r += 5) u.slice(r, r + 5).wrapAll('<div class="line-row"><\/div>');
                f = $(this).offset().left - i;
                o = $(window).width() - $(this).offset().left - i - $(this).outerWidth();
                $(this).find(".sub-menu").children().each(function() {
                    n = n + $(this).outerWidth(!0)
                });
                n > 825 && (n = $(this).find(".sub-menu").width());
                $(this).find(".sub-menu").css("width", n);
                e != "right" ? f + n > t && $(this).find(".sub-menu").css("left", (f + n) % t * -1 + "px") : ($(this).find(".sub-menu").css("right", "0"), o + n > t && $(this).find(".sub-menu").css("right", (o + n) % t * -1 + "px"));
                $(this).find(".sub-menu").length > 0 && (c = "open")
            });
            $(this).mouseleave(function() {
                $(this).find(".sub-menu").css("display", "none");
                c == "open" && (c = "closed")
            })
        })
    }
    $("ul#menu li a, ul#menu li ul.sub-menu li a").click(function() {
        $(this).next("ul#menu li ul.sub-menu").hasClass("submenuHid") ? ($(this).parent().parent().find("ul.sub-menu").addClass("submenuHid"), $(this).next("ul#menu li ul.sub-menu").removeClass("submenuHid").addClass("submenuVis")) : $(this).next("ul#menu li ul.sub-menu").removeClass("submenuVis").addClass("submenuHid")
    });
    window.setTimeout(function() {
        $(".item:first").find(".video-player-flash") != null && (youTubeSlide = $(".item:first").find(".video-player-flash"), mtonYouTubeIframeAPIReady())
    }, 500);
    $(".span12 .carousel").each(function() {
        $(this).carousel().on("slide", function(n) {
            $(".carousel .video-player-flash").each(function() {
                var n = $(this).html();
                $(this).empty();
                $(this).append(n)
            });
            var r = $(this).find(".item.active"),
                t = r.parent().children(),
                u = t.index(r),
                i = t.index(n.relatedTarget),
                f = i - u;
            t.eq(i).find(".video-player-flash").length > 0 && (youTubeSlide = t.eq(i).find(".video-player-flash"), mtonYouTubeIframeAPIReady())
        })
    });
    $(".promo-pop-up").each(function() {
        $(".carousel").carousel({
            interval: !1
        });
        $(this).click(function() {
            $(this).parent().parent().parent().parent().parent().next().find(".video-player-flash") != null && (youTubeSlide = $(this).parent().parent().parent().parent().parent().next().find(".video-player-flash"), mtonYouTubeIframeAPIReady())
        })
    });
    $(".video-popup-cover").remove();
    $(".product-video-pop-up").click(function() {
        var n = $(this).attr("data-video");
        $(this).attr("data-video") != "" && ($("#video-popup").modal(), $("#video-popup").children().find(".video-player-flash").attr("data-videoid", n), $("#video-popup").children().find(".video-player-flash") != null && (youTubeSlide = $("#video-popup").children().find(".video-player-flash"), onYouTubeIframeAPIReadyProduct(n)))
    });
    $(".content-primary .img-thumb ul li a").each(function() {
        $(this).click(function() {
            var n, t, i, r;
            $(".product-zoom-container img").attr("data-action-detail", "");
            $(".product-zoom-container img").attr("data-video", "");
            n = $(this).attr("data-video");
            $(this).parent().parent().parent().parent().parent().parent().children().children().children("img").attr("data-video", n);
            t = $(this).attr("data-action-detail");
            t ? ($(".product-zoom-container img").addClass("event_video_play"), $("#zoom-modal").removeClass("popup-zoom-image"), i = $(this).attr("href"), i.length && (r = $(this).attr("data-large", "$(this).attr('href')"))) : ($(".product-zoom-container img").removeClass("event_video_play"), $("#zoom-modal").addClass("popup-zoom-image"));
            $(".product-zoom-container img").attr("data-action-detail", t);
            $(".product-zoom-container img").attr("data-video", n)
        })
    });
    $(".rightarrow").each(function() {
        $(this).on("click", function() {
            $(".product-zoom-container img").attr("data-action-detail", "");
            $(".product-zoom-container img").attr("data-video", "");
            setTimeout(function() {
                var t = $(".rightarrow").prev().prev().find(".active-img").children("a").attr("data-video"),
                    n;
                $(".product-zoom-container img").attr("data-video", t);
                n = $(".rightarrow").prev().prev().find(".active-img").children("a").attr("data-action-detail");
                n ? $(".product-zoom-container img").addClass("event_video_play") : $(".product-zoom-container img").removeClass("event_video_play");
                $(".product-zoom-container img").attr("data-action-detail", n);
                $(".product-zoom-container img").attr("data-video", t)
            }, 250)
        })
    });
    $(".leftarrow").each(function() {
        $(this).on("click", function() {
            $(".product-zoom-container img").attr("data-action-detail", "");
            $(".product-zoom-container img").attr("data-video", "");
            setTimeout(function() {
                var t = $(".leftarrow").prev().find(".active-img").children("a").attr("data-video"),
                    n;
                $(".product-zoom-container img").attr("data-video", t);
                n = $(".leftarrow").prev().find(".active-img").children("a").attr("data-action-detail");
                n ? $(".product-zoom-container img").addClass("event_video_play") : $(".product-zoom-container img").removeClass("event_video_play");
                $(".product-zoom-container img").attr("data-action-detail", n);
                $(".product-zoom-container img").attr("data-video", t)
            }, 250)
        })
    });
    $(".modal").on("hide", function() {
        $(".video-player-flash").each(function() {
            var n = $(this).html();
            $(this).empty();
            $(this).append(n)
        })
    });
    $(".modal").on("hide", function() {
        var t = $(".hidden-field-interval").children().attr("value"),
            n = $(".hidden-field-autoplay").children().attr("value");
        n != null && n != undefined && n.toLowerCase() == "true" && $(".carousel").carousel({
            interval: t
        });
        $(".video-player-flash").each(function() {
            var n = $(this).html();
            $(this).empty();
            $(this).append(n)
        })
    });
    $(".mt-accordion li a").on("click", function() {
        var n = $(this).closest("ul").hasClass("multiple") ? 1 : 0;
        n || $(this).closest("li").siblings("li").children("a").removeClass("active");
        $(this).next("ul").length > 0 && ($(this).hasClass("active") ? $(this).next("ul").slideDown("fast") : ($(this).next("ul").find("a").removeClass("active"), $(this).next("ul").slideUp("fast")))
    });
    $(".box-content-wrapper").each(function() {
        $(this).children().hasClass("img-cont") || $(this).find(".span9").removeClass("span9").addClass("row-fluid")
    });
    $(".print-preview").on("click", function() {
        setTimeout(function() {
            var n = $(window).width(),
                t = $("#print-modal").width(),
                i = n - t,
                r = i / 2;
            $("#print-modal").css("left", r)
        }, 250)
    });
    (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) && (a = document.querySelector('meta[name="viewport"]'), a && (a.content = "", document.body.addEventListener("gesturestart", function() {
        a.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
    }, !1)));
    s = 0;
    $(window).load(function() {
        $(".tooltip-pop").addClass("hide")
    });
    $(".product-price a.tooltip-link").live("mouseenter", function() {
        window.clearTimeout(s);
        $(this).attr("title", "");
        $(".ie7").length > 0 && ($(".thumbnail").each(function() {
            $(this).css("z-index", "0")
        }), $(this).closest(".thumbnail").css("z-index", "900"));
        var n = $(this).closest(".product-price").find(".tooltip-pop"),
            t = n.find("span");
        $.trim(n.html()) != "" ? t.length > 0 && $.trim(t.html()) == "" ? $(this).css("cursor", "default") : (n.css("z-index", "999"), n.removeClass("hide")) : $(this).css("cursor", "default")
    }).live("mouseleave", function() {
        var n = $(this).closest(".product-price").find(".tooltip-pop");
        s = window.setTimeout('$(".tooltip-pop").addClass("hide")', 50)
    });
    $(".tooltip-pop").live("mouseenter", function() {
        window.clearTimeout(s)
    }).live("mouseleave", function() {
        s = window.setTimeout('$(".tooltip-pop").addClass("hide")', 50)
    });
    $(".product-price a.tooltip-link").live("click", function(n) {
        n.preventDefault()
    });
    $(".login-btn").on("click", function() {});
    $(".breadcrumb").length > 0 && $(".breadcrumb li:last-child").addClass("active");
    $(".modal").live("shown", function() {
        v();
        $(".popup-add-cart .product-list li").imagesLoaded(function() {
            v()
        });
        window.setTimeout("setSameHeightCart()", 1e3)
    });
    it = $(".container-tip-article").width();
    rt = it / 2 - 10;
    $(".brick").width(rt);
    $(".nojs-alert-wrapper").css("display", "none");
    $(".modal").live("shown", function() {
        v();
        $(".popup-add-cart .product-list li").imagesLoaded(function() {
            v()
        });
        window.setTimeout("setSameHeightCart()", 1e3)
    });
    setSameHeightEmptyCart();
    try {
        $(".reatiler-section .related-product .product-list li").imagesLoaded(function() {
            setSameHeightEmptyCart()
        })
    } catch (lt) {}
    if (window.setTimeout("setSameHeightEmptyCart()", 1e3), $(".promo-container-row").each(function() {
            $(this).find(".promo-nonempty").length > 0 && $(this).removeClass("hide")
        }), $(".thumbnails li").live("click", function(n) {
            if (n || (n = window.event), clicktarget = n.target || n.srcElement, !r && !$(clicktarget).closest(".checker").length && !$(clicktarget).closest("label").length && !$(clicktarget).closest(".rating-wrapper").length && !$(clicktarget).closest(".quick-view").length && !$(clicktarget).closest("select").length && !$(clicktarget).closest(".selector").length) {
                var t = $(this).find(".thumbnail").attr("data-url");
                typeof t != typeof undefined && t !== !1 && (window.location = t)
            }
        }), $("link").each(function() {
            $(this).attr("href").indexOf("pageeditor.css") > 0 && (pageEditorMode = !0)
        }), $(".versioned-item-container").each(function() {
            $(this).find(".versioned-item").length > 0 || $(this).addClass("hide")
        }), $(".versioned-country-container").each(function() {
            $(this).children(".versioned-item").length > 0 || $(this).addClass("hide")
        }), $(".versioned-menu-container").each(function() {
            $(this).find("div.menu-ph .versioned-item").length > 0 || $(this).addClass("hide")
        }), navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) $("body").on("touchstart", function(n) {
        $(n.target).closest(".search-query").length > 0 || $(n.target).hasClass("autocomplete-suggestion") || $(n.target).offsetHeight < $(n.target).scrollHeight || $(n.target).parent().hasClass("autocomplete-group") || $(n.target).parents().hasClass("autocomplete-suggestion") || $(".autocomplete-suggestions").hide()
    });
    else y = !1, $(".autocomplete-suggestions").mousedown(function() {
        y = !0
    }), $(".autocomplete-suggestions").mouseup(function() {
        y = !1;
        $(".search-query").focus()
    }), $(".search-query").blur(function() {
        y || $(".autocomplete-suggestions").hide()
    });
    $(document).keyup(function(n) {
        n.keyCode == 27 && $("#logout-confirmation-modal, .modal-backdrop").modal("hide")
    });
    $.trim($(".tips-content").html()) == "" && $(".tips-content").addClass("hide");
    $.trim($(".main-container").html()) == "" && $(".main-container").addClass("hide");
    $(".isPageEditorMode").val() == "no" && (d = !0, $("#call-out-outer-wrapper > div").each(function() {
        if ($(this).hasClass("hide")) h = !1;
        else return d = !0, !1
    }), d == !1 && $("#call-out-outer-wrapper").addClass("hide"), h = !0, $("#Div17 > div").each(function() {
        if ($(this).hasClass("hide")) h = !1;
        else return h = !0, !1
    }), h == !1 && $("#Div17").addClass("hide"), $(".youtube-cc-lang").length > 0 && (youtubeCCOn = 1, youTubeCCLang = $(".youtube-cc-lang").val(), youtubeCCParam = "&cc_load_policy=1&cc_lang_pref=" + $(".youtube-cc-lang").val()), $(".heading-wrapper").length > 0 && ($(".heading-wrapper")[0].children.length > 0 || ($(".heading-wrapper").addClass("hide"), $(".right-related").addClass("hide"))));
    createGCRURL($(".hidSKUID").val());
    $(".lnk-gcr-component").on("click", function() {
        $(".modal-auto-height").val() == "True" && ($("body").addClass("modal-open"), $(".popup-gcr-widget").closest("#modal-new-backdrop").length <= 0 && ($(".popup-gcr-widget").wrap($("<div/>", {
            id: "modal-new-backdrop"
        })), $("#modal-new-backdrop").css("height", winH), $("#modal-new-backdrop").attr("tabindex", "100"), $("#modal-new-backdrop").focus()));
        $(".popup-gcr-widget").modal("show")
    })
});
$(document).ajaxComplete(function() {
    $(".popup-quick-view select, .modal-body select").uniform()
});
var counter = 0,
    totalThumbs = 4,
    zoomCounter = 0,
    delay;
$(window).load(function() {
    function n() {
        var t, i, u, n;
        if ($(".recently-viewed-wrapper .thumbnails li").length > 4) {
            $(".recently-viewed-left").show();
            $(".recently-viewed-right").show();
            t = 0;
            i = 0;
            $(".recently-viewed-wrapper .thumbnails li").each(function() {
                i = parseInt($(this).outerWidth(!0));
                parseInt($(this).css("width")) > t && (t = i)
            });
            $(".recently-viewed-wrapper .thumbnails li").each(function() {});
            u = $(".recently-viewed-wrapper .recently-viewed-wrapper").outerWidth(!0);
            n = $($(".recently-viewed-wrapper li")[1]).outerWidth(!0);
            $(".recently-viewed-wrapper .thumbnails").css("width", parseInt(n * $(".recently-viewed-wrapper .thumbnails li").length) + "px");
            var f = $(".recently-viewed-carousel .recently-viewed-wrapper").outerHeight(!0),
                r = n * 4,
                e = 0;
            $(".recently-viewed-wrapper .thumbnails").css("position", "absolute");
            $(".recently-viewed-carousel .recently-viewed-wrapper").css("width", parseInt(n * 4) + "px");
            $(".recently-viewed-carousel .recently-viewed-wrapper").css("overflow", "hidden").css("position", "relative").css("height", parseInt(f) + "px");
            $("body").attr("dir") == "rtl" ? s() : o();

            function o() {
                $(".recently-viewed-right").hide();
                $(".recently-viewed-left").on("click", function() {
                    $(".recently-viewed-wrapper .thumbnails").animate({
                        left: -r
                    });
                    $(".recently-viewed-left").hide();
                    $(".recently-viewed-right").show()
                });
                $(".recently-viewed-right").on("click", function() {
                    $(".recently-viewed-wrapper .thumbnails").animate({
                        left: e
                    });
                    $(".recently-viewed-right").hide();
                    $(".recently-viewed-left").show()
                })
            }

            function s() {
                var t = $(".recently-viewed-carousel .thumbnails li").length - 4;
                $(".recently-viewed-left").hide();
                $(".recently-viewed-right").show();
                $(".recently-viewed-carousel .product-list li.span3").css("float", "right");
                $(".recently-viewed-carousel .thumbnails").css("left", -(n * t) + "px");
                $(".recently-viewed-left").on("click", function() {
                    $(".recently-viewed-wrapper .thumbnails").animate({
                        left: -(n * t)
                    });
                    $(".recently-viewed-left").hide();
                    $(".recently-viewed-right").show()
                });
                $(".recently-viewed-right").on("click", function() {
                    $(".recently-viewed-wrapper .thumbnails").animate({
                        left: -(n * t) + r
                    });
                    $(".recently-viewed-right").hide();
                    $(".recently-viewed-left").show()
                })
            }
        }
    }
    if ($(".product-image .quick-view").css("display", ""), $(".product-image .quick-view-bg").css("display", ""), $(".position-relative").each(function() {
            var t = $(this).height(),
                n = $(this).find(".one-colum-layout").height();
            t <= n && $(this).height(n)
        }), $(".position-relative").each(function() {
            var t = $(this).height(),
                n = $(this).find(".one-colum-layout-edit").height();
            t <= n && $(this).height(n)
        }), $(".promo-area-one .flexible-promo-container").each(function() {
            $(this).find(".video-player-flash") && (youTubeSlide = $(this).find(".video-player-flash"), promoOnYouTubeIframeAPIReady())
        }), $(function() {
            $(".recently-viewed-carousel").length > 0 && n()
        }), navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
        $(".buyitnow-btn-container .buyitnow-btn").bind("touchstart click", function() {
            hidBuyNowTypeAttribute != undefined && (hidBuyNowTypeAttribute.trim() == "binchanneladvisor" || hidBuyNowTypeAttribute.trim() == "fallbackonly" ? ($(".product-title h2").html(""), CallBuyNowChannelAdvisor()) : hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && CallGoogleModule(!1))
        });
        $(document).on("touchstart", "#compareModal .quick-view a", function() {
            counter = 0;
            var n = $(this).attr("data-productid"),
                t = $(this).attr("data-variantid");
            $(".popup-quick-view").empty();
            $(".quickview-preloader").show();
            $.ajax({
                url: "/layouts/abbs/handlers/desktop/ProductQuickView.aspx",
                type: "get",
                data: {
                    productid: n,
                    variantid: t
                },
                contenttype: "application/json;charset=utf-8",
                traditional: !0,
                success: function(n) {
                    ShowResultForQuickView(n);
                    hidBuyNowTypeAttribute != undefined && (hidBuyNowTypeAttribute.trim() == "binchanneladvisor" ? (logSkuID = $(".hidSKUQV").val(), logItemID = $(".hidQuickViewProductID").val(), LogAFshData()) : hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && (hideFallbackContainers(), fallBackText = $(n).filter(".fallBackQV").html(), CallGoogleModule(!0)));
                    setTimeout(function() {
                        $(".popup-quick-view").modal()
                    }, 500);
                    $(".im-preview .video-thumb").click(function() {
                        var n = $(this).attr("data-video");
                        $(".popup-quick-view").modal("hide");
                        $("#video-popup").modal();
                        $("#video-popup").children().find(".video-player-flash").attr("data-videoid", n);
                        $("#video-popup").children().find(".video-player-flash") != null && (youTubeSlide = $("#product-video-popup-cover").children().find(".video-player-flash"), onYouTubeIframeAPIReadyProduct(n))
                    });
                    $(".quickview-preloader").hide()
                },
                error: ShowErrorForQuickView
            })
        })
    } else {
        $(document).on("click", ".buyitnow-btn-container .buyitnow-btn", function() {
            hidBuyNowTypeAttribute != undefined && (hidBuyNowTypeAttribute.trim() == "binchanneladvisor" || hidBuyNowTypeAttribute.trim() == "fallbackonly" ? ($(".product-title h2").html(""), CallBuyNowChannelAdvisor()) : hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && CallGoogleModule(!1))
        });
        $(document).on("click", ".quick-view a", function(n) {
            n.stopPropagation();
            counter = 0;
            var t = $(this).attr("data-productid"),
                i = $(this).attr("data-variantid");
            $(".popup-quick-view").empty();
            $(".quickview-preloader").show();
            $.ajax({
                url: "/layouts/abbs/handlers/desktop/ProductQuickView.aspx",
                type: "get",
                data: {
                    productid: t,
                    variantid: i
                },
                contenttype: "application/json;charset=utf-8",
                traditional: !0,
                success: function(n) {
                    ShowResultForQuickView(n);
                    hidBuyNowTypeAttribute != undefined && (hidBuyNowTypeAttribute.trim() == "binchanneladvisor" ? (logSkuID = $(".hidSKUQV").val(), logItemID = $(".hidQuickViewProductID").val(), LogAFshData()) : hidBuyNowTypeAttribute.trim() == "bingoogleadsense" && (hideFallbackContainers(), buyNowAdsenseSettings.BuyNowAdSenseSupportType == "gtin" ? pageOptions.gtin = $("#hidSKUQV").val() : pageOptions.query = $("#hidQueryQV").val(), fallBackText = $(n).filter(".fallBackQV").html(), CallGoogleModule(!0)));
                    $(".im-preview .video-thumb").click(function() {
                        var n = $(this).attr("data-video");
                        $(".popup-quick-view").modal("hide");
                        $("#video-popup").modal();
                        $("#video-popup").children().find(".video-player-flash").attr("data-videoid", n);
                        $("#video-popup").children().find(".video-player-flash") != null && (youTubeSlide = $("#video-popup").children().find(".video-player-flash"), onYouTubeIframeAPIReadyProduct(n))
                    });
                    $(".quickview-preloader").hide()
                },
                error: ShowErrorForQuickView
            })
        })
    }
    $(".modal").live("hide", function() {
        $(this).removeClass("shorter");
        $(".modal-auto-height").val() == "True" && ($("body").removeClass("modal-open"), $("#modal-new-backdrop > .modal").unwrap())
    });
    $(".modal").live("shown", function() {
        $(".modal-auto-height").val() != "True" || $(this).hasClass("popup-zoom-image") || $(this).hasClass("popup-gcr-widget") || ($("body").addClass("modal-open"), $(this).closest("#modal-new-backdrop").length <= 0 && $(this).wrap($("<div/>", {
            id: "modal-new-backdrop"
        })), $("#modal-new-backdrop").css("height", winH), $("#modal-new-backdrop").attr("tabindex", "100"), $("#modal-new-backdrop").focus());
        $(".modal-auto-height").val() == "True" && $("#modal-new-backdrop").css("height", winH);
        ($(this).hasClass("popup-buyitnow") || $(this).hasClass("warning-modal")) && $(this).addClass("shorter")
    });
    $("#modal-new-backdrop").live("click", function(n) {
        if ($(".modal-auto-height").val() == "True") {
            var t = n.target || n.srcElement;
            $(t).is("#modal-new-backdrop") && ($("#modal-new-backdrop").find(".modal").modal("hide"), $("#modal-new-backdrop").children().unwrap())
        }
    })
});
googAds = !1;
$.QueryString = function(n) {
    var t, i, r;
    if (n == "") return {};
    for (t = {}, i = 0; i < n.length; ++i)(r = n[i].split("="), r.length == 2) && (t[r[0]] = decodeURIComponent(r[1]));
    return QueryVal = t, t
}(window.location.search.substr(1).split("&"));
$(window).resize(function() {
    $(".position-relative").each(function() {
        var t = $(this).height(),
            n = $(this).find(".one-colum-layout").height();
        t <= n && $(this).height(n)
    });
    $(".position-relative").each(function() {
        var t = $(this).height(),
            n = $(this).find(".one-colum-layout-edit").height();
        t <= n && $(this).height(n)
    })
});
youTubeSlide = null;
//tag = document.createElement("script");
//tag.src = "http://www.youtube.com/iframe_api";
//firstScriptTag = document.getElementsByTagName("script")[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
carouselSlide = null;
promoSlide = null;
done = !1;
$(function() {
        function n() {
            function s(n) {
                var u = $(".autocomplete-suggestion");
                t.is(":visible") && ($("." + i).length > 0 && (f = $("." + i).attr("data-index")), u.each(function() {
                    parseInt($(this).data("index")) == parseInt(f) + 1 && n == r.DOWN && ($("." + i).removeClass(i + " mouseenter"), $(this).addClass(i));
                    parseInt($(this).data("index")) == parseInt(f) - 1 && n == r.UP && ($("." + i).removeClass(i + " mouseenter"), $(this).addClass(i))
                }))
            }

            function h(r) {
                e = !0;
                var f = $(".hiddenCurrentItemID").val(),
                    s = $(".hiddenCurrentChannel").val();
                $.ajax({
                    url: "/Layouts/ABBs/Handlers/Desktop/SmartSearchOverlay.aspx",
                    type: "get",
                    data: {
                        SearchTerm: r,
                        CurrentItemID: f,
                        CurrentChannel: s
                    },
                    contenttype: "application/json;charset=utf-8",
                    traditional: !0,
                    success: function(f) {
                        u.html(f);
                        t.attr("data-key", r);
                        c();
                        $(".autocomplete-suggestion").removehiglight("strong");
                        $(".autocomplete-suggestion").higlightInTag({
                            words: [n.val().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")]
                        });
                        n.val() != r ? h(n.val()) : (e = !1, n.val() != "" && (t.show(), o.hide(), u.show()));
                        $(".autocomplete-suggestion").off("click");
                        $("body").on("click", ".autocomplete-suggestion", function() {
                            $(this).addClass(i);
                            t.is(":visible") && $(".autocomplete-selected").length > 0 && (window.location.href = $(".autocomplete-selected").data("url"))
                        })
                    },
                    error: ShowErrorForSmartSearch
                })
            }

            function c() {
                $(".autocomplete-suggestion").hover(function() {
                    t.show();
                    $("." + i).removeClass(i + " mouseenter");
                    $(this).addClass(i + " mouseenter")
                }, function() {
                    $("." + i).removeClass(" mouseenter")
                })
            }
            var n = $(".search-query"),
                t = $(".autocomplete-suggestions"),
                u = $(".search-suggestions"),
                o = $(".search-loader"),
                i = "autocomplete-selected",
                f = -1,
                e = !1,
                l = n.offset().top + n.outerHeight(),
                a = n.offset().left,
                r;
            t.attr("data-key", "");
            r = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            };
            n.on("focus", function() {
                n.val() != "" && t.attr("data-key") == n.val() && t.show()
            });
            n.on("change keyup input", function(i) {
                $(this).val() == "" && t.hide();
                switch (i.which) {
                    case r.ESC:
                        t.hide();
                        n.trigger("blur");
                        break;
                    case r.RIGHT:
                        break;
                    case r.TAB:
                        (function() {});
                        break;
                    case r.RETURN:
                        t.is(":visible") && $(".autocomplete-selected").length > 0 && (window.location.href = $(".autocomplete-selected").data("url"));
                        break;
                    case r.UP:
                        s(r.UP);
                        break;
                    case r.DOWN:
                        s(r.DOWN);
                        break;
                    default:
                        e || t.attr("data-key") == n.val() || n.val() == "" || (t.show(), o.show(), u.hide(), t.css({
                            position: "absolute",
                            top: n.offset().top + n.outerHeight() + "px",
                            left: n.offset().left + "px",
                            display: "block"
                        }), h(n.val()));
                        return
                }
            });
            $(window).resize(function() {
                t.css({
                    position: "absolute",
                    top: n.offset().top + n.outerHeight() + "px",
                    left: n.offset().left + "px"
                })
            });
            $.fn.higlightInTag = function(n) {
                function i(n) {
                    return n.textContent ? n.textContent : n.innerText
                }
                var t = n.tag || "strong",
                    r = n.words || [],
                    u = RegExp("\\b" + r.join("\\b|"), "gi"),
                    f = "<" + t + ">$&<\/" + t + ">";
                $(this).contents().each(function() {
                    this.nodeType === 3 ? $(this).closest(".autocomplete-suggestion").hasClass("resultsGo") || $(this).replaceWith(i(this).replace(u, f)) : n.ignoreChildNodes || $(this).higlightInTag(n)
                })
            };
            $.fn.removehiglight = function(n) {
                return this.each(function() {
                    $(this).find(n).each(function() {
                        var n = $(this).parent().text();
                        $(this).parent().html(n)
                    })
                })
            }
        }
        $(".hidIsSmartSearchEnabled").val() == "True" && pageEditorMode == !1 && n()
    }),
    function(n, t, i) {
        function it(n) {
            this.name = "JsRender Error";
            this.message = n || "JsRender error"
        }

        function lt(n, t, i) {
            return (!e.rTag || arguments.length) && (a = n ? "\\" + n.charAt(0) : a, v = n ? "\\" + n.charAt(1) : v, s = t ? "\\" + t.charAt(0) : s, l = t ? "\\" + t.charAt(0) : l, i = i ? "\\" + i : st, e.rTag = w = "(\\w*" + i + ")?(?:(?:(\\w+(?=[\\/\\s" + s + "]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^" + s + "]|" + s + "(?!" + l + "))*?)", w = new RegExp(a + v + w + "(\\/)?|(?:\\/(\\w+)))" + s + l, "g"), ot = new RegExp("<.*>|([^\\\\]|^)[{}]|" + a + v + ".*" + s + l)), [a, v, s, l, st]
        }

        function ui(n) {
            var t = this,
                r = t.tmpl.helpers || {};
            return n = (t.dynCtx && t.dynCtx[n] !== i ? t.dynCtx : t.ctx[n] !== i ? t.ctx : r[n] !== i ? r : y[n] !== i ? y : {})[n], typeof n != "function" ? n : function() {
                return n.apply(t, arguments)
            }
        }

        function fi(n, t, r, u) {
            var e = !r.markup && r || i,
                f = t.tmpl.converters;
            return f = f && f[n] || g[n], f ? f.call(t, u, e) : (c("Unknown converter: {{" + n + ":"), u)
        }

        function ei(n, t, r, u, f) {
            var h, l = !r.markup && r,
                a = l ? l.view.tmpl : r,
                y = a.tags,
                p = a.templates,
                w = f.props = f.props || {},
                e = w.tmpl,
                v = arguments.length > 5 ? ri.call(arguments, 5) : [],
                s = y && y[n] || d[n];
            return s ? (u = u && a.tmpls[u - 1], e = e || u || s.template || i, f.view = t, e = f.tmpl = "" + e === e ? p && p[e] || o[e] || o(e) : e, f.attr = r.attr = r.attr || s.attr, f.tagName = n, f.renderContent = rt, l && (l.tagCtx = {
                args: v,
                props: w,
                path: f.path,
                tag: s
            }), s.render && (h = s.render.apply(f, v)), h || (h == i ? e ? f.renderContent(v[0], i, t) : "" : h.toString())) : (c("Unknown tag: {{" + n + "}}"), "")
        }

        function b(n, t, r, u, f, e, o, s) {
            var c, h = {
                data: u,
                tmpl: f,
                views: s ? [] : {},
                parent: r,
                ctx: n,
                path: t,
                _useKey: s ? 0 : 1,
                _onRender: o,
                _hlp: ui,
                renderLink: function(t) {
                    var i = this.tmpl.tmpls[t];
                    return i.render(u, n, this)
                }
            };
            return r && (c = r.views, r._useKey ? (c[h.key = "_" + r._useKey++] = h, h.index = r.index) : c.splice(h.key = h.index = e !== i ? e : c.length, 0, h)), h
        }

        function k(n, t, r, u, f) {
            var o, e;
            if (r && typeof r == "object" && !r.nodeType) {
                for (o in r) t(o, r[o]);
                return n
            }
            return u === i && (u = r, r = i), (e = nt.onBeforeStoreItem) && (f = e(t, r, u, f) || f), r ? "" + r === r && (u === null ? delete t[r] : t[r] = f ? u = f(u, r) : u) : u = f ? f(u) : u, (e = nt.onStoreItem) && e(t, r, u, f), u
        }

        function at(n, t) {
            return n = typeof n == "function" ? {
                render: n
            } : n, n.name = t, n.is = "tag", n
        }

        function o(n, t) {
            return k(this, o, n, t, ft)
        }

        function d(n, t) {
            return k(this, d, n, t, at)
        }

        function y(n, t) {
            return k(this, y, n, t)
        }

        function g(n, t) {
            return k(this, g, n, t)
        }

        function rt(n, t, s, l, a, v, p) {
            var nt, ht, ft, g, et, d, w, tt, ot, it, rt, st, k = this,
                ut = "";
            if (l === r && (ot = r, l = 0), k.tagName ? (w = k.tmpl, (t || k.ctx) && (it = {}, k.ctx && u(it, k.ctx), t && u(it, t)), t = it, tt = k.props, tt && tt.link === h && (t = t || {}, t.link = h), s = s || k.view, v = v || k.path, l = l || k.key, p = s && s._onRender) : (w = k.jquery && (k[0] || c('Unknown template: "' + k.selector + '"')) || k, p = p || s && s._onRender), w && (s ? (d = s.ctx, rt = s.dynCtx, n === s && (n = s.data, a = r)) : d = y, st = t && t !== d, (rt || st) && (d = u({}, d), st && u(d, t), rt && u(d, rt)), t = d, w.fn || (w = o[w] || o(w)), w)) {
                if (p = t.link !== h && p, f.isArray(n) && !a)
                    for (g = ot ? s : l !== i && s || b(t, v, s, n, w, l, p, r), nt = 0, ht = n.length; nt < ht; nt++) ft = n[nt], et = w.fn(ft, b(t, v, g, ft, w, (l || 0) + nt, p), e), ut += p ? p(et, w, tt) : et;
                else g = ot ? s : b(t, v, s, n, w, l, p), g._onRender = p, ut += w.fn(n, g, e, oi);
                return p ? p(ut, w, tt, g.key, v) : ut
            }
            return c("No template found"), ""
        }

        function oi(n) {
            return n
        }

        function c(n) {
            if (e.debugMode) throw new e.Error(n);
        }

        function p(n) {
            c("Syntax error\n" + n)
        }

        function vt(n, t, i) {
            function l(t) {
                t -= o;
                t && e.push(n.substr(o, t).replace(bt, "\\n"))
            }

            function c(t) {
                t && p('Unmatched or missing tag: "{{/' + t + '}}" in template:\n' + n)
            }

            function v(t, h, v, y, p, w, b, k, d, g, nt) {
                w && (p = ":", y = "html");
                var tt, it = "",
                    rt = "",
                    ut = !d && !p && !i;
                v = v || p;
                l(nt);
                o = nt + t.length;
                b ? a && e.push(["*", k.replace(kt, "$1")]) : v ? (v === "else" ? (u[5] = n.substring(u[5], nt), u = f.pop(), e = u[3], ut = r) : h && (f.push(u), u = ["!", , , [], , nt], e.push(u), e = u[3]), k = k ? si(k, i, h).replace(gt, function(n, t, i) {
                    return t ? rt += i + "," : it += i + ",", ""
                }) : "", it = it.slice(0, -1), k = k.slice(0, -1), s = [v, y || "", k, ut && [], "{" + (it ? "props:{" + it + "}," : "") + "data: data" + (rt ? ",ctx:{" + rt.slice(0, -1) + "}" : "") + "}"], e.push(s), ut ? (f.push(u), u = s, u[5] = o) : h && (u[5] = n.substring(u[5], o), u = f.pop())) : g && (tt = u[0], c(g !== tt && !(g === "if" && tt === "else") && tt), u[5] = n.substring(u[5], nt), tt === "!" && (u[5] = n.substring(u[5], o), u = f.pop()), u = f.pop());
                c(!u && g);
                e = u[3]
            }
            var s, a = t && t.allowCode,
                h = [],
                o = 0,
                f = [],
                e = h,
                u = [, , , h];
            return n = n.replace(dt, "\\$1"), c(f[0] && f[0][3].pop()[0]), n.replace(w, v), l(n.length), ut(h, t)
        }

        function ut(n, t) {
            var u, f, a, i, k, d, g, nt, tt, h, v, o, y, e, w, l, it, b = t ? {
                    allowCode: w = t.allowCode,
                    debug: t.debug
                } : {},
                s = t && t.tmpls;
            for (a = n.length, i = a ? "" : '"";', f = 0; f < a; f++) u = n[f], "" + u === u ? i += '"' + u + '"+' : (h = u[0], h === "*" ? i = i.slice(0, f ? -1 : -3) + ";" + u[1] + (f + 1 < a ? "ret+=" : "") : (v = u[1], o = u[2], l = u[3], y = u[4], markup = u[5], h.slice(-1) === "!" ? (e = et(markup, b, t, s.length), ut(l, e), (it = /\s+[\w-]*\s*\=\s*\\['"]$/.exec(n[f - 1])) && c("'{{!' in attribute:\n..." + n[f - 1] + "{{!...\nUse data-link"), i += "view.renderLink(" + s.length + ")+", e.bound = r, e.fn.attr = it || "leaf", s.push(e)) : (l && (e = et(markup, b, t, s.length), ut(l, e), s.push(e)), tt = tt || y.indexOf("view") > -1, i += (h === ":" ? v === "html" ? (d = r, "h(" + o) : v ? (nt = r, 'c("' + v + '",view,this,' + o) : (g = r, "((v=" + o + ')!=u?v:""') : (k = r, 't("' + h + '",view,this,' + (l ? s.length : '""') + "," + y + (o ? "," : "") + o)) + ")+")));
            i = ti + (g ? "v," : "") + (k ? "t=j._tag," : "") + (nt ? "c=j._convert," : "") + (d ? "h=j.converters.html," : "") + "ret; try{\n\n" + (b.debug ? "debugger;" : "") + (w ? "ret=" : "return ") + i.slice(0, -1) + ";\n\n" + (w ? "return ret;" : "") + "}catch(e){return j._err(e);}";
            try {
                i = new Function("data, view, j, b, u", i)
            } catch (rt) {
                p("Compiled template code:\n\n" + i, rt)
            }
            return t && (t.fn = i), i
        }

        function si(n, t, i) {
            function c(c, l, a, v, y, w, b, k, d, g, nt, tt, it, rt, ut, ft) {
                function ot(n, t, i, r, u, f, e) {
                    if (t) {
                        var s, o = (i ? 'view._hlp("' + i + '")' : r ? "view" : "data") + (e ? (u ? "." + u : i ? "" : r ? "" : "." + t) + (f || "") : (e = i ? "" : r ? u || "" : t, ""));
                        return s = e ? "." + e : "", et || (o = o + s), o = o.slice(0, 9) === "view.data" ? o.slice(5) : o, et && (o = "b(" + o + ',"' + e + '")' + s), o
                    }
                    return n
                }
                y = y || "";
                a = a || l || nt;
                v = v || k;
                d = d || ut || "";
                y = y || "";
                var et = (t || i) && d !== "(";
                if (w) p(n);
                else return o ? (o = !tt, o ? c : '"') : e ? (e = !it, e ? c : '"') : (a ? (u++, a) : "") + (ft ? u ? "" : s ? (s = h, "\b") : "," : b ? (u && p(n), s = r, "\b" + v + ":") : v ? v.replace(pt, ot) + (d ? (f[++u] = r, d) : y) : y ? y : rt ? (f[u--] = h, rt) + (d ? (f[++u] = r, d) : "") : g ? (f[u] || p(n), ",") : l ? "" : (o = tt, e = it, '"'))
            }
            var s, f = {},
                u = 0,
                e = h,
                o = h;
            return n = (n + " ").replace(wt, c)
        }

        function yt(n, t, i) {
            var r, u;
            if (n)
                for (r in n) u = n[r], u.is || (n[r] = t(u, r, i))
        }

        function ft(n, r, f, e) {
            function c(n) {
                if ("" + n === n || n.nodeType > 0) {
                    try {
                        h = n.nodeType > 0 ? n : !ot.test(n) && t && t(n)[0]
                    } catch (i) {}
                    return h && (n = o[h.getAttribute(ct)], n || (r = r || "_" + ni++, h.setAttribute(ct, r), n = ft(h.innerHTML, r, f, e), o[r] = n)), n
                }
            }
            var s, h;
            return n = n || "", s = c(n), e = e || (n.markup ? n : {}), e.name = r, e.is = "tmpl", !s && n.markup && (s = c(n.markup)) && s.fn && (s.debug !== n.debug || s.allowCode !== n.allowCode) && (s = s.markup), s !== i ? (r && !f && (tt[r] = function() {
                return n.render.apply(n, arguments)
            }), s.fn || n.fn ? s.fn && (n = r && r !== s.name ? u(u({}, s), e) : s) : (n = et(s, e, f, 0), vt(s, n)), yt(e.templates, ft, n), yt(e.tags, at), n) : void 0
        }

        function et(n, t, i, r) {
            function e(n) {
                i[n] && (f[n] = u(u({}, i[n]), t[n]))
            }
            t = t || {};
            var f = {
                markup: n,
                tmpls: [],
                links: [],
                render: rt
            };
            return i && (i.templates && (f.templates = u(u({}, i.templates), t.templates)), f.parent = i, f.name = i.name + "[" + r + "]", f.key = r), u(f, t), i && (e("templates"), e("tags"), e("helpers"), e("converters")), f
        }

        function hi(n) {
            return ht[n] || (ht[n] = "&#" + n.charCodeAt(0) + ";")
        }
        if ((!t || !t.views) && !n.jsviews) {
            var f, w, ot, u, a = "{",
                v = "{",
                s = "}",
                l = "}",
                st = "!",
                nt = {},
                h = !1,
                r = !0,
                pt = /^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g,
                wt = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
                bt = /\r?\n/g,
                kt = /\\(['"])/g,
                dt = /\\?(['"])/g,
                gt = /\x08(~)?([^\x08]+)\x08/g,
                ni = 0,
                ht = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;"
                },
                ct = "data-jsv-tmpl",
                ti = "var j=j||" + (t ? "jQuery." : "js") + "views,",
                ii = /[\x00"&'<>]/g,
                ri = Array.prototype.slice,
                tt = {},
                e = {
                    jsviews: "v1.0pre",
                    sub: nt,
                    debugMode: r,
                    render: tt,
                    templates: o,
                    tags: d,
                    helpers: y,
                    converters: g,
                    delimiters: lt,
                    View: b,
                    _convert: fi,
                    _err: function(n) {
                        return e.debugMode ? "Error: " + (n.message || n) + ". " : ""
                    },
                    _tmplFn: vt,
                    _tag: ei,
                    error: c,
                    Error: it
                };
            (it.prototype = new Error).constructor = it;
            t ? (f = t, f.templates = o, f.render = tt, f.views = e, f.fn.render = rt) : (f = n.jsviews = e, f.extend = function(n, t) {
                var i;
                n = n || {};
                for (i in t) n[i] = t[i];
                return n
            }, f.isArray = Array && Array.isArray || function(n) {
                return Object.prototype.toString.call(n) === "[object Array]"
            });
            u = f.extend;
            d({
                "if": function() {
                    var t = this,
                        n = t.view;
                    n.onElse = function(t, r) {
                        for (var u = 0, f = r.length; f && !r[u++];)
                            if (u === f) return "";
                        return n.onElse = i, t.path = "", t.renderContent(n)
                    };
                    return n.onElse(this, arguments)
                },
                "else": function() {
                    var n = this.view;
                    return n.onElse ? n.onElse(this, arguments) : ""
                },
                "for": function() {
                    var n, u = this,
                        i = "",
                        r = arguments,
                        t = r.length;
                    for (t === 0 && (t = 1), n = 0; n < t; n++) i += u.renderContent(r[n]);
                    return i
                },
                "*": function(n) {
                    return n
                }
            });
            g({
                html: function(n) {
                    return n != i ? String(n).replace(ii, hi) : ""
                }
            });
            lt()
        }
    }(this, this.jQuery);
smartSearchAPIResults = "";
$(document).ready(function() {
    $("#ambiguous-poup").modal("hide");
    $(".close").click(function() {
        $("#ambiguous-poup").modal("hide")
    });
    $(".weather-search").css("display", "none");
    $(".cancel-btn").click(function() {
        $(".weather-details").css("display", "block");
        $(".weather-search").css("display", "none")
    });
    $(".weather-gear").click(function() {
        $(".weather-details").css("display", "none");
        $(".weather-search").css("display", "block");
        $(".weather-location-input").focus()
    });
    GetWeather()
});
$(document).on("submit", "#mainform", function(n) {
    return n.preventDefault(), !1
});
$.views.tags({
    renderWeatherWidgetResults: function(n, t, i) {
        var r = $("[id*=hdnItemId]").val();
        $.ajax({
            url: "/Layouts/ABBs/Handlers/Common/WeatherWidget.ashx",
            data: {
                offsetTime: n,
                weather: t,
                lat: i,
                itemId: r
            },
            dataType: "json",
            success: function(n) {
                ShowResultMessage(n)
            }
        })
    }
});
$(".save-btn").on("click", function(n) {
    var t, i, r;
    smartSearchAPIResults != null && smartSearchAPIResults != "" && smartSearchAPIResults.RESULTS.length > 1 && n.which == 13 ? ($("form").submit(function(n) {
        n.preventDefault()
    }), $(".search-box").removeClass("error"), $(".modal-pop-up-results").remove(), $(".ambiguous-result").append($("#smartSearchLocPopUp").render(smartSearchAPIResults)), $("#ambiguous-poup").modal("show")) : (t = $("[id*=txtWeatherEnterLocation]").val(), t != "" && (i = encodeURIComponent(t), r = $("[id*=hdnCheckForNoResultsApi]").val() + i + ".json", $.ajax({
        url: r,
        data: {
            weatherZipCode: i
        },
        dataType: "jsonp",
        async: !0,
        success: function(n) {
            ShowNoResultForLocationResults(n, t)
        }
    })))
});
$(".cancel-btn").on("click", function() {
    GetWeather();
    $("[id*=txtWeatherEnterLocation]").val("")
});
$(".weather-gear").on("click", function() {
    $(".weather-error-msg").hide();
    $(".smart-suggestion-container").hide()
});
$(".weather-location-input").on("keyup", function(n) {
    smartSearchAPIResults != null && smartSearchAPIResults != "" && smartSearchAPIResults.RESULTS.length > 1 && n.keyCode == 13 ? ($(".search-box").removeClass("error"), $(".modal-pop-up-results").remove(), $(".ambiguous-result").append($("#smartSearchLocPopUp").render(smartSearchAPIResults)), $("#ambiguous-poup").modal("show")) : $(".weather-location-input").val().length > 2 && $.ajax({
        url: $("[id*=hdnSmartSearchApi]").val() + $(".weather-location-input").val() + "&cb=jQuery_callback",
        dataType: "jsonp",
        async: !0
    });
    $(".weather-location-input").val().length < 3 && $(".smart-suggestion-container").hide()
});
$(".ambiguous-result li a").live("click", function() {
    var n = $(this).html(),
        t = $("[id*=hdnCheckForNoResultsApi]").val() + n + ".json";
    $.ajax({
        url: t,
        data: {
            weatherZipCode: n
        },
        dataType: "jsonp",
        async: !0,
        success: function(t) {
            ShowNoResultForLocationResults(t, n)
        }
    });
    $(".smart-suggestion-container").hide();
    $(".wearther-wrapper").show();
    $("#ambiguous-poup").modal("hide");
    $(".weather-search").hide();
    $(".weather-details").show()
});
$.views.tags({
    renderWeatherImage: function(n) {
        return '<img src="' + n + '" alt="' + n + '">'
    }
})