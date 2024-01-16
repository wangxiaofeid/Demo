// Generated from /Users/wangxiaofei/git/myself/Demo/antlr4/src/time/DateCalculate.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class DateCalculateParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		INT=25, COMMENT=26;
	public static final int
		RULE_parse = 0, RULE_expr = 1, RULE_unitExpr = 2, RULE_formatExpr = 3, 
		RULE_formatAtom = 4, RULE_unitAtom = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"parse", "expr", "unitExpr", "formatExpr", "formatAtom", "unitAtom"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "'-'", "'YYYY'", "'yyyy'", "'MM'", "'DD'", "'dd'", "'hh'", 
			"'mm'", "'ss'", "'/'", "':'", "'WW'", "' '", "'Y'", "'M'", "'D'", "'y'", 
			"'d'", "'h'", "'m'", "'s'", "'W'", "'w'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "INT", "COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "DateCalculate.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DateCalculateParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParseContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(DateCalculateParser.EOF, 0); }
		public ParseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parse; }
	}

	public final ParseContext parse() throws RecognitionException {
		ParseContext _localctx = new ParseContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_parse);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			expr();
			setState(13);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public Token flag;
		public FormatExprContext formatExpr() {
			return getRuleContext(FormatExprContext.class,0);
		}
		public UnitExprContext unitExpr() {
			return getRuleContext(UnitExprContext.class,0);
		}
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		ExprContext _localctx = new ExprContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_expr);
		try {
			setState(24);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(15);
				formatExpr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(16);
				formatExpr();
				setState(17);
				((ExprContext)_localctx).flag = match(T__0);
				setState(18);
				unitExpr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(20);
				formatExpr();
				setState(21);
				((ExprContext)_localctx).flag = match(T__1);
				setState(22);
				unitExpr();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnitExprContext extends ParserRuleContext {
		public Token val;
		public UnitAtomContext unit;
		public List<TerminalNode> INT() { return getTokens(DateCalculateParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(DateCalculateParser.INT, i);
		}
		public List<UnitAtomContext> unitAtom() {
			return getRuleContexts(UnitAtomContext.class);
		}
		public UnitAtomContext unitAtom(int i) {
			return getRuleContext(UnitAtomContext.class,i);
		}
		public UnitExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitExpr; }
	}

	public final UnitExprContext unitExpr() throws RecognitionException {
		UnitExprContext _localctx = new UnitExprContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_unitExpr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(26);
				((UnitExprContext)_localctx).val = match(INT);
				setState(27);
				((UnitExprContext)_localctx).unit = unitAtom();
				}
				}
				setState(30); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==INT );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormatExprContext extends ParserRuleContext {
		public List<FormatAtomContext> formatAtom() {
			return getRuleContexts(FormatAtomContext.class);
		}
		public FormatAtomContext formatAtom(int i) {
			return getRuleContext(FormatAtomContext.class,i);
		}
		public List<TerminalNode> INT() { return getTokens(DateCalculateParser.INT); }
		public TerminalNode INT(int i) {
			return getToken(DateCalculateParser.INT, i);
		}
		public FormatExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formatExpr; }
	}

	public final FormatExprContext formatExpr() throws RecognitionException {
		FormatExprContext _localctx = new FormatExprContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_formatExpr);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(34); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(34);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case T__1:
					case T__2:
					case T__3:
					case T__4:
					case T__5:
					case T__6:
					case T__7:
					case T__8:
					case T__9:
					case T__10:
					case T__11:
					case T__12:
					case T__13:
						{
						setState(32);
						formatAtom();
						}
						break;
					case INT:
						{
						setState(33);
						match(INT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(36); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FormatAtomContext extends ParserRuleContext {
		public FormatAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formatAtom; }
	}

	public final FormatAtomContext formatAtom() throws RecognitionException {
		FormatAtomContext _localctx = new FormatAtomContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_formatAtom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 32764L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnitAtomContext extends ParserRuleContext {
		public Token unit;
		public UnitAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unitAtom; }
	}

	public final UnitAtomContext unitAtom() throws RecognitionException {
		UnitAtomContext _localctx = new UnitAtomContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_unitAtom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			((UnitAtomContext)_localctx).unit = _input.LT(1);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 33521664L) != 0)) ) {
				((UnitAtomContext)_localctx).unit = (Token)_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001a+\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0003\u0001\u0019\b\u0001\u0001\u0002\u0001\u0002\u0004"+
		"\u0002\u001d\b\u0002\u000b\u0002\f\u0002\u001e\u0001\u0003\u0001\u0003"+
		"\u0004\u0003#\b\u0003\u000b\u0003\f\u0003$\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0000\u0000\u0006\u0000\u0002\u0004\u0006"+
		"\b\n\u0000\u0002\u0001\u0000\u0002\u000e\u0001\u0000\u000f\u0018)\u0000"+
		"\f\u0001\u0000\u0000\u0000\u0002\u0018\u0001\u0000\u0000\u0000\u0004\u001c"+
		"\u0001\u0000\u0000\u0000\u0006\"\u0001\u0000\u0000\u0000\b&\u0001\u0000"+
		"\u0000\u0000\n(\u0001\u0000\u0000\u0000\f\r\u0003\u0002\u0001\u0000\r"+
		"\u000e\u0005\u0000\u0000\u0001\u000e\u0001\u0001\u0000\u0000\u0000\u000f"+
		"\u0019\u0003\u0006\u0003\u0000\u0010\u0011\u0003\u0006\u0003\u0000\u0011"+
		"\u0012\u0005\u0001\u0000\u0000\u0012\u0013\u0003\u0004\u0002\u0000\u0013"+
		"\u0019\u0001\u0000\u0000\u0000\u0014\u0015\u0003\u0006\u0003\u0000\u0015"+
		"\u0016\u0005\u0002\u0000\u0000\u0016\u0017\u0003\u0004\u0002\u0000\u0017"+
		"\u0019\u0001\u0000\u0000\u0000\u0018\u000f\u0001\u0000\u0000\u0000\u0018"+
		"\u0010\u0001\u0000\u0000\u0000\u0018\u0014\u0001\u0000\u0000\u0000\u0019"+
		"\u0003\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0019\u0000\u0000\u001b"+
		"\u001d\u0003\n\u0005\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000\u0000\u001e\u001f"+
		"\u0001\u0000\u0000\u0000\u001f\u0005\u0001\u0000\u0000\u0000 #\u0003\b"+
		"\u0004\u0000!#\u0005\u0019\u0000\u0000\" \u0001\u0000\u0000\u0000\"!\u0001"+
		"\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000\u0000"+
		"$%\u0001\u0000\u0000\u0000%\u0007\u0001\u0000\u0000\u0000&\'\u0007\u0000"+
		"\u0000\u0000\'\t\u0001\u0000\u0000\u0000()\u0007\u0001\u0000\u0000)\u000b"+
		"\u0001\u0000\u0000\u0000\u0004\u0018\u001e\"$";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}