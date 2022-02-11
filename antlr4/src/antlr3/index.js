import antlr4 from "antlr4";
import MyFormulaVisitor from "./MyFormulaVisitor";
const FormulaLexer = require("./FormulaLexer").FormulaLexer;
const FormulaParser = require("./FormulaParser").FormulaParser;

// 执行公式
export function execute(formula) {
    const chars = new antlr4.InputStream(formula);
    const lexer = new FormulaLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new FormulaParser(tokens);
    const visitor = new MyFormulaVisitor();

    parser.buildParseTrees = true;
    const expr = parser.parse();

    return visitor.parse(expr);
    // return visitor.print();
}

// 转换
export function transform() {}
