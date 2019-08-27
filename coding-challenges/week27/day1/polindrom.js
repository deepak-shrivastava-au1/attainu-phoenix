function checkPolindrome(strng) {
    strng = strng.toLowerCase().split("");
    let newStrng = strng.reverse().join();
    console.log(newStrng);
    strng = strng.join();
    console.log(strng);

    if (strng === newStrng) {
        console.log ("Yes! the input string is a polindrome");
    }
    else {
        console.log ("No! the input string is not a polindrome");
    }
}

checkPolindrome("Madam");