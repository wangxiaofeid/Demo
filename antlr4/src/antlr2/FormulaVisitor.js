// Generated from Formula.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require("antlr4");
var FormulaParser = require("./FormulaParser");

// This class defines a complete generic visitor for a parse tree produced by FormulaParser.

function FormulaVisitor() {
    antlr4.tree.ParseTreeVisitor.call(this);
    this.buffers = [];
    this.memory = {};
    return this;
}

FormulaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FormulaVisitor.prototype.constructor = FormulaVisitor;

FormulaVisitor.prototype.defaultResult = function () {
    return 0;
};

// Visit a parse tree produced by FormulaParser#prog.
FormulaVisitor.prototype.visitProg = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by FormulaParser#stat.
FormulaVisitor.prototype.visitStat = function (ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by FormulaParser#exprStat.
FormulaVisitor.prototype.visitExprStat = function (ctx) {
    const val = this.visit(ctx.expr());
    this.buffers.push(`${val}`);
    return val;
};

// Visit a parse tree produced by FormulaParser#assignStat.
FormulaVisitor.prototype.visitAssignStat = function (ctx) {
    const id = ctx.ID().getText();
    const val = this.visit(ctx.expr());
    this.memory[id] = val;
    return val;
};

// Visit a parse tree produced by FormulaParser#MulDivExpr.
FormulaVisitor.prototype.visitMulDivExpr = function (ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op;

    if (op.type === FormulaParser.FormulaParser.MUL) {
        return left * right;
    }
    return left / right;
};

// Visit a parse tree produced by FormulaParser#IdExpr.
FormulaVisitor.prototype.visitIdExpr = function (ctx) {
    const id = ctx.ID().getText();
    if (this.memory[id] !== undefined) {
        return this.memory[id];
    }
    return 0;
};

// Visit a parse tree produced by FormulaParser#IntExpr.
FormulaVisitor.prototype.visitIntExpr = function (ctx) {
    return parseInt(ctx.INT().getText(), 10);
};

// Visit a parse tree produced by FormulaParser#ParenExpr.
FormulaVisitor.prototype.visitParenExpr = function (ctx) {
    return this.visit(ctx.expr());
};

// Visit a parse tree produced by FormulaParser#AddSubExpr.
FormulaVisitor.prototype.visitAddSubExpr = function (ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    const op = ctx.op;

    if (op.type === FormulaParser.FormulaParser.ADD) {
        return left + right;
    }
    return left - right;
};

FormulaVisitor.prototype.print = function () {
    return this.buffers.join("\n");
};

exports.FormulaVisitor = FormulaVisitor;
