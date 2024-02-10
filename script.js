const userInput = document.getElementById('user-input');

const checkBtn = document.getElementById('check-btn')

const clearBtn = document.getElementById('clear-btn')

const result = document.getElementById('results-div')


checkBtn.addEventListener('click', () => {
    let userInputValue = userInput.value;

    let regex = /^(1\s?)?(\(\d{3}\)|(\d{3}))[\s-]?\d{3}[\s-]?\d{4}$/g;

    /*
    Regex explanation

    //  ^ = Starts with
    // (1\s?)? = 1 or blank space. (Both are optional)
    // (\(\d{3}\)|(\d{3}))
    // (....) = Capture group
    // (\(... = Parenthesis start
    // ((\d{3}) = Three consecutive digits
    // ....\) = Parenthesis end
    // (\(\d{3}\)|(\d{3})) = Capturing group with three consecutive digits with or without parentheses 
    // | = or
    // (\d{3}) = Capturing group with three consecutive digits without parenthesis
    // [\s-]? = Optional space or dash
    // \d{3} = Three consecutive digits
    // [\s-]? = Optional space or dash
    // \d{4}$
    // \d{4} = Four consecutive digits
    // $ = Ends with
    // /g = Global flag
    */


    if (userInputValue === '') {
        alert('Please provide a phone number')
    }
    else if (regex.test(userInputValue)) {
        result.textContent = `Valid US number: ${userInputValue}`
    }
    else {
        result.textContent = `Invalid US number: ${userInputValue}`
    }
})



clearBtn.addEventListener('click', () => {
    result.textContent = ''
})