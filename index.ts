let firstname: string = "Hugo";
let age: number = 25;
let active: boolean = true;

// let names: string [] = [1,2,3,4] /// gives us an error
let names: string[] = ["bobby", "jennifer", "lily"];

enum studentTypes {
  pending,
  active,
  almostDone,
  graduated,
  tas,
  teachers,
}

let mystatus = studentTypes.graduated;

// switch (Number(mystatus)) {
//   case Number(studentTypes.active):
//     console.log(" student is active ");
//     break;
//   case Number(studentTypes.graduated):
//     console.log("Student is gradtuated");
//     break;
//   default:
//     console.log("🤧");
// }

// console.log('my status is', mystatus)
// if (mystatus == studentTypes.graduated){
// console.log(`the student is `)}

// console.log(names)

// console.log(`my first name is ${firstname}`);


// let code: string | number = 11
// code = "AA1321"
// // code = false  /// error: not a string or a number

// console.log(`my entry code is: ${code}`)


function sum(arr: number[]) {
    return arr.reduce((total: number, num: number) => total + num)
}

let numbers: number [] = [1,2,3,4,5,6]
// console.log(sum(numbers))
let complexItem: any = { name: "hugo"}

complexItem = { title: "professor"}
complexItem = "its a string "
complexItem = 22

// console.log("complexItem", complexItem)
enum bloodType {
    aPositive,
    aNegative,
    oPositive,
    oNegative
}
interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: string
}


const me : human = {
    name: "booby",
    age : 25,
    bloodType: "ayyy",
    height: 6 * 12,
}


console.log({me})