import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy" >
        <A key="website" href="https://pragicts.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
          Engineered by  <b style={{ color: '#F71735' }}>PragICTS</b>
        </A>
        &nbsp;


      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
