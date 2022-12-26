const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")
const path = require("path")


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', "index.html"))
})
app.get('/searchword', (req, res) => {
    // res.send('Hello World!')
    console.log(req.query)
    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: req.query.entry},
        headers: {
            'X-RapidAPI-Key': '3f199ef6bfmshafa3250bf81b63ap16d0e8jsne5477cf9cbbb',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
       
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });

    // let response = {}
    // response.data = {
    //     entry: 'ridiculous',
    //     request: 'ridiculous',
    //     response: 'ridiculous',
    //     assoc_word: ['funny', 'stupid', 'silly'],
    //     assoc_word_ex: ['funny', 'stupid', 'silly', 'absurd', 'comical'],
    //     version: '7.4.2',
    //     author: 'twinword inc.',
    //     email: 'help@twinword.com',
    //     result_code: '200',
    //     result_msg: 'Success'
    // }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`)

})