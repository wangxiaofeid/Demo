grammar Formula;

prog
    : stat+ ;

stat
    : exprStat
    | assignStat
    ;

exprStat
    : expr SEMI
    ;

assignStat
    : ID EQ expr SEMI
    ;

expr
    : expr op = (MUL | DIV ) expr   # MulDivExpr
    | expr op = ( ADD | SUB ) expr   # AddSubExpr
    | INT                       # IntExpr
    | ID                        # IdExpr
    | LPAREN expr RPAREN        # ParenExpr
    | expr AND expr        # AndExpr
    | expr OR expr        # OrExpr
    | expr op = ( HIGHER | LOWER ) expr  # OperatorExpr
    ;

MUL     : '*' ;
DIV     : '/' ;
ADD     : '+' ;
SUB     : '-' ;
LPAREN  : '(' ;
RPAREN  : ')' ;
HIGHER  : '>' ;
LOWER  : '<' ;
AND  : '且' ;
OR  : '或' ;

ID      : LETTER (LETTER | DIGIT)*  ;
INT     : [0-9]+ ;
EQ      : '=' ;
SEMI    : ';' ;
COMMENT : '//' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);
WS      : [ \r\n\t]+ -> channel(HIDDEN);

fragment
LETTER  : [a-zA-Z] ;
fragment
DIGIT   : [0-9] ;

