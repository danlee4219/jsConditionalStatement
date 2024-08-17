var gender='female',age=19
if(gender=='male'){
    if(age>=21){
        console.log("you are eligible to marriage.")
    }
    else{
        console.log("you are not eligible for marriage.")
    }
}
else if(gender=='female'){
    if(age>=18){
        console.log("you are eligible for marriage.")
    }
    else{
        console.log("you are not eligible for marriage.")
    }
}
else{
    console.log("Invalid gender.")
}