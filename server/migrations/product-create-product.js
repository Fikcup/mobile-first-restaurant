'use strict';
const { v1: UUIDV1 } = require('uuid');

module.exports = {
    up: async function (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Product', [
            { 
                uuid: UUIDV1(), 
                name: 'Apple', 
                description: 'Crisp apple with hints of sweet caramel.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Bluenicorn', 
                description: 'Blue raspberry drizzled with electric lemon.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Choco Glaze', 
                description: 'Glazed donut with a semi-sweet chocolate drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Sprinkle', 
                description: 'Chocolate covered donut with rainbow sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Choco Malt', 
                description: 'Chocolate with crunchy mini malt balls sprinkled over the top.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Coconut', 
                description: 'Vanilla blue glaze with shredded coconut and flavored sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Lemon Zest', 
                description: 'Zesty lemon glaze topped with vanilla drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Berry', 
                description: 'Citrusy orange donut with berry slices on top.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Confetti', 
                description: 'Citrusy orange donut with flavored sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Tang', 
                description: 'Orange all around.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Pink Paradise', 
                description: 'Strawberry glaze with strawberry cream sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Purple Passion', 
                description: 'Acai flavored glaze with raspberry drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Sparkle Sprinkle', 
                description: 'Raspberry drizzle coated in shreds of vanilla.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Strawberry', 
                description: 'Strawberry jam infused glaze over a plain donut.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Vanilla', 
                description: 'Vanilla glaze with sweet sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                imgPath: '',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: '', 
                description: '',
                category_uuid: '',
                imgPath: '',
                price: 1.50
            }
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Product', null, {});
    }
};