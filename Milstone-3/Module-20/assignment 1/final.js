//------------------------------problem-1----------------------------------

function newPrice(currentPrice, discount) {
    // Your code here
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountAmount = (currentPrice * discount) / 100;
  const finalPrice = currentPrice - discountAmount;

  return finalPrice.toFixed(3);
}

//-----------------------problem-2--------------------------------------

function validOtp(otp) {

    if (typeof otp !== "string") {
        return "Invalid";
    }

    if (otp.length !== 8) {
        return false;
    }

    if (!otp.startsWith("ph-")) {
        return false;
    }

    return true;
}

console.log(validOtp("ph-10985"));   
console.log(validOtp("ph-1234"));    
console.log(validOtp("abc-12345"));  
console.log(validOtp(["ph-10985"])); 
console.log(validOtp(12345678));     


//------------------------------problem-3------------------------------------

function finalScore(result) {

  if (typeof result !== "object" || result === null || Array.isArray(result)) {
    return "Invalid";
  }

  let right = result.right;
  let wrong = result.wrong;
  let skip = result.skip;

  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  let score = (right * 1) - (wrong * 0.5);

  return Math.round(score);
}



console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));


//--------------------------------problem-4-------------------------------

function gonoVote(array) {

    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "ha") {
            haCount++;
        } else if (array[i] === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}



console.log(gonoVote(["ha","na","ha","na"]));
console.log(gonoVote(["ha","na","na"]));
console.log(gonoVote(["ha","ha","ha","na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));


//----------------------------problem-5-----------------------------------

function analyzeText(str) {

    if (typeof str !== "string" || str.length === 0) {
        return "Invalid";
    }

    let words = str.split(" ");

    let longestWord = "";
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    let totalCharacters = str.split(" ").join("").length;

    return {
        longwords: longestWord,
        token: totalCharacters
    };
}



console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(""));
