export const managedevicesstlye = {
    heading: () => ({
        color: '#ffffff',
        display: "flex"
    }),
    title: (sm) => ({
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: '1rem',
        textAlign: `${sm ? 'center' : ''}`
    }),
    card: (sm) => ({
        background: "#F5F5F5",
        border: '0',
        width: '100%',
        marginBottom: '3rem',
        textAlign: `${sm ? 'center' : ''}`
    }),
    cardbody: () => ({
        padding: '0'
    }),
    details: (sm) => ({
        fontSize: '15px',
        color: '#ffffff',
        margin: '4px 0',
        textAlign: `${sm ? 'center' : ''}`
    }),
    options: (sm) => ({
        fontSize: '15px',
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: `${sm ? 'center' : ''}`
    }),
    td: () => ({
        color: '#ffffff',
        fontSize: '15px',
        fontWeight: '400'
    }),
    th: () => ({
        fontWeight: '500'
    }),
    tr: () => ({
        color: '#ffffff',
        fontSize: '15px'
    }),
    wrapper: () => ({
        padding: '1rem'
    })
}