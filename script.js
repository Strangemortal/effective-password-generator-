


function generatePassword() {
    const baseWord = document.getElementById('baseWord').value;
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const includeUpperCase = document.getElementById('includeUpperCase').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    let charset = 'abcdefghijklmnopqrstuvwxyz';

    if (includeUpperCase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (includeSpecialChars) {
        charset += '!@#$%^&*()_-+=<>?';
    }

    let password = baseWord || '';

    while (password.length < passwordLength) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    
    document.getElementById('generatedPassword').value = password;
}


function copyToClipboard() {
    const generatedPassword = document.getElementById('generatedPassword');

    
    generatedPassword.select();
    generatedPassword.setSelectionRange(0, 99999); 

    
    document.execCommand('copy');

    
    generatedPassword.setSelectionRange(0, 0);
    alert('Password copied to clipboard!');
}
