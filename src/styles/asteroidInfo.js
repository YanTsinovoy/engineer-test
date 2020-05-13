export default (theme)=> ({
    main: {
        backgroundColor: 'black',
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        position: 'relative',
        minWidth: "400px",
        height: '400px',
        border: '1px solid blue',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '10px',
        backgroundColor: 'white'
    },
    name: {
        color: 'black',
        margin: "20px 0"
    },
    link: {
        margin: "10px 0"
    },
    line: {
        margin: "10px 0"
    },
    button: {
        position: 'absolute',
        bottom: '15px'
    }
})