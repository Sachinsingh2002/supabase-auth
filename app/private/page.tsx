import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = createClient();

  try {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      throw new Error('Unauthorized access');
    }

    return (
      <div
        style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          Welcome, {data.user.email}!
        </h1>
        <p
          style={{
            fontSize: '18px',
            color: '#666'
          }}
        >
          You are now logged in and have access to private content.
        </p>

        <div style={{ marginTop: '20px' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px'
            }}
          >
            About Supabase
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '20px'
            }}
          >
            Supabase is an open-source Firebase alternative. It provides all the backend services you need to build a product, such as authentication, storage, and real-time databases. With Supabase, you can quickly set up a fully functional backend with minimal effort.
          </p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '10px'
            }}
          >
            About Vercel
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '20px'
            }}
          >
            Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database. Vercel offers a great developer experience with a wide range of features like custom domains, serverless functions, and automatic HTTPS.
          </p>
        </div>
      </div>
    );
  } catch (error) {
    redirect('/login');
  }
}
