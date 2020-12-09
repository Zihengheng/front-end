// 给定单向链表的头指针和一个要删除的节点的值，
// 定义一个函数删除该节点。

// 返回删除后的链表的头节点。
function deleteNode(head,val){
    let node = head;
    if(node.val=== val){
        node = node.next;
        head = node;
    }else{
        while(node.next){
            if(node.next.val === val){
                node.next = node.next.next;
                break;
            }
            node = node.next;
        }
    }
    return head;
}
