console.log("スクリプトは動作しています！");
let aaa = "航平";
let age = 23;
let isstudent = false;
console.log(aaa + "の年齢は" + age + "です。");

console.log("hello world");

if (age >= 20) {
    console.log("私は成人してます。");
} else {
    console.log("私は成人していません。")
}

for (let i = 0;i <= 5;i ++ ) {
    console.log(i)
}

function greet (namae) {
    console.log ("こんにちは!" + namae + "さん！");
}

greet("花子")

const add = (a,b) => a + b ;

let sum = add(3,5);
console.log(sum);