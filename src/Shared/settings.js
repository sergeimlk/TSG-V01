import getSearchData from "./data";

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const distance = (s, t) => {
  
  s=s.toLowerCase();
  t=t.toLowerCase();

  s=removeAccents(s);
  t=removeAccents(t);
  
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  const arr = [];
  for (let i = 0; i <= t.length; i++) {
    arr[i] = [i];
    for (let j = 1; j <= s.length; j++) {
      arr[i][j] =
        i === 0
          ? j
          : Math.min(
              arr[i - 1][j] + 1,
              arr[i][j - 1] + 1,
              arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
    }
  }
  return arr[t.length][s.length];
};

function bestScore(s,arr){
  let bestScore = 99999;
  let bestWord = "";

  arr.forEach((word) => {
    const score = distance(word,s);
    if(score < bestScore){
      bestScore = score;
      bestWord = word;
    }
  })
  return bestScore;
}

function filterStr(str){
  var regex = new RegExp('[()_. ]', 'g');
  return removeAccents(str).toLowerCase().split(regex).filter(Boolean)
}

function getWordArray(obj){
  let words = [];
  if(obj.title){
    words.push(obj.title)
  }
  if(obj.description){
    words.push(obj.description)
  }
  if(obj.keywords && obj.keywords.data){
    words.push(...obj.keywords.data)
  }
  
  words = words.map(filterStr).flat()
  let uniqueWords = [];
  words.forEach((elem,id) => {
    if(!uniqueWords.includes(elem)){
      uniqueWords.push(elem)
    }
  })

  return uniqueWords

}

function averageWordLength(words) {
  var totalLength = 0;

  // Iterate through each word in the array
  for (var i = 0; i < words.length; i++) {
      // Add the length of each word to the total length
      totalLength += words[i].length;
  }

  // Calculate the average length of words
  var average = totalLength / words.length;

  return average;
}

/*function isInArray(str,arr){
  return(arr.some((elem,id) => {
    return(elem.toLowerCase() === str.toLowerCase())
  }))
}*/

function calculateErrorScore(wordsQuery, wordsPage) {
  let errorScore = 0;
  for (let i = 0; i < wordsQuery.length; i++) {
    const score = bestScore(wordsQuery[i], wordsPage);
    errorScore += score;
  }
  return errorScore;
}

function hasKeywords(page,keywords){
  if (keywords.length > 0 && !keywords.some(keyword => page.filters.includes(keyword))) {
    return false; // Skip pages that do not match any keywords
  }
  return true
}
function performSearch(query, keywords = []){
  
  if(query === "*"){
    return getSearchData()
  }
  else if (query.trim() === ""){
    return []
  }
  else {
    const wordsQuery = query.trim().split(/\s+/);

    let foundPages = new Array(0);
    
    getSearchData().forEach(page => {
      if(hasKeywords(page,keywords)){
        const wordsPage = getWordArray(page);
        let errorScore = calculateErrorScore(wordsQuery, wordsPage);
        if(errorScore / wordsQuery.length / averageWordLength(wordsPage) <= 0.5){
          foundPages.push({ page,errorScore });
        }
      }
    });

    return foundPages
      .sort((a, b) => a.errorScore - b.errorScore)
      .map(page => page.page)
      .slice(0,10)
  }
}


export {distance,bestScore, performSearch};

