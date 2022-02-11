import antlr4, { Parser, ParserRuleContext } from "antlr4";
import MyListener from "./MyListener";

const serializedATN = [
    "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004",
    "\u0002\u0004\u0002\u0002\u0002\t\u0002\u0006\u0003\u0002\u0002\u0002",
    "\u0004\b\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002",
    "\u0007\u0003\u0003\u0002\u0002\u0002\b\t\u0007\u0003\u0002\u0002\t\n",
    "\u0007\u0004\u0002\u0002\n\u0005\u0003\u0002\u0002\u0002\u0002",
].join("");

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

const sharedContextCache = new antlr4.PredictionContextCache();

const literalNames = [null, "'\u6C42\u7EA6\u6570'"];

const symbolicNames = [null, null, "T\u0001", "T\u0001\u0002"];

const ruleNames = ["程序", "求约数"];

export default class MyParser extends Parser {
    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ruleNames;
        this.literalNames = literalNames;
        this.symbolicNames = symbolicNames;
    }

    static EOF = antlr4.Token.EOF;
    static T__0 = 1;
    static T数 = 2;
    static T空白 = 3;

    static RULE_程序 = 0;
    static RULE_求约数 = 1;

    static AppContext = AppContext;
    static DivisorContext = DivisorContext;

    app() {
        var localctx = new AppContext(this, this._ctx, this.state);
        this.enterRule(localctx, 0, MyParser.RULE_程序);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 4;
            this.divisor();
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }

    divisor() {
        var localctx = new DivisorContext(this, this._ctx, this.state);
        this.enterRule(localctx, 2, MyParser.RULE_求约数);
        try {
            this.enterOuterAlt(localctx, 1);
            this.state = 6;
            this.match(MyParser.T__0);
            this.state = 7;
            this.match(MyParser.T数);
        } catch (re) {
            if (re instanceof antlr4.error.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localctx;
    }
}

class AppContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        this.parser = parser;
        this.ruleIndex = MyParser.RULE_程序;
    }

    求约数() {
        return this.getTypedRuleContext(ParserRuleContext, 0);
    }

    enterRule(listener) {
        if (listener instanceof MyListener) {
            listener.enterApp(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof MyListener) {
            listener.exitApp(this);
        }
    }
}
class DivisorContext extends ParserRuleContext {
    constructor(parser, parent, invokingState) {
        super(parent, invokingState);
        if (parent === undefined) {
            parent = null;
        }
        if (invokingState === undefined || invokingState === null) {
            invokingState = -1;
        }
        this.parser = parser;
        this.ruleIndex = MyParser.RULE_求约数;
    }

    T数() {
        return this.getToken(MyParser.T数, 0);
    }

    enterRule(listener) {
        if (listener instanceof MyListener) {
            listener.enterDivisor(this);
        }
    }

    exitRule(listener) {
        if (listener instanceof MyListener) {
            listener.exitDivisor(this);
        }
    }
}
