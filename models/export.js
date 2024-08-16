const {Schema, model} = require('mongoose') //Dependencia para hacer transacciones hacia Mongo

const ExportSchema = new Schema ({
    product:{
        type: String,
        required: [true, 'The field product is required'],

    },
    price:{
        type: Number,
        required: [true, 'The field price is required'],
    },
    weight:{
        type: String,
        required: [true, 'The field weight is required'],
    },
})

module.exports = model('Export',ExportSchema,'export')