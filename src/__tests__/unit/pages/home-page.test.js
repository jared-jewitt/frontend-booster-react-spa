import React from 'react';
import { shallow } from 'enzyme';

import { useAuth } from '@/hooks';

import HomePage from '@/pages/home-page';

jest.mock('@/hooks/auth-hook');
useAuth.mockReturnValue({
  updateAuthState: jest.fn(),
  clearAuthState: jest.fn(),
  authState: { isAuthenticated: true },
});

describe('HomePage - unit', () => {
  
  it('renders correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
