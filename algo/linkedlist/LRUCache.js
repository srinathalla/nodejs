const chai = require('chai');
// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
    constructor(maxSize) {
      this.maxSize = maxSize || 1;
      this.dll = new DLL();
      this.map = {};
    }
  
    insertKeyValuePair(key, value) {
      
        if(key in this.map)
        {
            let node = this.map[key];
            node.value = value;
            this.dll.remove(node);
            this.dll.addLast(node);
        }
        else{
            if(this.dll.size() == this.maxSize)
            {
                let node = this.dll.removeFirst();
                delete this.map[node.key];
            }

            let node = new Node(key,value);
            this.dll.addLast(node);
            this.map[key] = node;
        }
    }
  
    getValueFromKey(key) {
       if(!(key in this.map))
       {
           return null;
       }

       let node = this.map[key];
       this.dll.remove(node);
       this.dll.addLast(node);

       return node.value;
    }
  
    getMostRecentKey() {
      return this.dll.tail.key;
    }
  }

  class DLL
  {
      constructor()
      {
        this.head = new Node(-1,-1);
        this.tail = this.head;
        this.length = 0;
      }

      addLast(node)
      {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = this.tail.next;

        this.length++;
      }

      removeFirst()
      {
        let node = this.head.next;
        this.remove(node);
        return node;
      }

      remove(node)
      {
        node.prev.next = node.next;
        if(node.next != null)
        {
            node.next.prev = node.prev;
        }
        if (node == this.tail)
        {
            this.tail = this.tail.prev;
        }
        this.length--;
      }

      size()
      {
          return this.length;
      }

  }

  class Node
  {
      constructor(key,value)
      {
          this.key = key;
          this.value = value;
          this.next = null
          this.prev = null
      }
  }

const letterMaps = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
};

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function testLruOfSize(size) {
  // Instantiate cache and insert first key.
  const lru = new LRUCache(size);
  chai.expect(lru.getValueFromKey('a')).to.deep.equal(null);
  lru.insertKeyValuePair('a', 99);
  chai.expect(lru.getMostRecentKey()).to.deep.equal('a');
  chai.expect(lru.getValueFromKey('a')).to.deep.equal(99);
  // Add existing key when cache isn't full.
  lru.insertKeyValuePair('a', 0);
  chai.expect(lru.getMostRecentKey()).to.deep.equal('a');
  chai.expect(lru.getValueFromKey('a')).to.deep.equal(0);
  // Add keys until cache reaches maximum capacity.
  for (let i = 1; i < size; i++) {
    const mostRecentLetter = letters[i - 1];
    chai.expect(lru.getMostRecentKey()).to.deep.equal(mostRecentLetter);
    // Test key retrieval when cache isn't full.
    for (let j = 0; j < i; j++) {
      const letter = letters[j];
      chai
        .expect(lru.getValueFromKey(letter))
        .to.deep.equal(letterMaps[letter]);
      chai.expect(lru.getMostRecentKey()).to.deep.equal(letter);
    }
    const currentLetter = letters[i];
    chai.expect(lru.getValueFromKey(currentLetter)).to.deep.equal(null);
    lru.insertKeyValuePair(currentLetter, letterMaps[currentLetter]);
    chai.expect(lru.getMostRecentKey()).to.deep.equal(currentLetter);
    chai
      .expect(lru.getValueFromKey(currentLetter))
      .to.deep.equal(letterMaps[currentLetter]);
  }
  // Add keys now that cache is at maximum capacity.
  for (let i = size; i < letters.length; i++) {
    const mostRecentLetter = letters[i - 1];
    chai.expect(lru.getMostRecentKey()).to.deep.equal(mostRecentLetter);
    // Test key retrieval when cache is full.
    for (let j = i - size; j < i; j++) {
      const letter = letters[j];
      chai
        .expect(lru.getValueFromKey(letter))
        .to.deep.equal(letterMaps[letter]);
      chai.expect(lru.getMostRecentKey()).to.deep.equal(letter);
    }
    const leastRecentLetter = letters[i - size];
    const currentLetter = letters[i];
    chai.expect(lru.getValueFromKey(currentLetter)).to.deep.equal(null);
    lru.insertKeyValuePair(currentLetter, letterMaps[currentLetter]);
    chai.expect(lru.getMostRecentKey()).to.deep.equal(currentLetter);
    chai
      .expect(lru.getValueFromKey(currentLetter))
      .to.deep.equal(letterMaps[currentLetter]);
    chai.expect(lru.getValueFromKey(leastRecentLetter)).to.deep.equal(null);
  }
  // Add existing keys.
  for (let i = letters.length - size; i < letters.length; i++) {
    const currentLetter = letters[i];
    chai
      .expect(lru.getValueFromKey(currentLetter))
      .to.deep.equal(letterMaps[currentLetter]);
    lru.insertKeyValuePair(
      currentLetter,
      (letterMaps[currentLetter] + 1) * 100,
    );
    chai
      .expect(lru.getValueFromKey(currentLetter))
      .to.deep.equal((letterMaps[currentLetter] + 1) * 100);
  }
}

testLruOfSize(1);
testLruOfSize(2);
testLruOfSize(3);
testLruOfSize(4);
testLruOfSize(5);
  
  // Do not edit the line below.
exports.LRUCache = LRUCache;
  