import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Footer } from '../Footer';
import { ThemeProvider } from '../ThemeProvider';
export default function FooterExample() {
    return (_jsx(ThemeProvider, { children: _jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [_jsxs("div", { className: "flex-1 p-8", children: [_jsx("h3", { className: "text-lg font-semibold mb-4", children: "Footer Component" }), _jsx("p", { className: "text-muted-foreground", children: "This shows the temple footer with contact information, quick links, and social media." })] }), _jsx(Footer, {})] }) }));
}
