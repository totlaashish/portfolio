webpackJsonp([1, 0], [function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var s = i(176),
        n = o(s),
        r = i(175),
        a = o(r),
        c = i(147),
        l = o(c),
        u = i(152),
        d = o(u),
        p = i(151),
        h = o(p),
        m = i(154),
        g = o(m),
        f = i(153),
        v = o(f);
    n.default.use(a.default);
    var b = new a.default;
    b.map({
        "/": {
            component: d.default
        },
        "/about": {
            component: h.default
        },
        "/work": {
            component: g.default
        },
        "/work/:id": {
            component: v.default
        }
    }), b.redirect({
        "*": "/",
        "/works": "/work"
    }), b.start(l.default, "#app")
}, , , , , , , , , function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Project = void 0;
    var s = i(60),
        n = o(s),
        r = i(61),
        a = o(r),
        c = i(18),
        l = function() {
            function t() {
                (0, n.default)(this, t), this.project = c.Publications, this.color = null, this.slug = null, this.update()
            }
            return (0, a.default)(t, [{
                key: "set",
                value: function(t) {
                    this.project = c[t], this.update()
                }
            }, {
                key: "update",
                value: function() {
                    this.color = this.project.color, this.slug = this.project.slug
                }
            }]), t
        }();
    e.Project = new l
}, function(t, e) {
    "use strict";

    function i(t, e) {
        var i = t.split("<br>"),
            o = [];
        return i.forEach(function(t, i) {
            i > 0 && o.push("<br>"), o = o.concat(t.split(e))
        }), o
    }

    function o(t) {
        return "" === t || " " === t ? t : "<br>" === t ? "<br>" : "<span>" + t + "</span>" + (t.length > 1 ? " " : "")
    }
    t.exports = function(t, e) {
        var s = i(t.innerHTML.toString(), e),
            n = "";
        return s.forEach(function(t) {
            if (t.indexOf("<br>") > -1) {
                var e = t.split("<br>");
                e.forEach(function(t, e, i) {
                    n += e > 0 ? "<br>" + o(t) : o(t)
                })
            } else n += o(t)
        }), t.innerHTML = n, t.querySelectorAll("span")
    }
}, , , , , , , , function(t, e) {
    t.exports = {
        Publications: {
            slug: "Publications",
            url: "/work/Publications",
            color: "##161616",
            image: "images/bgpub.jpg",
            title: "Publications",
            subtitle: "",
            description: "Academic success depends on research and publications.",
            apps: [{
                number: "01.",
                other: "pdf/antenna.pdf",
                image: "images/antenna.png",
                title: "Micro-Strip Antenna",
                description: "Newly Proposed Multi-band Rectangular Patch Antenna with Defected Ground Structure” published in 39th PIERS, going to be held in NTU, Singapore during Nov. 2017"
            }, {
                number: "02.",
                other: "pdf/odfma.pdf",
                image: "images/ofdma.png",
                title: "OFDMA",
                description: "OFDMA Simulations on GNU Radio published in Workshop on Modeling, Simulation and Computational Techniques (WMSC) – 2015 held at The LNM IIT, Jaipur."
            }]
        },
        Achivements: {
            other: "trio-activios",
            slug: "Achivements",
            url: "/work/Achivements",
            color: "#161616",
            image: "images/bgAchivements.jpg",
            title: "Achivements",
            subtitle: "",
            description: "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
            apps: [
              {
                 number: "01.",
                 other: "http://nptel.ac.in/noc/social_cert/noc17-ee16/NPTEL17EE16S2380030171009255.jpg",
                 image: "images/NPTEL-MIC.jpg",
                 title: "NPTEL Certification Course",
                 description: "National Programme on Technology Enhanced Learning certification Course with Gold Medal and AIR-1:\n Microwave Integrated Circuits by Prof. Jayanta Mukherjee during Jul-Sep. 2017."
             },
             {
                number: "02.",
                other: "http://nptel.ac.in/noc/E_Certificate/linkedin/noc17-ee03/NPTEL17EE03S2240001.jpg",
                image: "images/NPTEL-Antenna.jpg",
                title: "NPTEL Certification Course",
                description: "National Programme on Technology Enhanced Learning certification Course with Gold Medal and AIR-1:\n Antennas by Prof. Girish Kumar during Jan-Apr, 2017."
            },
              {
                number: "03.",
                other: "images/gate_2017.jpg",
                image: "images/gate_2017.jpg",
                title: "GATE",
                description: "Qualified GATE (Graduate Aptitude Test In Engineering) in 2017."
            },
            {
                number: "04.",
                other: "images/net.jpg",
                image: "images/net.jpg",
                title: "National Eligibility Test",
                description: "Qualified NET (National Eligibility Test) in January 2017."
            },
            {
                number: "05.",
                other: "images/gate2013.jpg",
                image: "images/gate2013.jpg",
                title: "GATE",
                description: "Qualified GATE (Graduate Aptitude Test In Engineering) in 2013."
            }

             ]
        },
        Projects: {
            other: "Achivements",
            slug: "Projects",
            url: "/work/Projects",
            color: "##161616",
            image: "images/Wall.jpg",
            title: "Projects",
            subtitle: "",
            description: "Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.",
            apps: [{
                number: "01.",
                other: "pdf/M_Tech_Thesis.pdf",
                image: "images/M_Tech_Thesis.jpg",
                title: "M.Tech. Thesis Project",
                description: "Designing and implementation of Adder and Subtractor circuits in Quantum dot Cellular Automata."
            }, {
                number: "02.",
                other: "pdf/M.TechCourse.pdf",
                image: "images/MtechProject.jpeg",
                title: "M.Tech. Course Project",
                description: "Performance Improvement of DS-CDMA System with Successive Interference Cancellation Receiver."
            }, {
                number: "03.",
                other: "pdf/B.Tech.Major.pdf",
                image: "images/B.Tech.Major.jpg",
                title: "B.Tech. Major Project",
                description: "Alcohol Detector Based Car Ignition System."
            }, {
                number: "04.",
                other: "pdf/B.Tech.Minor.pdf",
                image: "images/B.Tech.Minor.jpg",
                title: "B.Tech. Minor Project",
                description: "Microcontroller Based Clapper Switch."
            }, {
                number: "05.",
                other: "images/Metal_Detector.gif",
                image: "images/Metal_Detector.gif",
                title: "Diploma Major project",
                description: "Electronic Metal Detector."
            }]
        },
        Work: {
            other: "Achivements",
            slug: "Work",
            url: "/work/Work",
            color: "##161616",
            image: "images/bgWork.jpg",
            title: "Career Graph",
            subtitle: "",
            description: "Work is a substitute religious experience for many workaholics",
            apps: [{
                number: "01.",
                other: "images/teaching.jpg",
                image: "images/teaching.jpg",
                title: "Academic Experience",
                description: "1. Teaching Assistant in The LNM Institute of Information\n Technology during July 2014 – May 2016.\n\n2.Faculty Member in ECE department at MaNAV CLASSES,\n Alwar (Rajasthan) During Aug 2012- Jun 2014.\n\n3.Teaching Assistant in Modern Institute of Technology\n and Research Centre, Alwar (Rajasthan) during July 2011- May 2012"
            }, {
                number: "02.",
                other: "images/Industry.jpg",
                image: "images/Industry.jpg",
                title: "Industry Experience",
                description: "Diploma Engineer Trainee in Balkrishna Industries Limited, Bhiwadi (Rajasthan) During July 2009 - Feb 2010."
            }]
        },
        Research: {
            other: "Achivements",
            slug: "Research",
            url: "/work/Research",
            color: "##161616",
            image: "images/bgresearch.jpg",
            title: "Research",
            subtitle: "",
            description: "Research is the highest form of adoration.",
            apps: [{
                number: "01.",
                other: "index.html",
                image: "images/blog.png",
                title: "Microstrip Antennas and Filters",
                description: "The current Research Work is on Microstrip Antennas and Filters. For more details refer to the Blog"
            }]
        },
    }
}, , , function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        isMobile: function() {
            return window.innerWidth < 768
        }
    }
}, , , , , , , , , , , , , , , , , , function(t, e) {
    "use strict";

    function i(t) {
        var e = t.getBoundingClientRect();
        return {
            top: e.top + window.pageYOffset - document.documentElement.clientTop,
            left: e.left + window.pageXOffset - document.documentElement.clientLeft
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = i
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(148),
        n = o(s),
        r = i(149),
        a = o(r),
        c = i(150),
        l = o(c);
    e.default = {
        components: {
            Awwwards: n.default,
            Navigation: a.default,
            Preload: l.default
        },
        ready: function() {
            var t = new XMLHttpRequest;
            t.onreadystatechange = function() {
                if (4 === t.readyState && 200 === t.status) {
                    var e = document.body,
                        i = document.createElement("div");
                    i.style.display = "none", i.innerHTML = t.responseText.replace(/\n/g, ""), e.insertBefore(i, e.childNodes[0])
                }
            }, t.open("GET", "/static/images/sprites.svg", !0), t.send()
        },
        data: function() {
            return {
                loading: !0
            }
        },
        methods: {
            isLoading: function() {
                return this.loading
            }
        },
        events: {
            loaded: function() {
                this.loading = !1, this.$broadcast("loaded")
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        methods: {
            enter: function(t) {
                TweenMax.fromTo(t.target, .5, {
                    rotation: 0
                }, {
                    rotation: 180
                })
            },
            leave: function(t) {
                TweenMax.fromTo(t.target, .5, {
                    rotation: 180
                }, {
                    rotation: 360
                })
            },
            in: function(t) {
                t.target.classList.add("is-hover")
            },
            out: function(t) {
                t.target.classList.remove("is-hover")
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(37),
        n = o(s),
        r = i(21),
        a = o(r);
    e.default = {
        data: function() {
            return {
                loading: 0
            }
        },
        ready: function() {
            this.menu = {
                logo: document.querySelector(".menu-link-logo-icon")
            }, this.ui = {
                bar: this.$el.querySelector(".preloader-bar"),
                logo: this.$el.querySelector(".preloader-logo"),
                text: this.$el.querySelector(".preloader-text")
            }, this.assets = ["shobhit.jpg"], this.loader = new n.default({
                assets: this.assets
            }), this.loader.on("progress", this.progress), this.loader.on("complete", this.complete), this.loader.start(), this.rotation = TweenMax.to(this.ui.logo, 1, {
                delay: 1.5,
                ease: Power4.easeInOut,
                lazy: !0,
                rotation: "+= 360",
                repeat: -1
            })
        },
        methods: {
            progress: function(t) {
                var e = (100 * t).toFixed();
                TweenMax.to(this, .5, {
                    ease: Circ.easeOut,
                    loading: e,
                    onUpdate: function() {
                        this.loading = Math.floor(this.loading)
                    }.bind(this)
                }), TweenMax.to(this.ui.bar, .5, {
                    width: e + "%"
                })
            },
            complete: function(t) {
                TweenMax.to(this, .5, {
                    ease: Circ.easeOut,
                    loading: 100,
                    onUpdate: function() {
                        this.loading = Math.floor(this.loading)
                    }.bind(this)
                }), TweenMax.to(this.ui.bar, .5, {
                    width: "100%"
                }), this.rotation.kill(), TweenMax.to(this.ui.logo, 1, {
                    ease: Power4.easeInOut,
                    height: 30,
                    rotation: 180,
                    top: a.default.isMobile() ? 25 : 60,
                    x: "-50%",
                    y: 0,
                    width: 30
                }), TweenMax.to([this.ui.bar, this.ui.text], .5, {
                    autoAlpha: 0
                }), TweenMax.to(this.$el, .5, {
                    autoAlpha: 0,
                    delay: 1,
                    onComplete: function() {
                        this.$dispatch("loaded")
                    }.bind(this)
                })
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(22),
        n = o(s),
        r = i(34),
        a = o(r),
        c = i(159),
        l = o(c),
        u = i(155),
        d = o(u),
        p = i(157),
        h = o(p),
        m = i(158),
        g = o(m),
        f = i(156),
        v = o(f),
        b = i(10),
        w = o(b);
    e.default = {
        components: {
            Title: l.default,
            Description: d.default,
            Notes: h.default,
            Logo: v.default,
            Social: g.default
        },
        ready: function() {
            this.ui = {
                background: this.$el.querySelector(".about-background"),
                logo: this.$el.querySelector(".about-logo"),
                title: this.$el.querySelector(".about-title-text"),
                descriptions: this.$el.querySelectorAll(".about-description"),
                descriptionsSpans: null,
                links: this.$el.querySelectorAll(".about-social-link"),
                notes: this.$el.querySelector(".about-notes"),
                notesSpans: null
            }, (0, n.default)(this.ui.descriptions).forEach(function(t) {
                (0, w.default)(t, "<br>")
            }), (0, w.default)(this.ui.notes, ""), this.ui.descriptionsSpans = this.$el.querySelectorAll(".about-description span"), this.ui.notesSpans = this.$el.querySelectorAll(".about-notes span")
        },
        destroy: function() {
            this.unbind()
        },
        route: {
            activate: function(t) {
                var e = this;
                t.next(), this.intro = new TimelineMax({
                    paused: !0
                }), this.intro.to(".menu", .5, {
                    color: "#0d0d0d"
                }, "start"), this.intro.from(this.ui.background, .5, {
                    y: "100%"
                }, "start"), this.intro.from(this.ui.title, .5, {
                    y: "100%"
                }, "appear"), this.intro.staggerFrom(this.ui.descriptionsSpans, .25, {
                    autoAlpha: 0,
                    y: -5
                }, .1, "appear"), this.intro.from(this.ui.logo, .5, {
                    delay: .25,
                    autoAlpha: 0
                }, "appear"), this.intro.staggerFrom(this.ui.links, .5, {
                    delay: .25,
                    autoAlpha: 0,
                    y: 25
                }, .1, "appear"), this.intro.staggerFrom(this.ui.notesSpans, .25, {
                    autoAlpha: 0
                }, .01, "-= 0.25"), this.intro.call(this.bind), this.$parent.loading ? this.$on("loaded", function() {
                    e.intro.play()
                }) : this.intro.play()
            },
            deactivate: function(t) {
                this.ending = new TimelineMax({
                    onComplete: t.next
                }), this.ending.call(this.unbind), this.ending.to(this.ui.notesSpans, .5, {
                    autoAlpha: 0
                }, "disappear"), this.ending.staggerTo(this.ui.links, .5, {
                    autoAlpha: 0,
                    y: 25
                }, .1, "disappear"), this.ending.to(this.ui.logo, .5, {
                    autoAlpha: 0
                }, "disappear"), this.ending.to(this.ui.descriptionsSpans, .5, {
                    autoAlpha: 0
                }, "disappear"), this.ending.to(this.ui.title, .5, {
                    autoAlpha: 0,
                    y: "100%"
                }, "disappear"), this.ending.to(this.ui.background, .5, {
                    y: "100%"
                }, "end"), this.ending.to(".menu", .5, {
                    color: "#fff"
                }, "end"), this.ending.play()
            }
        },
        methods: {
            bind: function() {
                this.$scrollbar = a.default.init(document.querySelector("#container"))
            },
            unbind: function() {
                this.$scrollbar && this.$scrollbar.destroy()
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(160),
        n = o(s),
        r = i(161),
        a = o(r),
        c = i(162),
        l = o(c),
        u = i(21),
        d = o(u),
        p = i(10),
        h = o(p);
    e.default = {
        components: {
            Background: n.default,
            Link: a.default,
            Title: l.default
        },
        ready: function() {
            this.ui = {
                image: this.$el.querySelector(".intro-image"),
                title: this.$el.querySelector(".intro-title"),
                titleText: this.$el.querySelector(".intro-title-text"),
                titleTextHello: this.$el.querySelector(".intro-title-hello"),
                titleTextHelloSpans: null,
                titleTextRichard: this.$el.querySelector(".intro-title-richard"),
                titleTextRichardSpans: null,
                button: this.$el.querySelector(".intro-button"),
                buttonText: this.$el.querySelector(".intro-button-text")
            }, (0, h.default)(this.ui.titleTextHello, ""), (0, h.default)(this.ui.titleTextRichard, ""), this.ui.titleTextHelloSpans = this.$el.querySelectorAll(".intro-title-hello span"), this.ui.titleTextRichardSpans = this.$el.querySelectorAll(".intro-title-richard span")
        },
        destroy: function() {
            this.unbind()
        },
        route: {
            activate: function(t) {
                var e = this;
                t.next(), this.intro = new TimelineMax({
                    paused: !0
                }), this.intro.to(".awwwards", .5, {
                    autoAlpha: 1
                }, "start"), this.intro.from(this.ui.image, 1, {
                    autoAlpha: 0
                }, "start"), this.intro.fromTo(this.ui.title, .1 * this.ui.titleTextHelloSpans.length, {
                    ease: Power0.easeNone,
                    width: 0
                }, {
                    width: this.ui.titleTextHello.clientWidth
                }, "-= 0.25"), this.intro.staggerFromTo(this.ui.titleTextHelloSpans, .1, {
                    ease: Power0.easeNone,
                    autoAlpha: 0
                }, {
                    autoAlpha: 1
                }, .1, "-= " + .1 * this.ui.titleTextHelloSpans.length), this.intro.set({}, {}, "+= 1"), this.intro.to(this.ui.title, .1 * this.ui.titleTextRichardSpans.length, {
                    ease: Power0.easeNone,
                    width: this.ui.titleText.clientWidth
                }, "richard"), this.intro.staggerFromTo(this.ui.titleTextRichardSpans, .1, {
                    ease: Power0.easeNone,
                    autoAlpha: 0
                }, {
                    autoAlpha: 1
                }, .1, "-= " + (d.default.isMobile() ? 1.1 : .1 * (this.ui.titleTextRichardSpans.length - 1))), this.intro.from(this.ui.button, .5, {
                    autoAlpha: 0,
                    y: "100%"
                }), this.intro.from(this.ui.buttonText, .5, {
                    autoAlpha: 0
                }), this.intro.call(this.bind), this.$parent.loading ? this.$on("loaded", function() {
                    e.intro.play()
                }) : this.intro.play()
            },
            deactivate: function(t) {
                this.ending = new TimelineMax({
                    onComplete: t.next,
                    paused: !0
                }), this.ending.call(this.unbind), this.ending.to(this.ui.image, 1, {
                    autoAlpha: 0
                }, "content"), this.ending.to(this.ui.title, .5, {
                    autoAlpha: 0
                }, "content"), this.ending.to(this.ui.buttonText, .5, {
                    autoAlpha: 0
                }, "content"), this.ending.to(this.ui.button, .5, {
                    autoAlpha: 0,
                    y: "100%"
                }, "content"), this.ending.play()
            }
        },
        methods: {
            bind: function() {
                this.$el && this.$el.addEventListener("mousewheel", this.mousewheel)
            },
            unbind: function() {
                this.$el && this.$el.removeEventListener("mousewheel", this.mousewheel)
            },
            mousewheel: function(t) {
                t.preventDefault(), t.wheelDelta < 0 && this.$router.go("/work")
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(9),
        n = i(34),
        r = o(n),
        a = i(163),
        c = o(a),
        l = i(164),
        u = o(l),
        d = i(165),
        p = o(d),
        h = i(166),
        m = o(h),
        g = i(167),
        f = o(g),
        v = i(168),
        b = o(v),
        w = i(169),
        x = o(w),
        k = i(170),
        y = o(k);
    e.default = {
        components: {
            App: c.default,
            Icons: u.default,
            Intro: p.default,
            Media: m.default,
            Mobile: f.default,
            Other: b.default,
            Player: x.default,
            Screen: y.default
        },
        data: function() {
            var t = this.$route.params.id;
            s.Project.set(t);
            var e = i(18),
                o = e[t],
                n = e[o.other];
            return {
                background: o.color,
                other: n,
                work: o
            }
        },
        ready: function() {
            this.ui = {
                background: this.$el.querySelector(".work-intro-background"),
                backgroundTransition: this.$el.querySelector(".work-intro-background-transition"),
                intro: {
                    image: this.$el.querySelector(".work-intro-image"),
                    wrapper: this.$el.querySelector(".work-intro-wrapper"),
                    content: this.$el.querySelector(".work-intro-content"),
                    contentWrapper: this.$el.querySelector(".work-intro-content-wrapper"),
                    title: this.$el.querySelector(".work-intro-title"),
                    subtitle: this.$el.querySelector(".work-intro-subtitle"),
                    description: this.$el.querySelector(".work-intro-description")
                },
                content: this.$el.querySelector(".work-content"),
                other: {
                    element: this.$el.querySelector(".work-other"),
                    box: this.$el.querySelector(".work-other-box"),
                    boxImage: this.$el.querySelector(".work-other-box-image"),
                    boxTitle: this.$el.querySelector(".work-other-box-title"),
                    boxLink: this.$el.querySelector(".work-other-box-link"),
                    scroll: this.$el.querySelector(".work-other-scroll")
                }
            }
        },
        destroy: function() {
            this.unbind()
        },
        route: {
            canReuse: !1,
            activate: function(t) {
                var e = this;
                t.next(), document.querySelector(".menu-link-works").classList.add("is-active"), this.intro = new TimelineMax({
                    paused: !0
                }), !t.from.path || "/about" !== t.from.path && "/" !== t.from.path || (this.intro.from(this.ui.background, 1, {
                    y: "100%"
                }), this.intro.from(this.ui.backgroundTransition, 1, {
                    y: "100%"
                }, "-= 0.75"), this.intro.from([this.ui.intro.image, this.ui.intro.wrapper], 1, {
                    autoAlpha: 0
                }, "-= 0.75")), this.intro.set("#work", {
                    background: this.background
                }, "start"), this.intro.to(this.ui.intro.image, 1, {
                    y: "-100%"
                }, "start"), this.intro.fromTo(this.ui.intro.content, 1, {
                    height: 0
                }, {
                    height: this.ui.intro.contentWrapper.clientHeight
                }, "start"), this.intro.from(this.ui.intro.subtitle, .5, {
                    autoAlpha: 0,
                    y: "100%"
                }, "-= 0.25"), this.intro.from(this.ui.intro.description, .5, {
                    autoAlpha: 0,
                    y: "100%"
                }, "-= 0.25"), this.intro.call(this.bind), this.$parent.loading ? this.$on("loaded", function() {
                    e.intro.play()
                }) : this.intro.play()
            },
            deactivate: function(t) {
                var e = this;
                if (document.querySelector(".menu-link-works").classList.remove("is-active"), this.ending = new TimelineMax({
                        onComplete: t.next,
                        paused: !0
                    }), t.to.path.includes("/work/")) this.ending.to(this.ui.content, .25, {
                    autoAlpha: 0
                }), this.ending.to(this.ui.other.boxLink, .25, {
                    autoAlpha: 0
                }), this.ending.to(this.ui.other.scroll, .25, {
                    autoAlpha: 0
                }, "scale"), this.ending.to(this.ui.other.box, .5, {
                    height: window.innerHeight,
                    width: "100%"
                }, "scale"), this.ending.call(function() {
                    e.ui.other.boxImage.classList.add("is-colored")
                }), this.ending.to(this.ui.other.boxImage, .5, {
                    opacity: 1
                }, "scale"), this.ending.to(this.ui.other.element, .5, {
                    y: -window.innerHeight + this.ui.other.element.clientHeight
                }, "scale"), this.ending.set(this.ui.other.boxTitle, {
                    display: "block"
                }), this.ending.set(this.ui.other.boxLink, {
                    display: "none"
                }), this.ending.fromTo(this.ui.other.boxTitle, .5, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1
                });
                else {
                    if (this.$scrollbar) {
                        var i = this.$scrollbar.scrollTop / window.innerHeight * 100,
                            o = i < 400 ? 400 : Math.floor(i);
                        this.$scrollbar.scrollTo(0, 0, o), this.ending.set({}, {}, "+= " + o / 1e3)
                    }
                    this.ending.to(this.ui.intro.description, .5, {
                        autoAlpha: 0,
                        y: "100%"
                    }), this.ending.to(this.ui.intro.subtitle, .5, {
                        autoAlpha: 0,
                        y: "100%"
                    }, "-= 0.25"), this.ending.to(this.ui.intro.content, 1, {
                        height: 0
                    }, "start"), this.ending.to(this.ui.intro.image, 1, {
                        y: "0%"
                    }, "start"), this.ending.set("#work", {
                        background: "#0d0d0d"
                    })
                }
                "/about" !== t.to.path && "/" !== t.to.path || (this.ending.to([this.ui.intro.image, this.ui.intro.wrapper], 1, {
                    autoAlpha: 0
                }), this.ending.to(this.ui.backgroundTransition, 1, {
                    y: "100%"
                }, "-= 0.75"), this.ending.to(this.ui.background, 1, {
                    y: "100%"
                }, "-= 0.75")), this.ending.play()
            }
        },
        methods: {
            bind: function() {
                this.$scrollbar = r.default.init(document.querySelector("#work")), this.$broadcast("scrollbar")
            },
            unbind: function() {
                this.$scrollbar && this.$scrollbar.destroy()
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(9),
        n = i(171),
        r = o(n),
        a = i(173),
        c = o(a),
        l = i(10),
        u = o(l);
    e.default = {
        components: {
            Background: r.default,
            Slider: c.default
        },
        data: function() {
            return {
                works: i(18)
            }
        },
        ready: function() {
            this.ui = {
                background: this.$el.querySelector(".works-background"),
                backgroundTransition: this.$el.querySelector(".works-background-transition"),
                slider: this.$el.querySelector(".works-slider"),
                sliderWrapper: this.$el.querySelector(".works-slider-wrapper"),
                title: this.$el.querySelector(".works-title.is-active .works-title-link"),
                titleText: this.$el.querySelector(".works-title.is-active .works-title-text"),
                titleSpans: null,
                navigation: this.$el.querySelector(".works-navigation"),
                navigationDash: this.$el.querySelector(".works-navigation-dash"),
                navigationMarker: this.$el.querySelectorAll(".works-navigation-marker"),
                navigationDragger: this.$el.querySelector(".works-navigation-dragger")
            }, (0, u.default)(this.ui.titleText, ""), this.ui.titleSpans = this.$el.querySelectorAll(".works-title.is-active .works-title-text span")
        },
        destroy: function() {
            this.unbind()
        },
        route: {
            activate: function(t) {
                var e = this;
                t.next(), this.intro = new TimelineMax({
                    paused: !0
                }), t.from.path && t.from.path.includes("/work/") || (this.intro.set(this.ui.backgroundTransition, {
                    background: s.Project.color
                }), this.intro.to(".awwwards", .5, {
                    autoAlpha: 1
                }, "start"), this.intro.from(this.ui.background, 1, {
                    y: "100%"
                }, "start"), this.intro.from(this.ui.backgroundTransition, 1, {
                    y: "100%"
                }, "-= 0.75"), this.intro.from(this.ui.slider, 1, {
                    autoAlpha: 0
                }, "-= 0.75"), this.intro.fromTo(this.ui.title, .15 * this.ui.titleSpans.length, {
                    ease: Power0.easeNone,
                    width: 0
                }, {
                    width: this.ui.titleText.clientWidth
                }, "-= 0.5"), this.intro.staggerFromTo(this.ui.titleSpans, .15, {
                    ease: Power0.easeNone,
                    autoAlpha: 0
                }, {
                    autoAlpha: 1
                }, .15, "-= " + .15 * this.ui.titleSpans.length), this.intro.set(this.ui.title, {
                    clearProps: "all"
                })), this.intro.from(this.ui.navigation, .5, {
                    autoAlpha: 0
                }), this.intro.from(this.ui.navigationMarker, .5, {
                    scaleY: 0
                }, "navigation"), this.intro.from(this.ui.navigationDragger, .5, {
                    scaleY: 0
                }, "navigation"), this.intro.from(this.ui.navigationDragger, .5, {
                    color: "#fff"
                }), this.intro.call(this.bind), this.$parent.loading ? this.$on("loaded", function() {
                    e.intro.play()
                }) : this.intro.play()
            },
            deactivate: function(t) {
                this.ending = new TimelineMax({
                    onComplete: t.next,
                    paused: !0
                }), this.ending.call(this.unbind), this.ending.to(this.ui.navigation, .5, {
                    autoAlpha: 0
                }), t.to.path && !t.to.path.includes("/work/") && (this.ending.to(this.ui.slider, 1, {
                    autoAlpha: 0
                }), this.ending.to(this.ui.backgroundTransition, 1, {
                    y: "100%"
                }, "-= 0.75"), this.ending.to(this.ui.background, 1, {
                    y: "100%"
                }, "-= 0.75")), this.ending.play()
            }
        },
        methods: {
            bind: function() {
                this.$el && this.$el.addEventListener("mousewheel", this.mousewheel)
            },
            unbind: function() {
                this.$el && this.$el.removeEventListener("mousewheel", this.mousewheel)
            },
            mousewheel: function(t) {
                t.preventDefault(), t.wheelDelta > 0 ? this.$router.go("/") : t.wheelDelta < 0 && this.$el.querySelector(".works-title.is-active .works-title-link").click()
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        methods: {
            mouseenter: function(t) {
                TweenMax.fromTo(t.target, .4, {
                    boxShadow: "-4px 20px 30px 0 rgba(0, 0, 0, 0)"
                }, {
                    boxShadow: "-4px 20px 30px 0 rgba(0, 0, 0, 0.2)"
                }), TweenMax.to(t.target.querySelector(".about-social-icon"), .4, {
                    fill: "#FFF"
                }), TweenMax.fromTo(t.target.querySelector(".about-social-hover"), .4, {
                    x: "-100%"
                }, {
                    x: "0%"
                })
            },
            mouseleave: function(t) {
                TweenMax.to(t.target, .4, {
                    boxShadow: "-4px 20px 30px 0 rgba(0, 0, 0, 0)"
                }), TweenMax.to(t.target.querySelector(".about-social-icon"), .4, {
                    fill: "#000"
                }), TweenMax.to(t.target.querySelector(".about-social-hover"), .4, {
                    x: "100%"
                })
            }
        }
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(39),
        n = o(s);
    e.default = {
        props: ["app"],
        ready: function() {
            this.ui = {
                media: this.$el.querySelector(".work-app-media"),
                description: this.$el.querySelector(".work-app-description")
            }, this.ui.description.innerHTML = this.ui.description.innerHTML.replace(/\n/g, "<br>")
        },
        events: {
            scrollbar: function() {
                this.$parent.$scrollbar && this.$parent.$scrollbar.addListener(function() {
                    var t = .75 * window.innerHeight;
                    this.$el && (0, n.default)(this.$el).top <= t && this.ui.media.play && this.ui.media.play()
                }.bind(this))
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["icons"]
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["work"],
        ready: function() {
            var t = this.$el.querySelector(".work-intro-description");
            t.innerHTML = t.innerHTML.replace(/\n/g, "<br>")
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["media"]
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["mobile"]
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["other"]
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["player"],
        data: function() {
            return {
                playing: !1
            }
        },
        methods: {
            play: function() {
                this.playing = !0, this.$el.classList.add("is-active")
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["screen"]
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["work", "index"]
    }
}, function(t, e, i) {
    "use strict";

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(22),
        n = o(s),
        r = i(172),
        a = o(r),
        c = i(174),
        l = o(c),
        u = i(9);
    e.default = {
        props: ["works"],
        components: {
            Images: a.default,
            Titles: l.default
        },
        ready: function() {
            this.ui = {
                background: this.$parent.$el.querySelector(".works-background-transition"),
                wrapper: this.$el.querySelector(".works-slider-wrapper"),
                images: this.$el.querySelector(".works-slider-images"),
                imagesItem: this.$el.querySelectorAll(".works-image"),
                titles: this.$el.querySelector(".works-slider-titles"),
                titlesItem: this.$el.querySelectorAll(".works-title"),
                dragger: this.$el.querySelector(".works-navigation-dragger"),
                draggerWrapper: this.$el.querySelector(".works-navigation")
            }, this.items = this.ui.titlesItem, this.itemsLimit = this.items.length - 1, this.itemsHalfWidth = window.innerWidth / 2, this.itemsWidth = window.innerWidth, this.dragger = Draggable.create(this.ui.dragger, {
                type: "x",
                bounds: this.ui.draggerWrapper,
                onPress: this.draggerstart,
                onDragStart: this.draggerstart,
                onDrag: this.draggermove,
                onDragEnd: this.draggerend,
                onRelease: this.draggerend
            })[0], this.draggerWidth = this.ui.dragger.clientWidth, this.drag = {
                current: 0,
                last: 0,
                total: 0
            }, this.position = {
                current: 0,
                last: 0
            }, this.animating = !1, this.dragging = !1, this.tween = null, this.log = [], this.current = document.querySelector("#" + u.Project.slug).getAttribute("data-index"), this.set(this.current, !1), this.bind()
        },
        destroy: function() {
            this.unbind()
        },
        methods: {
            bind: function() {
                this.$el.addEventListener("mousedown", this.mousedown), this.$el.addEventListener("touchstart", this.touchstart), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup), document.body.addEventListener("touchmove", this.touchmove), document.body.addEventListener("touchend", this.touchend), window.addEventListener("resize", this.resize)
            },
            unbind: function() {
                this.$el.removeEventListener("mousedown", this.mousedown), this.$el.removeEventListener("touchstart", this.touchstart), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup), document.body.removeEventListener("touchmove", this.touchmove), document.body.removeEventListener("touchend", this.touchend), window.removeEventListener("resize", this.resize)
            },
            mousedown: function(t) {
                1 === t.which && (t.preventDefault(), t.stopPropagation(), this.dragstart(t.clientX))
            },
            mousemove: function(t) {
                this.dragmove(t.clientX)
            },
            mouseup: function() {
                this.dragend()
            },
            touchstart: function(t) {
                1 === t.touches.length && (t.preventDefault(), t.stopPropagation(), this.dragstart(t.touches[0].clientX))
            },
            touchmove: function(t) {
                this.dragmove(t.touches[0].clientX)
            },
            touchend: function() {
                this.dragend()
            },
            draggerstart: function(t) {
                this.dragging || (t.preventDefault(), t.stopPropagation(), this.dragging = !0, this.drag.current = 0, this.drag.last = 0, this.drag.total = 0, this.start(), this.tweenDestroy(), this.loop())
            },
            draggermove: function(t) {
                if (this.dragging) {
                    var e = this.dragger.x / this.dragger.maxX;
                    this.position.current = -this.itemsWidth * this.itemsLimit * e
                }
            },
            draggerend: function() {
                this.dragend()
            },
            dragstart: function(t) {
                this.dragging || (this.dragging = !0, this.drag.current = t, this.drag.last = t, this.drag.total = 0, this.log = [], this.start(), this.tweenDestroy(), this.loop())
            },
            dragmove: function(t) {
                this.dragging && (this.drag.current = t)
            },
            dragend: function() {
                if (this.dragging) {
                    this.dragging = !1, 0 !== this.drag.current && 0 !== this.drag.last && 0 === this.drag.total && this.finish();
                    var t = void 0,
                        e = void 0,
                        i = this.log.reduce(function(t, e) {
                            return t + e
                        }, 0) / this.log.length;
                    t = this.position.current + 20 * i, t = Math.round(t / this.itemsWidth) * this.itemsWidth, e = -t / this.itemsWidth;
                    var o = 0;
                    e < 0 ? (o = e, e = 0) : e >= this.itemsLimit && (o = e - this.itemsLimit, e = this.itemsLimit), 0 !== o && (t = -e * this.itemsWidth), this.tween = TweenMax.to(this.position, 1 - Math.abs(o) / 20, {
                        current: t,
                        ease: Quint.easeOut,
                        onUpdate: this.update,
                        onComplete: this.finish
                    })
                }
            },
            loop: function() {
                if (this.dragging) {
                    this.update();
                    var t = this.drag.current - this.drag.last;
                    this.drag.last = this.drag.current, this.drag.total += t, this.position.current += t, this.log.push(t), window.requestAnimationFrame(this.loop)
                }
            },
            update: function() {
                var t = -this.position.current / this.itemsWidth;
                TweenMax.set(this.ui.wrapper, {
                    x: this.position.current,
                    lazy: !0,
                    force3D: !0
                }), TweenMax.set(this.ui.titles, {
                    transformOrigin: this.itemsHalfWidth - this.position.current + "px center",
                    lazy: !0
                }), TweenMax.set(this.ui.dragger, {
                    x: this.draggerWidth * t,
                    lazy: !0,
                    force3D: !0
                }), this.position.last = this.position.current, this.activate(Math.round(t))
            },
            activate: function(t) {
                if (t !== this.current) {
                    this.current = t, (0, n.default)(this.items).forEach(function(t, e) {
                        t.classList.remove("is-active")
                    });
                    var e = this.items[t],
                        i = void 0;
                    e && (e.classList.add("is-active"), i = e.getAttribute("id")), i && (u.Project.set(i), u.Project.color && TweenMax.set(this.ui.background, {
                        background: u.Project.color
                    }))
                }
            },
            tweenDestroy: function() {
                null !== this.tween && (this.tween.kill(), this.tween = null, this.update())
            },
            set: function(t, e) {
                this.tweenDestroy(), e ? (this.start(), setTimeout(function() {
                    TweenMax.to(this.position, 1, {
                        current: -t * this.itemsWidth,
                        ease: Quint.easeOut,
                        onUpdate: this.update,
                        onComplete: this.finish
                    })
                }.bind(this), 400)) : TweenMax.set(this.position, {
                    current: -t * this.itemsWidth,
                    onUpdate: this.update,
                    onComplete: this.finish
                })
            },
            resize: function() {
                this.itemsHalfWidth = window.innerWidth / 2, this.itemsWidth = window.innerWidth, this.draggerWidth = this.ui.dragger.clientWidth, this.set(this.current, !1)
            },
            start: function() {
                this.update(), this.$el.classList.add("is-dragging"), TweenMax.to(this.ui.imagesItem, .4, {
                    scale: .65,
                    force3D: !0
                }), TweenMax.to(this.ui.titles, .4, {
                    scale: .5,
                    force3D: !0
                })
            },
            finish: function() {
                this.update(), this.$el && this.$el.classList.remove("is-dragging"), TweenMax.to(this.ui.imagesItem, .4, {
                    scale: 1,
                    force3D: !0
                }), TweenMax.to(this.ui.titles, .4, {
                    scale: 1,
                    force3D: !0
                })
            }
        }
    }
}, function(t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        props: ["work", "index"],
        methods: {
            stop: function(t) {
                t.stopPropagation()
            }
        }
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {
    t.exports = "<div id=app><awwwards></awwwards><preload v-if=loading></preload><navigation></navigation><router-view></router-view></div>"
}, function(t, e) {
    t.exports = "<a class=awwwards href=blog.html target=_blan><img src=images/blog.png></a>"
}, function(t, e) {
    t.exports = '<nav class=menu><ul class=menu-list><li class=menu-item><a class="menu-link menu-link-logo" v-link="\'/\'">Home<svg class=menu-link-logo-icon xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172" v-on:mouseenter=enter v-on:mouseleave=leave v-on:touchstart=enter v-on:touchend=leave><use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#logo></use></svg></a></li><li class=menu-item><a class="menu-link menu-link-works" v-link="\'/work\'" v-on:mouseenter=in v-on:mouseleave=out v-on:touchstart=in v-on:touchend=out><span class=menu-link-text>Work</span><svg class=menu-link-icon xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172"><use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#icon-works></use></svg><svg class=menu-link-icon-active xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172"><use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#icon-close></use></svg></a></li><li class=menu-item><a class="menu-link menu-link-about" v-link="\'/about\'" v-on:mouseenter=in v-on:mouseleave=out v-on:touchstart=in v-on:touchend=out><span class=menu-link-text>About</span><svg class=menu-link-icon xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172"><use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#icon-about></use></svg><svg class=menu-link-icon-active xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172"><use xmlns:xlink=http://www.w3.org/1999/xlink xlink:href=#icon-close></use></svg></a></li></ul></nav>'
}, function(t, e) {
    t.exports = '<div class=preloader><div class=preloader-text v-text=loading></div><svg class=preloader-logo xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 172 172"><path d="M149,102.7h23V172h-34.7c-13.3-0.5-23.6-10.8-23.1-23.1c0.3-8.1,4.4-15.2,10.6-19.3L114.2,119v-16.3 h16.3l18.5,18.5V102.7z"></path><path d="M0,69.3L0,69.3L0,0h0h34.7C48,0.5,58.3,10.8,57.8,23.1c-0.3,8.1-4.4,15.2-10.6,19.3L57.8,53v16.3 H41.6L23,50.8v18.5h0H0z"></path><path d=M172,0v16.3L16.3,172H0v0h0l0-16.3L155.8,0H172L172,0z></path></svg><div class=preloader-bar></div></div>'
}, function(t, e) {
    t.exports = "<div id=container><section class=about id=about><div class=about-background></div><div class=about-wrapper><div class=about-box><title></title><description></description><social></social><notes></notes><logo></logo></div><div class=about-pic></div></div></section></div>"
}, function(t, e) {
    t.exports = "<section class=intro id=intro><background></background><title></title><link/></section>"
}, function(t, e) {
    t.exports = '<div class=work id=work><intro v-bind:work=work></intro><div class=work-content><icons v-if=work.icons v-bind:icons=work.icons></icons><app v-for="app in work.apps" v-bind:app=app></app><player v-if=work.player v-bind:player=work.player></player><screen v-for="screen in work.screens" v-bind:screen=screen></screen><mobile v-if=work.mobile v-bind:mobile=work.mobile></mobile><media v-for="media in work.medias" v-bind:media=media></media></div><other v-if=other v-bind:other=other v-bind:work=work></other></div>'
}, function(t, e) {
    t.exports = "<section class=works id=works><background></background><slider v-bind:works=works></slider></section>"
}, function(t, e) {
    t.exports = "<p class=about-description>Hello, My Name is Shobit Agarwal. I am currently associated with The LNM Institute of Information Technology, Jaipur (INDIA) and working under Prof. Raghuvir Tomar. My current work includes simulation and designing of Microstrip Antennas and Filters.<p class=about-description>During 8 years of academic life, I have handled several projects like Electronic Metal Detector, Microcontroller based clapper switch, Alcohol Detector Based Car Ignition System and many more. </p><div class=phone><img src=images/phone.png><p>+91-9694700700</p></div><div class=phone><img src=images/address.png><p>Room No. 1093, ECR Lab, LNMIIT, Jaipur, India</p></div>"
}, function(t, e) {
    t.exports = '<div class=about-logo></div>'
}, function(t, e) {
    t.exports = "<a class=about-notes target=_blank></a>"
}, function(t, e) {
    t.exports = "<ul class=links><li><a href=https://www.researchgate.net/profile/Shobit_Agarwal target=_blank><img src=images/rg.png width=30px></a></li><li><a href=https://www.linkedin.com/in/shobitagarwal/ target=_blank><img src=images/linkedin.png width=30px></a></li><li><a href=mailto:shobit.agrawal27@gmail.com target=_blank><img src=images/gmail.png width=30px></a></li><li><a href=pdf/Shobit_CV.pdf target=_blank><img src=images/cv.png width=30px></a></li><li><a target=_blank href=https://www.facebook.com/shobitagarwal27><img src=images/fb.png width=30px></a></li></ul>"
}, function(t, e) {
    t.exports = "<h1 class=about-title><span class=about-title-text>Hello,</span></h1>"
}, function(t, e) {
    t.exports = "<div class=intro-image></div>"
}, function(t, e) {
    t.exports = "<a class=intro-button v-link=\"'work'\"><span class=intro-button-text>Work</span></a>"
}, function(t, e) {
    t.exports = "<h1 class=intro-title><span class=intro-title-text><span class=intro-title-hello>Hello,</span><br/><span class=intro-title-richard>I'm Shobit <br/> Agarwal.</span></span></h1>"
}, function(t, e) {
    t.exports = '<section class=work-app><h1 class=work-app-title v-text=app.title></h1><div class=work-app-columHellons><div class="work-app-column work-app-column-media"><img class=work-app-media v-if=app.image v-bind:src=app.image /><video class=work-app-media v-if=app.video autoplay=autoplay loop=loop><source v-bind:src="app.video + \'.webm\'" type=video/webm /><source v-bind:src="app.video + \'.ogv\'" type=video/ogg /><source v-bind:src="app.video + \'.mp4\'" type=video/mp4 /></video></div><div class="work-app-column work-app-column-content"><p class=work-app-subtitle><span class=work-app-subtitle-number>&#9635;</span><span class=work-app-subtitle-text v-text=app.title></span></p><p class=work-app-description v-text=app.description></p><p class=know><a class=more target=_blank v-bind:href="app.other">know more</a></p></div></div></section>'
}, function(t, e) {
    t.exports = "<section class=work-icons><h1 class=work-icons-title>Icons</h1><ul class=work-icons-list><li class=work-icons-item v-for=\"icon in icons\" v-bind:class=\"($index &gt; 5) ? 'is-bottom' : 'is-top'\"><img class=work-icons-image v-bind:src=icon.media /><strong class=work-icons-text v-text=icon.title></strong><span class=work-icons-dash></span></li></ul></section>"
}, function(t, e) {
    t.exports = "<section class=work-intro><div class=work-intro-background></div><div class=work-intro-background-transition v-bind:style=\"{ background: work.color }\"></div><div class=work-intro-image v-bind:style=\"{ backgroundImage: 'url(' + work.image + ')'}\"></div><div class=work-intro-wrapper><h1 class=work-intro-title v-text=work.title></h1><div class=work-intro-content><div class=work-intro-content-wrapper><p class=work-intro-subtitle v-text=work.subtitle></p><p class=work-intro-description v-text=work.description></p></div></div></div></section>"
}, function(t, e) {
    t.exports = "<section class=work-media><img class=work-media-image v-bind:src=media /></section>"
}, function(t, e) {
    t.exports = '<section class=work-mobile><div class=work-mobile-wrapper><div class=work-mobile-list><div class=work-mobile-item v-for="screen in mobile.screens"><img class=work-mobile-image v-bind:src=screen /></div></div></div><div class=work-mobile-background v-if=mobile.background v-bind:style="{ background: mobile.background }"></div></section>'
}, function(t, e) {
    t.exports = ""
}, function(t, e) {
    t.exports = "<section class=work-player><div class=work-player-media><img class=work-player-image v-bind:src=player.image /><iframe class=work-player-iframe v-if=playing v-bind:src=player.url></iframe><button class=work-player-button v-on:click.prevent=play></button></div></section>"
}, function(t, e) {
    t.exports = '<section class=work-screen><h2 class=work-screen-title v-if=screen.title v-text=screen.title></h2><div class=work-screen-media><img class=work-screen-image v-bind:src=screen.media /><img class=work-screen-effect v-for="effect in screen.effects" v-bind:src=effect.image v-bind:class="\'work-screen-effect-\' + effect.number"/></div><span class=work-screen-background v-if=screen.background v-bind:style="{ background: screen.background.color }" v-bind:class="\'work-screen-background-\' + screen.background.type"></span></section>'
}, function(t, e) {
    t.exports = "<div class=works-background></div><div class=works-background-transition></div>"
}, function(t, e) {
    t.exports = "<div class=works-image v-bind:data-index=index v-bind:style=\"{ backgroundImage: 'url(' + work.image + ')' }\"></div>"
}, function(t, e) {
    t.exports = '<div class=works-slider><div class=works-slider-wrapper><div class=works-slider-images><images v-for="work in works" v-bind:work=work v-bind:index=$index></images></div><div class=works-slider-titles><titles v-for="work in works" v-bind:work=work v-bind:index=$index></titles></div></div><div class=works-navigation><div class=works-navigation-dash></div><div class=works-navigation-marker v-for="work in works" v-on:click="set($index, true)"><p v-text=work.title class=nav-text></p></div><div class=works-navigation-dragger><div class=works-navigation-dragger-square></div></div></div><div class=works-scroll><div class=works-scroll-line></div></div></div>'
}, function(t, e) {
    t.exports = "<div class=works-title v-bind:id=work.slug v-bind:data-index=index><div class=works-title-box><div class=works-title-box-wrapper><a class=works-title-link v-link=work.url v-on:click=stop v-on:touchstart=stop><span class=works-title-text v-text=work.title></span></a></div></div></div>"
}, function(t, e, i) {
    var o, s, n = {};
    i(91), o = i(40), s = i(119), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(92), s = i(120), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(93), o = i(41), s = i(121), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(94), o = i(42), s = i(122), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(95), o = i(43), s = i(123), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(96), o = i(44), s = i(124), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(97), o = i(45), s = i(125), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(98), o = i(46), s = i(126), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(99), s = i(127), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(100), s = i(128), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(101), s = i(129), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(102), o = i(47), s = i(130), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(103), s = i(131), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(104), s = i(132), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(105), s = i(133), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(106), s = i(134), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(107), o = i(48), s = i(135), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(108), o = i(49), s = i(136), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(109), o = i(50), s = i(137), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(110), o = i(51), s = i(138), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(111), o = i(52), s = i(139), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(112), o = i(53), s = i(140), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(113), o = i(54), s = i(141), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(114), o = i(55), s = i(142), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(115), s = i(143), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(116), o = i(56), s = i(144), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(117), o = i(57), s = i(145), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}, function(t, e, i) {
    var o, s, n = {};
    i(118), o = i(58), s = i(146), t.exports = o || {}, t.exports.__esModule && (t.exports = t.exports.default);
    var r = "function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports;
    s && (r.template = s), r.computed || (r.computed = {}), Object.keys(n).forEach(function(t) {
        var e = n[t];
        r.computed[t] = function() {
            return e
        }
    })
}]);

//# sourceMappingURL=app.4ac3c3aeb6d4347d3361.js.map
