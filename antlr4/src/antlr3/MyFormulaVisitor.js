import FormulaParser from "./FormulaParser";
import FormulaVisitor from "./FormulaVisitor";

export default class MyFormulaVisitor extends FormulaVisitor() {
    visitMulDivExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op;

        if (op.type === FormulaParser.FormulaParser.MUL) {
            return left * right;
        }
        return left / right;
    }
    visitIntExpr(ctx) {
        return parseInt(ctx.INT().getText(), 10);
    }
    visitParenExpr(ctx) {
        return this.visit(ctx.expr());
    }
    visitAddSubExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op;

        if (op.type === FormulaParser.FormulaParser.ADD) {
            return left + right;
        }
        return left - right;
    }
}
