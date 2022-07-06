'use strict'
const { DataTypes } = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Bands', 'recommendation', {
        type: DataTypes.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    /*
     ...
     */
  }
}                
