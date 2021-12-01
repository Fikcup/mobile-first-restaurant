'use strict';

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Category', [
            { 
                uuid: '5bcead9a-4104-11ec-973a-0242ac130003', 
                name: 'Donuts' 
            },
            { 
                uuid: '683f1574-4104-11ec-973a-0242ac130003', 
                name: 'Drinks' 
            },
            { 
                uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                name: 'Oatmeal' 
            },
            { 
                uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                name: 'Pancakes' 
            },
            { 
                uuid: '939ec372-4104-11ec-973a-0242ac130003',
                name: 'Skillets' 
            },
            { 
                uuid: '7515b1c2-5248-11ec-bf63-0242ac130002',
                name: 'Waffles' 
            }
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Category', null, {});
    }
};