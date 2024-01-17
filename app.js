var animalList = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animalList);
var myObject = {
    string: "McQueen",
    age: 30,
    boolean: true
};
console.log(myObject);
function greetingz(stR) {
    return 'Hi ' + stR;
}
for (var i = 0; i < animalList.length; i++) {
    var result = greetingz(animalList[i]);
    console.log(result);
}
