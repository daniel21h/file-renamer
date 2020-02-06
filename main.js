const express = require('express')
const fs = require('fs')

const app = express()

fs.readdir("./test", (err, files) => {
    console.log(files)
})

fs.rename('/home/daniel/www/file-renamer/teste/Perfeito.pdf', '/home/daniel/www/file-renamer/test/Boleto.pdf', function(err) {
    if ( err ) console.log('ERROR: ' + err)
})