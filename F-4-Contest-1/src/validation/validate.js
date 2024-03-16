
// export const validateData = (email, password,confirmPassword) => {
//     const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//     const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
//     const isMatched = password !== confirmPassword ;

//     if (!isEmailValid) return "Invalid Email Format";
//     if (!isPasswordValid) return "Password must be at least 8 character";
//     if(isMatched) return "Passwords do not match"
//     return null;

// }

export const validEmail = (email) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
    return isEmailValid;
}

export const validPassword = (password) => {
   if(password.length > 7){
    return true;
   }
    // return false ;
}

export const checkMatched = (pass, cpass) => {
    if(cpass.length > 7)
    return pass === cpass
}