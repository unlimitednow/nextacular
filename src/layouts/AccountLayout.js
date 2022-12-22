import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { SignedIn, useSession } from "@clerk/clerk-react";
import Content from '@/components/Content/index';
import Header from '@/components/Header/index';
import Sidebar from '@/components/Sidebar/index';
import menu from '@/config/menu/index';
import { useWorkspace } from '@/providers/workspace';

const AccountLayout = ({ children }) => {
  const { data } = useSession();
  const router = useRouter();
  const { workspace } = useWorkspace();
  const { isLoaded, session } = useSession();

  useEffect(() => {
    if(!isLoaded) {
      router.replace('/auth/login');
    }
  }, [isLoaded, router]);

  return (
     <SignedIn>
    <main className="relative flex flex-col w-screen h-screen space-x-0 text-gray-800 dark:text-gray-200 md:space-x-5 md:flex-row bg-gray-50 dark:bg-black-800">
      <Sidebar menu={menu(workspace?.slug)} />
      <Content>
        <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
        <Header />
        {children}
      </Content>
    </main>
    </SignedIn>
  );
};

export default AccountLayout;
