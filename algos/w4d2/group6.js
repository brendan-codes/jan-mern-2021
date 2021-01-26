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

function backspaceCompare(S, T) {}


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

function canBuildS1FromS2(neededStr, availableStr) {}