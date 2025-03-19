import { auth } from "@clerk/nextjs/server";

const { userId, sessionClaims } = auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const currentUserId = userId;

// export const role = async () => {
//   const { sessionClaims } = await auth();
//   //   const {userId} = await auth()

//   return (sessionClaims?.metadata as { role?: string })?.role;
// };

// export const currentUserId = async () => {
//   const { userId } = await auth();
//   const currentUserId = userId;
//   return currentUserId;
// };

// export const (userId,sessionClaims) = async() => {
//     const {userId , sessionClaims} = await auth()
// }

// khalil()
