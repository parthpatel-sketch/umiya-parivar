import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigation } from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';
export default function NavigationExample() {
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Navigation, {}), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Navigation Component" }), _jsx("p", { className: "text-muted-foreground", children: "This shows the temple navigation with logo, menu items, and theme toggle. Try clicking the mobile menu button on smaller screens." })] })] }) }));
}
