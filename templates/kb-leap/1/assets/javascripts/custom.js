$(function(){
  /*
  * intNum为标题的个数
  * b为开关
  */
let b=0
let d =0
$('.js-nav-header').hide()
$("#content :header").each(function () {
  switch (this.tagName) {
    case 'H1':
      d = 1
      break;
    case 'H2':
      d = 2
      break;
    case 'H3':
      d = 3
      break;
    case 'H4':
      d = 4
      break;
    case 'H5':
      d = 5
      break;
    default:
      d = 6
      break;
    }
  $(this).attr('id','header-'+b)
  cloneToul($(this).html(), b, d)
  b++
})

  function cloneToul(titleHtml,  index , d) {
      let title = $('#js-column-nav li:eq(0)').clone(true).html("<a class='text-small nav-link nav-link-"+d+"'> "+titleHtml+"</a>")
      $(title).find('a').attr('href', '#header-'+index)
      switch(d){
        case 1 : break;
        case 2 : $(title).find('a').css('margin-left','8px') ; break;
        case 3 : $(title).find('a').css('margin-left','18px') ; break;
        case 4 : $(title).find('a').css('margin-left','26px') ; break;
        case 5 : $(title).find('a').css('margin-left','30px') ; break;
        case 6 : $(title).find('a').css('margin-left','35px') ; break;

        default: break;
      }
      title.appendTo("#js-column-nav");
      $('.js-nav-header').show()
      return ;


  }
  function poductNav(navName, title) {
    if($(navName).length==0){
      return
    }
    let navTop=$(navName).offset().top
    let navWidth= $(navName).width()
    $(window).scroll(function(){
      if (title ||  $(navName).height()<$(window).height()) {
        if($(document).scrollTop()>navTop){
          //$(navName).css({'position':'fixed', 'top': '0', 'width': navWidth})
        }
        if ($(document).scrollTop()<navTop) {
          //$(navName).css({'position':'relative', 'top': 'auto'})
        }
      }
    })
  }
  poductNav('#js-column-nav', false)
  poductNav('.js-temaplate-card-nav', true)

  document.addEventListener('touchstart',function (event) {
    if(event.touches.length>1){
        event.preventDefault();
    }
  })
  var lastTouchEnd=0;
  document.addEventListener('touchend',function (event) {
      var now=(new Date()).getTime();
      if(now-lastTouchEnd<=300){
          event.preventDefault();
      }
      lastTouchEnd=now;
  },false)



});
