module.exports = app => {
    app.router.get('/', app.controller.home.index);
    app.router.post('/model1/list', app.middleware.slow({ threshold: 1 }), app.controller.model1.list.index)
    app.router.get('/model1/detail', app.controller.model1.detail.index)
  };