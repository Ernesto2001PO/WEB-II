const {sequelize} = require('../config/db-config');

const persona = require("./Persona")(sequelize);

sequelize.sync();

module.exports = {
    persona,
};

