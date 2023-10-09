// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = true;
    }
    else {
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = false;
        alert('allrady added')
    }
    localStorage.setItem('Appliedjobs', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('Appliedjobs', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Appliedjobs');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('Appliedjobs');
}
const getAppliedjobsitem = () => {
    let Appliedjobs = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Appliedjobs');
    if (storedCart) {
        Appliedjobs = JSON.parse(storedCart);
    }
    return Appliedjobs;
}
export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    getAppliedjobsitem
}
