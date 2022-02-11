const Koa = require("koa");
const app = new Koa();

app.keys = ["im a newer secret", "i like turtle"];

app.use(async (ctx) => {
    const { method, url, querystring } = ctx.request;
    console.log(method, url, querystring);

    ctx.body = querystring;
    ctx.message = "message";
});

app.listen(3000);
