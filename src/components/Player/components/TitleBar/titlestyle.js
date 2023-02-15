export const styles = {
  titleBarRoot: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '60px',
    marginBottom: '7px',
    paddingLeft: '1.25rem',
    position: 'relative',
  }),
  castWrapper: () => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '140px',
    alignItems: 'center',
    transition: 'all 0.5s ease-in',
    zIndex: 100,
    cursor: 'pointer',
  }),
  timeWrapper: () => ({
    display: 'flex',
    textAlign: 'end',
    position: 'relative',
    marginRight: '1.5rem'
  }),
  clockSvg: () => ({
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '18px',
    height: '18px',
  }),
  time: () => ({
    color: '#FFFFFF',
    fontSize: '22px',
    fontFamily: 'ProximaNova-Semibold, Helvetica, Arial, sans-serif',
    letterSpacing: '1px',
    lineHeight: '17px',
    paddingLeft: '8px',
  }),
}