!function(t) {
    var e = {};
    function n(a) {
        if (e[a])
            return e[a].exports;
        var o = e[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, a) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (n.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(a, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return a
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 6)
}({
    6: function(t, e) {
        var n = n || {};
        !function(t) {
            "use strict";
            (n = {
                init: function() {
                    this.CustomPageTemplates.init(),
                    this.MegaMenus.init()
                },
                debounce: function(t, e, n, a) {
                    var o;
                    return function() {
                        var i = n || this
                          , s = arguments
                          , r = function() {
                            o = null,
                            a || t.apply(i, s)
                        }
                          , c = a && !o;
                        clearTimeout(o),
                        o = setTimeout(r, e),
                        c && t.apply(i, s)
                    }
                },
                MegaMenus: {
                    init: function() {
                        var e = this;
                        t(window).on("resize", n.debounce(this.setup, 500, this)),
                        t(document).on("ready", (function() {
                            t(".sm").each((function(n, a) {
                                t(a).on("show.smapi", e.Positioning.correctOffscreen)
                            }
                            ))
                        }
                        ))
                    },
                    setup: function() {
                        var e = this
                          , n = t("ul.custom-sub-menu");
                        0 !== n.length && n.each((function(n, a) {
                            var o = t(a)
                              , i = o.closest("#masthead").length ? o.closest("#masthead") : o.closest("#colophon");
                            i = i.length ? i : t("#masthead-sticky"),
                            e.Positioning.init(o, i),
                            e.removeFakeDropdowns(o),
                            e.adjustClasses(o, i)
                        }
                        ))
                    },
                    removeFakeDropdowns: function(e) {
                        var n = e.find("a.has-sub-menu");
                        e.find("ul").each((function() {
                            t(this).dataSM("in-mega", !0)
                        }
                        )),
                        n.each((function() {
                            t(this).parent().is("li.menu-item-has-children") || (t(this).removeClass("has-sub-menu"),
                            t(this).attr("id").includes("sm-") && (t(this).removeAttr("id"),
                            t(this).removeAttr("aria-haspopup"),
                            t(this).removeAttr("aria-expanded"),
                            t(this).removeAttr("aria-controls"),
                            t(this).removeDataSM("sub")))
                        }
                        ))
                    },
                    adjustClasses: function(e, n) {
                        n.removeClass("bg-background-color"),
                        n.find(".bg-background-color").each((function() {
                            t(this).removeClass("bg-background-color")
                        }
                        )),
                        e.find("*").addClass("in-mega")
                    },
                    Positioning: {
                        init: function(e, n) {
                            var a = this.determineLocationOnPage(n)
                              , o = this.determineHeaderType(n)
                              , i = this.determineWidthType(e)
                              , s = this.generateCssSelectors(e, n)
                              , r = this.generateCss(e, n, s, i, a, o);
                            t("head").find("#".concat(s.styleSheetId)).remove(),
                            t("head").append(r)
                        },
                        correctOffscreen: function(e, n) {
                            var a, o, i = t(n), s = i.parent(), r = i.is(".custom-sub-menu"), c = s.parent().is(".sub-menu");
                            switch (i.closest("#colophon").length ? "footer" : "header") {
                            case "header":
                                if (!r)
                                    break;
                                if (!c)
                                    break;
                                a = i.closest("#masthead").length ? i.closest("#masthead") : i.closest("#colophon"),
                                o = s.offset().top + s.outerHeight(),
                                0 > i.offset().left && i.offset({
                                    left: 0,
                                    top: o
                                }),
                                i.offset().top < a.offset().top && i.offset({
                                    top: a.offset().top
                                });
                                break;
                            case "footer":
                                if (!r)
                                    break;
                                o = s.offset().top - i.outerHeight(),
                                i.offset({
                                    top: o
                                }),
                                0 > i.offset().left && i.offset({
                                    left: 0
                                })
                            }
                        },
                        determineHeaderType: function(t) {
                            var e = "customizer";
                            return (t.hasClass("template-header") || t.hasClass("template-footer") || t.hasClass("template-sticky-header")) && (e = "template"),
                            e
                        },
                        determineLocationOnPage: function(t) {
                            var e = "header";
                            return t.is("#masthead") ? e = "header" : t.is("#masthead-sticky") ? e = "sticky" : t.is("#colophon") && (e = "footer"),
                            e
                        },
                        determineWidthType: function(t) {
                            var e = "px";
                            return t.is('[data-width*="%"]') && (e = "%"),
                            e
                        },
                        generateCss: function(t, e, n, a) {
                            var o = ""
                              , i = e.outerWidth()
                              , s = t.data("width")
                              , r = 0;
                            return "px" === a && (r = s.replace("px", "")) / i * 100,
                            "%" === a && (r = s.replace("%", "") / 100 * i),
                            o += '<style type="text/css" id="'.concat(n.styleSheetId, '">'),
                            o += "\n\t\t\t\t\t\t@media only screen and (max-width: 767px) {\n\t\t\t\t\t\t\t".concat(n.base, " {\n\t\t\t\t\t\t\t\twidth: ").concat(i, "px !important;\n\t\t\t\t\t\t\t\tmax-width: 100% !important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t").concat(n.columnMobile, " {\n\t\t\t\t\t\t\t\tpadding-left: 15px;\n\t\t\t\t\t\t\t\tpadding-right: 15px;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}"),
                            o += "\n\t\t\t\t\t@media only screen and (min-width: 768px ) and (max-width: 991px) {\n\t\t\t\t\t\t".concat(n.noHamburger, " {\n\t\t\t\t\t\t\twidth: ").concat(r, "px !important;\n\t\t\t\t\t\t\tmax-width: ").concat(i, "px !important;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t").concat(n.base, " {\n\t\t\t\t\t\t\twidth: ").concat(r, "px !important;\n\t\t\t\t\t\t\tmax-width: ").concat(i, "px !important;\n\t\t\t\t\t\t}\n\t\t\t\t\t}"),
                            o += "\n\t\t\t\t\t\t@media only screen and (min-width: 992px ) and (max-width: 1159px) {\n\t\t\t\t\t\t\t".concat(n.base, " {\n\t\t\t\t\t\t\t\twidth: ").concat(r, "px !important;\n\t\t\t\t\t\t\t\tmax-width: ").concat(i, "px !important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}"),
                            o += "\n\t\t\t\t\t\t@media only screen and (min-width: 1120px ) {\n\t\t\t\t\t\t\t".concat(n.base, " {\n\t\t\t\t\t\t\t\twidth: ").concat(r, "px !important;\n\t\t\t\t\t\t\t\tmax-width: ").concat(i, "px !important;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}"),
                            o += "</style>"
                        },
                        generateCssSelectors: function(t, e) {
                            var n, a = t.parents(".sm").attr("id"), o = e.attr("id");
                            return t.parent().get(0).classList.forEach((function(t) {
                                var e = new RegExp("(menu-item--?\\d+)");
                                e.test(t) && (n = t.match(e)[1])
                            }
                            )),
                            {
                                base: "#".concat(o, " #").concat(a, ".sm .").concat(n, " > .custom-sub-menu"),
                                noHamburger: "#".concat(o, " input[type=checkbox].hidden ~ #").concat(a, " .").concat(n, " > .custom-sub-menu"),
                                styleSheetId: "".concat(a, "-").concat(n, "-mega-menu-style"),
                                columnMobile: "#".concat(o, " .boldgrid-section .container .row #").concat(a, ".sm .").concat(n, " div.col-xs-12")
                            }
                        }
                    }
                },
                CustomPageTemplates: {
                    init: function() {
                        this.addTemplateClasses()
                    },
                    addTemplateClasses: function() {
                        t(document).ready((function() {
                            CrioPremium.hasHeaderTemplate && t(".bgtfw-header").addClass("template-header"),
                            CrioPremium.hasFooterTemplate && t(".bgtfw-footer").addClass("template-footer"),
                            CrioPremium.hasPageTemplate && t(".bgtfw-sticky-header").addClass("template-header")
                        }
                        ))
                    }
                }
            }).init()
        }(jQuery)
    }
});
