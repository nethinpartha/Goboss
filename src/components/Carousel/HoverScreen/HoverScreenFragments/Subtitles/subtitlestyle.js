export const subtitlestyle = {
    wrapper: () => ({
        marginBottom: '0.5rem',
        marginTop: '0.25rem'
    }),
    size: (smallsize) => ({
        width: `${smallsize ? '20px' : '26px'}`,
        height: `${smallsize ? '12px' : '18px'}`
    }),
    leftitem: () => ({
        marginRight: '0.5rem',
        marginLeft: '-1rem'
    }),
    rightitem: () => ({
        marginRight: '0.5rem'
    })
}