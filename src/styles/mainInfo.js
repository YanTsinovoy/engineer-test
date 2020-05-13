export default (theme)=> ({
    main: {
        backgroundColor: 'black',
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        minWidth: "300px",
        height: '200px',
        border: '1px solid blue',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '10px',
        backgroundColor: 'white'
    },
    input: {
        backgroundColor: 'white'
    }
})