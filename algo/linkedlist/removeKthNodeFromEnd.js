const LinkedList = require('./LinkedList.js');

function removeKthNodeFromEnd(head, k) {

    let fast = head,
        slow = head;
    while (k > 0) {
        fast = fast.next;
        k--;
    }

    if (fast == null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }

    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
}

const test1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
removeKthNodeFromEnd(test1, 4);
console.log(test1.getNodesInArray());


exports.removeKthNodeFromEnd = removeKthNodeFromEnd;