const sidebarMenu = () => [
  {
    name: 'Account',
    menuItems: [
      {
        name: 'Workspace',
        path: `/account`,
      },
      {
        name: 'Billing',
        path: `subscriptions`,
      },
      {
        name: 'Settings',
        path: `/account/settings`,
      },
    ],
  },
];

export default sidebarMenu;
