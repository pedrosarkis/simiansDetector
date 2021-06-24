const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const Joi = require('joi');



const dnaResearchSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    dna: {type: Array},
    isSimian: {type: Boolean},
})

dnaResearchSchema.methods.joiValidate = dna => {
    const Schema = {
        dna: Joi.array().items(Joi.string())
    }
    return Joi.validate(dna, Schema);
}

dnaResearchSchema.statics.insert = async function (dna) {
    return await this.create(dna);
}

dnaResearchSchema.statics.getAll = async function() {
    return await this.find({}).lean();
}

dnaResearchSchema.statics.deleteById = async function (id) {
    return await this.deleteOne({'_id': Mongoose.Types.ObjectId(id)});
}


module.exports = Mongoose.model('dnaResearch', dnaResearchSchema);