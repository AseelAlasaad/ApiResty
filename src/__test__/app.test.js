import React from 'react';
import Form from '../components/form/Form';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';



it('need to run a function on button click', async () => {
    let callApi = jest.fn();
    render(<Form handleApiCall={callApi} />);
    const button = screen.getByTestId('GO');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => expect(callApi).toHaveBeenCalled());
});


