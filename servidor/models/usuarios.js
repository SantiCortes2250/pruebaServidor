const mongoose = require('mongoose')


const ProjectSchema = mongoose.Schema({
    nombre: {
        type: String,
        requerid: true,
        trim: true
    },
    pais: {
        type: String,
        requerid: true,
    }
})

module.exports = mongoose.model('Usuarios', ProjectSchema)