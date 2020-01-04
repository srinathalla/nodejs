// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    /* T.C : O(n^2) S.C : O(n^2) */
    populateSuffixTrieFrom(string) {
        for(let i=0;i < string.length;i++)
        {
            let current = this.root;
            for(let j=i;j < string.length;j++)
            {
                if(!(string.charAt(j) in current))
                {
                    current[string.charAt(j)] = {}
                }
                current = current[string.charAt(j)];
            }
            current['*'] = true;
        }
    }
  
    // T.C : O(m) 
    contains(string) {

        let current = this.root;
        for(let i=0; i < string.length; i++)
        {
            let letter = string.charAt(i);
            if(!(letter in current))
            {
                return false;
            }
            current = current[letter];
        }
        return '*' in current;
    }
  }

let trie = new SuffixTrie("babc");
console.log(trie.contains("abc"));

let trie1 = new SuffixTrie("test")
console.log(trie1.root);
  
  // Do not edit the line below.
  exports.SuffixTrie = SuffixTrie;
  