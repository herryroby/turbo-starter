import { redirect } from 'next/navigation';

const RootPage = () => {
  redirect('/sign-in');
};

export default RootPage;
