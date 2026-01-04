const { cookies } = require("next/headers");

const checkAdmin = async () => {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("token")?.value;

  if (!token) {
    return false;
  }

  if (token !== process.env.ADMIN_TOKEN) {
    return false;
  }

  return token;
};

export default checkAdmin;
