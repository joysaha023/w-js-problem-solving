
// Problem: Find the palindrome of a given string/number

// Sample input:
// madam
// alia

// Sample output:
// true 
// false


function isPalindrome(str){
    let left = 0;
    let right = str.length-1;


    while(left < right){
        if(str[left] != str[right]){
            return false;
        }

        left++;
        right--;

    }
    return true;
}

const result = isPalindrome('alia')
console.log(result)