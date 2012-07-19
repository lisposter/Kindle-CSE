
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'eBook Search for Kindle' });
};

exports.search = function(req, res){
  res.render('search', { title: 'Search Result' });
};

exports.tos = function(req, res){
  res.render('tos', { title: 'Disclaimer | eBook Search for Kindle' });
};