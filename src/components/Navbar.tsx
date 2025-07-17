'use client';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '@/lib/msalScopes';

export default function Navbar() {
  const { instance, accounts } = useMsal();
  const isAuthenticated = accounts.length > 0;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <a className="navbar-brand" href="/">My App</a>
      <div className="ms-auto">
        {isAuthenticated ? (
          <button className="btn btn-light" onClick={() => instance.logoutRedirect()}>
            Logout
          </button>
        ) : (
          <button className="btn btn-light" onClick={() => instance.loginRedirect(loginRequest)}>
            Login with Microsoft
          </button>
        )}
      </div>
    </nav>
  );
}
