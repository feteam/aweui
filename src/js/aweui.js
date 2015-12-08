$(function () {
  var itemList = $('.item-link');
  var btnBack = $('.navbar .back');


  /**
   * 导航条 从右进入
   */
  function navbarFromRightToCenter () {
    $('.navbar-on-center').addClass('navbar-from-center-to-left');
    $('.navbar-on-right').addClass('navbar-from-right-to-center');

    $('.navbar-on-center').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('navbar-on-left')
        .removeClass('navbar-from-center-to-left')
        .removeClass('navbar-on-center');
    });

    $('.navbar-on-right').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('navbar-on-center')
        .removeClass('navbar-from-right-to-center')
        .removeClass('navbar-on-right');
    });
  }

  /**
   * 导航条 从左进入
   * @return {[type]} [description]
   */
  function navbarFromLeftToCenter () {
    $('.navbar-on-center').addClass('navbar-from-center-to-right');
    $('.navbar-on-left').addClass('navbar-from-left-to-center');

    $('.navbar-on-center').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('navbar-on-right')
        .removeClass('navbar-from-center-to-right')
        .removeClass('navbar-on-center');
    });

    $('.navbar-on-left').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('navbar-on-center')
        .removeClass('navbar-from-left-to-center')
        .removeClass('navbar-on-left');
    });
  }

  /**
   * 页面 从右进入
   */
  function pageFromRightToCenter (opts) {
    $('.page-on-center').addClass('page-from-center-to-left');
    $('.page-on-right').addClass('page-from-right-to-center');

    $('.page-on-center').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('page-on-left')
        .removeClass('page-from-center-to-left')
        .removeClass('page-on-center');
    });

    $('.page-on-right').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('page-on-center')
        .removeClass('page-from-right-to-center')
        .removeClass('page-on-right');
      console.log(opts.link.attr('href'));
      $.get(opts.link.attr('href')).done(function (res) {
        $('.page-on-center').find('.page-content').html(res);
        console.log(res);
      });
    });
  }

  /**
   * 页面 从左进入
   * @return {[type]} [description]
   */
  function pageFromLeftToCenter () {
    $('.page-on-center').addClass('page-from-center-to-right');
    $('.page-on-left').addClass('page-from-left-to-center');

    $('.page-on-center').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('page-on-right')
        .removeClass('page-from-center-to-right')
        .removeClass('page-on-center');
    });

    $('.page-on-left').on('webkitAnimationEnd', function () {
      var self = $(this);
      self.addClass('page-on-center')
        .removeClass('page-from-left-to-center')
        .removeClass('page-on-left');
    });
  }

  /**
   * 视图 从右进入
   */
  function viewFromRightToCenter () {
    itemList.click(function () {
      var self = $(this);

      navbarFromRightToCenter();
      pageFromRightToCenter({
        link: self
      });

      return false;
    });
  }

  /**
   * 视图 从左进入
   * @return {[type]} [description]
   */
  function viewFromLeftToCenter () {
    btnBack.click(function () {
      navbarFromLeftToCenter();
      pageFromLeftToCenter();
    });
  }



  function init () {
    viewFromLeftToCenter();
    viewFromRightToCenter();
  }

  init();
});