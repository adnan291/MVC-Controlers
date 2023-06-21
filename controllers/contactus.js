 const contactData =[];

exports.contactusnow = (req, res, next) => {
    res.render('contactus', {
      pageTitle: 'Contact Us',
      path: '/contactus',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.postcontactus = (req, res, next) => {
    contactData.push({ Name: req.body.name,
     Email: req.body.email});
    res.redirect('/success');
  }; 