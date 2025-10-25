import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const config = {
          method: "post",
          url: "https://dummyjson.com/auth/login",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: credentials.username,
            password: credentials.password,
          },
        };
        const response = await axios.request(config);
        console.log(response.data);
        if (response.status !== 200) {
          throw new Error("Invalid credentials.");
        }
        user = response.data;
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
