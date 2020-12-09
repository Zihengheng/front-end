function reverseList(head){
    let node = head;  
    let pre = null;
    while(node){
        let current = node;
        node = current.next;
        current.next = pre;
        pre=current;
    }
    return pre;
}