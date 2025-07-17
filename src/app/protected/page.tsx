'use client';

import { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '@/lib/msalScopes';

export default function ProtectedPage() {
  const { instance, accounts } = useMsal();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (accounts.length > 0) {
      instance
        .acquireTokenSilent({ ...loginRequest, account: accounts[0] })
        .then(response => setToken(response.accessToken))
        .catch(() => instance.acquireTokenRedirect(loginRequest));
    }
  }, [accounts, instance]);

  if (!token) return <div className="text-center">Loading access token...</div>;

  return (
    <div className="text-break">
      <h2>Protected Page</h2>
      <p>Your access token:</p>
      <pre className="bg-light p-3 rounded">{token}</pre>
    </div>
  );
}
