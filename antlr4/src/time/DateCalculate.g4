grammar DateCalculate;

parse
 : expr EOF
 ;

expr
 : formatExpr
 | formatExpr flag='+' unitExpr
 | formatExpr flag='-' unitExpr
 ;

unitExpr: (val=INT unit=unitAtom)+;
formatExpr: (formatAtom | INT)+;

formatAtom: 'YYYY' | 'yyyy' | 'MM' | 'DD' | 'dd' | 'hh' | 'mm' | 'ss' | '-' | '/' | ':' | 'WW' | ' ';
unitAtom: unit = ('Y' | 'M' | 'D' | 'y' | 'd' | 'h' | 'm' | 's' | 'W' | 'w');

INT : [0-9]+;

COMMENT
 : '//' ~[\r\n]* -> skip
 ;
