const getUserData = async () => {
  try {
    const response = await fetch('/data/user.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.user[0];
  } catch (error) {
    console.error('Error fetching the User', error);
    throw error;
  }
};

export default { getUserData };
