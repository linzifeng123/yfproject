(function(e,t,n,r){function o(e){var n=e.attr("data-original"),r,i=1,o,u;return!n||(n=n.replace("qhimg.com","qhmsg.com")),r=e.attr("data-size"),s&&(i=Math.round(s*i)),e.attr("data-auto")?(o=e.width(),u=e.height(),r=o*i+"_"+u*i+"_"):r&&(o=+r.split("_")[0],u=+r.split("_")[1],r=o*i+"_"+u*i+"_"),r&&n&&n.indexOf("qhimg")&&(n=n.replace("com/","com/dr/"+r+"/")),n?(n=n.replace(/http:\/\/p\d{1,}/,"https://p.ssl"),t.isSupportWebp?n.replace(/\.jpg|\.png/,".webp"):n):n}var i=e(t),s=t.devicePixelRatio;e.fn.lazyload=function(s){function l(){var t=0;u.each(function(){var n=e(this);if(f.skip_invisible&&!n.is(":visible"))return;if(!e.abovethetop(this,f)&&!e.leftofbegin(this,f))if(!e.belowthefold(this,f)&&!e.rightoffold(this,f))n.trigger("appear"),t=0;else if(++t>f.failure_limit)return!1})}var u=this,a,f={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return s&&(r!==s.failurelimit&&(s.failure_limit=s.failurelimit,delete s.failurelimit),r!==s.effectspeed&&(s.effect_speed=s.effectspeed,delete s.effectspeed),e.extend(f,s)),a=f.container===r||f.container===t?i:e(f.container),0===f.event.indexOf("scroll")&&a.bind(f.event,function(){return l()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,(n.attr("src")===r||n.attr("src")===!1)&&n.is("img")&&n.attr("src",f.placeholder),n.one("appear",function(){if(!this.loaded){if(f.appear){var r=u.length;f.appear.call(t,r,f)}e("<img />").bind("load",function(){var r=o(n);n.hide(),n.is("img")?n.attr("src",r):n.css("background-image","url('"+r+"')"),n[f.effect](f.effect_speed),t.loaded=!0;var i=e.grep(u,function(e){return!e.loaded});u=e(i);if(f.load){var s=u.length;f.load.call(t,s,f)}}).attr("src",o(n))}}),0!==f.event.indexOf("scroll")&&n.bind(f.event,function(){t.loaded||n.trigger("appear")})}),i.bind("resize",function(){l()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&u.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){l()}),this},e.belowthefold=function(n,s){var o;return s.container===r||s.container===t?o=(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():o=e(s.container).offset().top+e(s.container).height(),o<=e(n).offset().top-s.threshold},e.rightoffold=function(n,s){var o;return s.container===r||s.container===t?o=i.width()+i.scrollLeft():o=e(s.container).offset().left+e(s.container).width(),o<=e(n).offset().left-s.threshold},e.abovethetop=function(n,s){var o;return s.container===r||s.container===t?o=i.scrollTop():o=e(s.container).offset().top,o>=e(n).offset().top+s.threshold+e(n).height()},e.leftofbegin=function(n,s){var o;return s.container===r||s.container===t?o=i.scrollLeft():o=e(s.container).offset().left,o>=e(n).offset().left+s.threshold+e(n).width()},e.inviewport=function(t,n){return!e.rightoffold(t,n)&&!e.leftofbegin(t,n)&&!e.belowthefold(t,n)&&!e.abovethetop(t,n)},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})})(jQuery,window,document);