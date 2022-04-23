/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import ToDoList from "../TodoList";
import renderer from 'react-test-renderer';
import { mount } from "enzyme";

const listToDo = [
    {
        id: '123',
        title: 'Do Home Work',
        isDone: true
    },
    {
        id: '1223',
        title: 'Do House Work',
        isDone: false
    },
    {
        id: '124',
        title: 'Play soccer',
        isDone: false
    },
    {
        id: '12341',
        title: 'Do task',
        isDone: false
    }
]
const defaultProps = {
  todoList : [...listToDo],
  setToDoList: jest.fn()
}

describe('rendering ToDoList component correctly', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<ToDoList {...defaultProps}/>)
  })

  it('ToDoList with no items matches the snapshot', () => {
    const tree = renderer.create(<ToDoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ToDoList with items matches the snapshot', () => {
    const tree = renderer.create(<ToDoList {...defaultProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have 4 todo item', () => {
    expect(wrapper.find('li')).toHaveLength(4);
  });

  it('should have 1 done todo item', () => {
    expect(wrapper.find('.todo-item.done')).toHaveLength(1);
  });

  it('should have 1 done todo item with title contains (completed)', () => {
    const span = wrapper.find('.todo-item.done .todo-item-title').at(0)
    expect(span.text()).toContain('(completed)')
  });

  it('should mark done/undone', () => {
    const spanTitle = wrapper.find('.todo-item-title').at(1)

    spanTitle.simulate('click', listToDo[1])

    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(1)
  });

  it('should delete item', () => {
    const spanTitle = wrapper.find('.button-delete').at(1)

    spanTitle.simulate('click', listToDo[1])

    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(1)
  });

})