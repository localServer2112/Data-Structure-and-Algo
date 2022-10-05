let x = 121;
const isPalindrome = (x)=>{
    return x == String(x).split('').reverse().join('');
}
console.log(isPalindrome(121))