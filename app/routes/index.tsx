import type { MetaFunction } from 'remix';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Vercel barebones starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className='remix__page'>
      <main>
        <h2>Welcome to Remix!</h2>
        <hr />
        <h3>Local development</h3>
        <ol>
          <li>
            <code>vercel dev</code>
          </li>
          <li>
            <code>npm run dev</code>
          </li>
        </ol>
        <hr />
        <h3>Deployment</h3>
        <ol>
          <li>
            <code>npm run build</code>
          </li>
          <li>
            <code>vercel --prod</code>
          </li>
        </ol>
      </main>
    </div>
  );
}
