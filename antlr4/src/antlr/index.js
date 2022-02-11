import antlr4 from "antlr4";
import MyLexer from "./MyLexer";
import MyParser from "./MyParser";
import MyListener from "./MyListener";

// 执行公式
export function execute(formula) {
    const chars = new antlr4.InputStream(formula);
    const lexer = new MyLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.app();
    const extractor = new MyListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(extractor, tree);
}

// 转换
export function transform() {}
