const Koa = require("koa");
const app = new Koa();

app.keys = ["im a newer secret", "i like turtle"];

app.use(async (ctx) => {
    ctx.cookies.set("name", "tobi", { signed: true });
    ctx.body = "Hello World";
    console.log(ctx.cookies.get("name", { signed: true }));
});

app.listen(3000);
