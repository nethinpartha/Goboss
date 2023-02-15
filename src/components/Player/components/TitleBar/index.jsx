import React from 'react';
import { styles } from './titlestyle';

function SvgBack(props) {
  return (
    <svg width="28px" height="28px" viewBox="-0.5 0 12.5 10" {...props}>
      <path
        d="M4.332.149a.5.5 0 01.711.702L1.195 4.75H12.5a.5.5 0 01.492.41l.008.09a.5.5 0 01-.5.5H1.196l3.847 3.899a.5.5 0 01.054.638l-.058.069a.5.5 0 01-.707-.005l-4.688-4.75a.509.509 0 01-.133-.244A.498.498 0 01-.5 5.25l.005.074A.503.503 0 01-.5 5.26V5.25a.51.51 0 01.078-.268.499.499 0 01.066-.083L-.4 4.95a.503.503 0 01.035-.041l.01-.011z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default function TitleBar(props) {
  let { exitPlayer } = props;
  return (
    <div id="titleBar"
      style={styles.titleBarRoot()}>
      <div
        onClick={exitPlayer}
        id="exit-btn"
        style={styles.castWrapper()}>
        <SvgBack />
      </div>
    </div>
  )
}