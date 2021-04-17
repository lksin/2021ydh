$(function() {
  /*

		Creative example - Product quick view
	    =====================================

	*/

  $(".quick_view").fancybox({
    baseClass: "quick-view-container",
    infobar: false,
    buttons: false,
    thumbs: false,
    margin: 0,
    touch: {
      vertical: false
    },
    animationEffect: false,
    transitionEffect: "slide",
    transitionDuration: 500,
    baseTpl:
      '<div class="fancybox-container" role="dialog">' +
      '<div class="quick-view-content">' +
      '<div class="quick-view-carousel">' +
      '<div class="fancybox-stage"></div>' +
      "</div>" +
      '<div class="quick-view-aside"></div>' +
      '<button data-fancybox-close class="quick-view-close">X</button>' +
      "</div>" +
      "</div>",

    onInit: function(instance) {
      /*

			    #1 Create bullet navigation links
			    =================================

			*/

      var bullets = '<ul class="quick-view-bullets">';

      for (var i = 0; i < instance.group.length; i++) {
        bullets += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + "</span></a></li>";
      }

      bullets += "</ul>";

      $(bullets)
        .on("click touchstart", "a", function() {
          var index = $(this).data("index");

          $.fancybox.getInstance(function() {
            this.jumpTo(index);
          });
        })
        .appendTo(instance.$refs.container.find(".quick-view-carousel"));

      /*

			    #2 Add product form
			    ===================

			*/

      var $element = instance.group[instance.currIndex].opts.$orig;
      var form_id = $element.data("qw-form");

      instance.$refs.container.find(".quick-view-aside").append(
        // In this example, this element contains the form
        $("#" + form_id)
          .clone(true)
          .removeClass("invisible")
      );
    },

    beforeShow: function(instance) {
      /*
			    Mark current bullet navigation link as active
			*/

      instance.$refs.container
        .find(".quick-view-bullets")
        .children()
        .removeClass("active")
        .eq(instance.currIndex)
        .addClass("active");
    }
  });

  $('.editor_js--embed').css('text-align','center')
});

jQuery(".decoration img").each(function() {
  var e = '<button class="btn btn-sm btn-primary btn-clipboard" type="button" title="Copy To Clipboard">Copy</button>';
  jQuery(this).after(e);
});
jQuery(".btn-clipboard").tooltip().on("mouseleave", function() {
  jQuery(this).tooltip("hide")
});
var e = new ClipboardJS(".btn-clipboard",{text:function(e){return '<div class="decoration"><img class="'+e.previousElementSibling.attributes.class.nodeValue.replace(/injected-svg/, '').trim()+'" src="'+e.previousElementSibling.attributes['data-src'].nodeValue.replace(/\.\.\//, '')+'" alt="decoration" data-inject-svg /></div>'}});e.on("success",function(e){jQuery(e.trigger).attr("title","Copied!").tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle");e.clearSelection()});e.on("error",function(e){var t=/Mac/i.test(navigator.userAgent)?"⌘":"Ctrl-";var n="Press "+t+"C to copy";jQuery(e.trigger).attr("title",n).tooltip("_fixTitle").tooltip("show").attr("title","Copy to clipboard").tooltip("_fixTitle")});
$('.insidenav').click(
  function(){
    $('.insidenav').each(function(){
        $(this).children('a').removeClass('active')
    })
    $(this).children('a').addClass('active')
  }
)
window.onscroll = function() {

  $(".editor_js--header").each(function () {
      var topjuli=$(this).offset().top-$(document).scrollTop();

      if(topjuli<=20){

        var showlight=$(this).attr("id")

        $('.insidenav').each(function(){

        $(this).children('a').removeClass('active')

        var showlight2=$(this).children('a').attr("href").slice(1)

        if(showlight==showlight2){

        $(this).children('a').addClass('active')
        }
        })

      }
        else{
        $('.insidenav').each(function(){
        })
    }
  })

var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
if (navigator.userAgent.match(/mobile/i)) {
  $('.search-href').each(function(){
    $href = $(this).find('a').attr('href');
    var strB = "<a href='" + $href + "' style='display:block;color:#666'></a>";
    $(this).wrapInner(strB)
  })
}
}

  $('.loader').fadeOut()

