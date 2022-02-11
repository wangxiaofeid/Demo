grammar AntlrFormula;

parse
 : block EOF
 ;

block
 : stat*
 ;

stat
 : highExpr
 | NEWLINE
 ;

highExpr
 : expr SCOL
 ;

expr
 : COMPARE LP STRING COMMA STRING COMMA STRING COMMA STRING COMMA STRING RP  #compareExpr
 | op = (SUM | AVERAGE | VARIANCE | STANDARD | MAX | MIN | MEDIAN) LP expr COMMA expr (COMMA expr)* RP  #calculateExpr
 | POW LP expr COMMA expr RP          #powExpr
 | INDEX LP expr COMMA expr RP          #indexExpr
 | NINDEX LP expr RP          #nindexExpr
 | LOGARITHM LP expr COMMA expr RP    #logarithmExpr
 | NLOGARITHM LP expr RP               #nlogrithmExpr
 | MINUS expr                           #unaryMinusExpr
 | GAEA_INDICATRIX LPS ID RPS           #gaeaIndexExpr
 | NOT expr                             #notExpr
 | op = (FLOOR | CEIL | ABS | ROUND) LP expr RP  #mathExpr
 | expr op=(MULT | DIV | MOD) expr      #multiplicationExpr
 | expr op=(PLUS | MINUS) expr          #additiveExpr
 | expr op=(LTE | GTE | LT | GT | EQ | NEQ) expr #relationalExpr
 | expr AND expr              #logicaAndExpr
 | expr OR expr              #logicaOrExpr
 | atom                                 #atomExpr
 ;

atom
 : LP expr RP #parExpr
 | (INT | FLOAT)  #numberAtom
 | (TRUE | FALSE) #booleanAtom
 | ID             #idAtom
 | STRING         #stringAtom
 | NIL            #nilAtom
 ;

PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';
MOD : '%';
OR : '||';
AND : '&&';
EQ : '==';
NEQ : '!=';
GT : '>';
LT : '<';
GTE : '>=';
LTE : '<=';

NOT : '!';

SCOL : ';';
ASSIGN : '=';
LP : '(';
RP : ')';
LPS : '[';
RPS : ']';
OBRACE : '{';
CBRACE : '}';
COMMA : ',';

TRUE : 'true';
FALSE : 'false';
IF : 'if';
ELSEIF : 'else if';
ELSE : 'else';
WHILE : 'while';
FOR : 'for';
NIL : 'nil';
LOG : 'log';

//定义若干高级计算函数

SET : 'global.set';
COMPARE : 'global.compare';
SUM : 'math.sum';
AVERAGE : 'math.average';
VARIANCE : 'math.variance';
STANDARD : 'math.standard';
MAX : 'math.max';
MIN : 'math.min';
MEDIAN : 'math.median';
POW : 'math.pow';
INDEX : 'math.index';
NINDEX : 'math.nindex';
LOGARITHM : 'math.logarithm';
NLOGARITHM : 'math.nlogarithm';
FLOOR : 'math.floor';
CEIL : 'math.ceil';
ROUND : 'math.round';
ABS : 'math.abs';
GAEA_INDICATRIX : 'GAEA_INDICATRIX';


ID
 : '@'?([a-zA-Z_] [a-zA-Z_0-9\.]*)|([1-9a-zA-Z_] [a-zA-Z_0-9\.]* [a-zA-Z]+ [a-zA-Z_0-9\.]*)
 ;

INT
 : ([0-9])|([1-9][0-9]+)
 ;

FLOAT
 : ([0-9]'.'[0-9]+)|([1-9][0-9]+'.'[0-9]+)
 ;

STRING
 : '"' (~["\r\n] | '""')* '"'
 ;

 NEWLINE
 : '\r'?'\n'
 ;

COMMENT
 : '//' ~[\r\n]* -> skip
 ;


SPACE
 : [ \t\r\n] -> skip
 ;
