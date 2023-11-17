import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import PropTypes from 'prop-types';

function WhatsAppNow({ number }) {
  return (
    <>
      <a className="whatsapp-link text-success" href={number}>
        <FaWhatsapp style={{ marginLeft: '10px' }} />
        Chat
      </a>

    </>
  );
}

WhatsAppNow.propTypes = {
  number: PropTypes.string.isRequired,
};

export default WhatsAppNow;
