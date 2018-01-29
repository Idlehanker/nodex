//var express = require('../../');

//var path = require('path')
//var app = module.exports = express()

const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res)=>{
    res.send('<ul>'
	    + ' <li>Download <a href="/files/android_debugcent.apk">Appcan Debug apk</a>.</li>'
	    + ' </ul>')
})

app.get('/file/:file(*)', (req, res, next)=>{
    const filePath = path.join(__dirname, 'files', req.params.file)
    res.download(filePath, (err)=>{
	if(!err) return
	if(err && err.status != 404) return next(err)

	res.statusCode = 404
	res.send('Cann\'t download this file, pls check it!!')
    })
})

app.listen(3003, ()=> console.log('Express started on port 3003'))
