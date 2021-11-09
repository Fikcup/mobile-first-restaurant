'use strict';
const { v1: UUIDV1 } = require('uuid');

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Product', [
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Chip Pancakes', 
                description: 'yummy ccp.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Buttermilk Pancakes', 
                description: 'yummy buttermilk.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blueberry Pancakes', 
                description: 'yummy blueberries.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Ham and Cheese Omelet', 
                description: 'Three egg omelet stuffed with ham and cheese.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Denver Omelet', 
                description: 'Three egg omelet caramelized to perfection.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chili Cheese Omelet', 
                description: 'Three egg omelet stuffed with zesty chilis and cheese.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'BLT', 
                description: 'A classic BLT sandwhich.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Egg and Cheese Breakfast Sandwhich', 
                description: 'Breakfast egg and cheese sandwich.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Bacon, Egg, and Cheese Breakfast Sandwhich', 
                description: 'Breakfast egg and cheese sandwich with applewood smoked bacon.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Chip Waffle', 
                description: 'Chocolate chip buttermilk belgian waffle.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Buttermilk Waffle', 
                description: 'Buttermilk belgian waffle.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003' 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blueberry Waffle', 
                description: 'Blueberry buttermilk belgian waffle.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003' 
            },
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Product', null, {});
    }
};