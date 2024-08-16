import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID as string);

const databases = new Databases(client);
const account = new Account(client);

export { databases, account, client };
