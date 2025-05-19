import React from 'react';
import Button from '../../src/ui/Button';
import { MemoryRouter } from 'react-router-dom';

describe('Button component', () => {
  it('renders children', () => {
    cy.mount(<Button type="primary">Click me</Button>);
    cy.contains('Click me').should('exist');
  });

  it('applies the correct style for type', () => {
    cy.mount(<Button type="secondary">Secondary</Button>);
    cy.contains('Secondary')
      .should('have.class', 'border-2')
      .and('have.class', 'border-stone-300');
  });

  it('is disabled when disabled prop is true', () => {
    cy.mount(
      <Button type="primary" disabled>
        Disabled
      </Button>
    );
    cy.contains('Disabled').should('be.disabled');
  });

  it('calls onClick when clicked', () => {
    const onClick = cy.stub().as('onClick');
    cy.mount(
      <Button type="primary" onClick={onClick}>
        Click
      </Button>
    );
    cy.contains('Click').click();
    cy.get('@onClick').should('have.been.calledOnce');
  });

  it('renders as a link when "to" prop is provided', () => {
    cy.mount(
      <MemoryRouter>
        <Button type="primary" to="/test-link">
          Go
        </Button>
      </MemoryRouter>
    );
    cy.contains('Go').should('have.attr', 'href', '/test-link');
  });
});
