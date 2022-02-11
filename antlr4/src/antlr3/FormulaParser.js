// Generated from Formula.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FormulaVisitor = require('./FormulaVisitor').FormulaVisitor;

var grammarFileName = "Formula.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u0010\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n",
    "\u0003\f\u0003\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0002\u0003",
    "\u0004\u0004\u0002\u0004\u0002\u0004\u0003\u0002\u0003\u0004\u0003\u0002",
    "\u0005\u0006\u0002\u001d\u0002\u0006\u0003\u0002\u0002\u0002\u0004\u000f",
    "\u0003\u0002\u0002\u0002\u0006\u0007\u0005\u0004\u0003\u0002\u0007\b",
    "\u0007\u0002\u0002\u0003\b\u0003\u0003\u0002\u0002\u0002\t\n\b\u0003",
    "\u0001\u0002\n\u0010\u0007\u000b\u0002\u0002\u000b\f\u0007\u0007\u0002",
    "\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\b\u0002\u0002\u000e",
    "\u0010\u0003\u0002\u0002\u0002\u000f\t\u0003\u0002\u0002\u0002\u000f",
    "\u000b\u0003\u0002\u0002\u0002\u0010\u0019\u0003\u0002\u0002\u0002\u0011",
    "\u0012\f\u0006\u0002\u0002\u0012\u0013\t\u0002\u0002\u0002\u0013\u0018",
    "\u0005\u0004\u0003\u0007\u0014\u0015\f\u0005\u0002\u0002\u0015\u0016",
    "\t\u0003\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0006\u0017\u0011",
    "\u0003\u0002\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002\u0018\u001b",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u0005\u000f\u0017\u0019"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", "'\"'" ];

var symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", 
                      "QUOTATION", "ID", "INT", "COMMENT", "WS" ];

var ruleNames =  [ "parse", "expr" ];

function FormulaParser (input) {
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
	get : function() {
		return atn;
	}
});

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.MUL = 1;
FormulaParser.DIV = 2;
FormulaParser.ADD = 3;
FormulaParser.SUB = 4;
FormulaParser.LPAREN = 5;
FormulaParser.RPAREN = 6;
FormulaParser.QUOTATION = 7;
FormulaParser.ID = 8;
FormulaParser.INT = 9;
FormulaParser.COMMENT = 10;
FormulaParser.WS = 11;

FormulaParser.RULE_parse = 0;
FormulaParser.RULE_expr = 1;


function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParseContext.prototype.EOF = function() {
    return this.getToken(FormulaParser.EOF, 0);
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FormulaParser.ParseContext = ParseContext;

FormulaParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FormulaParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.expr(0);
        this.state = 5;
        this.match(FormulaParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
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
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FormulaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
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

MulDivExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

MulDivExprContext.prototype.MUL = function() {
    return this.getToken(FormulaParser.MUL, 0);
};

MulDivExprContext.prototype.DIV = function() {
    return this.getToken(FormulaParser.DIV, 0);
};
MulDivExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitMulDivExpr(this);
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

IntExprContext.prototype.INT = function() {
    return this.getToken(FormulaParser.INT, 0);
};
IntExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
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

ParenExprContext.prototype.LPAREN = function() {
    return this.getToken(FormulaParser.LPAREN, 0);
};

ParenExprContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ParenExprContext.prototype.RPAREN = function() {
    return this.getToken(FormulaParser.RPAREN, 0);
};
ParenExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
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

AddSubExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

AddSubExprContext.prototype.ADD = function() {
    return this.getToken(FormulaParser.ADD, 0);
};

AddSubExprContext.prototype.SUB = function() {
    return this.getToken(FormulaParser.SUB, 0);
};
AddSubExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FormulaVisitor ) {
        return visitor.visitAddSubExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



FormulaParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, FormulaParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FormulaParser.INT:
            localctx = new IntExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 8;
            this.match(FormulaParser.INT);
            break;
        case FormulaParser.LPAREN:
            localctx = new ParenExprContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 9;
            this.match(FormulaParser.LPAREN);
            this.state = 10;
            this.expr(0);
            this.state = 11;
            this.match(FormulaParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 23;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 21;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
                    this.state = 15;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 16;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaParser.MUL || _la===FormulaParser.DIV)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 17;
                    this.expr(5);
                    break;

                case 2:
                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
                    this.state = 18;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 19;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===FormulaParser.ADD || _la===FormulaParser.SUB)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 20;
                    this.expr(4);
                    break;

                } 
            }
            this.state = 25;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


FormulaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FormulaParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FormulaParser = FormulaParser;
