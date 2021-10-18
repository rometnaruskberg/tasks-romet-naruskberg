function greeting(n) {
    if (!n) {
        console.log('Hi!')
    } else if (n > 10) {
        for( let i = 0; i < n; i++ ) {
          console.log('Hi!')
        }
    } else {
        for( let i = 0; i < n; i++ ) {
            console.log('Hello!')
        }
    }
    console.log('n = ' + n) // Paneb logile n= algusesse ja selle järel siis vastuse
}

greeting()
greeting(2)
greeting(3)
greeting(12)