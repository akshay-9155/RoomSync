const mongoose = require("mongoose");

export const validateObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

