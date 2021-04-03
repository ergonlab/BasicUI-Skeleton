import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'    
  },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'HRM',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Employees',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'New Employee',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Companies',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Company List',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'New Company',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
  },  
  {
    name: 'Attendance',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Import Data',
        url: '/icons/coreui-icons',
        icon: 'icon-star'        
      }
    ]
  },
  {
    name: 'Systems Settings',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Users',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Roles',
        url: '/notifications/badges',
        icon: 'icon-bell'
      }
    ]
  },   
  {
    divider: true
  }  
];
