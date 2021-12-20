const User = require('./models/User');
const Role = require('./models/Role');

User.hasOne(Role);
Role.belongsTo(User);