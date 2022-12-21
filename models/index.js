const User = require('./user');
const Employee = require('./employee');

User.hasMany(Employee, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Employee.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Employee};