import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders all required fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service Needed/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  it('shows validation errors for required fields', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    await userEvent.click(submitButton);
    // Check for error messages (update selectors as needed)
    expect(screen.getByText(/Full Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email Address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });
});
