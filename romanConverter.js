let roman = {
    1: "I",
    5: "V",
    10: "X",//10
    50: 'L',//50
    100: "C",//100
    500: "D",//500
    1000: "M",//1000
}

function recursionNumber(num, nu) {
    let resultRoman = '';
    if (num == 0) {
        return resultRoman;
    } else if (nu == 10) {
        return resultRoman = roman[10] + recursionNumber(num - 1, nu)
    } else if (nu == 1) {
        return resultRoman = roman[1] + recursionNumber(num - 1, nu)
    } else if (nu == 100) {
        return resultRoman = roman[100] + recursionNumber(num - 1, nu)
    } else if (nu == 1000) {
        return resultRoman = roman[1000] + recursionNumber(num - 1, nu)
    }
}

function convertToRoman(num) {
    let arr = (num + '').split('');
    let result = '';
    for (let i = 0; i < arr.length;) {
        let str = arr.join('')
        console.log(str)
        if (arr[i] == 0) {
            i++
        } else if (roman.hasOwnProperty(str)) {

            result += roman[str];
        } else if (arr.length < 2) {
            if ((arr[i] != 4) && (arr[i] != 5) && (arr[i] != 9)) {

                if ((arr[i] - 5) > 0) {

                    result += roman[5] + recursionNumber((arr[i] - 5), 1);
                } else {
                    result += recursionNumber(arr[i], 1);
                }
            } else if ((arr[i] == 4)) {

                result += roman[1] + roman[5];
            } else if ((arr[i] == 9)) {

                result += roman[1] + roman[10];
            } else if (roman.hasOwnProperty(str)) {

                result += roman[str];
            }
        } else if (arr.length == 2) {
            if ((arr[i] != 4) && (arr[i] != 5) && (arr[i] != 9)) {

                if ((arr[i] - 5) > 0) {
                    result += roman[50] + recursionNumber((arr[i] - 5), 10);
                } else {
                    result += recursionNumber(arr[i], 10);
                }
            } else if ((arr[i] == 4)) {

                result += roman[10] + roman[50];
            } else if ((arr[i] == 9)) {

                result += roman[10] + roman[100];
            } else if ((arr[i] == 5)) {

                result += roman[50];
            }
        } else if (arr.length == 3) {
            if ((arr[i] != 4) && (arr[i] != 5) && (arr[i] != 9)) {

                if ((arr[i] - 5) > 0) {

                    result += roman[500] + recursionNumber((arr[i] - 5), 100);
                } else {
                    result += recursionNumber(arr[i], 100);
                }
            } else if ((arr[i] == 4)) {

                result += roman[100] + roman[500];
            } else if ((arr[i] == 9)) {

                result += roman[100] + roman[1000];
            } else if ((arr[i] == 5)) {

                result += roman[500];
            }
        } else if (arr.length == 4) {
            result += recursionNumber(arr[i], 1000);

        }
        if (arr[i + 2] == 0) {
            arr.shift();
            arr.shift();
        } else if (arr[i + 1] == 0) {
            arr.shift();
        }
        arr.shift();
    }
    return result;

}

convertToRoman(3);