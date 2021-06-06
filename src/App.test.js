import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// /// <reference types="Cypress" />

// describe('Ascending Descending Testing', () => {
//   it('Opens the page', () => {
//     cy.visit('localhost:3000');
//   });

//   it('Looking for ID Header to click', () => {
//     cy.get('table >thead >tr').contains('th', 'ID').should('be.visible');
//   });

//   //   it('Checks the search functionality', () => {
//   //     cy.get('#search-4').type('NodeJS');
//   //     cy.get('#search-image').click();
//   //   });
// });
