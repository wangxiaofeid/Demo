const http = require("http");
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
    console.log(1);
    ctx.body = "Hello World1";
});

const app2 = new Koa();
app2.use(async (ctx) => {
    console.log(2);
    ctx.body = "Hello World2";
});

http.createServer(app.callback()).listen(3000);
http.createServer(app2.callback()).listen(3001);
