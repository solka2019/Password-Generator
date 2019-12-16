
// "You must select at least one character set!"
var passwordSize = 0;
passwordSize = prompt("Enter the password length between 8 and 128 characters");
if (passwordSize < 8 || passwordSize > 128 ){
    alert ("Invalid lenght")
    passwordSize = prompt("entre de novo porq vc errou");
    if (passwordSize < 8 || passwordSize > 128)
    {
        alert ("invalid");
        passwordSize = prompt('enter the value');
        // isso nao deve ser um jeito legal porque vc tera' q ficar testando a cada vez q o usuario erre
    }
}

// continue ...

// Um jeito melhor
if (condicao for true) doSomething;
else doSomethigElse;
if (condicao for true) {
    // do many things 
} else {
    // do other many things
}

do {} while(condicao);
do something while (condicao == true);
do alert("test") while (true);

var passwordSize = 0;
var testUserInput = false;
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@##$%^&*(";
var allCharsToUseForPassword = '';
var result = ''

do {
    passwordSize = prompt("Enter the password length between 8 and 128 characters");
    if(passwordSize > 7 && passwordSize < 129)
    {
        testUserInput = true;
    }
} while (testUserInput === false);

testUserInput = false;
var useSpecialChars = confirm("Use special characters?");
alert("Selection for special chars: " + useSpecialChars);

// continue perguntando os outros tipos de characteres
// agora concatena dentro do allCharsTouseForPassword dependendo do tipo de chars q o usuario escolheu

allCharsToUseForPassword = allCharsToUseForPassword + upperCharacters;

if (useSpecialChars)
{
    allCharsToUseForPassword = allCharsToUseForPassword + specialChars;
}


for ( var i = 0; i < passwordSize; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * allCharsToUseForPassword.length));
 }

