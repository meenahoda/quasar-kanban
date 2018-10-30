/* global localStorage */

export function addItem (state, item) {
  state.items.todo.push(Object.assign(item, { id: state.nextId }))
  state.nextId += 1
}

export function removeItem (state, item) {
  [state.items.todo, state.items.inProgress, state.items.done].forEach(array => {
    const idx = array.findIndex(i => i.id === item.id)
    if (idx > -1) array.splice(idx, 1)
  })
}

export function updateItems (state, { items, id }) {
  state.items[id] = items
}

export function initStore () {
  const data = localStorage.getItem('boardState')
  if (data) {
    this.replaceState(Object.assign(this.state, JSON.parse(data)))
  }
}
