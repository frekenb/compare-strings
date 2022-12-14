function compare(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let trim = (str) => {
    str = str.split("");
    while (str[0] === " " || str[str.length - 1] === " ") {
      if (str[0] === " ") {
        str.shift();
      }
      if (str[str.length - 1] === " ") {
        str.pop();
      }
    }
    return str.join("");
  };
  str1 = trim(str1);

  if (str1.length !== str2.length) {
    return [str1, str2, "The lengths are not the same"];
  } // making sure that the lengths are the same

  str1 = str1.split("").map(function (val, index) {
    if (val !== str2[index]) {
      return { val: val, color: "red" };
    }
    return { val: val, color: "black" };
  });
  str2 = str2.split("").map(function (val, index) {
    if (val !== str1[index].val) {
      return { val: val, color: "red" };
    }
    return { val: val, color: "black" };
  });

  let areSame = true;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i].color === "red") {
      areSame = false;
      break;
    }
  }
  debugger;
  str1 = str1.reduce(function (aggr, val) {
    aggr = aggr + `<span style = "color: ${val.color}">${val.val}</span>`;
    return aggr;
  }, "");
  str2 = str2.reduce(function (aggr, val) {
    aggr = aggr + `<span style = "color: ${val.color}">${val.val}</span>`;
    return aggr;
  }, "");
  console.log(str1);
  console.log(str2);

  return areSame
    ? [str1, str2, "They are the same"]
    : [str1, str2, "They are not the same"];
}

let data = {
  first: document.getElementById("string1"),
  second: document.getElementById("string2"),
  firstLine: document.getElementById("par1"),
  secondLine: document.getElementById("par2"),
  conclusion: document.getElementById("conclusion"),
  form: document.getElementById("up"),
};
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  data.firstLine.innerHTML = compare(data.first.value, data.second.value)[0];
  data.secondLine.innerHTML = compare(data.first.value, data.second.value)[1];
  data.conclusion.innerHTML = compare(data.first.value, data.second.value)[2];

  data.first.value = "";
  data.second.value = "";
});
