const inject = (app) => {
  const middleware = (req, res, next) => {
    req.render = (view, params) => app.render(req, res, view, params);
    return next();
  };

  return middleware;
};

const byPass = (req) => {
  req.render(req.path, req.query);
};

const requireAuth = (req, res) => {
  if (!req.session.user) {
    res.redirect('/signin');
    return;
  }
  byPass(req, res);
};

module.exports = {
  byPass,
  inject,
  requireAuth,
};
