$(document).ready(function(){
    function showWindow(){
        $("#main").show()
        $('html body').css('overflow', 'hidden');
         setTimeout(hideWindow , 5000);
    };
    showWindow()
    function hideWindow(){
        $("#main").hide()
        $('#page #page-body').css('overflow', 'visible')
    };
    // hideWindow()
    setTimeout(showWindow,200)
   $('#close-bnt').click(function(){
    hideWindow()
   });

})
// start of navbar
var nav = document.querySelector('.nick');  

window.addEventListener('scroll', function(){
  if (window.pageYOffset > 50){
    nav.classList.add('bg-white','shadow');
  }else {
    nav.classList.remove('bg-white','shadow');
  }
});
// end of navbar
// start of courselist
$(document).ready(function() {
	$('.popup-youtube ').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
        iframe: {
 
      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: 'https://www.youtube.com/embed/hnNprLZNZ0w?si=FZcNSHmzdZTpn3hs' // URL that will be set as a source for iframe.
        },
      

        // you may add here more sources

      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    } 
	});
});
$('.responsive').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true,
  autoplay: true,
  autoplaySpeed: 2000,
});
// end of coureslist
// Start of couresitem
$
    (function() {
        "use strict";
        $(window).scroll(function() {
            100 < $(this).scrollTop() ? ($("#navbar, .sm_menu").addClass("nav_sticky"), $(".back_to_top")
                .addClass("back_btn_show")) : ($("#navbar, .sm_menu").removeClass("nav_sticky"), $(".back_to_top")
                .removeClass("back_btn_show"))
        }), $(window).scroll(function() {
            1145 < $(this).scrollTop() ? $(".pg_wait_wrap")
                .addClass("pg_wait_sticky") : $(".pg_wait_wrap").removeClass("pg_wait_sticky")
        });
        []
        .slice.call(document.querySelectorAll(".offcanvas")).map(function(e) {
            return new bootstrap.Offcanvas(e)
        });
        $(".menu_slider").slick({
                dots: !1,
                arrows: !1,
                autoplay: !1,
                focusOnSelect: !0,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: !0,
                centerPaddingRight: "38px",
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        centerPadding: "40px",
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        centerPadding: "40px",
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }]
            }), $(".course_menu_slider")
            .slick({
                dots: !1,
                arrows: !1,
                autoplay: !1,
                focusOnSelect: !0,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: !0,
                centerPaddingRight: 0,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 414,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }), $(".venobox").venobox(), $(".course_slider_top").slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: !0,
                arrows: !0,
                infinite: !0,
                autoplaySpeed: 2e3,
                prevArrow: '<i class="fa fa-angle-lefttopPrevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right topNextarrow"></i>',
                responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    }, {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 414,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }), $(".course_mix_btn").slick({
                autoplay: !1,
                focusOnSelect: !0,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: !1,
                arrows: !1,
                prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
                asNavFor: ".course_body_slider",
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            arrows: !1,
                            centerMode: !0,
                            centerPadding: "40px",
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: "50px",
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: !1,
                            centerMode: !0
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !0,
                            centerMode: !0
                        }
                    },
                    {
                        breakpoint: 414,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !0,
                            centerMode: !0
                        }
                    }
                ]
            }),
            $(".course_body_slider").slick({
                centerMode: !1,
                centerPadding: "0",
                draggable: !1,
                fade: !0,
                cssEase: "linear",
                autoplay: !1,
                focusOnSelect: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !1,
                arrows: !1,
                asNavFor: ".course_mix_btn"
            }),
            $(".course_category_slider").slick({
                centerMode: !1,
                autoplay: !1,
                focusOnSelect: !0,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1,
                arrows: !0,
                prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: !0,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        arrows: !0,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        arrows: !0,
                        slidesToShow: 1
                    }
                }]
            }), $(".instructor_teacher_page_course_slide").slick({
                autoplay: !1,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1,
                arrows: !1,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        vertical: !0,
                        draggable: !1,
                        slidesToShow: "all"
                    }
                }]
            }), $(".story_text_slider").slick({
                centerMode: !0,
                centerPadding: "0px",
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: !1,
                prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: !0,
                        slidesToShow: 2,
                        centerPadding: "0px"
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".feedback_1_slider").slick({
                autoplay: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                prevArrow: '<iclass="fa fa-angle-left prevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right nextarrow"></i>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".feedback_2_slider").slick({
                autoplay: !1,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                prevArrow: '<i class="fa fa-angle-left studentPrevArrow"></i>',
                nextArrow: '<i class="fa fa-angle-right studentNextArrow"></i>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".blog_slider").slick({
                autoplay: !1,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                prevArrow: '<i class="fa fa-angle-left blogPrevArrow"></i>',
                nextArrow: '<i class="fa fa-angle-right blogNextArrow"></i>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".pgp_slider").slick({
                autoplay: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0
            }), $(".milestone_slider").slick({
                centerMode: !0,
                centerPadding: "0px",
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !1,
                prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
                nextArrow: '<i class="fa fa-angle-right nextarrow"></i>'
            }),
            $(".pg_succsess_img_slider").slick({
                autoplay: !1,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                dots: !0,
                prevArrow: '<i class="fa fa-angle-left angle-left"></i>',
                nextArrow: '<i class="fa fa-angle-right angle-right"></i>'
            })
    }), $(document).ready(function() {
        $(".course_single_btn").click(function() {
            $(".course_single_btn").addClass("active")
        })
    });
var connectTabs = new Tabs;

function Tabs() {
    var o = function(e) {
        ! function() {
            for (var e = document.querySelectorAll("[success-data-tab]"), s = 0; s < e.length; s++) {
                e[s].classList.remove("active");
                var o = e[s].getAttribute("success-data-tab");
                document.getElementById(o).classList.remove("active")
            }
        }
        (), e.target.classList.add("active");
        e = e.currentTarget.getAttribute("success-data-tab");
        document.getElementById(e).classList.add("active")
    };
    ! function() {
        for (var e = document.querySelectorAll("[success-data-tab]"), s = 0; s < e.length; s++) e[s].addEventListener("click", o, !1)
    }
    ()
}
connectTabs = new Tabs;
$(".office_and_traning_slider_for").slick({
        autoplay: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        asNavFor: ".office_and_traning_slider"
    }),
    $(".office_and_traning_slider").slick({
        autoplay: !1,
        slidesToShow: 9,
        slidesToScroll: 1,
        focusOnSelect: !0,
        arrows: !0,
        dots: !1,
        asNavFor: ".office_and_traning_slider_for",
        prevArrow: '<i class="fa fa-angle-left trainingPrevArrow"></i>',
        nextArrow: '<i class="fa fa-angle-right trainingNextArrow"></i>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 3
            }
        }]
    }), $(".letest_post_slider").slick({
        slidesToShow: 3,
        slidesToscroll: 1,
        autoplay: !1,
        arrows: !0,
        dots: !1,
        infinite: !0,
        speed: 300,
        centerMode: !0,
        centerPadding: "0",
        prevArrow: '<i class="fa fa-angle-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-angle-right nextarrow "></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    function(o) {
        var t = {
            0: "০",
            1: "১",
            2: "২",
            3: "৩",
            4: "৪",
            5: "৫",
            6: "৬",
            7: "৭",
            8: "৮",
            9: "৯"
        };
        String.prototype.conveterEngToBng = function() {
            let
                e = this;
            for (var s in t) e = e.replace(new RegExp(s, "g"), t[s]);
            return e
        }, o.fn.counterUp = function(e) {
            var s = o.extend({
                time: 400,
                delay: 10
            }, e);
            return this.each(function() {
                var a = o(this),
                    i = s;
                a.waypoint(function() {
                    for (var e = [], s = i.time / i.delay, o = a.text(), t = s; 1 <= t; t--) {
                        var r = parseInt(o / s * t);
                        e.unshift(r.toString().conveterEngToBng())
                    }
                    a.data("counterup-nums", e), a.text("0");
                    a.data("counterup-func", function() {
                        a.text(a.data("counterup-nums").shift()), a.data("counterup-nums").length ? setTimeout(a.data("counterup-func"), i.delay) :
                            (a.data("counterup-nums"), a.data("counterup-nums", null), a.data("counterup-func", null))
                    }), setTimeout(a.data("counterup-func"), i.delay)
                }, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }(jQuery), $(".counter").counterUp({
        delay: 10,
        time: 2e3
    });
// end of courseItem
// start of progress
let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("progress");
    let scrollProgressValue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/ calcHeight);
    if (pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display ="none"
    }
    scrollProgress.addEventListener("click",  () =>{
        document.documentElement.scrollTop =0;
    } )
     scrollProgress.style.background = `conic-gradient(tomato ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// moto tabs
const tabs = document.querySelectorAll(".tabs li");
const content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
    tab.addEventListener('click',() =>{
        tabs.forEach(tab => tab.classList.remove("active"))
        tab.classList.add("active")

        content.forEach(c => c.classList.remove("active"))

        content[index].classList.add("active")
    })
})
tabs[0].click();

// banner popup
function showPopUp(){
	my_popup.style.display="block";
}
function hidePopUp(){
	my_popup.style.display="none";
}
function showPopUp(){
	my_popup.style.display="block";
}
setTimeout(showPopUp,60000);
function ClosePopUp(){
	my_popup.style.display="none";
}
setTimeout(ClosePopUp,120000)
function ClosePopUp(){
	my_popup.style.display="none";
}
window.onload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener('beforeunload', () => {
    document.getElementById('progress-bar').style.width = '100%';
});

window.addEventListener('load', () => {
    document.getElementById('progress-bar').style.width = '0';
});
