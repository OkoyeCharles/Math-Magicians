import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('correctlly renders a component', () => {
  test('should render quote component', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
