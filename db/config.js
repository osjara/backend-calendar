const mongoose = require('mongoose');


const dbConnection = async () => {
    
        try {
            await mongoose.connect(process.env.DB_CNN , {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('DB is connected');
        } catch (error) {
            console.log(error);
            throw new Error('Error connecting to DB');
        }
    
    }

    module.exports = {
        dbConnection
    }