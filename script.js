const button = document.getElementById('check-btn');
const text = document.getElementById('text-input');
const result = document.getElementById('result');

const buttonFunction = () => {
    const regex = /[^a-zA-Z0-9]/g;    //global regex for numbers,letters and symbols
    const str = text.value;

    if (!str) {
        alert('Please input a value');
        return
    }

    const value = str.replace(regex, "").toLowerCase();

    const reversed = value.split("").reverse().join("");

    if (value === reversed) {
        result.textContent = `${str} is a palindrome`;
    } else {
        result.textContent = `${str} is not a palindrome`;
    }
}

button.addEventListener("click", buttonFunction);