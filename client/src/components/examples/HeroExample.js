import { jsx as _jsx } from "react/jsx-runtime";
import { Hero } from '../Hero';
import { ThemeProvider } from '../ThemeProvider';
export default function HeroExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen", children: _jsx(Hero, {}) }) }));
}
