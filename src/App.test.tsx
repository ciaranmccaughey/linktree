import React from 'react';
import { getByLabelText, render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { assert } from 'console';

test('music link pressed, spotify platform available', () => {
  render(<App />);
  const linkElement = screen.getByText(/New Album/i);
  fireEvent.click(linkElement);
  const musicElement = screen.getByText(/Spotify/i);
  expect(musicElement).toBeInTheDocument();

});

test('show link pressed, shows are visible', () => {
  render(<App />);
  const linkElement = screen.getByText(/Australia Tour/i);
  fireEvent.click(linkElement);

  const element = screen.queryAllByTestId("show-element");
  if (!element.length) {
    throw new Error('No show links are visible')
  } 


});

test('music link pressed, then show link pressed, music links closes', () => {
  render(<App />);
  const musicLink = screen.getByText(/New Album/i);
  fireEvent.click(musicLink);
  const musicElement = screen.getByText(/Spotify/i);
  expect(musicElement).toBeInTheDocument();

  const showLink = screen.getByText(/Australia Tour/i);
  fireEvent.click(showLink);
  expect(showLink).toBeInTheDocument();
  expect(musicElement).not.toBeInTheDocument();

});