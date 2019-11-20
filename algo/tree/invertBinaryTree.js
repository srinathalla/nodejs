function invertBinaryTree(tree) {
    if (tree == null) {
        return;
    }

    swapChildren(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function invertBinaryTreeIteratively(tree) {
    const queue = [tree];

    while (queue.length > 0) {
        const node = queue.shift();
        swapChildren(node);

        if (node.left != null) {
            queue.push(node.left);
        }
        if (node.right != null) {
            queue.push(node.right);
        }
    }

}

function swapChildren(node) {
    const left = node.left;
    node.left = node.right;
    node.right = left;
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;