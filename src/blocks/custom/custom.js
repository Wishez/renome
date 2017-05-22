import * as AOS from 'aos';

$(window).resize(() => {
  let $navList = $('#navList'),
      navListStyle = $navList[0].style;
  
  if (window.innerWidth > 767) 
    navListStyle.display = 'inline-flex';
  else  
    navListStyle.display = 'none';
});
$(function() {
  AOS.init({
    duration: 1500
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

  $(document).on('click', '.makeOffer', (e) => {
    $('.orderFormWrapper').show('fast');
    return false;
  });
  $(document).on('click', '#closeOrderForm', (e) => {
    $('.orderFormWrapper').hide('fast');
  });

});// end ready
