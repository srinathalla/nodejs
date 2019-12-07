class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
}


/**
 *  T.C: O(d) where d is depth of the tree.
 *  S.C: O(1)
 * 
 * */
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let depth1 = getDepth(descendantOne);
    let depth2 = getDepth(descendantTwo);

    if (depth1 > depth2) {
        return backTrackTillAncestor(descendantOne, descendantTwo, depth1 - depth2);
    } else {
        return backTrackTillAncestor(descendantTwo, descendantOne, depth2 - depth1);
    }
}

function backTrackTillAncestor(lowerDescedant, higherDescendant, diff) {
    while (diff > 0) {
        lowerDescedant = lowerDescedant.ancestor;
        diff -= 1;
    }

    while (lowerDescedant != higherDescendant) {
        lowerDescedant = lowerDescedant.ancestor;
        higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescedant;
}


function getDepth(node) {
    let depth = 0;
    while (node != null) {
        node = node.ancestor
        depth += 1
    }
    return depth;
}