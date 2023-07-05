
import { createRoot } from 'react-dom/client';
import Mediabox from './Mediabox'

// Media render without crashing
it("Media renders without crashing", () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Mediabox />);
});