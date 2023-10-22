function palindrome(number){
    var reverse = 0;
    var dupe = number;
    while(dupe>0)
        {
            rem = dupe%10;
            reverse = reverse*10+rem;
            dupe = Math.floor(dupe/10);
        }
        return number === reverse;
}
document.getElementById("button").addEventListener("click", function(){
    const inputNumber = parseInt(document.getElementById("input").value);
    const isPalindrome = palindrome(inputNumber);
    var output = "";
    if(isPalindrome){
         output = "Yay! It's a Palindrome";
    }
    else{
        output = "Oops! Not a palindrome";
    }
       
    document.getElementById("result").innerHTML = output;
})