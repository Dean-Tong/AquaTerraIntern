import { createRoot } from "react-dom/client";
import DisplayMedia from "./DisplayMedia";

it('render without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<DisplayMedia />);
});