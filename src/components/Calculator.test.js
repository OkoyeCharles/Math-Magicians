import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

describe('correctlly renders a component', () => {
  test('should render calculator component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
