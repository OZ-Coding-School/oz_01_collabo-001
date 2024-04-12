import React from 'react';
import styled from 'styled-components';

interface SizeMap {
  [key: string]: string;
}
const sizes: SizeMap = {
  small: "50px",
  medium: "100px",
  large: "200px",
};

const Image = styled.img<{ size: keyof SizeMap }>`
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  border-radius: 50%;
  object-fit: cover;
`;
interface ProfileImageProps {
  size: 'small' | 'medium' | 'large';
  imageUrl: string;
}


const UserProfileImage: React.FC<ProfileImageProps> = ({ size, imageUrl }) => {
  return <Image src={imageUrl} size={size} alt="Profile" />;
};

export default UserProfileImage;