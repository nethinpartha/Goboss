export const titleStyle = {
    Card: (sm, bgColor) => ({
        background: `${bgColor}`,
        width: '100%',
        border: '0',
        textAlign: `${sm ? 'center' : ''}`,
        padding: '0.5rem'
    }),
    title: (sm) => ({
        paddingLeft: '0',
        border: 'none',
        textTransform: 'capitalize',
        color: `#ffffff`,
        fontSize: "26px",
        marginTop: "1rem",
        textAlign: "left"
    })
}