function checkPalindrome(event) {
    event.preventDefault();
    let result = document.getElementById('answer');
    let text = document.getElementById('text').value.toLowerCase();
    let reverseText = text.split("").reverse().join("");

    if (text === '') {
        result.innerHTML = 'Please input a value';
        result.style.color = 'red';
        return;
    } else if (text === reverseText) {
        result.innerHTML = 'Yes, It is a Palindrome.';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'No, It is not a Palindrome.';
        result.style.color = 'red';
    }
}

const button = document.getElementById('button');
button.addEventListener('click', checkPalindrome);


// function checkPalindrome(event) {
//     event.preventDefault();
//     let result = document.getElementById('result');
//     let text = document.getElementById('text-input').value;
//     let reverseText = text.split("").reverse().join("");
//     let lowerText = text.toLowerCase();

//     if (text === '') {
//         alert('Please input a value');
//         result.style.color = 'red';
//         return;
//     } 
//     else if (lowerText === reverseText || lowerText.length === 1) {
//         result.innerHTML = `${text} is a palindrome`;
//         result.style.color = 'green';
//     } else {
//         result.innerHTML = `${text} is not a palindrome`;
//         result.style.color = 'red';
//     }
// }

// const button = document.getElementById('check-btn');
// button.addEventListener('click', checkPalindrome);