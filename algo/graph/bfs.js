// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        let q = [this];
        while (q.length > 0) {
            let node = q.shift();
            array.push(node.name);
            for (let child of node.children) {
                q.push(child);
            }
        }
        return array;
    }
}

const test1 = new Node('A');
test1.addChild('B').addChild('C');
test1.children[0].addChild('D');


console.log(test1.breadthFirstSearch([]));

// Do not edit the line below.
exports.Node = Node;