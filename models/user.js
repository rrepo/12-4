// 'use strict';
// const loader = require('./sequelize-loader');
// const Sequelize = loader.Sequelize;

// const User = loader.database.define('users', {
//   user_id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true
//   },email: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },user_name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },created_at: {
//     type: Sequelize.DATE,
//     allowNull: false
//   }

// },{
//     freezeTableName: true,
//     timestamps: false
//   });

// module.exports = User;

'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;
 
const User = loader.database.define('users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },email: {
    type: Sequelize.STRING,
    allowNull: false
  },user_name: {
    type: Sequelize.STRING,
    allowNull: false
  },password: {
    type: Sequelize.STRING,
    allowNull: false
  },created_at: {
    type: Sequelize.DATE,
    allowNull: false
  }
 
},{
    freezeTableName: true,
    timestamps: false
  });
 
module.exports = User;