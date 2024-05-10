interface User {
    firstname: string;
    lastname: string;
    age: number;
}

function isLegal(user: User) {
    if(user.age > 18){
        console.log("Yep")
        return true;
    }
    else{
        console.log("Nope")
        return false
    }
}

function greet(user: User) {
    console.log(`Hello, ${user.firstname} ${user.lastname}.`)
}

greet({
    firstname:"John",
    lastname:"Doe",
    age:25
})

isLegal({
    firstname:"John",
    lastname:"Doe",
    age:25
})

