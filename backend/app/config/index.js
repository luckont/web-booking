const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/booking",
        // pass zIUb4GtIRoKVV5WJ
    }
};

module.exports = config;
