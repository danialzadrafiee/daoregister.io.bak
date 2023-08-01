import React from 'react';

const DaoContext = React.createContext({
    title: "",
    setTitle: () => {},
    description: "",
    setDescription: () => {}
});


export default DaoContext;
