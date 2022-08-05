//aタグをクリックしたときのスムーズスクロール
$(function(){
 $('a[href^="#"]').click(function(){     // #で始まるアンカーをクリックした場合に処理
  var speed = 300;                    // スクロールの速度（1000＝１秒）
  var href= $(this).attr("href");    // アンカーの値取得
  var target = $(href == "#" || href == "" ? 'html' : href); // 移動先を取得
  var position = target.offset().top;   // 移動先を数値で取得
  $("html, body").animate({scrollTop:position}, speed, "linear"); // スムーススクロール
  return false;
 });
});



//一定の場所にきたらフェードインして表示されるボタンのスムーズスクロール
$(function() {
 var topBtn = $('.top-btn');	
 topBtn.hide();
 //スクロールが250に達したらボタン表示
 $(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
   topBtn.fadeIn();
  } else {
   topBtn.fadeOut();
  }
 });
 //スクロールしてトップ
 topBtn.click(function () {
  $('body,html').animate({
   scrollTop: 0
  }, 250);
  return false;
 });
});

$(function() {
  var bsiteBtn = $('#b-site');	
  bsiteBtn.hide();
  //スクロールが250に達したらボタン表示
  $(window).scroll(function () {
   if ($(this).scrollTop() > 250) {
    bsiteBtn.fadeIn();
   } else {
    bsiteBtn.fadeOut();
   }
  });
});