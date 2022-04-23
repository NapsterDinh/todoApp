import React from "react";
import Input from "../Input";
import { mount, shallow } from "enzyme";

describe('rendering Input component correctly', () => {
  let wrapper, button, input;

  const defaultProps = {
    todoList : [],
    setToDoList: jest.fn()
  }
  //
  //use beforeAll if you sure this props will be unchanged during testing and code in callback will executed before(after) all test cases
  //use beforeEach if props will changed after each phase of testing and code in callback will executed before(after) each phase
  beforeEach(() => {
    wrapper = mount(<Input {...defaultProps}/>)
  })

  it('render Input component without crashing', () => {
    //Using shallow rendering if you want to test a component as an unit
    //and your test case not affect to children of this component
    shallow(<Input {...defaultProps}/>)
  })

  it('should enter value before enter', () => {
    //Using Full DOM rendering (mount) if you want to test component which can interact
    //with API DOM or test child component
    input = wrapper.find('input')
    //simulate an event and pass some parameter
    input.props().onKeyPress({ 
        key: 'Enter',
        target: {
            value: ''
        }
    })
    //then
    //pass this function in to expect and test it by some method
    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(0)
  })
  
  it('should enter value before click button +', () => { 
    button = wrapper.find('button')

    //simulate button click
    button.props().onClick()

    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(0)
  })
  
  it('enter value as String (Do Home Work) and submit by Enter', () => {
    input = wrapper.find('input')

    input.props().onKeyPress({ 
        key: 'Enter',
        target: {
            value: 'Do Home Work'
        }
    })

    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(1)
  })

  it('enter value as String (Do Home Work) and submit by pressing Button', () => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Do Home Work'
      }
    })
    //simulate click on button
    button = wrapper.find('button')
    button.simulate('click')

    expect(wrapper.props().setToDoList.mock.calls.length).toEqual(1)
  })

  it('test input field has been empty when submit successfully', () => {
    let nameInput = wrapper.find('input')

    nameInput.simulate('change', {
      target: {
        value: 'Do Home Work'
      }
    })

    //simulate click on button
    button = wrapper.find('button')
    button.simulate('click')

    //nameInput not update dynamically so need assign this to input element again
    nameInput = wrapper.find('input')

    expect(nameInput.props().value).toEqual('')

  })

})