/*!
 * SpidocheSVG - jQuery inline svg loader
 *
 * Version    : 1.0
 * Author     : Spidoche - spidoche.com
 * Require    : jQuery v1.7.2 or later
 * IE support : ie8 or later
 *
 * Plugin URL : https://github.com/spidoche/spidocheSVG
 * Demo URL   : http://spidoche.com/spidocheSVG/
 */

/* global window, document, jQuery */
jQuery(function($){
    function SpidocheSVG(){
        this.init();
    }

    SpidocheSVG.prototype = {
        init : function(){
            if(this.is_inline_svg()){
                var $svg = $('body').find('[data-svg]');

                $svg.each(function(){
                    var $this = $(this);
                    var svg_url = $this.attr('data-svg');
                    $.get(svg_url,function(data){
                        var svg = $(data).find('svg');
                        $this.empty().append(svg);
                    });
                });
            }else{
                $('body').addClass('.no-svg');
            }
        },
        is_inline_svg : function(){
            var e = document.createElement('div');
            e.innerHTML = '<svg></svg>';
            return !!(window.SVGSVGElement && e.firstChild instanceof window.SVGSVGElement);
        }
    };

    new SpidocheSVG();
});
