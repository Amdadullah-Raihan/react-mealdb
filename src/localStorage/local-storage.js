const shopping_cart = {};

const addToLs = (id) => {

    const db = getDb();

    if(db[id]){

        db[id] = db[id] + 1; 
    }
    else{
        db[id] = 1;
    }

    localStorage.setItem("shopping_cart",JSON.stringify(db))
}
const getDb = ()=>{

    let storedCart = localStorage.getItem("shopping_cart")

    if(storedCart){

        storedCart = JSON.parse(storedCart)
    }
    else{
       storedCart = {}
    }

    return storedCart;
}

export {addToLs, getDb}