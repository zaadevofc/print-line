const cl = require('./lib/cmd')

console.log(cl.logs.type1('404 - ERROR', 'Maaf ada kesalahan', ['red', 'white']))
console.log(cl.logs.type1('305 - WAIT', 'Mohon tunggu sebentar...', ['yellow', 'white']))
console.log(cl.logs.type1('200 - SUCCESS', 'Login berhasil!', ['greenBright', 'white']))

console.log(cl.logs.type2('404 - ERROR', 'Maaf ada kesalahan', ['red', 'white']))
console.log(cl.logs.type2('200 - SUCCESS', 'Login berhasil!', ['greenBright', 'white']))
console.log(cl.logs.type2('305 - WAIT', 'Mohon tunggu sebentar...\n', ['yellow', 'white']))

console.log(cl.logs.type3('404 - ERROR', 'Maaf ada kesalahan', ['red', 'white']))
console.log(cl.logs.type3('200 - SUCCESS', 'Login berhasil!', ['greenBright', 'white']))
console.log(cl.logs.type3('305 - WAIT', 'Mohon tunggu sebentar...\n', ['yellow', 'white']))

console.log(cl.logs.type4('404 - ERROR', 'Maaf ada kesalahan', ['red', 'white']))
console.log(cl.logs.type4('200 - SUCCESS', 'Login berhasil!', ['greenBright', 'white']))
console.log(cl.logs.type4('305 - WAIT', 'Mohon tunggu sebentar...', ['yellow', 'white']))

console.log(cl.text('\nSucces registered user!', ['greenBright', 'underline']))
console.log(cl.text('Succes registered user!', ['cyanBright', 'bold']))
console.log(cl.text('Succes registered user!', ['magentaBright', 'italic']))
console.log(cl.text('Succes registered user!', ['yellowBright', 'strikethrough']))
console.log(cl.text('Succes registered user!', ['redBright', 'inverse']))