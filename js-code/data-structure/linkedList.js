function sll (){
    //node 
    function Node(element){
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;
    //append a new element at tile
    this.append = function(element){
        let node = new Node(element);
        let currentNode = head;
        //判断是否为空链表
        if(head ===null){
            //// 是空链表，就把当前节点作为头部节点
            head = node;
        }else{
            // 从 head 开始一直找到最后一个 node
            while(currentNode){
                //nodes behind
                currentNode = currentNode.next;
            }
            // 把当前节点的 next 指针 指向 新的节点
            currentNode.next = node;
        }
        // 链表的长度加 1
        length++;
    };
    // 向链表特定位置插入一个新节点
    this.insert = function(position,element){
        if(position<0||position>length){
            //越界
            return false;
        }else{
            let node = new Node(element);
            let index = 0;
            let currentNode = head;
            let previousNode = null;

            // 在最前插入节点
            if(position ==0){
                node.next = currentNode;
                head = node;
            }else{
                while(index<positon){
                    index++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // 把前一个节点的指针指向新节点，
                //新节点的指针指向当前节点，保持连接性
                previousNode.nest = node;
                node.next = currentNode;
            }
            length++;
            return true;
        }
    };
    // 从链表的特定位置移除一项
    this.removeAt = function(position){
        if((positon<=0&&position>=length)||length===0){
            //越界
            return false;
        }else{
            let currentNode = head;
            let index = 0;
            let previousNode = null;
            if(position==0){
                head = currentNode.next;
            }else{
                while(index<position){
                    index++;
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                // 把当前节点的 next 指针 指向 
                //当前节点的 next 指针，即是 删除了当前节点
                previouseNode.next = currentNode.next;
            }
            length--;
            return true;
        }
    };
    // 从链表中移除指定项
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
}