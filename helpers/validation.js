const validDomains = ['gmail', 'hotmail'];

function emailValidation(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    
    const domain = email.split('@')[1].split('.')[0];
    
    if (validDomains.includes(domain)) {
        return true;
    }
    return false;
}

function passwordValidation(password) {
    const passwordRegex = /^(?=.*[A-Z])[A-Za-z0-9]{8}$/;
    if (passwordRegex.test(password)) return true
    return false
}

module.exports = {emailValidation, passwordValidation}