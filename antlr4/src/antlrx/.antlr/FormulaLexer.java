// Generated from /Users/wangxiaofei/git/myself/Demo/antlr4/src/antlrx/Formula.g4 by ANTLR 4.13.1
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
		MUL=1, DIV=2, ADD=3, SUB=4, LPAREN=5, RPAREN=6, HIGHER=7, LOWER=8, AND=9, 
		OR=10, ID=11, INT=12, EQ=13, SEMI=14, COMMENT=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "HIGHER", "LOWER", "AND", 
			"OR", "ID", "INT", "EQ", "SEMI", "COMMENT", "WS", "LETTER", "DIGIT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", "'>'", "'<'", "'\\u4E14'", 
			"'\\u6216'", null, null, "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MUL", "DIV", "ADD", "SUB", "LPAREN", "RPAREN", "HIGHER", "LOWER", 
			"AND", "OR", "ID", "INT", "EQ", "SEMI", "COMMENT", "WS"
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
		"\u0004\u0000\u0010f\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\n\u0001\n\u0001\n\u0005\n=\b\n\n\n\f\n@\t\n\u0001\u000b\u0004"+
		"\u000bC\b\u000b\u000b\u000b\f\u000bD\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000eO\b\u000e\n\u000e"+
		"\f\u000eR\t\u000e\u0001\u000e\u0003\u000eU\b\u000e\u0001\u000e\u0003\u000e"+
		"X\b\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000f]\b\u000f\u000b"+
		"\u000f\f\u000f^\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0000\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0000#\u0000"+
		"\u0001\u0000\u0004\u0001\u000009\u0002\u0000\n\n\r\r\u0003\u0000\t\n\r"+
		"\r  \u0002\u0000AZazj\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003\'\u0001\u0000\u0000"+
		"\u0000\u0005)\u0001\u0000\u0000\u0000\u0007+\u0001\u0000\u0000\u0000\t"+
		"-\u0001\u0000\u0000\u0000\u000b/\u0001\u0000\u0000\u0000\r1\u0001\u0000"+
		"\u0000\u0000\u000f3\u0001\u0000\u0000\u0000\u00115\u0001\u0000\u0000\u0000"+
		"\u00137\u0001\u0000\u0000\u0000\u00159\u0001\u0000\u0000\u0000\u0017B"+
		"\u0001\u0000\u0000\u0000\u0019F\u0001\u0000\u0000\u0000\u001bH\u0001\u0000"+
		"\u0000\u0000\u001dJ\u0001\u0000\u0000\u0000\u001f\\\u0001\u0000\u0000"+
		"\u0000!b\u0001\u0000\u0000\u0000#d\u0001\u0000\u0000\u0000%&\u0005*\u0000"+
		"\u0000&\u0002\u0001\u0000\u0000\u0000\'(\u0005/\u0000\u0000(\u0004\u0001"+
		"\u0000\u0000\u0000)*\u0005+\u0000\u0000*\u0006\u0001\u0000\u0000\u0000"+
		"+,\u0005-\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0005(\u0000\u0000"+
		".\n\u0001\u0000\u0000\u0000/0\u0005)\u0000\u00000\f\u0001\u0000\u0000"+
		"\u000012\u0005>\u0000\u00002\u000e\u0001\u0000\u0000\u000034\u0005<\u0000"+
		"\u00004\u0010\u0001\u0000\u0000\u000056\u0005\u4e14\u0000\u00006\u0012"+
		"\u0001\u0000\u0000\u000078\u0005\u6216\u0000\u00008\u0014\u0001\u0000"+
		"\u0000\u00009>\u0003!\u0010\u0000:=\u0003!\u0010\u0000;=\u0003#\u0011"+
		"\u0000<:\u0001\u0000\u0000\u0000<;\u0001\u0000\u0000\u0000=@\u0001\u0000"+
		"\u0000\u0000><\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000?\u0016"+
		"\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000AC\u0007\u0000\u0000"+
		"\u0000BA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000"+
		"\u0000\u0000DE\u0001\u0000\u0000\u0000E\u0018\u0001\u0000\u0000\u0000"+
		"FG\u0005=\u0000\u0000G\u001a\u0001\u0000\u0000\u0000HI\u0005;\u0000\u0000"+
		"I\u001c\u0001\u0000\u0000\u0000JK\u0005/\u0000\u0000KL\u0005/\u0000\u0000"+
		"LP\u0001\u0000\u0000\u0000MO\b\u0001\u0000\u0000NM\u0001\u0000\u0000\u0000"+
		"OR\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000"+
		"\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000SU\u0005\r\u0000"+
		"\u0000TS\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000UW\u0001\u0000"+
		"\u0000\u0000VX\u0005\n\u0000\u0000WV\u0001\u0000\u0000\u0000WX\u0001\u0000"+
		"\u0000\u0000XY\u0001\u0000\u0000\u0000YZ\u0006\u000e\u0000\u0000Z\u001e"+
		"\u0001\u0000\u0000\u0000[]\u0007\u0002\u0000\u0000\\[\u0001\u0000\u0000"+
		"\u0000]^\u0001\u0000\u0000\u0000^\\\u0001\u0000\u0000\u0000^_\u0001\u0000"+
		"\u0000\u0000_`\u0001\u0000\u0000\u0000`a\u0006\u000f\u0000\u0000a \u0001"+
		"\u0000\u0000\u0000bc\u0007\u0003\u0000\u0000c\"\u0001\u0000\u0000\u0000"+
		"de\u0007\u0000\u0000\u0000e$\u0001\u0000\u0000\u0000\b\u0000<>DPTW^\u0001"+
		"\u0000\u0001\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}