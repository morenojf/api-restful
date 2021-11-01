var {app, puerto, mongoose} = require('./configs/server.config')

mongoose.connect(
    'mongodb://localhost:27017/users',
    {useNewUrlParser: true},
    (err, res) => {
        err && console.log('Error conectando a la base de datos');
        app.listen(puerto, () =>{
            console.log('Servidor corriendo en hhtp://localhost:', puerto)
        });
    }
);














// app.get('/', (req, res) =>{
//     res.send('Hoola pequeño mundo')
// })


 





