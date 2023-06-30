import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Navigation } from '../components/Navigation';
import { navigation } from '../configs/navigation';
import { rootReducer } from '../lib/redux/init/rootReducer';

test('Checking how menu items are rendered in a navigation component', () => {
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    </Provider>
  );

  const navigationItems = screen.getAllByRole('listitem');
  expect(navigationItems).toHaveLength(navigation.length);
});
