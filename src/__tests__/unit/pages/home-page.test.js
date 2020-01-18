import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '@/pages/home-page';

describe('HomePage - unit', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });

});
