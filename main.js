import antlr4 from 'antlr4';

import Java8Lexer from './Java8Lexer.js'

const input = 'public class blockList{public List<Block> blockList(){\n // Hello \n return blocks;\n}\n}'

const chars = new antlr4.InputStream(input);
const lexer = new Java8Lexer(chars);

const token_names = lexer.getTokenNames()
const id_type = lexer.getTokenNames().findIndex(e => e == 'Identifier')
const comment_type = lexer.getTokenNames().findIndex(e => e == 'COMMENT')
const line_comment_type = lexer.getTokenNames().findIndex(e => e == 'LINE_COMMENT')

let token = lexer.nextToken()
while (!lexer._hitEOF) {
    if (token.type == id_type) {
        console.log("ID:", token.text, token.line, token.column)
    } else if (token.type == comment_type) {
        console.log("COMMENT:", token.text, token.line, token.column)
    } else if (token.type == line_comment_type) {
        console.log("LINE_COMMENT:", token.text, token.line, token.column)
    }
    token = lexer.nextToken()
}
