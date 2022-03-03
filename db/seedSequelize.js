const sequelize = require('./sequelize');

const User = require('./User');

async function initialiseDb() {
    await sequelize.sync(/* {force: true} */);
    User.create({
        name: 'John Doe',
    })
}

initialiseDb();
