const path = require('path')
module.exports = {
    entry: {
        app: path.join(__dirname, '/app.js')
    },
    output: {
        filename: './bundle.js'
    }
}