import { jsx as _jsx } from "react/jsx-runtime";
import { About } from '../About';
import { ThemeProvider } from '../ThemeProvider';
export default function AboutExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(About, {}) }) }));
}
