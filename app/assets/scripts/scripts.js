(function(){
  // Scripts

})();
$(document).ready(function(){

  hideShowContent('.hide-show','.btn-tiny','ul');

});

function hideShowContent(section, button, content) {
  var section = $(section),
      button = $(button),
      content = $(content);

  section.each(function(){
    var hideShowBtn = $(this).find(button),
    hideShowBlock = $(this).find(content);

    hideShowBtn.click(function(){
      $(this).toggleClass('fa-chevron-circle-up fa-chevron-circle-down');
      hideShowBlock.slideToggle();
    });

  });
}