! function($) {
    $.fn.unveil = function(t, n) {
        function o() {
            var t = r.filter(function() {
                var t = $(this);
                if (!t.is(":hidden")) {
                    var n = e.scrollTop(),
                        o = n + e.height(),
                        a = t.offset().top,
                        s = a + t.height();
                    return s >= n - i && o + i >= a
                }
            });
            l = t.trigger("unveil"), r = r.not(l)
        }
        var e = $(window),
            i = t || 0,
            a = window.devicePixelRatio > 1,
            s = a ? "data-src-retina" : "data-src",
            r = this,
            l;
        return this.one("unveil", function() {
            var t = this.getAttribute(s);
            t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof n && n.call(this))
        }), e.on("scroll.unveil resize.unveil lookup.unveil", o), o(), this
    }
}(window.jQuery || window.Zepto), jQuery.browser = {},
    function() {
        jQuery.browser.msie = !1, jQuery.browser.version = 0, navigator.userAgent.match(/MSIE ([0-9]+)\./) && (jQuery.browser.msie = !0, jQuery.browser.version = RegExp.$1)
    }(),
    function($) {
        var t = {
                common: {
                    init: function() {
                        $("a.scroll").on("click", function(t) {
                            t.preventDefault();
                            var n = this.hash,
                                o = $(n),
                                e = o.offset().top;
                            $(this).data("offset") || 0 === $(this).data("offset") ? e -= $(this).data("offset") : $(".navbar-fixed-top").length > 0 && $(window).width() > 768 && (e -= $(".navbar-fixed-top").height()), $("html, body").stop().animate({
                                scrollTop: e
                            }, 900, "swing")
                        })
                    },
                    finalize: function() {}
                }
            },
            n = {
                fire: function(n, o, e) {
                    var i, a = t;
                    o = void 0 === o ? "init" : o, i = "" !== n, i = i && a[n], i = i && "function" == typeof a[n][o], i && a[n][o](e)
                },
                loadEvents: function() {
                    n.fire("common"), $.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(t, o) {
                        n.fire(o), n.fire(o, "finalize")
                    }), n.fire("common", "finalize")
                }
            };
        $(document).ready(n.loadEvents)
    }(jQuery);