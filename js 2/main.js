console.log("Sample JavaScript #2 HW #16");

var userObj = {
  firstName: "andrey",
  lastName: "makarevich",
  age: 23,
  fullName: function () {
    return userObj.firstName + " " + userObj.lastName;
  },
};
console.log(userObj.fullName());

function defUpperStr(text) {
  return (text || "DEFAULT TEXT").toUpperCase();
}
console.log(defUpperStr("My text"));
console.log(defUpperStr());

function evenFn(n) {
  var arr = [];
  for (var i = 1; i <= n; i++)
    if (i % 2 === 0) {
      arr.push(i);
    }
  return arr;
}
console.log(evenFn(10));

function weekFn(day) {
  let str = "";

  switch (day) {
    case 1:
      str = "Понедельник";
      break;
    case 2:
      str = "Вторник";
      break;
    case 3:
      str = "Среда";
      break;
    case 4:
      str = "Четверг";
      break;
    case 5:
      str = "Пятница";
      break;
    case 6:
      str = "Суббота";
      break;
    case 7:
      str = "Воскресенье";
      break;
    default:
      str = null;
  }
  return str;
}

console.log(weekFn(1));

function ageClassification(year) {
  return year > 0
    ? year > 24
      ? year > 44
        ? year > 65
          ? year > 75
            ? year > 90
              ? year > 122
                ? null
                : "долгожители"
              : "старческий возраст"
            : "пожилой возраст"
          : "средний возраст"
        : "молодой возраст"
      : "детский возраст"
    : null;
}

console.log("    10 :", ageClassification(10));

function oddFn(n) {
  var arr = [];
  var i = 0;
  while (++i <= n && n !== 0)
    if (i % 2 !== 0) {
      arr.push(i);
    }

  return arr;
}
console.log(oddFn(10));

function mainFunc(a, b, cb) {
  if (cb && typeof cb === "function") {
    return cb(a, b);
  }
  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 3, cbPow));
console.log(mainFunc(2, 3, cbAdd));
console.log(mainFunc(1, 3, 5));
