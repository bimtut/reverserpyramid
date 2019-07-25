function pyramid (length) {
    let result=''
    if (Number(length)%2 != 1) {
        console.log("bilangan harus ganjil atau ini bukan bilangan")
    } else {
        let space = 0, start = length, arr = []
        while (start >= 0) {
            let arrInside = ''
            for (let j = 0; j < space; j++) {
                arrInside+=' '
            }
            for (let k = 0; k < start; k++) {
                arrInside+='*'
            }
            for (let l = 0; l < space; l++) {
                arrInside+=' '
            }
            space++
            start -= 2
            result += arrInside + "\n"
        }
    }
    return result
}

console.log(pyramid(5))