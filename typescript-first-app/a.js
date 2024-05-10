"use strict";
function isLegal(user) {
    if (user.age > 18) {
        console.log("Yep");
        return true;
    }
    else {
        console.log("Nope");
        return false;
    }
}
function greet(user) {
    console.log(`Hello, ${user.firstname} ${user.lastname}.`);
}
greet({
    firstname: "John",
    lastname: "Doe",
    age: 25
});
isLegal({
    firstname: "John",
    lastname: "Doe",
    age: 25
});
