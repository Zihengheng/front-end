//实现代码
//node 
function Node(){
    this.val = val;
    this.left = null;
    this.right = null;
}

//定义一棵树 node1 是根节点
//     1
//    /\
//   2  3
//  /\  /\
// 4 5 6  7
var node4 = {left: null, right: null, val: 4 }; 
var node5 = {left: null, right: null, val: 5 }; 
var node6 = {left: null, right: null, val: 6 }; 
var node7 = {left: null, right: null, val: 7 };
var node3 = {left: node6, right: node7, val: 3 };
var node2 = {left: node4, right: node5, val: 2 };
var node1 = {left: node2, right: node3, val: 1 };
//前度遍历递归实现
function preorder(root){
    if(!root) return;
    console.log(root.val);
    let left = root.left;
    let right = root.right;
}
//中序遍历递归实现
//后序遍历递归实现
