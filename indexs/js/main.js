function maxwidth() {
  // if ($(window).width() > 700) {
  //   window.location.href = "indextow.html";
  // }
}

(function() {
  "use strict";

  var isMobile = {
    //浏览器查询
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var getHeight = function() {
    var Heisht = 0;
    if (isMobile.any()) Heisht = 50;
    setTimeout(function() {
      $("#fh5co-main")
        .stop()
        .animate({
          height: $(".fh5co-tab-content.active").height() + Heisht
        });
    }, 200);
  };

  var pieChart = function() {
    //圆盘插件
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 10,
      lineCap: "butt",
      barColor: "#2180f8",
      trackColor: "#000000",
      size: 160,
      animate: 1000
    });
  };

  var tabContainer = function() {
    getHeight();
    $(window).resize(function() {
      getHeight();
    });
  };

  var tabClickTrigger = function() {
    $(".fh5co-tab-menu a").on("click", function(event) {
      event.preventDefault();
      var $this = $(this),
        data = $this.data("tab"),
        pie = $this.data("pie");

      $(".fh5co-tab-menu li").removeClass("active");
      $this.closest("li").addClass("active");

      $(".fh5co-tab-content.active").addClass("animated fadeOutDown");

      setTimeout(function() {
        $(".fh5co-tab-content.active").removeClass(
          "active animated fadeOutDown fadeInUp"
        );
        $('.fh5co-tab-content[data-content="' + data + '"]').addClass(
          "animated fadeInUp active"
        );
        getHeight();
      }, 500);

      if (pie === "yes") {
        //节流
        setTimeout(function() {
          pieChart();
        }, 800);
      }
    });
  };

  $(function() {
    tabContainer();
    tabClickTrigger();
  });
  var ban = $("#ims").width() / 2 / 3;
  console.log(ban);
  $("#ims").css("left", -ban);
})();
