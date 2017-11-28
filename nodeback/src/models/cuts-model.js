const mongoose = require("mongoose");
const Schema = mongoose.Schema;

cutSchema = new Schema({
    cutDescription: { type: String, required: "El campo Descripcion es obligatorio" },
    cutTime: { type: String, required: "El campo Tiempo es obligatorio" },
    cutImage: { type: String, required: "El campo Foto es obligatorio" }
});

module.exports = mongoose.model('cut', cutSchema);