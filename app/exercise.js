exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    for (var i in arr) { total += arr[i]; }
    return total;
  },

  remove : function(arr, item) {
    for (var i in arr) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  reverseString : function(str) {
    return str.split("").reverse().join("");
  },

  longestSubString : function(str) {
    var words = str.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < words.length; i++) {
      if (longest < words[i].length) {
        longest = words[i].length;
        word = words[i];
      }
    }
    return word;
  },

  letterMoveForward : function(str) {
    var abc = "abcdefghijklmnopqrstuvwxyz"
    var newString = "";
    for (var i = 0; i < str.length; i++) {
      var letter = str[i];
      var index = abc.indexOf(letter);
      if (index < 0) {
          newString += letter;
      } else if (index === abc.length - 1) {
          newString += abc[0];
      } else {
          newString += abc[index + 1];
      }
    }
    return newString;
  },

  capitalizeWords : function(str) {
    var words = str.split(" ");
    var word = null;
    var newSentence = [];
    for (var i = 0; i < words.length; i++) {
      word = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      newSentence.push(word);
    }
    return newSentence.join(" ");
  }

};
