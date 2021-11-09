'use strict';
const { v1: UUIDV1 } = require('uuid');

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Category', [
            { uuid: UUIDV1(), name: 'pancakes' },
            { uuid: UUIDV1(), name: 'omelettes' },
            { uuid: UUIDV1(), name: 'skillets' },
            { uuid: UUIDV1(), name: 'sandwhiches' },
            { uuid: UUIDV1(), name: 'waffles' }
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Category', null, {});
    }
};