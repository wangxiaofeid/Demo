import antlr4, { Lexer } from "antlr4";

const serializedATN = [
    "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0005\u0019\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0006\u0003\u000f\n\u0003\r\u0003\u000e\u0003\u0010\u0003\u0004",
    "\u0006\u0004\u0014\n\u0004\r\u0004\u000e\u0004\u0015\u0003\u0004\u0003",
    "\u0004\u0002\u0002\u0005\u0003\u0003\u0005\u0004\u0007\u0005\u0003\u0002",
    '\u0004\u0003\u00022;\u0004\u0002\u000b\f""\u0002\u001a\u0002\u0003',
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0003\t\u0003\u0002\u0002\u0002\u0005\u000e",
    "\u0003\u0002\u0002\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\n\u0007",
    "\u6c44\u0002\u0002\n\u000b\u0007\u7ea8\u0002\u0002\u000b\f\u0007\u6572",
    "\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002\r\u000f\t\u0002\u0002\u0002",
    "\u000e\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002",
    "\u0010\u000e\u0003\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002",
    "\u0011\u0006\u0003\u0002\u0002\u0002\u0012\u0014\t\u0003\u0002\u0002",
    "\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0018\b\u0004\u0002\u0002",
    "\u0018\b\u0003\u0002\u0002\u0002\u0005\u0002\u0010\u0015\u0003\b\u0002",
    "\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});
console.log(atn, decisionsToDFA);

export default class MyLexer extends Lexer {
    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    static EOF = antlr4.Token.EOF;
    static T__0 = 1;
    static T数 = 2;
    static T空白 = 3;

    channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

    modeNames = ["DEFAULT_MODE"];

    literalNames = [null, "'\u6C42\u7EA6\u6570'"];

    symbolicNames = [null, null, "T\u0001", "T\u0001\u0002"];

    ruleNames = ["T__0", "T数", "T空白"];

    grammarFileName = "圈4.g4";
}
