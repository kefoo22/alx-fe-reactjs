// src/components/UserProfile.jsx
/* eslint-disable react/prop-types */
const UserProfile = (props) => {
  const { name, age, bio } = props;

  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
};

export default UserProfile;
