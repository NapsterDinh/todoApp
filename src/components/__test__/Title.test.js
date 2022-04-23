import React from "react";
import Title from 'App'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

describe('rendering Title component correctly', () => {
  it('render Title component without crashing', () => {
    shallow(<Title/>)
  })
  it('Title matches the snapshot', () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})