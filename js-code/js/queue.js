//print
function print(content){
    console.log(content);
}

//Hot potato via queue
function hotPotato(list, num){
    var queue = [];
    var outq = "";
    for(var i=0; i<list.length; i++) {
        queue.push(list[i]);
    }
    //num = 1:
    print(queue);
    outq = queue.shift();
    queue.push(outq);
    print(queue);
    queue.shift();
    print(queue);

    // while(list.length>1){
    //     for (var j=1; j<=num; j++){
    //         outq = queue.shift();
    //         queue.push(outq);
    //     }
    //     queue.shift();
    // }
    // print(queue);
    // return queue;
    }
    var list = ["Bill", "David", "Susan", "Jane", "Kenet", "brad"];
    var num = 7;
// hotPotato(list, num);

