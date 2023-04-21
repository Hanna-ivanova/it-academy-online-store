import { APP_ROUTES } from './appRoutes';

export const appPages = [
  {
    label: 'Каталог',
    href: APP_ROUTES.catalog,
  },
  {
    href: APP_ROUTES.blog,
    label: 'Блог',
  },
  {
    href: APP_ROUTES.contacts,
    label: 'Контакты',
  },
  {
    href: APP_ROUTES.cart,
    label: 'Корзина',
  },
  {
    href: APP_ROUTES.admin,
    label: 'Admin',
  },
  {
    href: APP_ROUTES.signUp,
    label: 'Sign Up',
  },
  {
    href: APP_ROUTES.signIn,
    label: 'Sign In',
  },
  {
    href: APP_ROUTES.signOut,
    label: 'Sign Out',
  },
];
