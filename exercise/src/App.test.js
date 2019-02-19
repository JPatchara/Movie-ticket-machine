import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './configs/enzyme.config';
import { mount } from 'enzyme'
import Mainpage from './components/mainpage';

it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<img />", () => {
  it("renders an image with src correctly", () => {
    const logo= mount(<img src="./static/images/Cinemalogo.png" />);
    expect(logo.find('img').prop('src')).toEqual("./static/images/Cinemalogo.png");
  });
});

describe('Mainpage component', () => {
  it('Main page should render without throwing an error', function () {
    const div = document.createElement('div');
    ReactDOM.render(<Mainpage />, div);
    ReactDOM.unmountComponentAtNode(div);
  }) 
});
