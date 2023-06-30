import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { App } from '../App';
import { rootReducer } from '../lib/redux/init/rootReducer';

test('renders correct App components', () => {
  const store = createStore(rootReducer);

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const pushesPageElement = screen.getByText('Пуши');
  expect(pushesPageElement).toBeInTheDocument();

  const notFoundElement = screen.getByText('404 page');
  expect(notFoundElement).toBeInTheDocument();
});
