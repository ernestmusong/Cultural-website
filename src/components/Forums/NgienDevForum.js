import { React, Suspense, lazy } from 'react';
import Title from '../Headings/Title';

const WhoWeAre = lazy(() => import('./WhoWeAre'));
const Table = lazy(() => import('./Table'));
const Hero = lazy(() => import('./Hero'));
const NgienDevForum = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <WhoWeAre />
    </Suspense>
    <Title title="all members" />
    <br />
    <center
      style={{
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        textTransform: 'uppercase',
        paddingTop: '0.5rem',
      }}
    >
      <p className="text-white">Year: 2024</p>
    </center>
    <Suspense fallback={<div>Loading...</div>}>
      <Table />
    </Suspense>
  </>
);

export default NgienDevForum;
