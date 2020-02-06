const express = require('express')
const fs = require('fs')

const app = express()

fs.readdir("./test", (err, files) => {
    console.log(files)
})

fs.rename('./test/Boletos.pdf', './teste/Perfeito.pdf', function(err) {
    if ( err ) console.log('ERROR: ' + err)

})