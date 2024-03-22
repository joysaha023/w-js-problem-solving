
// Problem: Count the character occurrence of a given string

// Simple Input: 
// string: javascript
//character: a

//Output: 2

function countStringOccurance(str, chr){
    let count = 0;
    for (let i =0; i < str.length; i++) {
        let sChr = str[i];

        if(sChr === chr) {
            count++;
        }
    }
    return count;
}


const result = countStringOccurance("javascript", "a")
console.log(result)