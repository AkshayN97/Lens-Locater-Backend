const {Schema, model} = require('mongoose')

const reviewsSchema = new Schema({
    customerId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    serviceProviderId : {
        type : Schema.Types.ObjectId,
        ref : 'ServiceProvider'
    },
    review : String,
    rating : String 
}, {timestamps: true})

const Review = model('Reviews', reviewsSchema)

module.exports = Review