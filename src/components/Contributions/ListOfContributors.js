import React from 'react';
import { useSelector } from 'react-redux';
import Title3 from '../Headings/Title3';
import Title4 from '../Headings/Title4';
import ContributeNowLink from './ContributeNowLink';
import CommingSoon from '../General/CommingSoon';

const ListOfContributors = () => {
  const { branches } = useSelector((store) => store.branches);
  const { contributors } = useSelector((store) => store.contributors);
  const bamenda = contributors.filter((contributor) => contributor.branch === 'bamenda');
  const bAmts = bamenda.map((person) => person.amount);
  const bamendaTotal = bAmts.reduce((a, b) => a + b, 0);

  const buea = contributors.filter((contributor) => contributor.branch === 'buea');
  const buAmts = buea.map((person) => person.amount);
  const bueaTotal = buAmts.reduce((a, b) => a + b, 0);

  const muea = contributors.filter((contributor) => contributor.branch === 'muea');
  const muAmts = muea.map((person) => person.amount);
  const mueaTotal = muAmts.reduce((a, b) => a + b, 0);

  const mutengene = contributors.filter((contributor) => contributor.branch === 'mutengene');
  const mutengAmts = mutengene.map((person) => person.amount);
  const mutengTotal = mutengAmts.reduce((a, b) => a + b, 0);

  const limbe = contributors.filter((contributor) => contributor.branch === 'limbe');
  const limbeAmts = limbe.map((person) => person.amount);
  const limbeTotal = limbeAmts.reduce((a, b) => a + b, 0);

  const yaounde = contributors.filter((contributor) => contributor.branch === 'yaounde');
  const yaoundeAmts = yaounde.map((person) => person.amount);
  const yaoundeTotal = yaoundeAmts.reduce((a, b) => a + b, 0);

  const douala = contributors.filter((contributor) => contributor.branch === 'douala');
  const doualaAmts = douala.map((person) => person.amount);
  const doualaTotal = doualaAmts.reduce((a, b) => a + b, 0);

  const diaspora = contributors.filter((contributor) => contributor.branch === 'diaspora');
  const diasporaAmts = diaspora.map((person) => person.amount);
  const diasporaTotal = diasporaAmts.reduce((a, b) => a + b, 0);

  const beyoin = contributors.filter((contributor) => contributor.branch === 'beyoin');
  const beyoinAmts = beyoin.map((person) => person.amount);
  const beyoinTotal = beyoinAmts.reduce((a, b) => a + b, 0);

  if (contributors.length === 0) return <CommingSoon title="there are no contributions at the moment!" />;
  return (
    <>
      <div className="title3-wrapper">
        <Title3 title=" thank you all for your contributions." />
      </div>
      <div className="title4-wrapper">
        <Title4 title="total amount per branch." />
      </div>

      <div className="table-container all-branch-table">
        <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution project</div>
        <table className="table table-bordered  ">
          <thead>

            <tr style={{ backgroundColor: '#DCDCDC' }}>
              {branches.map((branch) => (
                <th key={branch.id} className=" text-uppercase" scope="col">{branch.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <td className="text-uppercase">
                {bamendaTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {bueaTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {mueaTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {mutengTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {limbeTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {doualaTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {yaoundeTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {diasporaTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">
                {beyoinTotal}
                {' '}
                cfa
              </td>
              <td className="text-uppercase">--</td>
            </tr>

          </tbody>
        </table>
      </div>
      <Title4 title="List of all contributions." />
      <div className="list-of-all-contributions">
        {/* befang youths initiative branch */}
        <div className="col-md-6 col-lg-4  mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...befang youths initiative branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'beyoin')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* buea branch */}
        <div className="col-md-6 col-lg-4  mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...buea branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'buea')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* bamenda branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...bamenda branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'bamenda')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* muea branch */}
        <div className="col-md-6 col-lg-4  mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...muea branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'muea')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* mutengene branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...mutengene branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'mutengene')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* limbe branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...limbe branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'limbe')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* yaounde branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...yaounde branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'yaounde')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* douala branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...douala branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'douala')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
        {/* diaspora branch */}
        <div className="col-md-6 col-lg-4 mx-auto list-per-branch">
          <div className="text-center text-uppercase py-2" style={{ backgroundColor: 'var(--mainOrange)', fontWeight: 'bold' }}>Water distribution...diaspora branch</div>
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#DCDCDC' }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {contributors.filter((contributor) => (contributor['water destribution'] === true && contributor.branch === 'diaspora')).map((contributor) => (
                <tr className="bg-light" key={contributor.id}>
                  <td className="text-capitalize">{contributor.name}</td>
                  <td className="text-uppercase">
                    {contributor.amount}
                    {' '}
                    cfa
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ContributeNowLink />
        </div>
      </div>
    </>
  );
};

export default ListOfContributors;
