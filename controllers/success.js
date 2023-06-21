exports.getcontactus = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success',
      activeShop: true,
      productCSS: true
    });
  };
  