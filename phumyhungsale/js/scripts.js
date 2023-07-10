window.addEventListener("DOMContentLoaded",(()=>{console.log("Loaded Scripts")}));const mySwiperGalleryMain=document.querySelectorAll(".mySwiperGalleryMain"),mySwiperGalleryMainInit=[];for(i=0;i<mySwiperGalleryMain.length;i++)mySwiperGalleryMain[i].classList.add("mySwiperGalleryMain-"+i),mySwiperGalleryMainInit[i]=new Swiper(".mySwiperGalleryMain-"+i,{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0});const mySwiperGalleryThumb=document.querySelectorAll(".mySwiperGalleryThumb"),mySwiperGalleryThumbInit=[];for(i=0;i<mySwiperGalleryThumb.length;i++)mySwiperGalleryThumb[i].classList.add("mySwiperGalleryThumb-"+i),mySwiperGalleryThumbInit[i]=new Swiper(".mySwiperGalleryThumb-"+i,{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:mySwiperGalleryMainInit[i]}});!function(e){"use strict";var i=e(window),a=e("body"),s=e("#sticky-header");e(i).on("scroll",(function(){var a=e(i).scrollTop(),t=s;a<150?t.removeClass("is-sticky"):t.addClass("is-sticky")}));var t,l=e(".offcanvas-toggle"),n=e(".offcanvas"),r=e(".offcanvas-overlay"),o=e(".mobile-menu-toggle");l.on("click",(function(i){i.preventDefault();var s=e(this),t=s.attr("href");a.addClass("offcanvas-open"),e(t).addClass("offcanvas-open"),r.fadeIn(),s.parent().hasClass("mobile-menu-toggle")&&s.addClass("close")})),e(".offcanvas-close, .offcanvas-overlay").on("click",(function(e){e.preventDefault(),a.removeClass("offcanvas-open"),n.removeClass("offcanvas-open"),r.fadeOut(),o.find("a").removeClass("close")})),(t=e(".offcanvas-menu, .overlay-menu")).find(".offcanvas-submenu").parent().prepend('<span class="menu-expand"></span>'),t.on("click","li a, .menu-expand",(function(i){var a=e(this);("#"===a.attr("href")||a.hasClass("menu-expand"))&&(i.preventDefault(),a.siblings("ul:visible").length?(a.parent("li").removeClass("active"),a.siblings("ul").slideUp(),a.parent("li").find("li").removeClass("active"),a.parent("li").find("ul:visible").slideUp()):(a.parent("li").addClass("active"),a.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"),a.closest("li").siblings("li").find("ul:visible").slideUp(),a.siblings("ul").slideDown()))})),e.fn.elExists=function(){return this.length>0},e(".nice-select").elExists()&&e(".nice-select").selectric();new Swiper(".hero-slider .swiper-container",{loop:!0,speed:600,autoplay:!1,lazy:!0,spaceBetween:0,fadeEffect:{crossFade:!0},pagination:{el:".hero-slider .swiper-pagination",clickable:!0},navigation:!1}),new Swiper(".hero-slider2 .swiper",{loop:!0,speed:600,autoplay:!1,lazy:!0,spaceBetween:0,fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">'+(e+1)+"</span>"}},navigation:!1}),new Swiper(".cities-slider .swiper",{loop:!0,speed:600,lazy:!0,watchSlidesProgress:!0,spaceBetween:30,pagination:{el:".cities-slider .swiper-pagination",clickable:!0},navigation:!1,breakpoints:{0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}}}),new Swiper(".properties-slider .swiper",{loop:!0,speed:600,lazy:!0,watchSlidesProgress:!0,spaceBetween:30,pagination:{el:".properties-slider .swiper-pagination",clickable:!0},navigation:!1,breakpoints:{0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".brand-slider .swiper",{loop:!1,speed:600,lazy:!0,watchSlidesProgress:!0,spaceBetween:30,pagination:!1,navigation:!1,breakpoints:{0:{slidesPerView:2},576:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}}),new Swiper(".testimonial-carousel-one .swiper",{loop:!1,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,speed:1e3,lazy:!0,pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},576:{slidesPerView:1},768:{slidesPerView:1},992:{slidesPerView:1}}}),new Swiper(".testimonial-carousel-two .swiper",{loop:!1,watchSlidesProgress:!0,slidesPerView:1,spaceBetween:30,speed:1e3,lazy:!0,pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},576:{slidesPerView:1},768:{slidesPerView:1},992:{slidesPerView:1}}}),new Swiper(".interior-carousel .swiper",{slidesPerView:"auto",slidesPerGroup:3,spaceBetween:25,speed:1e3,lazy:!0,pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".latest-prorperties-slider .swiper",{loop:!0,spaceBetween:6,speed:600,autoplay:{delay:5e3},lazy:!0,fadeEffect:{crossFade:!0},pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},576:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:2},1200:{slidesPerView:3},1500:{slidesPerView:4},1920:{slidesPerView:5}}}),new Swiper(".sidebar-carousel .swiper",{loop:!0,spaceBetween:20,slidesPerView:1,speed:600,autoplay:{delay:5e3},lazy:!0,fadeEffect:{crossFade:!0},pagination:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function c(e){e.matches&&document.querySelectorAll(".scene").forEach((e=>{new Parallax(e)}))}e(".search-tab li").on("click",(function(){var i=e(this).attr("data-tab");e(".search-tab li").removeClass("active"),e(".tab-content").removeClass("active"),e(this).addClass("active"),e("#"+i).addClass("active")})),e(".all-properties li").on("click",(function(){var i=e(this).attr("data-tab");e(".all-properties li").removeClass("active"),e(".properties-tab-content").removeClass("active"),e(this).addClass("active"),e("#"+i).addClass("active")})),e(".grid-tab-menu li").on("click",(function(){var i=e(this).attr("data-grid");e(".grid-tab-menu li").removeClass("active"),e(".grid-tab-content").removeClass("active"),e(this).addClass("active"),e("#"+i).addClass("active")})),e(".all-properties li").on("click",(function(){var i=e(this).attr("data-tab");e(".all-properties li").removeClass("active"),e(".properties-tab-content").removeClass("active"),e(this).addClass("active"),e("."+i).addClass("active")})),e(".grid-tab-menu li").on("click",(function(){var i=e(this).attr("data-grid");e(".grid-tab-menu li").removeClass("active"),e(".grid-tab-content").removeClass("active"),e(this).addClass("active"),e("."+i).addClass("active")}));var p=window.matchMedia("(min-width: 992px)");c(p),p.addListener(c),e(".play-button").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!0}),e(".gallery-image").magnificPopup({type:"image",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),e(".gallery-lightbox").each((function(){e(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})})),document.querySelectorAll(".tab-toggle-btn").forEach((function(e){e.addEventListener("click",(function(){document.querySelectorAll(".search-btn").forEach((function(e){e.classList.toggle("active"),e.classList.contains("active")?e.style.display="none":e.style.display="block"})),e.classList.toggle("active"),document.querySelectorAll(".advanced-searrch-hidden").forEach((function(e){e.style.maxHeight?(e.style.maxHeight=null,e.classList.remove("active")):(e.style.maxHeight=e.scrollHeight+"px",setTimeout((function(){e.classList.add("active")}),200))}))}))})),e("#mc-form").ajaxChimp({language:"en",callback:function(i){"success"===i.result?(e(".mailchimp-success").html(""+i.msg).fadeIn(900),e(".mailchimp-error").fadeOut(400)):"error"===i.result&&e(".mailchimp-error").html(""+i.msg).fadeIn(900)},url:"http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"}),e((function(){var i=e("#contact-form"),a=e(".form-messege");e(i).submit((function(s){s.preventDefault();var t=e(i).serialize();e.ajax({type:"POST",url:e(i).attr("action"),data:t}).done((function(i){e(a).removeClass("error"),e(a).addClass("success"),e(a).text(i),e("#contact-form input,#contact-form textarea").val("")})).fail((function(i){e(a).removeClass("success"),e(a).addClass("error"),""!==i.responseText?e(a).text(i.responseText):e(a).text("Oops! An error occured and your message could not be sent.")}))}))})),e.fn.elExists=function(){return this.length>0},e(".counter-up").elExists()&&e(".counter-up").counterUp({delay:10,time:1e3}),function(){var i=e("#scrollUp"),a=0,s=e(window);s.on("scroll",(function(){var t=e(this).scrollTop();t>a?i.css({bottom:"-60px"}):s.scrollTop()>200?i.css({bottom:"60px"}):i.css({bottom:"-60px"}),a=t})),i.on("click",(function(i){e("html, body").animate({scrollTop:0},0),i.preventDefault()}))}(),e(".search-tab button").on("click",(function(){e(".tab-toggle-btn").contents("active")?e(".tab-toggle-btn").removeClass("active"):e(".tab-toggle-btn").addClass("active"),document.querySelectorAll(".advanced-searrch-hidden").forEach((function(e){e.style.maxHeight&&(e.style.maxHeight=null,e.classList.remove("active"))}))}))}(jQuery);