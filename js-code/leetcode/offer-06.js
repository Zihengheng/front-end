// 输入一个链表的头节点，
// 从尾到头反过来返回每个节点的值（用数组返回）。
function reversePrint(head){
    let pos = head;
    let res = [];
    while(pos.next=null){
        res.unshift(pos.val);
        pos = pos.next;
    }
    return res;
}