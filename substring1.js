/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 *
 * this is an accepted faster solution using sets
 */
function findSubstring(s, words) {
  let i = 0;
  let outArr = [];
  const maxLength = words[0].length * words.length;
  const wordLength = words[0].length;

  while (i < s.length && i + maxLength <= s.length) {
    let k = i;
    let tempWord = [];
    for (let i = 0; i < words.length; i++) {
      tempWord.push(words[i]);
    }

    while (k < i + maxLength) {
      let tempStr = s.slice(k, k + wordLength);

      if (tempWord.includes(tempStr)) {
        console.log("yai");
        console.log(i);
        let ind = tempWord.indexOf(tempStr);
        tempWord.splice(ind, 1);
        console.log(tempWord);
        k = k + wordLength;
      } else {
        break;
      }
      if (tempWord.length === 0) {
        outArr.push(i);
        break;
      }
    }
    i++;
  }
  return outArr;
}

s = "barfoothefoobarman";
words = ["foo", "bar"];

console.log(findSubstring(s, words));
