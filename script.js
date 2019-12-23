// Run this as the HTML loads the script.js
var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", generatePassword);
// at this point, only the click will cause the function to run

var copyButton = document.getElementById("copy");
copyButton.addEventListener("click", copyText);

function copyText() {
    /* Get the text field */
    var copyText = document.getElementById("your-password");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }


function generatePassword() {

    // Test area for you to try alerts to check value of elements
    // or values of variables you want to use
    //window.alert(document.getElementById("chkUpper").checked);

    var passwordSize = 0;
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var specialChars = "!@#$%^&*()-+/.<>";
    var numericChars = "1234567890";

    var choiceUpperCase = false;
    var choiceLowerCase = false;
    var choiceSpecialChar = false;
    var choiceNumericChars = false;
    var allCharsToUseForPassword = '';
    var totalSizeOfSetOfChars = 0;
    var result = '';

    //return;  // put the return here if you are testing alerts to see value of elements

    // need to find out what the user selected from the HTML, 
    // so this function can later make the complete set of 
    // characters to choose from to create the final password

    choiceUpperCase = document.getElementById("chkUpper").checked;
    choiceLowerCase = document.getElementById("chkLower").checked;
    choiceSpecialChar = document.getElementById("chkSpecial").checked;
    choiceNumericChars = document.getElementById("chkNumeric").checked;

    // now, we tell the computer how to concatenate the sets of
    // different characters based on the user choices
    if (choiceUpperCase == true) {
        allCharsToUseForPassword += upperChars;
    }

    if (choiceLowerCase == true) {
        allCharsToUseForPassword += lowerChars;
    }

    if (choiceNumericChars) {
        allCharsToUseForPassword += numericChars;
    }

    if (choiceSpecialChar) {
        allCharsToUseForPassword += specialChars;
    }

    // Now that we have the set of all possible letters,
    // we need to create a loop to pick random letters from that set.
    // the Math.randon function gives a float from 0 to 1 .
    // How can we transform that float into an index in the set,
    // so we can pick that letter?
    // 0 -> 1 => x 100 -> %
    // 0 is the first element, and 100% is the last
    // you can now select an item from the range, that matches the percentage
    // of the range.

    do {
        passwordSize = window.prompt("Enter the password length between 8 and 128 characters");
    } while (passwordSize < 8 || passwordSize > 128);

    // if passwordSize = 10, the i goes from 0 to 9

    totalSizeOfSetOfChars = allCharsToUseForPassword.length - 1;

    for (var i = 0; i < passwordSize; i++) {
        result += allCharsToUseForPassword.charAt(Math.floor(Math.random() * totalSizeOfSetOfChars));
    }


    // Tell the user the password you selected and placed the 
    // characters in the 'result' variable
    
    var outputText = document.getElementById("your-password");
    outputText.innerText = result;

    //if (choiceUpperCase)



    // do {
    //     // passwordSize = window.prompt("Enter the password length between 8 and 128 characters");
    // } while (passwordSize < 8 || passwordSize > 128);
    // do alert("test") while (true);

    //window.alert("Choose your characteres. You must select at least one of the following:")

    // function genpw(id,plen,arg1,arg2,arg3,arg4){
    //     obj=document.getElementById(id);
    //     arg1=document.getElementById(arg1);
    //     arg2=document.getElementById(arg2);
    //     arg3=document.getElementById(arg3);
    //     arg4=document.getElementById(arg4);
    //     obj.value=GeneratePassword(plen,arg1.checked,arg2.checked,arg3.checked,arg4.checked);
    // }

    // function GeneratePassword(length,arg1,arg2,arg3,arg4) {
    //     var res = '';
    //     var str='';
    //     var str1='qwertyuioplkjhgfdsazxcvbnm';
    //     var str2='QWERTYUIOPLKJHGFDSAZXCVBNM';
    //     var str3='1234567890';
    //     var str4='!@#$%^&*.,';

    //     if(arg1){ str=str+str1; }
    //     if(arg2){ str=str+str2; }
    //     if(arg3){ str=str+str3; }
    //     if(arg4){ str=str+str4; }

    //     for (i=0; i < length; i++) {
    //         j = getRandomNum(str.length);
    //         res = res + str.charAt(j);
    //     }
    //     return res;
    // }

    // function getRandomNum(cnt) {
    //     // between 0 - 1
    //     var rndNum = Math.random()
    //     rndNum = parseInt(rndNum * cnt);
    //     return rndNum;
    // }

    // do {
    //     passwordSize = prompt("Enter the password length between 8 and 128 characters");
    //     if(passwordSize > 7 && passwordSize < 129)
    //     {
    //         testUserInput = true;
    //     }
    // } while (testUserInput === false);

    // testUserInput = false;
    // var useSpecialChars = confirm("Use special characters?");
    // alert("Selection for special chars: " + useSpecialChars);

    // // continue perguntando os outros tipos de characteres
    // // agora concatena dentro do allCharsTouseForPassword dependendo do tipo de chars q o usuario escolheu

    // allCharsToUseForPassword = allCharsToUseForPassword + upperCharacters;

    // if (useSpecialChars)
    // {
    //     allCharsToUseForPassword = allCharsToUseForPassword + specialChars;
    // }


    // for ( var i = 0; i < passwordSize; i++ ) {
    //     result += characters.charAt(Math.floor(Math.random() * allCharsToUseForPassword.length));
    //  }

}