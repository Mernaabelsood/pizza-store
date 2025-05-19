// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
/* global Cypress */
import { mount } from 'cypress/react';
import App from '../../src/App';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from '../../src/ui/AppLayout';
import { Button } from 'antd';
import '../../src/index.css';

Cypress.Commands.add('mount', mount);

it('renders the full app with Button', () => {
  cy.mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  cy.contains('Button Text').should('exist'); 
});

it('renders Button inside AppLayout', () => {
  cy.mount(
    <AppLayout>
      <Button type="primary">Click me</Button>
    </AppLayout>
  );
  cy.contains('Click me').should('exist');
});
