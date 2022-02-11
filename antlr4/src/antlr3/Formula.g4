grammar Formula;

parse: expr | fun EOF;

expr:
	expr op = (MUL | DIV) expr		# MulDivExpr
	| expr op = ( ADD | SUB) expr	# AddSubExpr
	| INT							# IntExpr
	| LPAREN expr RPAREN			# ParenExpr;

fun: addFun;

addFun: addFun (ID COMMA ID);

MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
LPAREN: '(';
RPAREN: ')';
QUOTATION: '"';
COMMA: ',';

ID: LETTER (LETTER | DIGIT)*;
INT: [0-9]+;
COMMENT: '//' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);
WS: [ \r\n\t]+ -> channel(HIDDEN);

fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];

