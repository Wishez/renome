import * as AOS from 'aos';

$(window).resize(() => {
  let $navList = $('#navList'),
      navListStyle = $navList[0].style;
  
  if (window.innerWidth > 800) 
    navListStyle.display = 'inline-flex';
  else  
    navListStyle.display = 'none';
});

$(function() {
  AOS.init({
    duration: 1500
  });

  $(document).on('focus', '.orderFormController__item, #phone', (e) =>  {
    // const screenW  = window.innerWidth,
    //       screenH = window.innerHeight,
    //       orderForm = $('.orderForm'),
    //       inputOffsets =  $(e.target).offset();
    //       inputOffsetT = inputOffsets.top.
    //       inputOffsetL = inputOffsets.left;

        
    // if (screenW < 800 &&
    //    screrenH - inputOffsetsT < screenH - (screenH / 2)) {
        
    // }
    
  });

  $(document).on('click', '.not-follow', openUrlInNewWindow);

  function openUrlInNewWindow(e) {
    e.preventDefault();
    
    let $target = $(e.target);
    
    $target = $target[0].tagName === 'A' ? $target : $target.parent();
      
    let url = $target.prop('href');
    
    window.open(url);
  }// end openUrlInNewWindow


  $(document).on('click', '.navItem__refer', (e) => {
    if (window.innerWidth  < 767)
      $('#navList').hide('fast');

  }); // end click

  $(document).on('click', '.makeOrder', (e) => {
    $('.orderFormWrapper').show('fast');
    return false;
  });
  $(document).on('click', '#closeOrderForm, body', (e) => {
    const $formWrapper = $('.orderFormWrapper');
    if (!$(e.target).is('.orderFormWrapper, .orderFormWrapper *'))
      $formWrapper.hide('fast');
    else if ($(e.target).is('#closeOrderForm'))
      $formWrapper.hide('fast');
  });

});// end ready