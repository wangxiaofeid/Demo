// Generated from Formula.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import FormulaVisitor from './FormulaVisitor.js';

const serializedATN = [4,1,16,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,3,1,18,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,
3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,35,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,52,8,4,10,4,12,4,55,9,4,1,4,0,1,8,5,
0,2,4,6,8,0,3,1,0,1,2,1,0,3,4,1,0,7,8,60,0,11,1,0,0,0,2,17,1,0,0,0,4,19,
1,0,0,0,6,22,1,0,0,0,8,34,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,
0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,18,3,4,2,0,16,18,3,6,3,0,
17,15,1,0,0,0,17,16,1,0,0,0,18,3,1,0,0,0,19,20,3,8,4,0,20,21,5,14,0,0,21,
5,1,0,0,0,22,23,5,11,0,0,23,24,5,13,0,0,24,25,3,8,4,0,25,26,5,14,0,0,26,
7,1,0,0,0,27,28,6,4,-1,0,28,35,5,12,0,0,29,35,5,11,0,0,30,31,5,5,0,0,31,
32,3,8,4,0,32,33,5,6,0,0,33,35,1,0,0,0,34,27,1,0,0,0,34,29,1,0,0,0,34,30,
1,0,0,0,35,53,1,0,0,0,36,37,10,8,0,0,37,38,7,0,0,0,38,52,3,8,4,9,39,40,10,
7,0,0,40,41,7,1,0,0,41,52,3,8,4,8,42,43,10,3,0,0,43,44,5,9,0,0,44,52,3,8,
4,4,45,46,10,2,0,0,46,47,5,10,0,0,47,52,3,8,4,3,48,49,10,1,0,0,49,50,7,2,
0,0,50,52,3,8,4,2,51,36,1,0,0,0,51,39,1,0,0,0,51,42,1,0,0,0,51,45,1,0,0,
0,51,48,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,9,1,0,0,0,55,
53,1,0,0,0,5,13,17,34,51,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FormulaParser extends antlr4.Parser {

    static grammarFileName = "Formula.g4";
    static literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", 
                            "'>'", "'<'", "'\\u4E14'", "'\\u6216'", null, 
                            null, "'='", "';'" ];
    static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "LPAREN", 
                             "RPAREN", "HIGHER", "LOWER", "AND", "OR", "ID", 
                             "INT", "EQ", "SEMI", "COMMENT", "WS" ];
    static ruleNames = [ "prog", "stat", "exprStat", "assignStat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FormulaParser.ruleNames;
        this.literalNames = FormulaParser.literalNames;
        this.symbolicNames = FormulaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		case 3:
    			return this.precpred(this._ctx, 2);
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FormulaParser.RULE_prog);
	    var _la = 0;
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6176) !== 0));
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
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FormulaParser.RULE_stat);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
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
	}



	exprStat() {
	    let localctx = new ExprStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FormulaParser.RULE_exprStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.expr(0);
	        this.state = 20;
	        this.match(FormulaParser.SEMI);
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
	}



	assignStat() {
	    let localctx = new AssignStatContext(this, this._ctx, this.state);
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
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, FormulaParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            localctx = new IntExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 28;
	            this.match(FormulaParser.INT);
	            break;
	        case 11:
	            localctx = new IdExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 29;
	            this.match(FormulaParser.ID);
	            break;
	        case 5:
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
	        this.state = 53;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 51;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
	                    this.state = 36;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 37;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===2)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 38;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
	                    this.state = 39;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 40;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 41;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
	                    this.state = 42;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 43;
	                    this.match(FormulaParser.AND);
	                    this.state = 44;
	                    this.expr(4);
	                    break;

	                case 4:
	                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
	                    this.state = 45;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 46;
	                    this.match(FormulaParser.OR);
	                    this.state = 47;
	                    this.expr(3);
	                    break;

	                case 5:
	                    localctx = new OperatorExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, FormulaParser.RULE_expr);
	                    this.state = 48;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 49;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 50;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
	}


}

FormulaParser.EOF = antlr4.Token.EOF;
FormulaParser.MUL = 1;
FormulaParser.DIV = 2;
FormulaParser.ADD = 3;
FormulaParser.SUB = 4;
FormulaParser.LPAREN = 5;
FormulaParser.RPAREN = 6;
FormulaParser.HIGHER = 7;
FormulaParser.LOWER = 8;
FormulaParser.AND = 9;
FormulaParser.OR = 10;
FormulaParser.ID = 11;
FormulaParser.INT = 12;
FormulaParser.EQ = 13;
FormulaParser.SEMI = 14;
FormulaParser.COMMENT = 15;
FormulaParser.WS = 16;

FormulaParser.RULE_prog = 0;
FormulaParser.RULE_stat = 1;
FormulaParser.RULE_exprStat = 2;
FormulaParser.RULE_assignStat = 3;
FormulaParser.RULE_expr = 4;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_stat;
    }

	exprStat() {
	    return this.getTypedRuleContext(ExprStatContext,0);
	};

	assignStat() {
	    return this.getTypedRuleContext(AssignStatContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_exprStat;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(FormulaParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitExprStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_assignStat;
    }

	ID() {
	    return this.getToken(FormulaParser.ID, 0);
	};

	EQ() {
	    return this.getToken(FormulaParser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(FormulaParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitAssignStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormulaParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AndExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(FormulaParser.AND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitAndExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.AndExprContext = AndExprContext;

class OperatorExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	HIGHER() {
	    return this.getToken(FormulaParser.HIGHER, 0);
	};

	LOWER() {
	    return this.getToken(FormulaParser.LOWER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitOperatorExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.OperatorExprContext = OperatorExprContext;

class MulDivExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(FormulaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(FormulaParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitMulDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.MulDivExprContext = MulDivExprContext;

class IdExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(FormulaParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitIdExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.IdExprContext = IdExprContext;

class IntExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(FormulaParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitIntExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.IntExprContext = IntExprContext;

class ParenExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(FormulaParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(FormulaParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitParenExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.ParenExprContext = ParenExprContext;

class AddSubExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(FormulaParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(FormulaParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.AddSubExprContext = AddSubExprContext;

class OrExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OR() {
	    return this.getToken(FormulaParser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof FormulaVisitor ) {
	        return visitor.visitOrExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

FormulaParser.OrExprContext = OrExprContext;


FormulaParser.ProgContext = ProgContext; 
FormulaParser.StatContext = StatContext; 
FormulaParser.ExprStatContext = ExprStatContext; 
FormulaParser.AssignStatContext = AssignStatContext; 
FormulaParser.ExprContext = ExprContext; 
