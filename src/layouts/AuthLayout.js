import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import { useEffect } from 'react'

const AuthLayout = ({ children }) => {
 const session = useSession()
  const supabase = useSupabaseClient()

  useEffect(() => {
    setTheme('light');
if (session) {
      window.location.href = '/accounts'
    }
  }, [session])
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
