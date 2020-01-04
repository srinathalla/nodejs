/**
 * S.C : visisted array space + trie space => O(n*m) +  O(ws) where w : no of words, s : length of longest string.
 * T.C : O(w*s) + O(n*m*8^s) n*m is the no of chars and at each char we have 8 neighbours each has 8 and so on...
 *  s : length of longest string.
 * 
 * @param {} board 
 * @param {*} words 
 */
function boggleBoard(board, words)
{
    let trie = new Trie();
    for(word of words)
        trie.add(word)

    let finalWords = new Set();

    let visited = [];
    for(let i=0; i < board.length;i++)
    {
        let row = [];
        for(let j=0; j < board[0].length;j++)
         {
            row.push(false);
         }
         visited.push(row);
    }

    for(let i=0; i < board.length;i++)
    {
        for(let j=0; j < board[0].length;j++)
         {
            explore(i, j, board, visited, trie.root, finalWords);
          }
    }

    return [...finalWords];
}


function explore(i, j, board, visited, trieNode, finalWords)
{
    if (i >= 0 && i < board.length && j >= 0 && j < board[0].length && !visited[i][j]  && board[i][j] in trieNode)
    {

        visited[i][j] = true
        trieNode = trieNode[board[i][j]]
        if('*' in trieNode)
            finalWords.add(trieNode['*'])

        explore(i + 1, j, board, visited, trieNode, finalWords);
        explore(i + 1, j + 1, board, visited, trieNode, finalWords);
        explore(i + 1, j - 1, board, visited, trieNode, finalWords);
        explore(i, j + 1, board, visited, trieNode, finalWords);
        explore(i, j - 1, board, visited, trieNode, finalWords);
        explore(i - 1, j, board, visited, trieNode, finalWords);
        explore(i - 1, j + 1, board, visited, trieNode, finalWords);
        explore(i - 1, j - 1, board, visited, trieNode, finalWords);

        visited[i][j] = false;
    }
}


class Trie
{
    constructor ()
    {
        this.root = {}
        this.endSymbol = "*"
    }

    add(word)
    {
        let current = this.root
        for(let i=0;i < word.length; i++)
        {
            let letter = word.charAt(i);
            if(!(letter in current))
            {
                current[letter] = {};
            }
            current = current[letter];
        }
        current['*'] = word;
    }
}


let board = [
    ["f", "t", "r", "o", "p", "i", "k", "b", "o"],
    ["r", "w", "l", "p", "e", "u", "e", "a", "b"],
    ["j", "o", "t", "s", "e", "l", "f", "l", "p"],
    ["s", "z", "u", "t", "h", "u", "o", "p", "i"],
    ["k", "a", "e", "g", "n", "d", "r", "g", "a"],
    ["h", "n", "l", "s", "a", "t", "e", "t", "x"],
];
let words = [
    "frozen",
    "rotten",
    "teleport",
    "city",
    "zutgatz",
    "kappa",
    "before",
    "rope",
    "obligate",
    "annoying",
];
let expected = [
    "frozen",
    "rotten",
    "teleport",
    "kappa",
    "before",
    "rope",
    "obligate",
];

console.log(boggleBoard(board, words));
