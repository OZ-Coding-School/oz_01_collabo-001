import React from 'react';
import UserProfileImage from '../components/ProfileImage/UserProfileImage';

const UserProfile: React.FC = () => {
  return (
    <div>
      <h2>My Profile</h2>
			<UserProfileImage size="small" imageUrl="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" />
			<UserProfileImage size="medium" imageUrl="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" />
			<UserProfileImage size="large" imageUrl="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" />

    </div>
  );
};

export default UserProfile;