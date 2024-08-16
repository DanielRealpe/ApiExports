const Export = require('../models/export')

//Get all documents from exports
const getExport = async (req, res) => {
    const exports = await Export.find()
    res.json(exports)
}

const postExport = async (req, res) => {
    const body = req.body //Get the body send from postman or a form
    let msg = 'Export inserted succsesul'
    try {
        const exports = new Export(body) //Create the object Vehicle in RAM
        await exports.save() //Insert object at the collection
    }
    catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}

const putExport = async (req, res) => {
    const _id = req.params.id
    const { product, price, weight } = req.body //Desestructuración
    let msg = 'Export updated succsefully'
    try {
        await Export.findByIdAndUpdate({ _id: _id }, { product: product, price: price, weight: weight }) //Primeras llaves corresponden al filtro (where) y despues de la coma van las modificaciones
    } catch (error) {
        msg = error
    }
    res.json({ msg: msg })
}


const deleteExport = async (req, res) => {
    const _id = req.params.id //Get param _id
    try {
        await Export.findByIdAndDelete({ _id: _id }) //Delete object by
        res.json('Export deleted successfully!')
    } catch (error) {
        res.status(500).json(error, { msg: 'There was a problem deleting the exports' })

    }
}

module.exports = { //Export functions
    getExport,
    postExport,
    putExport,
    deleteExport
}