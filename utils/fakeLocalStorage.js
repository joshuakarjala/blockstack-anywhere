const cache = {};

function getItem(key) {
    return cache[key];
}

function setItem(key, item) {
    cache[key] = item;
}

function removeItem(key) {
    cache[key] = null;
}

function createLocalStorage(initData) {
    const storage = {
        getItem: getItem,
        setItem: setItem,
        removeItem: removeItem
    };
    Object.keys(initData).forEach(key => {
        storage.setItem(key, initData[key]);
    });
    return storage;
}

function getBlockstackData(ls) {
    return {
        'blockstack': ls.getItem('blockstack'),
        'blockstack-gaia-hub-config': ls.getItem('blockstack-gaia-hub-config'),
        'blockstack-transit-private-key': ls.getItem('blockstack-transit-private-key')
    };
}

exports.createLocalStorage = createLocalStorage;
exports.getBlockstackData = getBlockstackData;
