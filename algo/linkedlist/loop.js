class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  /**
   * T.C : O(n) where n is length of linkedlist.
   * S.C : O(1)
   * @param {} head 
   */
  function findLoop(head) { 
    let fast = head.next.next;
    let slow = head.next;

    while( slow != fast)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow = head;
    while(slow != fast)
    {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
  }
  
  // Do not edit the line below.
  exports.LinkedList = LinkedList;
  exports.findLoop = findLoop;