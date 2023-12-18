/* eslint no-tabs: 0 */

import { React, Suspense, lazy } from 'react';

const Origin = lazy(() => import('./Origin'));
const Families = lazy(() => import('./Families'));
const EvolutionOfFamilies = lazy(() => import('./EvolutionOfFamilies'));
const DiscoveryOfUbog = lazy(() => import('./DiscoveryOfUbog'));

const AboutBefang = () => (
  <main className="constitution">
    <h1 className="page-hero-text">The history of befang</h1>
    <h4 style={{ textAlign: 'center' }}>Contributor: BONLIBI AMAH</h4>
    <Suspense fallback={<div>Loading...</div>}>
      <Origin />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <Families />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <EvolutionOfFamilies />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <DiscoveryOfUbog />
    </Suspense>
  </main>
);

export default AboutBefang;
