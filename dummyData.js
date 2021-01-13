const dummyData = {
    productName: 'Casual Men Shoes',
    priceDetails: {
        normalPrice: 12,
        specialPrice: 10,
        currencyBase: 'KWD'
    },
    ratings: 3,
    colorsAvailable: ['Blue', 'Black', 'White', 'Gray', 'Red'],
    sizeAvailable: {
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
        unit: 'US'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat orci et mi tempor, quis mattis lorem semper. Sed porta diam velit, ut lobortis magna eleifend sed. Nulla tempus eros urna, id volutpat orci condimentum quis. Quisque hendrerit mi odio, quis semper neque condimentum id. Sed dolor massa, porttitor in vehicula eget, elementum quis mi. Maecenas lobortis arcu at convallis consequat. Suspendisse potenti. Cras ut ex magna',
    reviews: [
        {
            userName: 'Example1',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            userName: 'Example2',
            comment: 'Quisque feugiat orci et mi tempor, quis mattis lorem semper'
        },
        {
            userName: 'Example3',
            comment: 'Sed porta diam velit, ut lobortis magna eleifend sed'
        }
    ]
}

module.exports = dummyData;