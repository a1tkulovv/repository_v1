let password = '123';

let prom = prompt('Введите пароль');

for (let i = 0; i < 3; i++) {

    if (prom === password) {

        let num = prompt('Введите сумму');
        +num;
        switch (true) {
            case num < 500: {
                alert('Сумма меньше минимума');
                break;
            }
            case num >= 500: {
                alert(`Ваш баланс : ${num}`);
                break;
            }
            default:
                alert('Введите только числа');
        }
    } else if(i < 2) {
        prom = prompt(`Пароль не верный введите снова. Осталось попыток : ${3 - i}`)
        if (prom === password) {
            let num = prompt('Введите сумму');
            +num;
            switch (true) {
                case num < 500: {
                    alert('Сумма меньше минимума');
                    break;
                }
                case num >= 500: {
                    alert(`Ваш баланс : ${num}$`);
                    break;
                }
                default:
                    alert('Введите только числа');
            }
        }
    }else {
        alert('У вас не осталось попыток');
    }
    if (password === prom) break
}

