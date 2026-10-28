// console.log("First Lecture of Js.")


// var
// let
// const

// variable declaration syntaxt

// keyword  variable-name  = value


// declaration = varibale ko name assign with keyword

// initilization = data store 

// let =:  re-declare nai kr sakty
// re-intiliza kr lyta ha


// const =:  re-declare nai kr sakty
// re-intiliza nai kr sakta ha

//  var =:  re-declare  kr sakta
// var nav = "ali"
// var nav = "hassan"
// nav = 5241356214
// console.log("nav =", nav)


// data Types  => primitive(not-changable)  non-primitive(changeable)

// primitive(not-changable)
// 1) number => 2321421, -464362, 0.623562
// 2) string => "532452", '@#', `aldjsgr`
// 3) boolean => true, false
// 4) undefined
// 5) null

// non-primitive(changeable)
// 1) Arrays => collection of different types of data

// const student = ["shehryar", "behlol", "ghaniya", "zain", "anas", "haris", "rafay", "rehma", 'tehniya', "bisma", "abdullah", "arman", "ahmed", 25, 26, "esha", false, undefine]


const studentInfo = {
    studentName: ["shehryar", "behlol", "ghaniya", "zain", "anas", "haris", "rafay", "rehma", 'tehniya', "bisma", "abdullah", "arman", "ahmed"],
    totalStudents: 26,
    presentStudent: 25,
    isAllStudentsPresent: false,
    absentStudentsName: undefined,
    instructor: "esha"
}

function sum() {
    4 + 5
}
// Scopes
// Hoisting
// clouser

// GLOBAL-SCOPE

function scope() {
    //local 


    if (true) {

        block
        const name1 = "hassan"
        let age = 34
        var heigth = 23
    }

    // console.log("name = ", name1)
    // console.log("age = ", age)
    console.log("height =", heigth)
}


scope()  



var nav = 343