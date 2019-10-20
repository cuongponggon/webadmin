export const navItems = [
  {
    name: 'Profile',
    url: '/profile',
    icon: 'icon-user ',
    children: [
      {
        name: 'Edit Profile',
        url: '/profile/edit',
        icon: 'icon-pencil'
      },
      {
        name: 'Change Password',
        url: '/profile/changepassword',
        icon: 'icon-lock'
      }
    ]
  },
  {
    name: 'Manage Shop',
    url: '/shop',
    icon: 'icon-home'
  },
  {
    name: 'Manage Account',
    url: '/account',
    icon: 'icon-user'
  },
  {
    name: 'Information',
    url: '/information',
    icon: 'icon-info'
  },
  {
    name: 'Log out',
    url: '/login',
    icon: 'icon-logout'
  }
];
