let favorites = [];

function CheckLocalStorage() {
    const localStorageItem = localStorage.getItem('Favorites');

    localStorageItem !== null ? favorites = JSON.parse(localStorageItem) : favorites = [];
}

function GetLocalStorage() {
    CheckLocalStorage();

    return favorites;
}

function SaveToLocalStorage(item) {
    favorites.push(item);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function RemoveFromLocalStorage(index) {
    favorites.splice(index,1);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

export {GetLocalStorage, SaveToLocalStorage, RemoveFromLocalStorage};