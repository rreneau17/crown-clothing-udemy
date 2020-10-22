export const addItemsToCart = (cartItemsArr, payload) => {
    const cartItemExists = cartItemsArr.find(item => item.id === payload.id);
    if (cartItemExists) {
        return cartItemsArr.map(item => 
            (item.id === payload.id) ? {
                ...item,
                quantity: item.quantity + 1
            } : item
        );
    }

    return [...cartItemsArr, {...payload, quantity: 1}];
}

export default addItemsToCart;