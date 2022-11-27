import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import {useSession } from "@clerk/clerk-react";
import Account from '../components/Account'
import { useEffect } from 'react'
import { useTheme } from 'next-themes';

const AuthLayout = ({ }) => {
 const session = useSession()
  const supabase = useSupabaseClient()
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
if (session) {
      window.location.href = '/accounts'
    }
  }, [session, setTheme])
  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default AuthLayout;
