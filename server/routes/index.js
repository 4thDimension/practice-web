import Router from 'koa-router';
import fs from 'fs';

const router = new Router({
  prefix: '/api'
});

router
  .post('/notification', function (ctx, next) {
    fs.appendFile('/data/emails.txt', ctx.request.body.email + '\r\n', function (err) {
      if (err) throw err;
    });
    ctx.body = JSON.stringify({ message: 'Email has been saved' });
  });

export default router;
