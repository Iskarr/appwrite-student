## Getting Started

You will need to create a .env.local with the following appwrite connections:
```
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_PROJECT_ID=ADD_YOUR_PROJECT_ID
NEXT_PUBLIC_DATABASE_ID=ADD_YOUR_DATABASE_ID
NEXT_PUBLIC_POST_COLLECTION_ID=ADD_YOUR_COLLECTION_ID
```

then you will need to install all required dependancies
```
npm install
```
then start the project development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

  

This documentation provides an overview of the functions available in the module, which interact with Appwrite's API to manage user sessions and account details.

  
### **Prerequisites**

- Ensure that the `appwrite` client is initialized and properly configured in the `../app/appwrite` file.
- If you have more questions about Appwrite, view the documents here: https://appwrite.io/docs
  

---

  

### **1. `getAccount()`**

Fetches the currently authenticated user's account details.

  

- **Usage**:

```typescript

const user = await getAccount();

```

- **Returns**:

- A `user` object containing account details if successful.

- `null` if the account retrieval fails.

- **Errors**:

- Logs an error message to the console if the request fails.

---

### **2. `logout()`**

Logs the user out by deleting the current session.

- **Usage**:

```typescript

await logout();

```

- **Returns**: `void`


- **Errors**:

- Logs an error message to the console if the logout request fails.

---
### **Exported Functions**

The following functions are exported for use in other parts of your application:

- `getAccount`

- `logout`
---

This documentation provides an overview of the available methods, their usage, parameters, return values, and potential errors to help developers understand and integrate these functions within their applications.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# appwrite-student
