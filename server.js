var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var adder = function(num1, num2){
    var result = num1 + num2;
    return result;
};

//node linked list class 
class ListNode{
    constructor(id, name, deposit){
        this.id = id;
        this.name = name;
        this.deposit = deposit;
        this.next = null;
       
    }
    
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new ListNode(1, 'alex', 5);
let node2 = new ListNode(2, 'sarah', 5);
node1.next = node2;
let node3 = new ListNode(3, 'jim', 15);
node2.next = node3;
//node3.next = null;

let list = new LinkedList(node1);


//linked list is more efficient, because
//of the dynamic size there is no waste of memory compared to arrays.
//The insertion of linkedlist is easy compared to an array, you can insert an element by
//just changing the pointer and placing the value.


app.get('/test', function(req,res){
    var username = req.query.username;
    console.log("Ye I have been hit " +username);
    res.send("Hello you hit me! " +username);
});

app.get('/adder', function(req,res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = adder(num1, num2);
    res.send("The result is "+result);
});

app.get('/acc', function(req,res){
    console.log(list.head);
    res.send("Verify the result of the link list " +list.head);
});

var port = 3000;
app.listen(port);
console.log('Server listening on: ' +port);


