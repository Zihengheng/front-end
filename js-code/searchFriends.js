var Students = [
    {id:1, friends:[2,3,4]},
    {id:2, friends:[5]},
    {id:5, friends:[6]},
    {id:3, friends:[7]},
];

var stuID1 = 1;
function searchFriends(stuID,Students){
    //get existed friends
    let target = stuID;
    let arr = [];
    let pofri = [];
    let temp = 0;
    for(let i=0; i<Students.length;i++){
        if(Students[i].id == target){
            arr = Students[i].friends;
        }
    }
    for(let j=0; j<arr.length;j++){
        temp = arr[j];
        for(let p=0; p<Students.length;p++){
            if(Students[p].id == temp){
                console.log(Students[p].friends);
                // pofri.concat(Students[p].friends);
            }
        }
    }
    console.log(pofri)
}
searchFriends(stuID1,Students);