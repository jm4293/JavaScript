let display  = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let display_content = '';
let result = 0;
let operation = '';

q
buttons.forEach( (buttons) => {
    buttons.addEventListener('click', (click_content) => {
        switch (buttons.id) {
            case 'addition' :
                result = Number(display_content);
                operation = '+';
                display.innerText = '+';
                display_content = '';
                break;
            case 'subtraction' :
                result = Number(display_content);
                operation = '-';
                display.innerText = '-';
                display_content = '';
                break;
            case 'multiplication' :
                result = Number(display_content);
                operation = '*';
                display.innerText = '*';
                display_content = '';
                break;
            case 'division' :
                result = Number(display_content);
                operation = '/';
                display.innerText = '/';
                display_content = '';
                break;
            case 'clear' :
                result = 0;
                display_content = '';
                operation = '';
                display.innerText = display_content;
                break;
            case 'enter' :
                switch (operation) {
                    case '+' :
                        result += Number(display_content);
                        break;
                    case '-' :
                        result -= Number(display_content);
                        break;
                    case '*' :
                        result *= Number(display_content);
                        break;
                    case '/' :
                        result /= Number(display_content);
                        break;
                }
                display.innerText = result;
                display_content = result;
                break;
            case 'dot' :
                break;
            default :
                display_content += click_content.target.innerHTML;
                display.innerHTML = display_content;
                break;
        }
    });
});