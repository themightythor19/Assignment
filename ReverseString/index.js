function reverseString(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
      reversedString = reversedString + string[i];
    }
    return reversedString;
  }
  document.getElementById("button").addEventListener("click", function() {
    const inputString = document.getElementById("input").value;
    const outputString = reverseString(inputString);
    document.getElementById("result").innerHTML = "Here's your reversed string:  " + outputString;
  });
