const layout = require('./layout')

exports.logs = {
    type1: (title, result, color = ['white', 'white']) => layout.type1(title, result, color),
    type2: (title, result, color = ['white', 'white']) => layout.type2(title, result, color),
    type3: (title, result, color = ['white', 'white']) => layout.type3(title, result, color),
    type4: (title, result, color = ['white', 'white']) => layout.type4(title, result, color),
}

exports.text = (result, utils = ['white', 'bold']) => layout.text(result, utils)