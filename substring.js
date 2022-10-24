/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  let i = 0;
  let outArr = [];
  let sortedWordInput = words.sort();
  let sortedWordString = "";
  const set = new Set(words);
  console.log(set);

  for (let j = 0; j < words.length; j++) {
    sortedWordString += sortedWordInput[j];
  }

  while (i < s.length) {
    for (let k = 0; k < words.length; k++) {
      if (
        s[i] === words[k][0] &&
        i + words[0].length * words.length <= s.length
      ) {
        let x = i;
        let y = i + words[0].length * words.length;

        let output = splitAndPush(s, x, y, words[0].length);
        if (output === sortedWordString && !outArr.includes(i)) {
          outArr.push(i);
        }
      }
    }
    i++;
  }
  return outArr;
}

function splitAndPush(s, x, y, l) {
  //   console.log("hello -" + x + "-" + y + "-" + l);
  let count = 0;
  let tempStrAr = [];
  let temp = "";
  let tempStr = "";
  for (let k = x; k <= y; k++) {
    if (count < l) {
      temp += s[k];
      count++;
    } else if (count == l) {
      tempStrAr.push(temp);
      temp = s[k];
      count = 1;
    }
  }
  tempStrAr.sort();
  for (let j = 0; j < tempStrAr.length; j++) {
    tempStr += tempStrAr[j];
  }
  return tempStr;
}

s = "wordgoodgoodgoodbestword";
words = ["word", "good", "best", "good"];

console.log(findSubstring(s, words));
