import { useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import Button from '@/components/Button/index';
import Card from '@/components/Card/index';
import Content from '@/components/Content/index';
import Meta from '@/components/Meta/index';
import { useInvitations, useWorkspaces } from '@/hooks/data/index';
import { AccountLayout } from '@/layouts/index';
import api from '@/lib/common/api';
import { useWorkspace } from '@/providers/workspace';

const Settings = () => {
  
  return (
    <AccountLayout>
      <Meta title="Unlimited Now - Dashboard" />
      <Content.Title
        title="Settings"
        subtitle="Do more unlimited now"
      />
      <Content.Divider />
      <Content.Container>
       
      </Content.Container>
    </AccountLayout>
  );
};

export default Settings;
