"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}$(document).ready(function(){var t=$("._menu");$("._nav-hamburger").click(function(e){return e.preventDefault(),t.toggleClass("is-open"),$(this).toggleClass("is-active"),!1})}),function(){var n,e=$("._spy-nav"),a=e.outerHeight()+35,i=e.find("a"),o=i.map(function(){var e=$($(this).attr("href"));if(e.length)return e});i.click(function(e){var t=$(this).attr("href"),r="#"===t?0:$(t).offset().top-a+1;$("html, body").stop().animate({scrollTop:r},650),e.preventDefault()}),$(window).scroll(function(){var e=$(this).scrollTop()+a,t=o.map(function(){if($(this).offset().top<e)return this}),r=(t=t[t.length-1])&&t.length?t[0].id:"";n!==r&&(n=r,i.parent().removeClass("active").end().filter("[href='#"+r+"']").parent().addClass("active"))})}(),$(document).ready(function(){var e;$("#gallery_content").easytabs({updateHash:!1,tabActiveClass:"is-active",tabs:".gallery-tabs > li"}),$(".zoom-gallery").magnificPopup((_defineProperty(e={delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",tLoading:"Загрузка фотографии #%curr%...",tClose:"Свернуть (Esc)"},"mainClass","mfp-img-mobile"),_defineProperty(e,"gallery",{enabled:!0,navigateByImgClick:!0,preload:[0,1],tPrev:"← Предыдущий",tNext:"Следующий →",tCounter:"%curr% из %total%"}),_defineProperty(e,"image",{verticalFit:!0,tError:'<a href="%url%">Фотография #%curr%</a> незагрузилась :о('}),_defineProperty(e,"zoom",{enabled:!0,duration:300,opener:function(e){return e.find("img")}}),e))});