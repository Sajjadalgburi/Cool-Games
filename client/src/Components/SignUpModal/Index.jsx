// Importing necessary hooks and components
'use client';

// flow bite react components
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

import { CREATE_USER } from '../../utils/mutations';

const SignUpModal = ({ isOpen, formState, onChange, onClose }) => {
  const [createUser, { error }] = useMutation(CREATE_USER);

  // function to handle form submission to create user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const creatingUser = await createUser({
        variables: {
          email: formState.email,
          password: formState.password,
          username: formState.username,
        },
      });

      const token = creatingUser.data.createUser.token;

      Auth.login(token);
    } catch (err) {
      console.error(err);
    }
  };

  // set modal display state
  return (
    <>
      {/*  Modal component for login/signup */}
      <Modal show={isOpen} size="md" onClose={onClose} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white">
              Sign In to Cool Games
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username" />
              </div>
              <TextInput
                id="username"
                placeholder="JaneDoe"
                name="username"
                value={formState.username}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email-signup" value="Your email" />
              </div>
              <TextInput
                id="email-signup"
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
              <Button onClick={handleFormSubmit}>Log in to your account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
