var pieChart = function() {
    //数据插件
    $(".chart").easyPieChart({
        scaleColor: false, //刻度线
        lineWidth: 10, //图表圆形宽
        lineCap: "butt", //样式
        barColor: "#9813e8",
        trackColor: "#000000",
        size: 100,
        animate: 1000
    });
};

var banner = document.querySelector(".log");
window.onresize = set;
set();

function set() {
    var bannerWidth = parseInt(getComputedStyle(banner)["width"]);
    banner.style.height = bannerWidth / (301 / 119) + "px";
}


var obj = {
    init: function() {
        this.playtips = $(".log");
        this.playbtn = $("#play")
        this.tiem;
        this.Dom();
        this.play();
    },
    Dom: function() {

        var that = this
        this.direct = 0;
        $(document).on("mousewheel DOMMouseScroll", function(e) {
            var delta =
                (e.originalEvent.wheelDelta &&
                    (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
            if (delta > 0) {
                clearInterval(that.tiem)
                obj.contsdow();
            } else if (delta < 0) {
                clearInterval(that.tiem)
                obj.contsup();
            }
        });
    },
    contsup: function() {
        var that = this
        this.direct++;
        that.playbtn.fadeOut()
        console.log(this.direct);
        if (this.direct > 12) {
            $(".box").fadeIn();
            $(".forms").css("left", "1000px");
            $(".forms span").html("教育程度");
        }
        if (this.direct > 45) {
            $(".menu").fadeIn();
            $(".forms").css("left", "1600px");
            $(".forms span").html("参与项目");
        }
        if (this.direct > 75) {
            $(".featur").fadeIn();
            $(".forms").css("left", "2100px");
            $(".forms span").html("技能");
        }
        if (this.direct > 95) {
            $(".skill").fadeIn();
            setTimeout(function() {
                pieChart();
            }, 800);

            $(".forms").css("left", "3200px");
            $(".forms span").html("联系我");
        }
        if (this.direct > 145) {
            $(".me").fadeIn();
            $(".forms").css("display", "none");
        }

        $("#img").css("transform", "rotateY(" + 0 + "deg)");
        if (this.direct >= 156) {
            $("#img").css("transform", "rotateY(" + 180 + "deg)");

            that.playtips.off("click")
            clearInterval(that.tiem)

            this.direct = 156;
        }
        $(".log").css("margin-left", this.direct * 22 + "px");

        if (this.direct > 15) {
            var num = this.direct - 15;
            if (num >= 100) {
                num = 100;
            }
            $("#head_ing").css("left", -num * 22 + "px");
        }
    },


    contsdow: function() {

        var that = this;
        var buys = 1;
        this.direct--;
        var truw = this.direct - 15;
        console.log(truw)
        $("#img").css("transform", "rotateY(" + 180 + "deg)");
        if (this.direct <= 0) {
            this.direct = 0;
            $("#img").css("transform", "rotateY(" + 0 + "deg)");
        }

        buys += 0.1;
        if (truw >= 100) {

            $(".log").css("margin-left", truw * buys * 22 + "px");
            return;
        }

        if (truw <= 0) {
            truw = 0;
            that.playbtn.fadeIn()
            console.log(truw)
        }
        $("#head_ing").css("left", -truw * 22 + "px");
        $(".log").css("margin-left", truw * buys * 22 + "px");
    },
    play: function() {
        var that = this
        var f = false
        var o = false
        that.playtips.on("click", function() {

            if (f == false) {

                that.tiem = setInterval(() => {
                    that.direct += 1
                    that.contsup()
                }, 300);
                f = true;
            } else {
                if (f == true) {
                    clearInterval(that.tiem)
                    f = false
                } else {
                    that.tiem = setInterval(() => {
                        that.direct += 1
                        that.contsup()
                    }, 300);
                }
            }
        })

    }

};
obj.init()


$(".melis").click(function() {
    $(this).attr(
        "href",
        "mailto:Mokeof@outlook.com?subject=我很中意你&body=" + $(".mes").val() + ""
    );
});