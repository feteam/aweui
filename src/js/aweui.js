$(function () {
  var itemList = $('.item-link');
  itemList.click(function () {
  console.log(itemList.length);
    $('.page-on-right').addClass('page-from-right-to-center');
  });
});