import { jsx as _jsx } from "react/jsx-runtime";
import { Events } from '../Events';
import { ThemeProvider } from '../ThemeProvider';
export default function EventsExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(Events, {}) }) }));
}
