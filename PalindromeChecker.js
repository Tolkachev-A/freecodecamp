function palindrome(str) {
    str = str.toLowerCase();
    let regexp = /[a-zA-Z0-9]*/gi;
    let words = str.match(regexp)
    while(words.includes('')) {
        let index = words.indexOf('');
        words.splice(index,1)
    };

    let results = words.join('') == words.join('').split('').reverse().join('');
    return results;



}

palindrome("eye");