import React from 'react';
import { EndpointTable } from '../../page-components';
import PostAuthSignup from './post-auth-signup/EndpointRow';
import PostAuthLogin from './post-auth-login/EndpointRow';
import PostAuthLogout from './post-auth-logout/EndpointRow';
import GetVerifyAuthToken from './get-verify-authtoken/EndpointRow';

/**
 * Container component for authentication endpoints
 */
export default function AuthEndpoints() {
  return (
    <EndpointTable title="Authentication Endpoints">
      <GetVerifyAuthToken />
      <PostAuthSignup />
      <PostAuthLogin />
      <PostAuthLogout />
    </EndpointTable>
  );
} 