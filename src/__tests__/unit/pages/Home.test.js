import React from 'react';
import { shallow } from 'enzyme';

import Home from '@/pages/Home';

jest.mock('@/hooks/auth-hook', () => ({
  useAuth: () => ({
    updateAuthState: jest.fn(),
    clearAuthState: jest.fn(),
    authState: { isAuthenticated: true },
  }),
}));

describe('Home - unit', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
