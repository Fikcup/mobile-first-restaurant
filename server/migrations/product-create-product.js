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
                image: 'https://drive.google.com/uc?export=view&id=1scMplRkflGHtCceP78F16hpdYjpgwBAg',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Bluenicorn', 
                description: 'Blue raspberry drizzled with electric lemon.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1mwgJL0Z5eowJXB73TiMgsPJ_4bI04ZmC',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Choco Glaze', 
                description: 'Glazed donut with a semi-sweet chocolate drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1XF5rqvG0oxBKhSPmXVVvFckVnSo9EGXV',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Sprinkle', 
                description: 'Chocolate covered donut with rainbow sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1nBC1iuLWaNL5vOwJbWwYYQnc8VUP18VJ',
                price: 1.50 
            },
            { 
                uuid: UUIDV1(), 
                name: 'Choco Malt', 
                description: 'Chocolate with crunchy mini malt balls sprinkled over the top.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=124ZOD8-1xlsvE_Ij6S0qtejE5I2pvbCR',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Coconut', 
                description: 'Vanilla blue glaze with shredded coconut and coconut flakes.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1IN-WzNNtATK8fa7V6IJrwDa_rG_um-b2',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Lemon Zest', 
                description: 'Zesty lemon glaze topped with vanilla drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1Bs0H5MXNynFDEl3PG8JO4jvk9A3BKrRD',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Berry', 
                description: 'Citrusy orange donut with berry slices on top.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=13I1MlTNv0N6Redhm1wTsji4PLwZy25l-',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Confetti', 
                description: 'Citrusy orange donut with flavored sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1ZRZyo4n1tFgka6MNp_MWfxgL_SUQMDuW',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Orange Tang', 
                description: 'Orange all around.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1epUl6Nq5p_-qzZI6Um2RoOMpxSqrsr1O',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Pink Paradise', 
                description: 'Strawberry glaze with strawberry cream sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1ZkTLHzTPZhkJ_Hu74GEbLk4ZLIkNr5Lb',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Purple Passion', 
                description: 'Acai flavored glaze with raspberry drizzle.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1olXvsQIHqINdKy81_iOWo7TdfPv6XWzb',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Sparkle Sprinkle', 
                description: 'Raspberry drizzle coated in shreds of vanilla.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1zkUHO_0FJkJyoAL_qChq1qUMYqUpgDmz',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Strawberry', 
                description: 'Strawberry jam infused glaze over a plain donut.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1n5A_PtjdLV_R7XfOWqjiafZBePPbI4g-',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Vanilla', 
                description: 'Vanilla glaze with sweet sprinkles.',
                category_uuid: '5bcead9a-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1wVD8sqPbpYTdo86PHLjjnKu_RNyOWoJs',
                price: 1.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Americano', 
                description: 'Robust, dark roast espresso topped off with water.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1WhGDeb4YOSdMIITjVefg35Pwg74FndfF',
                price: 4.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Cappuccino', 
                description: 'Robust, dark roast espresso with 2% milk and ample foam.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1qTjZgli4hUEq5HzWPQO-hskX53fYFGYQ',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Iced Coffee', 
                description: 'Coffee on the rocks.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1GahkJOrPPpu4MxVFNgVHJiIyyVpuenx0',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Fancy Hot Chocolate', 
                description: 'Sweet and rich hot chocolate topped with whipped cream.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1N0QrO4-SXu8Cq3kJfQe34dm7RNFWX5M0',
                price: 4.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Fountain Drink', 
                description: 'Coke, Dr. Pepper, Sprite, Iced Tea, Water.',
                category_uuid: '683f1574-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1kNKSzSv_1QcR7kMV7V9L_Pz8RQLmzxzc',
                price: 2.50
            },
            { 
                uuid: UUIDV1(), 
                name: 'Fruit Shebang', 
                description: 'Strawberries, raspberries, and blueberries over old fashioned oats.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1Ufwojm8hV__DrRbepXhKmUjpzWn5dNXZ',
                price: 7.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Sliced Bananas and Oats', 
                description: 'Sliced bananas served over old fashioned oats.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1VRrAyX1c4Zhu6Rz8eCbgEMaKlZUfHopK',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blueberry Oats', 
                description: 'Farm fresh blueberries served over old fashioned oats.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1xx-QsrBkC-AAmPs7VS2oBwOfzf-I7Pj5',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Raspberry Oats', 
                description: 'Fresh, juicy raspberries served over old fashioned oats.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1eX1tR-b2SWJMTnstVvaDQp2Ss37stDY5',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Plain Oats', 
                description: 'Old fashioned oats served with sides of maple syrup and brown sugar.',
                category_uuid: '76a2d90c-4104-11ec-973a-0242ac130003',
                image: 'https://drive.google.com/uc?export=view&id=1Dkj1KWxAjsH_NhUQyzkyMSemigN0xV4Y',
                price: 5.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate Strawberry', 
                description: 'Rich and decadent chocolate syrup with sliced strawberries over buttermilk pancakes.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 7.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Chocolate', 
                description: 'Rich and decadent chocolate syrup over buttermilk pancakes.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Blackberry Honey', 
                description: 'Fresh honey and blackberries over buttermilk pancakes.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Strawberry Honey', 
                description: 'Fresh honey and sliced strawberries over buttermilk pancakes.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 6.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Honey', 
                description: 'Fresh, sweet honey drizzle over buttermilk pancakes.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 5.00
            },
            { 
                uuid: UUIDV1(), 
                name: 'Plain', 
                description: 'Our signature buttermilk pancake batter cooked to perfection.',
                category_uuid: '8fef7b86-4104-11ec-973a-0242ac130003',
                image: '',
                price: 4.00
            }
        ]);
    },

    down: async function (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Product', null, {});
    }
};