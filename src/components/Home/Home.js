import { React, Suspense, lazy } from 'react';

const Chief = lazy(() => import('./ChiefProfile'));
const Hero = lazy(() => import('./Hero'));
const BecudaExe = lazy(() => import('./becudaExe'));
const Title = lazy(() => import('../Headings/Title'));
const GreatIcons = lazy(() => import('./GreatIcons'));
const CurrentProjects = lazy(() => import('./CurrentProjects'));
const Counter = lazy(() => import('./CountUpComponent'));
const LatestNews = lazy(() => import('./LatestNews'));

const Home = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="all our branches" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Counter />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="Chiefs of Befang" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Chief />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="becuda executive members" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <BecudaExe />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="Some of Befang great icons" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <GreatIcons />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="Latest News" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <LatestNews />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Title title="Ongoing projects" />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <CurrentProjects />
    </Suspense>
  </>
);

export default Home;
