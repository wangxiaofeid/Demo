// Visit a parse tree produced by FormulaParser#OperatorExpr.
FormulaVisitor.prototype.visitOperatorExpr = function (ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op;
    switch (op.type) {
        case FormulaParser.FormulaParser.HIGHER:
            return left > right;
            break;
        case FormulaParser.FormulaParser.LOWER:
            return left < right;
            break;
        default:
            break;
    }
};
