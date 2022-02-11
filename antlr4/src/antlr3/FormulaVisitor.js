// Generated from Formula.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by FormulaParser.

function FormulaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

FormulaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
FormulaVisitor.prototype.constructor = FormulaVisitor;

// Visit a parse tree produced by FormulaParser#parse.
FormulaVisitor.prototype.visitParse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#MulDivExpr.
FormulaVisitor.prototype.visitMulDivExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#IntExpr.
FormulaVisitor.prototype.visitIntExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#ParenExpr.
FormulaVisitor.prototype.visitParenExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by FormulaParser#AddSubExpr.
FormulaVisitor.prototype.visitAddSubExpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.FormulaVisitor = FormulaVisitor;