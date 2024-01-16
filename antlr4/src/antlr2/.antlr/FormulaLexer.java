// Generated from /Users/wangxiaofei/git/myself/Demo/antlr4/src/antlr2/Formula.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class FormulaLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MUL=1, DIV=2, ADD=3, SUB=4, LPAREN=5, RPAREN=6, ID=7, INT=8, EQ=9, SEMI=10, 
		COMMENT=11, WS=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "ID", "INT", "EQ", "SEMI", 
			"COMMENT", "WS", "LETTER", "DIGIT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", null, null, "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "ID", "INT", "EQ", 
			"SEMI", "COMMENT", "WS"
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


	public FormulaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Formula.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\fV\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006-\b\u0006\n\u0006\f\u00060\t\u0006\u0001\u0007\u0004"+
		"\u00073\b\u0007\u000b\u0007\f\u00074\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0005\n?\b\n\n\n\f\nB\t\n\u0001\n\u0003\nE"+
		"\b\n\u0001\n\u0003\nH\b\n\u0001\n\u0001\n\u0001\u000b\u0004\u000bM\b\u000b"+
		"\u000b\u000b\f\u000bN\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0000\u0000\u000e\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\u0000\u001b\u0000\u0001\u0000\u0004\u0001\u000009\u0002\u0000"+
		"\n\n\r\r\u0003\u0000\t\n\r\r  \u0002\u0000AZazZ\u0000\u0001\u0001\u0000"+
		"\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000"+
		"\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000"+
		"\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000"+
		"\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000"+
		"\u0000\u0017\u0001\u0000\u0000\u0000\u0001\u001d\u0001\u0000\u0000\u0000"+
		"\u0003\u001f\u0001\u0000\u0000\u0000\u0005!\u0001\u0000\u0000\u0000\u0007"+
		"#\u0001\u0000\u0000\u0000\t%\u0001\u0000\u0000\u0000\u000b\'\u0001\u0000"+
		"\u0000\u0000\r)\u0001\u0000\u0000\u0000\u000f2\u0001\u0000\u0000\u0000"+
		"\u00116\u0001\u0000\u0000\u0000\u00138\u0001\u0000\u0000\u0000\u0015:"+
		"\u0001\u0000\u0000\u0000\u0017L\u0001\u0000\u0000\u0000\u0019R\u0001\u0000"+
		"\u0000\u0000\u001bT\u0001\u0000\u0000\u0000\u001d\u001e\u0005*\u0000\u0000"+
		"\u001e\u0002\u0001\u0000\u0000\u0000\u001f \u0005/\u0000\u0000 \u0004"+
		"\u0001\u0000\u0000\u0000!\"\u0005+\u0000\u0000\"\u0006\u0001\u0000\u0000"+
		"\u0000#$\u0005-\u0000\u0000$\b\u0001\u0000\u0000\u0000%&\u0005(\u0000"+
		"\u0000&\n\u0001\u0000\u0000\u0000\'(\u0005)\u0000\u0000(\f\u0001\u0000"+
		"\u0000\u0000).\u0003\u0019\f\u0000*-\u0003\u0019\f\u0000+-\u0003\u001b"+
		"\r\u0000,*\u0001\u0000\u0000\u0000,+\u0001\u0000\u0000\u0000-0\u0001\u0000"+
		"\u0000\u0000.,\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/\u000e"+
		"\u0001\u0000\u0000\u00000.\u0001\u0000\u0000\u000013\u0007\u0000\u0000"+
		"\u000021\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u000042\u0001\u0000"+
		"\u0000\u000045\u0001\u0000\u0000\u00005\u0010\u0001\u0000\u0000\u0000"+
		"67\u0005=\u0000\u00007\u0012\u0001\u0000\u0000\u000089\u0005;\u0000\u0000"+
		"9\u0014\u0001\u0000\u0000\u0000:;\u0005/\u0000\u0000;<\u0005/\u0000\u0000"+
		"<@\u0001\u0000\u0000\u0000=?\b\u0001\u0000\u0000>=\u0001\u0000\u0000\u0000"+
		"?B\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000"+
		"\u0000AD\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000CE\u0005\r\u0000"+
		"\u0000DC\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EG\u0001\u0000"+
		"\u0000\u0000FH\u0005\n\u0000\u0000GF\u0001\u0000\u0000\u0000GH\u0001\u0000"+
		"\u0000\u0000HI\u0001\u0000\u0000\u0000IJ\u0006\n\u0000\u0000J\u0016\u0001"+
		"\u0000\u0000\u0000KM\u0007\u0002\u0000\u0000LK\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000OP\u0001\u0000\u0000\u0000PQ\u0006\u000b\u0000\u0000Q\u0018\u0001"+
		"\u0000\u0000\u0000RS\u0007\u0003\u0000\u0000S\u001a\u0001\u0000\u0000"+
		"\u0000TU\u0007\u0000\u0000\u0000U\u001c\u0001\u0000\u0000\u0000\b\u0000"+
		",.4@DGN\u0001\u0000\u0001\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}