import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from '../ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';
export default function ThemeProviderExample() {
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "p-8 bg-background text-foreground", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-semibold", children: "Theme Provider Example" }), _jsx(ThemeToggle, {})] }), _jsx("p", { className: "text-muted-foreground", children: "This demonstrates the theme toggle functionality. Click the theme toggle button to switch between light and dark modes." })] }) }));
}
