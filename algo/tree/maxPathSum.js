let sum;

function maxPathSum(tree) {
    sum = 0;
    traverseTree(tree);
    return sum;
}

function traverseTree(tree) {

    if (tree == null) {
        return 0;
    }
    let leftSum = Math.max(0, traverseTree(tree.left));
    let rightSum = Math.max(0, traverseTree(tree.right));
    sum = Math.max(sum, leftSum + rightSum + tree.value);

    return Math.max(leftSum, rightSum) + tree.value;
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i]);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}

let test1 = new BinaryTree(1).insert([2, -1]);
console.log(maxPathSum(test1));

let test2 = new BinaryTree(1).insert([-5, 3, 6]);
console.log(maxPathSum(test2));

const test3 = new BinaryTree(1).insert([
    -5,
    -3,
    0,
    2,
    2,
    1,
    -3,
    3,
    1,
    1,
    0,
    5,
    1,
    1,
    0,
    1,
    1,
    -1,
    -1,
    -6,
    -1,
    -100,
    -9,
    -91,
    2,
    1,
    0,
    1,
    -5,
    0,
]);

console.log(maxPathSum(test3));
const test4 = new BinaryTree(1).insert([
    -5,
    -3,
    0,
    2,
    2,
    1,
    -3,
    -4,
    1,
    1,
    0,
    5,
    1,
    1,
    0,
    1,
    10,
    -1,
    -1,
    -6,
    -1,
    -100,
    -9,
    -91,
    2,
    1,
    0,
    1,
    -5,
    0,
]);

console.log(maxPathSum(test4));


// Do not edit the line below.
exports.maxPathSum = maxPathSum;