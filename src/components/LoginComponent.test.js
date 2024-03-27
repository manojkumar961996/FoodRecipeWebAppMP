// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import LoginComponent from '';
// import { useAuthentication } from './AuthContext';

// jest.mock('./AuthContext', () => ({
//     useAuthentication: jest.fn(),
// }));

// describe('LoginComponent', () => {
//     const mockLogin = jest.fn();
//     const mockNavigate = jest.fn();

//     beforeEach(() => {
//         useAuthentication.mockReturnValue({ login: mockLogin });
//         jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     test('renders the LoginComponent', () => {
//         const { getByText, getByPlaceholderText } = render(<LoginComponent />);
//         expect(getByText('Login')).toBeInTheDocument();
//         expect(getByPlaceholderText('userName')).toBeInTheDocument();
//         expect(getByPlaceholderText('Password')).toBeInTheDocument();
//         expect(getByText('Login')).toBeInTheDocument();
//     });

//     test('login button is disabled when username or password is empty', () => {
//         const { getByText } = render(<LoginComponent />);
//         const loginButton = getByText('Login');
//         expect(loginButton).toBeDisabled();
//     });

//     test('shows error message when username or password is empty on login', async () => {
//         const { getByText } = render(<LoginComponent />);
//         const loginButton = getByText('Login');
//         fireEvent.click(loginButton);
//         await waitFor(() => {
//             expect(getByText('Invalid credentials')).toBeInTheDocument();
//         });
//     });

//     test('successfully logs in when username and password are provided', async () => {
//         const { getByText, getByPlaceholderText } = render(<LoginComponent />);
//         const userNameInput = getByPlaceholderText('userName');
//         const passwordInput = getByPlaceholderText('Password');
//         const loginButton = getByText('Login');
//         fireEvent.change(userNameInput, { target: { value: 'testuser' } });
//         fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
//         fireEvent.click(loginButton);
//         await waitFor(() => {
//             expect(mockLogin).toHaveBeenCalledWith('testuser');
//             expect(mockNavigate).toHaveBeenCalledWith('/RecipeList', { replace: true });
//         });
//     });

//     test('successfully logs in when username and password are provided (using userEvent)', async () => {
//         const { getByText, getByPlaceholderText } = render(<LoginComponent />);
//         const userNameInput = getByPlaceholderText('userName');
//         const passwordInput = getByPlaceholderText('Password');
//         const loginButton = getByText('Login');
//         await userEvent.type(userNameInput, 'testuser');
//         await userEvent.type(passwordInput, 'testpassword');
//         userEvent.click(loginButton);
//         await waitFor(() => {
//             expect(mockLogin).toHaveBeenCalledWith('testuser');
//             expect(mockNavigate).toHaveBeenCalledWith('/RecipeList', { replace: true });
//         });
//     });
// });
