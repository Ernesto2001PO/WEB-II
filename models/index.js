const {sequelize} = require('../config/db-config');

require("./Persona")(sequelize);

sequelize.sync();


module.exports = sequelize;



