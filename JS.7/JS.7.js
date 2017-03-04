function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;
    this.insert = function (key) {
        var newNode = new  Node(key);
        if(root===null){
            root = newNode
        }else {
            insertNode(root,newNode);
        }
    };
    var insertNode = function (node,newNode) {
        if(newNode.key<node.key){
            if(node.left===null){
                node.left = newNode;
            }else {
                insertNode(node.left,newNode)
            }
        }else {
            if(node.right === null){
                node.right = newNode;
            }else {
                insertNode(node.right,newNode)
            }
        }
    };
    //中序遍历
    var inOrderTraverseNode = function (node,callback) {
        if(node !== null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    };
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root,callback);
    };
    //先序遍历
    var preOrderTraverseNode = function (node,callback) {
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    };
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root,callback);
    };
    //后序遍历
    var postOrderTraverseNode = function (node,callback) {
        if(node !== null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    };
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root,callback);
    };
}
var p = [];
function showNode(value) {
    switch (value){
        case 11:
            value = "ele";
            break;
        case 7:
            value = "sev";
            break;
        case 15:
            value = "fif";
            break;
        case 5:
            value = "five";
            break;
        case 3:
            value = "thr";
            break;
        case 9:
            value = "nine";
            break;
        case 8:
            value = "eight";
            break;
        case 10:
            value = "ten";
            break;
        case 13:
            value = "thirteen";
            break;
        case 12:
            value = "twelve";
            break;
        case 14:
            value = "fourteen";
            break;
        case 20:
            value = "twenty";
            break;
        case 18:
            value = "eighteen";
            break;
        case 25:
            value = "twenty-five";
            break;
        case 6:
            value = "six";
            break;

    }
    p.push(value);
}
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

var timer;
function inOrderStar(callback) {
    initial();
    tree.inOrderTraverse(showNode);
    begin();
}
function preOrderStar(callback) {
    initial();
    tree.preOrderTraverse(showNode);
    begin();
}
function postOrderStar(callback) {
    initial();
    tree.postOrderTraverse(showNode);
    begin();
}
function begin() {
    for(var j=0;j<p.length;j++){
        document.getElementById(p[j]).style.backgroundColor = "white";
    }
    var i = 0;
    document.getElementById(p[i]).style.backgroundColor = "red";
    timer = setInterval(function () {
        i++;
        if (i < p.length) {
            document.getElementById(p[i-1]).style.backgroundColor = "white";
            document.getElementById(p[i]).style.backgroundColor = "red";
        } else {
            clearInterval(timer);
        }
    }, 800);
}
function initial() {
    clearInterval(timer);
    for(var i=0;i<p.length;i++){
        document.getElementById(p[i]).style.backgroundColor = "white";
    }
    p = [];
}