const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.JAWSDB_URL || 'mysql://root:rootroot@localhost:3306/moSQL_db')


module.exports = sequelize

// 
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:root@localhost:3306/user_db')

// module.exports = sequelize


//   (process.env.JAWSDB_URL || process.env.LOCAL_URL)
