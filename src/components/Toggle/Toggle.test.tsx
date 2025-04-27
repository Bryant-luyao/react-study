import { render, fireEvent, waitFor } from '@testing-library/react';
import Toggle from '.';

test('toggle', async () => {
    const { container } = render(<Toggle />)

    expect(container.querySelector('p')?.textContent).toBe('close')

    fireEvent.click(container.querySelector('button')!)

    await waitFor(() =>  expect(container.querySelector('p')?.textContent).toBe('open'), {
        timeout: 3000
    })
    
})