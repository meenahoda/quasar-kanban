export function addItem (state, item) {
  state.items.todo.push(Object.assign(item, { id: state.nextId }))
  state.nextId += 1
}
export function updateItems (state, { items, id }) {
  state.items[id] = items
}
