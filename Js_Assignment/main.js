// 1. Write a JavaScript function that reverse a number. 
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(78456));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not.
function isPalindrome(str) {
  var cleaned = str.replace(/\s/g, '').toLowerCase();
  var reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
console.log(isPalindrome("racecar"));

// 3. Write a JavaScript function that generates all combinations of a string.
function allCombinations(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
console.log(allCombinations("cat"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function alphabetOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphabetOrder("notebook"));

// 5. Write a JavaScript function that converts the first letter of each word in upper case.
function titleCase(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
console.log(titleCase("hello amazing world"));

// 6. Write a JavaScript function that finds the longest word within a string.
function longestWord(str) {
  var words = str.split(' ');
  var longest = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(longestWord("Learning JavaScript Functions"));

// 7. Write a JavaScript function that counts the number of vowels in a string.
function countVowels(str) {
  var count = 0;
  var vowels = "aeiouAEIOU";
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Bright sunny day"));

// 8. Write a JavaScript function to check if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(11));

// 9. Write a JavaScript function which accepts an argument and returns the type.
function getType(value) {
  return typeof value;
}
console.log(getType(true));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result[i] = [];
    for (var j = 0; j < n; j++) {
      result[i][j] = i === j ? 1 : 0;
    }
  }
  return result;
}
console.log(identityMatrix(3));

// 11. Write a JavaScript function to find the second lowest and second greatest numbers.
function secondLowestGreatest(arr) {
  var sorted = arr.slice().sort(function(a, b) { return a - b; });
  return [sorted[1], sorted[sorted.length - 2]];
}
console.log(secondLowestGreatest([10, 4, 7, 2, 9]));

// 12. Write a JavaScript function to check if a number is perfect.
function isPerfect(num) {
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
console.log(isPerfect(6));

// 13. Write a JavaScript function to compute the factors of a positive integer.
function factors(num) {
  var result = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(factors(18));

// 14. Write a JavaScript function to convert an amount to coins.
function amountToCoins(amount, coins) {
  var result = [];
  for (var i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}
console.log(amountToCoins(59, [25, 10, 5, 1]));

// 15. Write a JavaScript function to compute the value of b^n.
function power(b, n) {
  return Math.pow(b, n);
}
console.log(power(3, 4));

// 16. Write a JavaScript function to extract unique characters from a string.
function uniqueChars(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) === -1) {
      result += str[i];
    }
  }
  return result;
}
console.log(uniqueChars("javascriptfunction"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function letterOccurrences(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (result[c]) {
      result[c]++;
    } else {
      result[c] = 1;
    }
  }
  return result;
}
console.log(letterOccurrences("programming"));

// 18. Write a function for searching JavaScript arrays with a binary search.
function binarySearch(arr, target) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(binarySearch([2, 4, 6, 8, 10], 6));

// 19. Write a JavaScript function that returns array elements larger than a number.
function largerThan(arr, num) {
  return arr.filter(function(n) {
    return n > num;
  });
}
console.log(largerThan([10, 20, 30, 40, 50], 25));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
function randomId(length) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = '';
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * chars.length);
    result += chars[index];
  }
  return result;
}
console.log(randomId(8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (e.g. 2) combinations in an array.
function fixedLengthSubsets(arr, length) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (length === 2) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
console.log(fixedLengthSubsets([4, 5, 6], 2));

// 22. Write a JavaScript function that counts the number of occurrences of a specified letter.
function countLetter(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) count++;
  }
  return count;
}
console.log(countLetter("innovation", "n"));

// 23. Write a JavaScript function to find the first not repeated character.
function firstNonRepeated(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (str.indexOf(c) === str.lastIndexOf(c)) {
      return c;
    }
  }
  return null;
}
console.log(firstNonRepeated("aabbcdeeff"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([100, 25, 50, 75, 10]));

// 25. Write a JavaScript function that returns the longest country name.
function longestCountryName(arr) {
  var longest = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) longest = arr[i];
  }
  return longest;
}
console.log(longestCountryName(["Brazil", "Indonesia", "United Kingdom"]));

// 26. Write a JavaScript function to find longest substring in a given string without repeating characters.
function longestUniqueSubstring(str) {
  var max = '';
  for (var i = 0; i < str.length; i++) {
    var substr = '';
    for (var j = i; j < str.length; j++) {
      if (substr.indexOf(str[j]) !== -1) break;
      substr += str[j];
    }
    if (substr.length > max.length) max = substr;
  }
  return max;
}
console.log(longestUniqueSubstring("pwwkew"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
function longestPalindrome(str) {
  var max = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      var substr = str.slice(i, j);
      var rev = substr.split('').reverse().join('');
      if (substr === rev && substr.length > max.length) max = substr;
    }
  }
  return max;
}
console.log(longestPalindrome("racecarannakayak"));

// 28. Write a JavaScript program to pass a function as a parameter.
function callFunction(fn) {
  fn();
}
callFunction(function() {
  console.log("Function passed as parameter");
});

// 29. Write a JavaScript function to get the function name.
function getFunctionName(fn) {
  return fn.name;
}
console.log(getFunctionName(callFunction))
