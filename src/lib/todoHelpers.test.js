import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

test('addTodo adds the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo does not mutate existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})

test('findById returns the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id: 3, name: 'three', isComplete: false}
  const result = findById(3, startTodos)

  expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a tododoes not mutate the original todo', () => {
  const startTodo = {id: 3, name: 'three', isComplete: false}
  const expected = {id: 3, name: 'three', isComplete: true}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
})

test('toggleTodo does not mutate the original todo', () => {
  const startTodo = {id: 3, name: 'three', isComplete: false}
  const result = toggleTodo(startTodo)
  expect(result).not.toBe(startTodo)
})

test('updateTodo updates an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id: 3, name: 'three', isComplete: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: true}
  ]

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).toEqual(expectedTodos)
})

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const updatedTodo = {id: 3, name: 'three', isComplete: true}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).not.toBe(startTodos)
})
