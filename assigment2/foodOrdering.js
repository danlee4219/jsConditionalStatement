var orderTotal=50,loyalMember='no',distance=6
if(orderTotal>=50){
    console.log("you got free delivery")
}
else if(loyalMember=='yes'){
    console.log("you got free delivery")
}
else if(distance<=5){
    console.log("you got free delivery")
}
else{
    console.log("you missed free delivery")
}