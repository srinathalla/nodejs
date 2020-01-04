// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
   let sums = [];
   traverse(root,0,sums);
   return sums;
  }

  function traverse(node,sum, sums) {
    if(node == null)
    {
        return;
    }
    sum += node.value;
    if(node.left == null && node.right == null)
    {
        sums.push(sum);
        return;
    }

    traverse(node.left,sum,sums);
    traverse(node.right,sum,sums); 
  }

let root = new BinaryTree(10);
root.left = new BinaryTree(20);
root.right = new BinaryTree(30);

console.log(branchSums(root))
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
  