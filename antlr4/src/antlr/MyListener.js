import { tree } from "antlr4";
const { ParseTreeListener } = tree;

function doDivisor(num) {
    const back = [];
    for (var i = 1; i < num - 1; i++) {
        if (num % i == 0) {
            back.push(i);
        }
    }
    return back;
}

export default class MyListener extends ParseTreeListener {
    constructor(props) {
        super(props);
    }
    enterApp(ctx) {
        console.log("enterApp", ctx);
    }
    exitApp(ctx) {
        console.log("exitApp", ctx);
    }
    enterDivisor(ctx) {
        console.log("enterDivisor", ctx);
        const num = parseInt(ctx.getChild(1).getText());
        document.getElementById("xxx").innerHTML = num + "的约数: " + doDivisor(num);
    }
    exitDivisor(ctx) {
        console.log("exitDivisor", ctx);
    }
}
