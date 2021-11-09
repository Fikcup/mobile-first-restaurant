'use strict';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Category', [
            { 
                uuid: '5bcead9a-4104-11ec-973a-0242ac130003', 
                name: 'pancakes' 
            },
            { 
                uuid: '683f1574-4104-11ec-973a-0242ac130003', 
                name: 'omelettes' 
            },
            { 
                uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                name: 'skillets' 
            },
            { 
                uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                name: 'sandwhiches' 
            },
            { 
                uuid: '939ec372-4104-11ec-973a-0242ac130003',
                name: 'waffles' 
            }
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Category', null, {});
    }
};