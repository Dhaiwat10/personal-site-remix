import { MetaFunction, LinksFunction, Link } from 'remix';

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Dhaiwat Pandya - Software Engineer',
    description:
      'I am Dhaiwat, a 21-year-old software engineer from Surat, India.',
    'og:image': 'https://staging.dhaiwat.com/thumb.png',
    charset: 'utf-8',
    'twitter:card': 'summary_large_image',
    'twitter:site': '@dhaiwat10',
    'twitter:creator': '@dhaiwat10',
    'twitter:title': 'Dhaiwat Pandya - Software Engineer',
    'twitter:description':
      'I am Dhaiwat, a 21-year-old software engineer from Surat, India.',
    // this should be a whole link
    'twitter:image': 'https://staging.dhaiwat.com/thumb.png',
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon-16x16.png',
    },
  ];
};

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {label}
    </a>
  );
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div className='container'>
      <main className='home__main'>
        <img className='avi' src='avi.jpeg' />
        <h2>Dhaiwat Pandya</h2>
        <p>Software engineer.</p>
        <p>
          Building open source software with{' '}
          <ExternalLink
            href='https://twitter.com/developer_dao'
            label='Developer DAO'
          />{' '}
          and{' '}
          <ExternalLink
            href='https://twitter.com/moonshotcollect'
            label='
            the Moonshot Collective'
          />
          .
        </p>
        <ExternalLink href='https:/github.com/dhaiwat10' label='Github' /> |{' '}
        <ExternalLink href='https://twitter.com/dhaiwat10' label='Twitter' />
        <hr />
        <h2>Blog posts</h2>
        <ul>
          <li>
            <Link to='/posts/develop-test-react-component-isolation'>
              Developing and testing React components in isolation
            </Link>
          </li>

          <li>
            <Link to='/posts/become-better-writer'>
              Becoming a better writer as a developer
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
