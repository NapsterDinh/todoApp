import React from "react";
import App from 'App'
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";

describe('rendering App component correctly', () => {

  it('render App component without crashing', () => {
    shallow(<App/>)
  })
  //Snapshot test will create a component at the firs time execute test
  //and save this component at file JSON. 
  //next time Jest will compare output with this JSON
  it('App matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})