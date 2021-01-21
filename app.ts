let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Aliff';
if(typeof userInput === 'string'){ //typechecker
    userName = userInput;
}

function generateError(message: string, code: number): never { //never function
    throw {message: message, errorCode: code };
    // while(true) {} //never returns
}

generateError('An error occured!', 500);