export const ACTION_ITEMS_ADD = 'ACTION_ITEMS_ADD';
export function add(payload) {
    return {type: ACTION_ITEMS_ADD, payload}
}

export const ACTION_ITEMS_REMOVE_LAST = 'ACTION_ITEMS_REMOVE_LAST';
export function remove() {
    return {type: ACTION_ITEMS_REMOVE_LAST}
}