// Importing necessary hooks and components
'use client';

// flow bite react components
import { Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { LOGIN_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

const LogInModal = ({ isOpen, formState, onChange, onClose }) => {
  // set modal display state

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginUser = await login({
        variables: {
          email: formState.email,
          password: formState.password,
        },
      });

      const token = loginUser.data.login.token;

      Auth.login(token);
    } catch (err) {
      console.error(err);
      throw new Error('You encountered: ', error);
    }
  };

  return (
    <>
      {/*  Modal component for login/signup */}
      <Modal show={isOpen} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold uppercase text-center  text-gray-900 dark:text-white">
              Log In to Cool Games
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@gmail.com"
                name="email"
                value={formState.email}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password-signin" value="Your password" />
              </div>
              <TextInput
                id="password-signIn"
                type="password"
                placeholder="******"
                name="password"
                value={formState.password}
                onChange={onChange}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <div className="w-full flex align-middle justify-center">
              <button className="btn btn-secondary" onClick={handleFormSubmit}>
                Log in to your account
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LogInModal;
