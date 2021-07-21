const list =[
    {
        id: 1,
        name: "onions",
        price: 3,
    },
    {
        id: 2,
        name: "bread",
        price: 2,
    },
    {
        id: 3,
        name: "eggs",
        price: 2,
    },
    {
        id: 4,
        name: "milk",
        price: 2,
    },

];

const spatula= {
    id: 5,
    name: "spatula",
    price: 50,
};

list.push(spatula);

console.log(list);

// comment add to shopping list with id

const addToList = (item) => {
    const lastIndex = list.length-1
    const currentLastItem = list[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId +1
    item.id = idForNewItem
    list.push(item)
    console.log(`${item.name} has an id of ${item.id}`)
};


const newItem = {
    name: "apples",
    price: 10,
}

addToList(newItem);



const addToList = (item) => {
    const lastIndex = list.length-1
    const currentLastItem = list[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId +1
    item.id = idForNewItem
    const newDate = new Date().toLocaleDateString()
    item.date = newDate
    list.push(item)
    console.log(`${item.name} has an id of ${item.id} and ${item.date}`)
};


const newItem = {
    name: "apples",
    price: 10,
}

addToList(newItem);

for (const item of list) {
    if (item.price > 8) {
        console.log(`${item.name} cost ${item.price}`)
    } else {
        console.log(`${item.name} costs less than $10`)
    }
    
};


