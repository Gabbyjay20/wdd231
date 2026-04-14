const appData = {
    siteName: 'Final Project',
    version: '1.0.0',
    config: {
        itemsPerPage: 12,
        enableModal: true,
        contactEmail: 'contact@finalproject.com'
    }
};

function getItemById(id) {
    return fetch('data/items.json')
        .then(response => response.json())
        .then(items => items.find(item => item.id === id));
}

function getFilteredItems(category) {
    return fetch('data/items.json')
        .then(response => response.json())
        .then(items => {
            if (category) {
                return items.filter(item => item.category === category);
            }
            return items;
        });
}