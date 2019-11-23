function reverseLinkedList(head) {

    let prev = null,
        curr = head,
        next;

    while (curr != null) {
        next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

// Do not edit the line below.
exports.reverseLinkedList = reverseLinkedList;