let animalList = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animalList);

let myObject = {

    string: "McQueen",
    age: 30,
    boolean: true
};
console.log(myObject)

function greetingz(stR){
    return 'Hi ' + stR;
}

for (let i = 0; i < animalList.length; i++) {

    let result = greetingz(animalList[i]);
    console.log(result);

}