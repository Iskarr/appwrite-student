import { account, databases } from "../app/appwrite"; // Import the initialized Appwrite client

// Function to get account details
async function getAccount() {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    console.error("Failed to fetch account:", error);
    return null;
  }
}

// log the user out
async function logout() {
  try {
    await account.deleteSession("current");
    // window.location.reload();
  } catch (error) {
    console.error("Failed to logout:", error);
  }
}

export { getAccount, logout };
