$( document ).ready(function() {
  $("#fancybox-manual-b").click(function() {
    $.fancybox.open({
      href : 'http://ad.nchusg.org/index.html',//在這邊放絕對網址會讓圖片爆掉,我還沒解決，所以讓他用相對路徑直接去連到廣告的頁面../advertisement/index.html
      type : 'iframe',
      padding : 5
    });
  });
  $("#fancybox-manual-b").click();
});              