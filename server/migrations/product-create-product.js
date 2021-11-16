'use strict';
const { v1: UUIDV1 } = require('uuid');

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Product', [
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Chip Pancakes', 
                description: 'Decadent and rich chocolate chips in our signature pancake batter.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                price: 8.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Buttermilk Pancakes', 
                description: 'If it ain\'t broke don\'t fix it! Signature pancake batter cooked with butter and love.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                price: 7.00 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blueberry Pancakes', 
                description: 'Farm fresh blueberries in our cooked to perfection, signature pancake batter.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                price: 9.00 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Ham and Cheese Omelet', 
                description: 'Three eggs, honey glazed chunks of ham in cheesy cheddar.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                price: 12.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Denver Omelet', 
                description: 'Three eggs, green bell peppers, onions, and white cheddar.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                price: 12.00 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chili Cheese Omelet', 
                description: 'Three eggs, chili, and American cheese.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                price: 12.00 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Bacon, Egg, Potato Skillet', 
                description: 'Two scrambled eggs, chunks of bacon, and country potato.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                price: 11.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Loaded Skillet', 
                description: 'Two scrambled eggs, cheddar cheese, chunks of ham, bacon, and country potato',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                price: 14.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'BLT', 
                description: 'A classic BLT sandwhich.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                price: 10.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Egg and Cheese Breakfast Sandwhich', 
                description: 'Two scrambled eggs and cheddar cheese',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                price: 9.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Bacon, Egg, and Cheese Breakfast Sandwhich', 
                description: 'Two scrambled eggs topped with bacon strips and cheddar cheese.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                price: 10.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Chip Waffle', 
                description: 'Semi-sweet chocolate chips in our signature waffle batter.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003',
                price: 8.50 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Buttermilk Waffle', 
                description: 'Hearty and thick waffles made fresh to order.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003',
                price: 7.00 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blueberry Waffle', 
                description: 'Farm fresh blueberries in our cooked to perfection, signature waffle batter.',
                category_uuid: '939ec372-4104-11ec-973a-0242ac130003',
                price: 9.00 
            },
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Product', null, {});
    }
};