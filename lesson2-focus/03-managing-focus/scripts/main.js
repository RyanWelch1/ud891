page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  var slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  var oldMenuItem = document.querySelector('#menu .is-active');
  var oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  var newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  var newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

});

//if this is the first time someone is visiting site, dont move focus around. wait until they have clicked a menu items
if (isFirstPage){
  isFirstPage=false;
  return;
}

//move focus to heading in new page
newPage.querySelector('h2').focus();


page({
  hashbang: true
});
