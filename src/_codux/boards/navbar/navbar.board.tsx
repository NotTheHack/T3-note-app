import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Navbar from '../../../components/header/navbar';

export default createBoard({
    name: 'Navbar',
    Board: () => <Navbar />
});
