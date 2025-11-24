import { jsx as _jsx } from "react/jsx-runtime";
import { Contact } from '../Contact';
import { ThemeProvider } from '../ThemeProvider';
export default function ContactExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(Contact, {}) }) }));
}
