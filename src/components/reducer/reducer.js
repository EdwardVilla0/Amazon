export const initialState = {
    basket: [{
        id: "123456123",
        title: "testing",
        price: 598.99,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SR215,215__.jpg"
    }],
    user: null
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            return { ...state }

        default:
            return state;
    }
}

export default reducer;