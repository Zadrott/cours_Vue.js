var arr = [
  { a: 1, b: 2 },
  { a: 2, b: 4 },
  { a: 9, b: 1 },
  { a: 19, b: 29 },
  { a: 187, b: 4 },
];

var arr2 = [
  "Luke Skywalker",
  "Maître Yoda",
  "R2D2",
  "Padmé Amidala",
  "Anakin Skywalker",
  "Obi-Wan Kenobi",
];

var triple = nb => {
  return nb * 3;
};

function sum(a, b, c, d) {
  function add(nb1, nb2) {
    return nb1 + nb2;
  }
  let tmp1 = add(a, b);
  let tmp2 = add(c, d);
  return add(tmp1, tmp2);
}

function pow1(nb, pow) {
  for (i = 0; i < pow; i++) {
    nb = nb * nb;
  }
}

function pow2(nb, pow) {
  return nb ** pow;
}

function qu3_5(a, b, c) {
  return a * c(b);
}

function reverse(str) {
  var result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function replace(str, fn) {
  let new_str = "";
  for (var i = 0; i < str.length; i++) {
    new_str += fn(str[i]);
  }
  return new_str;
}

function my_fn(char) {
  if (char === " ") {
    return " ";
  }
  return String.fromCharCode(char.charCodeAt(0) + 3);
}

function qu5_1(arr) {
  let result = arr.map(item => {
    return item.b;
  });
  return result;
}

function qu5_1bis(arr) {
  let result = [];
  for (index in arr) {
    result.push(arr[index].b);
  }
  return result;
}

function qu5_2(arr) {
  var result = arr.filter(item => {
    return item.a > 3;
  });
  return result;
}

function qu5_3(arr) {
  let result = arr
    .filter(item => {
      return !item.includes("Skywalker");
    })
    .reduce((acc, item) => {
      return acc + ", " + item;
    });
  return result;
}

console.log(sum(1, 4, 28, 2));
console.log(reverse("HelloWord"));
console.log(reverse("HelloWord"));
console.log(replace("Je suis ton père zzz", my_fn));
console.log(qu5_1bis(arr));
console.log(qu5_2(arr));
console.log(qu5_3(arr2));
