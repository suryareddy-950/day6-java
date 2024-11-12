// Q1-------------------------------------------------------------------
function showmessage() {
    console.log("Hello,Welcome to the Webpage!")
}
showmessage();
// Q2-----------------------------------------------------------------
function countdown() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}
countdown();
// Q3-------------------------------------------------------------------
function multiplicationtable() {
    let j = 4;
    for (i = 1; i <= 10; i++) {
        console.log(`${j}x${i} = ${ j*i}`);
    }
}
multiplicationtable();
// Q4--------------------------------------------------------------------------
function showoddnumbers() {
    for (i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}
showoddnumbers();
// Q5-------------------------------------------------------------------------
function countdown() {
    for (i = 5; i >= 1; i--) {
        console.log(i);
    }
}
countdown();
// Q6------------------------------------------------------------------------
function greetuser() {
    console.log("Good day,user!");
}
greetuser();
// Q7-----------------------------------------------------------------------------------
function showoddnumbers() {
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
showoddnumbers();
// Q8---------------------------------------------------------------------------------------
function farewellmessage() {
    console.log("Thank you for visiting, goodbye!");
}
farewellmessage();
// Q9----------------------------------------------------------------------------------------
function showsquares() {
    for (i = 1; i <= 5; i++) {
        console.log(`${ i** 2}`)
}
}showsquares();
// Q10----------------------------------------------------------------------------------------
function repeatWelcome() {
    for (let i = 1; i <= 3; i++) {
        console.log("welcome");
    }
}
repeatWelcome();
// --------------------------------------------------------------------------------------------------------