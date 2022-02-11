const Koa = require("koa");
const app = new Koa();

app.keys = ["im a newer secret", "i like turtle"];

app.use(async (ctx) => {
    ctx.throw(404, "name required");
});

app.listen(3000);
