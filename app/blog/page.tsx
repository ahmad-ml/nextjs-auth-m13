import { Metadata } from "next";
import type { NextRequest } from "next/server";



export const metadata: Metadata = {
    title: 'Blog',
    description: 'Learn more about our company',
}

export default async function Blog(response: NextRequest) {


  


  
  return (
    <div>
    
      <h1>Ahmad Blog</h1>
      <p>We are a app development company that wants to boost bussiness productivity !</p>
    </div>
  );
}