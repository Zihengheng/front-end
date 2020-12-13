//节点的Node属性
function Node(data){
    this.data = data;
    this.parent = null;
    this.children = [];
}

//tree
function Tree(data){
    let node = new Node(data);
    this._root = node;
}
//create a new tree
