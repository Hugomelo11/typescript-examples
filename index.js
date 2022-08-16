var firstname = "Hugo";
var age = 25;
var active = true;
// let names: string [] = [1,2,3,4] /// gives us an error
var names = ["bobby", "jennifer", "lily"];
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["almostDone"] = 2] = "almostDone";
    studentTypes[studentTypes["graduated"] = 3] = "graduated";
    studentTypes[studentTypes["tas"] = 4] = "tas";
    studentTypes[studentTypes["teachers"] = 5] = "teachers";
})(studentTypes || (studentTypes = {}));
var mystatus = studentTypes.graduated;
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
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
}
var numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers))
var complexItem = { name: "hugo" };
complexItem = { title: "professor" };
complexItem = "its a string ";
complexItem = 22;
// console.log("complexItem", complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["aNegative"] = 1] = "aNegative";
    bloodType[bloodType["oPositive"] = 2] = "oPositive";
    bloodType[bloodType["oNegative"] = 3] = "oNegative";
})(bloodType || (bloodType = {}));
var me = {
    name: "booby",
    age: 25,
    bloodType: "ayyy",
    height: 6 * 12
};
console.log(me);
