function rot13(str) {
    const arr = str.split('')
    for(let i=0; i < arr.length; i++){
        if(/[A-Z]/.test(arr[i])){
            const code =  arr[i].charCodeAt(0)
            let strRot13 ;
            if((code + 13) > 90){
                strRot13 = ((13 - (90 - code) ) + 64);
            }
            else{
                strRot13 = code + 13;
            }
            arr[i] = String.fromCharCode(strRot13);;
        }
    }
    return arr.join('');
}

rot13("SERR PBQR PNZC");