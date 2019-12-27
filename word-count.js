//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  const words = string.toLowerCase().replace(/[^a-z|0-9|,|\s|']/g,'').split(/\s|,+\n?|,/g).filter(word => word !== '').map(word => word.charAt(0) === "'" && word.charAt(word.length - 1) === "'" ? word.slice(1, -1) : word);
  console.log(words)
  const result = words.reduce((tally, word) => {
    !tally[word] ? tally[word] = 1 : tally[word] ++
    return tally
  }, {});
  return result
};
