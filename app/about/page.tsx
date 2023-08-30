import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const dynamic = 'force-static'

export const metadata: Metadata = {
    title: 'About us',
    description: 'Learn more about our company',
     
}

export default async function About() {

    const session = await getServerSession();

  if (!session) {
    // redirect('/api/auth/signin');
    return <p>You must be signed in...</p>
  }

  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}