import antlr4 from 'antlr4';

import Java8Lexer from './Java8Lexer.js'

const input = 'public class blockList{public List<Block> blockList(){\n  return blocks;\n}\n}'

const chars = new antlr4.InputStream(input);
const lexer = new Java8Lexer(chars);

const id_type = lexer.getTokenNames().findIndex(e => e == 'Identifier')

let token = lexer.nextToken()
while (!lexer._hitEOF) {
    if (token.type == id_type) {
        console.log("ID:", token.text, token.line, token.column)
    }
    token = lexer.nextToken()
}
