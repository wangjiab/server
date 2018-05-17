/**
 * Created by admin on 2017/3/28.
 */
$(document).ready(function () {
    webChar = {};
    webChartitle = document.title;
    webChardesc = $("#desc").attr('Content')
    webCharImg = location.href.split("index.html")[0] + $("#webCharImg").attr("src");
    $.ajax({
        url: 'http://union.iqeq.cn/api/Other/CreateWinXinSign',
        type: 'get',
        timeout: 5000,
        data: { "url": location.href },
        dataType: 'json',
        success: function (data) {
            if (data.StateCode != 0) {
                alert(data.StateMsg)
            } else {
                var Data = data.Data;
                webChar = Data;
                wx.config({
                    debug: false,
                    appId: webChar.appId,
                    timestamp: webChar.timestamp,
                    nonceStr: webChar.nonceStr,
                    signature: webChar.signature,
                    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                });
                wx.ready(function () {
                    wx.onMenuShareAppMessage({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        type: '',
                        dataUrl: '',
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });
                    wx.onMenuShareTimeline({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareQQ({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareWeibo({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                    wx.onMenuShareQZone({
                        title: webChartitle,
                        desc: webChardesc,
                        link: '',
                        imgUrl: webCharImg,
                        success: function () {

                        },
                        cancel: function () {

                        }
                    });

                });

                wx.error(function (res) {



                });


            }
        },
        error: function (xhr, textStatus) {
            console.log(textStatus)
        }
    })






})