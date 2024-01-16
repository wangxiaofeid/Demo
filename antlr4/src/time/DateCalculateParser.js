// Generated from DateCalculate.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DateCalculateVisitor from './DateCalculateVisitor.js';

const serializedATN = [4,1,26,43,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,25,8,1,1,2,1,
2,4,2,29,8,2,11,2,12,2,30,1,3,1,3,4,3,35,8,3,11,3,12,3,36,1,4,1,4,1,5,1,
5,1,5,0,0,6,0,2,4,6,8,10,0,2,1,0,2,14,1,0,15,24,41,0,12,1,0,0,0,2,24,1,0,
0,0,4,28,1,0,0,0,6,34,1,0,0,0,8,38,1,0,0,0,10,40,1,0,0,0,12,13,3,2,1,0,13,
14,5,0,0,1,14,1,1,0,0,0,15,25,3,6,3,0,16,17,3,6,3,0,17,18,5,1,0,0,18,19,
3,4,2,0,19,25,1,0,0,0,20,21,3,6,3,0,21,22,5,2,0,0,22,23,3,4,2,0,23,25,1,
0,0,0,24,15,1,0,0,0,24,16,1,0,0,0,24,20,1,0,0,0,25,3,1,0,0,0,26,27,5,25,
0,0,27,29,3,10,5,0,28,26,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,
0,31,5,1,0,0,0,32,35,3,8,4,0,33,35,5,25,0,0,34,32,1,0,0,0,34,33,1,0,0,0,
35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,7,1,0,0,0,38,39,7,0,0,0,39,
9,1,0,0,0,40,41,7,1,0,0,41,11,1,0,0,0,4,24,30,34,36];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DateCalculateParser extends antlr4.Parser {

    static grammarFileName = "DateCalculate.g4";
    static literalNames = [ null, "'+'", "'-'", "'YYYY'", "'yyyy'", "'MM'", 
                            "'DD'", "'dd'", "'hh'", "'mm'", "'ss'", "'/'", 
                            "':'", "'WW'", "' '", "'Y'", "'M'", "'D'", "'y'", 
                            "'d'", "'h'", "'m'", "'s'", "'W'", "'w'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "INT", "COMMENT" ];
    static ruleNames = [ "parse", "expr", "unitExpr", "formatExpr", "formatAtom", 
                         "unitAtom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DateCalculateParser.ruleNames;
        this.literalNames = DateCalculateParser.literalNames;
        this.symbolicNames = DateCalculateParser.symbolicNames;
    }



	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DateCalculateParser.RULE_parse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.expr();
	        this.state = 13;
	        this.match(DateCalculateParser.EOF);
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DateCalculateParser.RULE_expr);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.formatExpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.formatExpr();
	            this.state = 17;
	            localctx.flag = this.match(DateCalculateParser.T__0);
	            this.state = 18;
	            this.unitExpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 20;
	            this.formatExpr();
	            this.state = 21;
	            localctx.flag = this.match(DateCalculateParser.T__1);
	            this.state = 22;
	            this.unitExpr();
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



	unitExpr() {
	    let localctx = new UnitExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DateCalculateParser.RULE_unitExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            localctx.val = this.match(DateCalculateParser.INT);
	            this.state = 27;
	            localctx.unit = this.unitAtom();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===25);
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



	formatExpr() {
	    let localctx = new FormatExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DateCalculateParser.RULE_formatExpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 34;
	        		this._errHandler.sync(this);
	        		switch(this._input.LA(1)) {
	        		case 2:
	        		case 3:
	        		case 4:
	        		case 5:
	        		case 6:
	        		case 7:
	        		case 8:
	        		case 9:
	        		case 10:
	        		case 11:
	        		case 12:
	        		case 13:
	        		case 14:
	        		    this.state = 32;
	        		    this.formatAtom();
	        		    break;
	        		case 25:
	        		    this.state = 33;
	        		    this.match(DateCalculateParser.INT);
	        		    break;
	        		default:
	        		    throw new antlr4.error.NoViableAltException(this);
	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 36; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	formatAtom() {
	    let localctx = new FormatAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DateCalculateParser.RULE_formatAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32764) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	unitAtom() {
	    let localctx = new UnitAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DateCalculateParser.RULE_unitAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        localctx.unit = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33521664) !== 0))) {
	            localctx.unit = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

DateCalculateParser.EOF = antlr4.Token.EOF;
DateCalculateParser.T__0 = 1;
DateCalculateParser.T__1 = 2;
DateCalculateParser.T__2 = 3;
DateCalculateParser.T__3 = 4;
DateCalculateParser.T__4 = 5;
DateCalculateParser.T__5 = 6;
DateCalculateParser.T__6 = 7;
DateCalculateParser.T__7 = 8;
DateCalculateParser.T__8 = 9;
DateCalculateParser.T__9 = 10;
DateCalculateParser.T__10 = 11;
DateCalculateParser.T__11 = 12;
DateCalculateParser.T__12 = 13;
DateCalculateParser.T__13 = 14;
DateCalculateParser.T__14 = 15;
DateCalculateParser.T__15 = 16;
DateCalculateParser.T__16 = 17;
DateCalculateParser.T__17 = 18;
DateCalculateParser.T__18 = 19;
DateCalculateParser.T__19 = 20;
DateCalculateParser.T__20 = 21;
DateCalculateParser.T__21 = 22;
DateCalculateParser.T__22 = 23;
DateCalculateParser.T__23 = 24;
DateCalculateParser.INT = 25;
DateCalculateParser.COMMENT = 26;

DateCalculateParser.RULE_parse = 0;
DateCalculateParser.RULE_expr = 1;
DateCalculateParser.RULE_unitExpr = 2;
DateCalculateParser.RULE_formatExpr = 3;
DateCalculateParser.RULE_formatAtom = 4;
DateCalculateParser.RULE_unitAtom = 5;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DateCalculateParser.RULE_parse;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(DateCalculateParser.EOF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitParse(this);
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
        this.ruleIndex = DateCalculateParser.RULE_expr;
        this.flag = null;
    }

	formatExpr() {
	    return this.getTypedRuleContext(FormatExprContext,0);
	};

	unitExpr() {
	    return this.getTypedRuleContext(UnitExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnitExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DateCalculateParser.RULE_unitExpr;
        this.val = null;
        this.unit = null;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DateCalculateParser.INT);
	    } else {
	        return this.getToken(DateCalculateParser.INT, i);
	    }
	};


	unitAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnitAtomContext);
	    } else {
	        return this.getTypedRuleContext(UnitAtomContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitUnitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormatExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DateCalculateParser.RULE_formatExpr;
    }

	formatAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormatAtomContext);
	    } else {
	        return this.getTypedRuleContext(FormatAtomContext,i);
	    }
	};

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DateCalculateParser.INT);
	    } else {
	        return this.getToken(DateCalculateParser.INT, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitFormatExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormatAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DateCalculateParser.RULE_formatAtom;
    }


	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitFormatAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnitAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DateCalculateParser.RULE_unitAtom;
        this.unit = null;
    }


	accept(visitor) {
	    if ( visitor instanceof DateCalculateVisitor ) {
	        return visitor.visitUnitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DateCalculateParser.ParseContext = ParseContext; 
DateCalculateParser.ExprContext = ExprContext; 
DateCalculateParser.UnitExprContext = UnitExprContext; 
DateCalculateParser.FormatExprContext = FormatExprContext; 
DateCalculateParser.FormatAtomContext = FormatAtomContext; 
DateCalculateParser.UnitAtomContext = UnitAtomContext; 
