
import { createRoot } from 'react-dom/client';
import Mediabox from './Mediabox'

// image render without crashing
it("render without crashing", () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Mediabox />);
});