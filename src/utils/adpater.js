
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      //     if (clientWidth >= 1200) {
      //         document.querySelector("html").style.width =  "100%"
      //         console.log("651511")
      //   }else{
      //     document.querySelector("html").style.width =  "1200px"
      //   }
      // console.log(clientWidth);
      if (clientWidth >= 1200) {
        // window.location.reload()

        // 电脑端
        docEl.style.fontSize = '100px';
        document.querySelector(".home_h5").style.display = "none"
        document.querySelector(".home").style.display = "flex"
        document.querySelector(".swipe").style.display = "none"
        document.querySelector(".techon_h5").style.display = "none"
        document.querySelector(".head_h5").style.display = "none"
        document.querySelector(".case_class").style.display = "none"
        document.querySelector(".about_h5").style.display = "none"
        document.querySelector(".internation_h5").style.display = "none"
        document.querySelector(".national_h5 ").style.display = "none"
        document.querySelector(".sorft_national").style.display = "none"
        document.querySelector(".footer_h5").style.display = "none"
        // console.log("电脑端");   
      } else {
        // 手机端
        // window.location.reload();
        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        document.querySelector(".banner_carousel").style.height = document.querySelector(".content").offsetHeight + "px"
        document.querySelector(".home").style.display = "none"
        document.querySelector(".home_h5").style.display = "flex"
        document.querySelector(".banner_carousel").style.display = "none"
        document.querySelector(".swipe").style.display = "block"
        document.querySelector(".skill").style.display = "none"
        document.querySelector(".techon_h5").style.display = "block"
        document.querySelector(".block_case").style.display = "none"
        document.querySelector(".about").style.display = "none"  //关于我们
        document.querySelector(".interna").style.display = "none"  //国际
        document.querySelector(".nation").style.display = "none"  //国家
        document.querySelector(".create").style.display = "none"  //软件
        document.querySelector(".footer").style.display = "none"  //关于我们
         console.log("手机端");                                                          
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
