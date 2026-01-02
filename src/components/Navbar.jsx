import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      
      {/* Left - Logo */}
      <div style={styles.logo}>
        MyLogo
      </div>

      {/* Center - Search */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
        />
      </div>

      {/* Right - Icons */}
      <div style={styles.icons}>
        <span style={styles.icon}>🛒</span>

        <div style={styles.notification}>
          <span style={styles.icon}>🔔</span>
          <span style={styles.badge}>9</span>
        </div>

        <span style={styles.icon}>👤</span>
      </div>

    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 30px',
    border: '2px solid #8b5cf6',
    backgroundColor: '#fff',
  },

  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  searchBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 40px',
  },

  searchInput: {
    width: '100%',
    maxWidth: '500px',
    padding: '10px 15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
  },

  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    fontSize: '20px',
  },

  icon: {
    cursor: 'pointer',
  },

  notification: {
    position: 'relative',
  },

  badge: {
    position: 'absolute',
    top: '-6px',
    right: '-10px',
    backgroundColor: 'red',
    color: '#fff',
    fontSize: '12px',
    padding: '2px 6px',
    borderRadius: '50%',
  },
};

export default Navbar;
