function casino(){
    let number = Math.floor(Math.random()*100);
    for (let count = 1; count<=10; count++){
        let result = +prompt(`Попытка №${count}, Введите число`)
        if (result == number){
            return alert(`Вы угодали число! Попыток: ${count}, Число ${number} `)
        }
        else if (result<number){
            alert (`Ваше число ${result}, меншьше загаданного!`)
        }
        else if (result>number){
            alert (`Ваше число ${result}, больше загаданного!`)
        }
    }
    return alert (`Вы не угодали число! Число: ${number}`)
    
}
casino()