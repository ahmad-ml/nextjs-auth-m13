import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


export const metadata: Metadata = {
    title: 'Blog',
    description: 'Learn more about our company',
}

export default async function Blog() {

  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect('/api/auth/signin');
    return <p>You must be signed in...</p>
  } else 

  return (
    <div>
      <h1>Ahmad Blog</h1>
      <p>We are a app development company that wants to boost bussiness productivity !</p>
    </div>
  );
}