import FormulaParser from "./FormulaParser";
import FormulaVisitor from "./FormulaVisitor";

export default MyFormulaVisitor extends FormulaVisitor {
    constructor() {
        super();
        this.buffers = [];
        this.memory = {};
    }
 
    
	// Visit a parse tree produced by FormulaParser#prog.
	visitProg(ctx) {
        return this.visitChildren(ctx);
      } 
  
   
      // Visit a parse tree produced by FormulaParser#stat.
      visitStat(ctx) {
        return this.visitChildren(ctx);
      }
  
  
      // Visit a parse tree produced by FormulaParser#exprStat.
      visitExprStat(ctx) {
        const val = this.visit(ctx.expr());
        this.buffers.push(`${val}`);
        return val;
      }
  
  
      // Visit a parse tree produced by FormulaParser#assignStat.
      visitAssignStat(ctx) {
        const id = ctx.ID().getText();
        const val = this.visit(ctx.expr());
        this.memory[id] = val;
        return val;
      }
  
  
      // Visit a parse tree produced by FormulaParser#AndExpr.
      visitAndExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return left&&right
      }
  
  
      // Visit a parse tree produced by FormulaParser#OperatorExpr.
      visitOperatorExpr(ctx) {
        return this.visitChildren(ctx);
      }
  
  
      // Visit a parse tree produced by FormulaParser#MulDivExpr.
      visitMulDivExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op;

        if (op.type === FormulaParser.FormulaParser.MUL) {
            return left * right;
        }
        return left / right;
      }
  
  
      // Visit a parse tree produced by FormulaParser#IdExpr.
      visitIdExpr(ctx) {
        const id = ctx.ID().getText();
        if (this.memory[id] !== undefined) {
            return this.memory[id];
        }
        return 0;
      }
  
  
      // Visit a parse tree produced by FormulaParser#IntExpr.
      visitIntExpr(ctx) {
        return parseInt(ctx.INT().getText(), 10);
      }
  
  
      // Visit a parse tree produced by FormulaParser#ParenExpr.
      visitParenExpr(ctx) {
        return this.visit(ctx.expr());
      }
  
  
      // Visit a parse tree produced by FormulaParser#AddSubExpr.
      visitAddSubExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        const op = ctx.op;

        if (op.type === FormulaParser.FormulaParser.ADD) {
            return left + right;
        }
        return left - right;
      }
  
  
      // Visit a parse tree produced by FormulaParser#OrExpr.
      visitOrExpr(ctx) {
        const left = this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        return left||right
      }

     print () {
        return this.buffers.join("\n");
     }
}