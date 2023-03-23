type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false as boolean,
        dog: false as boolean,
        cat: false as boolean,
        fish: false as boolean,
    }

    if (activeMenu != ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;
}