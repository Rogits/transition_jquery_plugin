/* 
 * 
 * License: N/A
 * Twitter: @vic_rog
 * 
 * It applies Transition effects on DOM elements.
 * 
 */

 $.fn.transition = function(options)
{
    var $w = $(window);
    var w = $w.width();
    var h = $w.height();

    var defaults = {
        position: "absolute",
        srcWidth: this.width(),
        srcHeight: this.height(),
        srcTop: this.offset().top,
        srcLeft: this.offset().left,
        srcFontSize: this.css("font-size"),
        srcOpacity: 1,
        srcBgColor: this.css("background-color"),
        destWidth: w,
        destHeight: h,
        destTop: 0,
        destLeft: 0,
        destFontSize: this.css("font-size"),
        destOpacity: 1,
        destBgColor: this.css("background-color"),
        transition: "width 2s, height 2s, top 2s, left 2s"                       
    };

    var settings = $.extend({}, defaults, options);                    

    this.css({    
        "position": settings.position,                            
        "width": settings.srcWidth,
        "height": settings.srcHeight,
        "top": settings.srcTop,
        "left": settings.srcLeft,
        "font-size": settings.srcFontSize,
        "opacity": settings.srcOpacity,
        "background-color": settings.srcBgColor,
        "transition": settings.transition
    });              

    this.css({
        "top": settings.destTop,
        "left": settings.destLeft,
        "width": settings.destWidth,
        "height": settings.destHeight,
        "font-size": settings.destFontSize,
        "opacity": settings.destOpacity,
        "background-color": settings.destBgColor
    });                    
};
