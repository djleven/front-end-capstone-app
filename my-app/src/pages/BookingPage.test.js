import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';


test('click the Reservations link and go to booking page', () => {
    render(<App />);
    const reservationButton = screen.getAllByText('Reservations')[0];
    fireEvent.click(reservationButton)
    const title = screen.getByText('Reserve a Table');
    expect(title).toBeInTheDocument();
  });


  test('the form field leabels all render', () => {
    render(<App />);
    const date = screen.getByText('Date');
    expect(date).toBeInTheDocument();
    const time = screen.getByText('Time');
    expect(time).toBeInTheDocument();
    const guests = screen.getByText('Number of guests');
    expect(guests).toBeInTheDocument();
    const occasion = screen.getByText('Occasion');
    expect(occasion).toBeInTheDocument();
  });

  test('default availableTimes field value exist and is selected', () => {
    render(<App />);
    const firstOption = screen.getByText('17:00');
    expect(firstOption).toBeInTheDocument();

    const options = screen.getAllByTestId('availableTimes')
    expect(options[0]).toBeTruthy();
    expect(options[1]).toBeFalsy();
    expect(options[2]).toBeFalsy();
    expect(options[3]).toBeFalsy();
    expect(options[4]).toBeFalsy();
    expect(options[5]).toBeFalsy();
  });

  test('submiting a booking removes selected date from available options', () => {
    render(<App />);
    const button = screen.getByText('Make your reservation');
    fireEvent.click(button);

    // https://stackoverflow.com/questions/66589625/how-to-expect-a-getbytext-to-be-false-in-react-testing-library
    expect(() => screen.getByText('17:00')).toThrow();

    const firstOption = screen.getByText('18:00');
    expect(firstOption).toBeInTheDocument();
  });
