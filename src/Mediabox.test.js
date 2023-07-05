
import { createRoot } from 'react-dom/client';
import Mediabox from './Mediabox'
import {render, screen} from '@testing-library/react'

// Media render without crashing
it("Media renders without crashing", () => {
    
    render(<Mediabox />);
    
});