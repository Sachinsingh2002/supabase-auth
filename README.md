
# Next.js Authentication with Supabase

This project demonstrates authentication using Next.js with Supabase, deployed on Vercel. The project is based on a Vercel template and leverages the Supabase authentication system to manage user authentication.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- A Supabase account and project

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/nextjs-supabase-auth.git
   cd nextjs-supabase-auth
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Create a Supabase project:**

   Follow the [Supabase documentation](https://supabase.com/docs/guides/auth/server-side/nextjs) to set up a new project.

4. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the following variables:

   ```sh
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   Replace `your-supabase-url` and `your-supabase-anon-key` with the values from your Supabase project.

5. **Run the development server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

This project can be easily deployed on Vercel. Follow these steps:

1. **Push the repository to GitHub:**

   ```sh
   git remote add origin https://github.com/yourusername/nextjs-supabase-auth.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel:**

   - Go to the [Vercel dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Set the environment variables in the Vercel dashboard as you did in the `.env.local` file
   - Click Deploy

### Usage

This project includes basic authentication features:

- **Sign Up**
- **Log In**
- **Log Out**

These functionalities are handled using Supabase's authentication system. For more details, refer to the [Supabase Authentication Documentation](https://supabase.com/docs/guides/auth/server-side/nextjs).

### Project Structure

- `pages/` - Contains the Next.js pages
- `components/` - Contains reusable React components
- `utils/` - Contains utility functions and Supabase client setup

### Learn More

To learn more about Next.js and Supabase, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs/guides/auth/server-side/nextjs)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.
