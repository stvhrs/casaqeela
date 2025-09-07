import React from 'react';

const FloatingWhatsAppButton = () => {
  const waNumber = '6282243431717';
  const waLink = `https://wa.me/${waNumber}`;

  const styleButton = {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '20px',
    left: '20px',        // posisi di kiri bawah
    backgroundColor: '#25D366',
    borderRadius: '50%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // Responsive untuk layar kecil (HP)
    // Ukuran lebih kecil dan jarak bawah/kiri lebih rapat
    '@media (max-width: 600px)': {
      width: '50px',
      height: '50px',
      bottom: '15px',
      left: '15px',
    },
  };

  const styleImage = {
    width: '35px',
    height: '35px',
  };

  const openWhatsApp = () => {
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={styleButton}
      onClick={openWhatsApp}
      aria-label="Chat WhatsApp"
      title="Chat WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={styleImage}
      />
    </div>
  );
};

export default FloatingWhatsAppButton;
