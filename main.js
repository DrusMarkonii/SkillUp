console.log("Sample JavaScript HW#1");

var myNum = 10;
var myStr = "строка";
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = {
  first: "First Name",
  last: "Last Name",
};
var decimal2 = myNum.toFixed(2);
var i = 10;
console.log(i++);
console.log(i);
console.log(i--);
console.log(i);
console.log(++i);
console.log(i);
console.log(--i);
console.log(i);

var myTest = 20;
console.log((myTest += 10));
console.log((myTest -= 20));
console.log((myTest *= 2));
console.log((myTest /= 2));
console.log((myTest %= 3));

var myPi = Math.PI;
console.log(myPi);
var myRound = Math.round(89.279);
console.log(myRound);
var myRandom = Math.random(0, 10) * 10;
console.log(myRandom);
var myPow = Math.pow(3, 5);
console.log(myPow);

var strObj = { str: "Мама мыла раму, рама мыла маму" };

strObj.length = strObj.str.length;
console.log(strObj.str);
console.log(strObj.length);

var strReplace = strObj.str.replace(
  "Мама мыла раму, рама мыла маму",
  "Мама моет раму, Рама держит маму"
);
console.log(strReplace);

var isRamaPos = strObj.str.indexOf("рама");
console.log(isRamaPos);

var randomStr = "jhjjgjjdsjfgjg";
console.log(randomStr.toUpperCase());
console.log(randomStr.toLowerCase());
