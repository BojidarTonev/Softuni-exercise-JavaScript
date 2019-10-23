const mongoose = require('mongoose');

const tokenBlackListSchema = new mongoose.Schema({
    token: String
});

module.exports = mongoose.model('TokenBlackList', tokenBlackListSchema, 'tokenBlackList');