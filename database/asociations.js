const User = require('./models/User');
const Role = require('./models/Role');

//relacion 1 - 1 entre un usuario y su rol
User.belongsTo(Role,{as: 'user', foreignKey:"rol"});
Role.hasOne(User,{as:'user',foreignKey:"rol"});