import type { NextPage } from 'next';

const ProfilePage: NextPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="mt-4">Manage your profile settings here.</p>
      {/* Profile management components will go here */}
    </div>
  );
};

export default ProfilePage;
