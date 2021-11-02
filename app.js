var {app, puerto} = require('./configs/server.config')
const mongoose = require('mongoose')





app.listen(puerto, () =>{
    console.log(`Server running on ${puerto}`);
})














// app.get('/', (req, res) =>{
//     res.send('Hoola pequeño mundo')
// })


 





