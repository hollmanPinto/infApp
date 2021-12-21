const User = require('./models/User');
const Role = require('./models/Role');

//relacion 1 - 1 entre un usuario y su rol
User.hasOne(Role);
Role.belongsTo(User);