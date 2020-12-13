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
    var left = root.left;
    var right = root.right;
    left && preorder(left);
    right && preorder(right);
}
//  console.log(preorder(node1));
//前序遍历迭代实现
function preorderTVS2(root){
    if(!root) {return;}
    let stack = [root];
    while(stack.length>0){
        //取第一个
        let item = stack.shift();
        console.log(item.val);
        if(item.right){
            stack.unshift(item.right);
        }
        if(item.left){
            stack.unshift(item.left);
        }
    }
}
// console.log(preorderTVS2(node1))
//中序遍历递归实现
function inorderTVS(root){
    if(root){
        var left = root.left;
        var right = root.right;
        left && inorderTVS(left);
        console.log(root.val);
        right && inorderTVS(right);
    }
    else{return;}
}
// console.log(inorderTVS(node1));
//中序遍历迭代实现
function inorderTVS2(root){
    if(!root){
        return;
    }
    let stack = [root];
    while(stack.length>0){
        
    }
}
//后序遍历递归实现
function postorderTVS(root){
    if(!root){
        return;
    }
    var left = root.left;
	var right = root.right;
	left && postorderTVS(left);
	right && postorderTVS(right);
	console.log(root.val);
}
// console.log(postorderTVS(node1));
// console.log(node1);
//后序遍历迭代实现
//广度优先：层次遍历
