/* eslint no-tabs: 0 */

import React from 'react';
import Origin from './Origin';
import Families from './Families';
import EvolutionOfFamilies from './EvolutionOfFamilies';
import DiscoveryOfUbog from './DiscoveryOfUbog';

const AboutBefang = () => (
  <main className="constitution">
    <h1 className="page-hero-text">The history of befang</h1>
    <h4 style={{ textAlign: 'center' }}>Contributor: BONLIBI AMAH</h4>
    <Origin />
    <Families />
    <EvolutionOfFamilies />
    <DiscoveryOfUbog />
  </main>
);

export default AboutBefang;
