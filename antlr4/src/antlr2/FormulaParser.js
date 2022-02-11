// Generated from Formula.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require("antlr4");
var FormulaVisitor = require("./FormulaVisitor").FormulaVisitor;

var grammarFileName = "Formula.g4";

var serializedATN = [
    "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000e2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0006\u0002",
    "\u000e\n\u0002\r\u0002\u000e\u0002\u000f\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u0014\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "%\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0007\u0006-\n\u0006\f\u0006\u000e\u00060\u000b\u0006\u0003",
    "\u0006\u0002\u0003\n\u0007\u0002\u0004\u0006\b\n\u0002\u0004\u0003\u0002",
    "\u0003\u0004\u0003\u0002\u0005\u0006\u00022\u0002\r\u0003\u0002\u0002",
    "\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006\u0015\u0003\u0002\u0002",
    "\u0002\b\u0018\u0003\u0002\u0002\u0002\n$\u0003\u0002\u0002\u0002\f",
    "\u000e\u0005\u0004\u0003\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u000f",
    "\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0003\u0002\u0002\u0002\u0010\u0003\u0003\u0002\u0002\u0002\u0011\u0014",
    "\u0005\u0006\u0004\u0002\u0012\u0014\u0005\b\u0005\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0013\u0012\u0003\u0002\u0002\u0002\u0014\u0005",
    "\u0003\u0002\u0002\u0002\u0015\u0016\u0005\n\u0006\u0002\u0016\u0017",
    "\u0007\f\u0002\u0002\u0017\u0007\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0007\t\u0002\u0002\u0019\u001a\u0007\u000b\u0002\u0002\u001a\u001b",
    "\u0005\n\u0006\u0002\u001b\u001c\u0007\f\u0002\u0002\u001c\t\u0003\u0002",
    "\u0002\u0002\u001d\u001e\b\u0006\u0001\u0002\u001e%\u0007\n\u0002\u0002",
    '\u001f%\u0007\t\u0002\u0002 !\u0007\u0007\u0002\u0002!"\u0005\n\u0006',
    '\u0002"#\u0007\b\u0002\u0002#%\u0003\u0002\u0002\u0002$\u001d\u0003',
    "\u0002\u0002\u0002$\u001f\u0003\u0002\u0002\u0002$ \u0003\u0002\u0002",
    "\u0002%.\u0003\u0002\u0002\u0002&'\f\u0007\u0002\u0002'(\t\u0002\u0002",
    "\u0002(-\u0005\n\u0006\b)*\f\u0006\u0002\u0002*+\t\u0003\u0002\u0002",
    "+-\u0005\n\u0006\u0007,&\u0003\u0002\u0002\u0002,)\u0003\u0002\u0002",
    "\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/\u000b\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u0002",
    "\u0007\u000f\u0013$,.",
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) {
    return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", null, null, "'='", "';'"];

var symbolicNames = [null, "MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "ID", "INT", "EQ", "SEMI", "COMMENT", "WS"];

var ruleNames = ["prog", "stat", "exprStat", "assignStat", "expr"];

function FormulaParser(input) {
    antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FormulaParser.prototype = Object.create(antlr4.Parser.prototype);
FormulaParser.prototype.constructor = FormulaParser;

Object.defineProperty(FormulaParser.prototype, "atn", {
    get: function () {
        return atn;
    },
});

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.MUL = 1;
FormulaParser.DIV = 2;
FormulaParser.ADD = 3;
FormulaParser.SUB = 4;
FormulaParser.LPAREN = 5;
FormulaParser.RPAREN = 6;
FormulaParser.ID = 7;
FormulaParser.INT = 8;
FormulaParser.EQ = 9;
FormulaParser.SEMI = 10;
FormulaParser.COMMENT = 11;
FormulaParser.WS = 12;

FormulaParser.RULE_prog = 0;
FormulaParser.RULE_stat = 1;
FormulaParser.RULE_exprStat = 2;
FormulaParser.RULE_assignStat = 3;
FormulaParser.RULE_expr = 4;

function ProgContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.stat = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext, i);
    }
};

ProgContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FormulaParser.ProgContext = ProgContext;

FormulaParser.prototype.prog = function () {
    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FormulaParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.stat();
            this.state = 13;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while (
            (_la & ~0x1f) == 0 &&
            ((1 << _la) & ((1 << FormulaParser.LPAREN) | (1 << FormulaParser.ID) | (1 << FormulaParser.INT))) !== 0
        );
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
};

function StatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.exprStat = function () {
    return this.getTypedRuleContext(ExprStatContext, 0);
};

StatContext.prototype.assignStat = function () {
    return this.getTypedRuleContext(AssignStatContext, 0);
};

StatContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FormulaParser.StatContext = StatContext;

FormulaParser.prototype.stat = function () {
    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FormulaParser.RULE_stat);
    try {
        this.state = 17;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
        switch (la_) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                this.state = 15;
                this.exprStat();
                break;

            case 2:
                this.enterOuterAlt(localctx, 2);
                this.state = 16;
                this.assignStat();
                break;
        }
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
};

function ExprStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_exprStat;
    return this;
}

ExprStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprStatContext.prototype.constructor = ExprStatContext;

ExprStatContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};

ExprStatContext.prototype.SEMI = function () {
    return this.getToken(FormulaParser.SEMI, 0);
};

ExprStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitExprStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FormulaParser.ExprStatContext = ExprStatContext;

FormulaParser.prototype.exprStat = function () {
    var localctx = new ExprStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FormulaParser.RULE_exprStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.expr(0);
        this.state = 20;
        this.match(FormulaParser.SEMI);
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
};

function AssignStatContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_assignStat;
    return this;
}

AssignStatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignStatContext.prototype.constructor = AssignStatContext;

AssignStatContext.prototype.ID = function () {
    return this.getToken(FormulaParser.ID, 0);
};

AssignStatContext.prototype.EQ = function () {
    return this.getToken(FormulaParser.EQ, 0);
};

AssignStatContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};

AssignStatContext.prototype.SEMI = function () {
    return this.getToken(FormulaParser.SEMI, 0);
};

AssignStatContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitAssignStat(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FormulaParser.AssignStatContext = AssignStatContext;

FormulaParser.prototype.assignStat = function () {
    var localctx = new AssignStatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FormulaParser.RULE_assignStat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this.match(FormulaParser.ID);
        this.state = 23;
        this.match(FormulaParser.EQ);
        this.state = 24;
        this.expr(0);
        this.state = 25;
        this.match(FormulaParser.SEMI);
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
};

function ExprContext(parser, parent, invokingState) {
    if (parent === undefined) {
        parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
        invokingState = -1;
    }
    antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.copyFrom = function (ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function MulDivExprContext(parser, ctx) {
    ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivExprContext.prototype = Object.create(ExprContext.prototype);
MulDivExprContext.prototype.constructor = MulDivExprContext;

FormulaParser.MulDivExprContext = MulDivExprContext;

MulDivExprContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};

MulDivExprContext.prototype.MUL = function () {
    return this.getToken(FormulaParser.MUL, 0);
};

MulDivExprContext.prototype.DIV = function () {
    return this.getToken(FormulaParser.DIV, 0);
};
MulDivExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitMulDivExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function IdExprContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdExprContext.prototype = Object.create(ExprContext.prototype);
IdExprContext.prototype.constructor = IdExprContext;

FormulaParser.IdExprContext = IdExprContext;

IdExprContext.prototype.ID = function () {
    return this.getToken(FormulaParser.ID, 0);
};
IdExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitIdExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function IntExprContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntExprContext.prototype = Object.create(ExprContext.prototype);
IntExprContext.prototype.constructor = IntExprContext;

FormulaParser.IntExprContext = IntExprContext;

IntExprContext.prototype.INT = function () {
    return this.getToken(FormulaParser.INT, 0);
};
IntExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitIntExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function ParenExprContext(parser, ctx) {
    ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExprContext.prototype = Object.create(ExprContext.prototype);
ParenExprContext.prototype.constructor = ParenExprContext;

FormulaParser.ParenExprContext = ParenExprContext;

ParenExprContext.prototype.LPAREN = function () {
    return this.getToken(FormulaParser.LPAREN, 0);
};

ParenExprContext.prototype.expr = function () {
    return this.getTypedRuleContext(ExprContext, 0);
};

ParenExprContext.prototype.RPAREN = function () {
    return this.getToken(FormulaParser.RPAREN, 0);
};
ParenExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitParenExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

function AddSubExprContext(parser, ctx) {
    ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubExprContext.prototype = Object.create(ExprContext.prototype);
AddSubExprContext.prototype.constructor = AddSubExprContext;

FormulaParser.AddSubExprContext = AddSubExprContext;

AddSubExprContext.prototype.expr = function (i) {
    if (i === undefined) {
        i = null;
    }
    if (i === null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext, i);
    }
};

AddSubExprContext.prototype.ADD = function () {
    return this.getToken(FormulaParser.ADD, 0);
};

AddSubExprContext.prototype.SUB = function () {
    return this.getToken(FormulaParser.SUB, 0);
};
AddSubExprContext.prototype.accept = function (visitor) {
    if (visitor instanceof FormulaVisitor) {
        return visitor.visitAddSubExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};

FormulaParser.prototype.expr = function (_p) {
    if (_p === undefined) {
        _p = 0;
    }
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, FormulaParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
            case FormulaParser.INT:
                localctx = new IntExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 28;
                this.match(FormulaParser.INT);
                break;
            case FormulaParser.ID:
                localctx = new IdExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 29;
                this.match(FormulaParser.ID);
                break;
            case FormulaParser.LPAREN:
                localctx = new ParenExprContext(this, localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 30;
                this.match(FormulaParser.LPAREN);
                this.state = 31;
                this.expr(0);
                this.state = 32;
                this.match(FormulaParser.RPAREN);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 44;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
        while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
                if (this._parseListeners !== null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 42;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
                switch (la_) {
                    case 1:
                        localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
                        this.state = 36;
                        if (!this.precpred(this._ctx, 5)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                        }
                        this.state = 37;
                        localctx.op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === FormulaParser.MUL || _la === FormulaParser.DIV)) {
                            localctx.op = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 38;
                        this.expr(6);
                        break;

                    case 2:
                        localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
                        this.state = 39;
                        if (!this.precpred(this._ctx, 4)) {
                            throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                        }
                        this.state = 40;
                        localctx.op = this._input.LT(1);
                        _la = this._input.LA(1);
                        if (!(_la === FormulaParser.ADD || _la === FormulaParser.SUB)) {
                            localctx.op = this._errHandler.recoverInline(this);
                        } else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 41;
                        this.expr(5);
                        break;
                }
            }
            this.state = 46;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
        }
    } catch (error) {
        if (error instanceof antlr4.error.RecognitionException) {
            localctx.exception = error;
            this._errHandler.reportError(this, error);
            this._errHandler.recover(this, error);
        } else {
            throw error;
        }
    } finally {
        this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
};

FormulaParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
        case 4:
            return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
    }
};

FormulaParser.prototype.expr_sempred = function (localctx, predIndex) {
    switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 5);
        case 1:
            return this.precpred(this._ctx, 4);
        default:
            throw "No predicate with index:" + predIndex;
    }
};

exports.FormulaParser = FormulaParser;
