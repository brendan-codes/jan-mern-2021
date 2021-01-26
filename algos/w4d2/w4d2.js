/*
  https://leetcode.com/problems/backspace-string-compare/

  BACKSPACE STRING COMPARE

  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.

  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time

  // ab#c
  // ac

  Examples:
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac"

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become ""

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c"
*/

function backspaceCompare(S, T) {
    let sBackspaced = processBackspaces(S);
    let tBackspaced = processBackspaces(T);

    if (sBackspaced === tBackspaced) {
        return true;
    } else {
        return false;
    }
}

function processBackspaces(s) {
    let backspaceCount = 0;
    let str = "";

    // loop backwards and skip if we see a #
    for (let i = s.length - 1; i >= 0; i--) {
        let isBackspace = s[i] === "#";

        if (backspaceCount > 0 && !isBackspace) {
            backspaceCount--;
        } else if (isBackspace) {
            backspaceCount++;
        } else {
            str = s[i] + str;
        }
    }
    return str;
}


/*
    CAN STRING ONE BE MADE FROM STRING TWO

    Given two strings,
    return true if the first string can be built from the letters in the 2nd string

    Ignore case

    Input: "Hello World", "lloeh wordl"
    Output: true

    Input: "Hey", "hello"
    Output: false, second string is missing a "y"

    Input: "hello", "helo"
    Output: false, second string doesn't have enough "l" letters
 */

function canBuildS1FromS2(neededStr, availableStr) {
    const availableHash = {};

    // build hash
    for (const availableChar of availableStr) {
        const availableCharLower = availableChar.toLowerCase();

        if (availableHash.hasOwnProperty(availableCharLower) === false) {
            availableHash[availableCharLower] = 1;
        } else {
            availableHash[availableCharLower]++;
        }
    }

    // {a: 10, b: 1, c: 1, d: 2}

    // check hash
    for (const neededChar of neededStr) {
        const neededCharLower = neededChar.toLowerCase();

        if (availableHash.hasOwnProperty(neededCharLower) === false) {
            // never existed
            return false;
        } else if (availableHash[neededCharLower] === 0) {
            // existed but emptied
            return false;
        } else {
            // exists and must be decremented
            availableHash[neededCharLower]--;
        }
    }

    // survive all that? you are true
    return true;
}