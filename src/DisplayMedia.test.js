import { createRoot } from "react-dom/client";
import DisplayMedia from "./DisplayMedia";
import getNewMediaSet from './DisplayMedia';
import { render, screen } from "@testing-library/react";


describe('Display Medias', () => {
    render(<DisplayMedia />);

    it('button render correctly', () => {
        
        const button = screen.getByText('Another Set');
        expect(button).toBeInTheDocument();
    });
    
});
