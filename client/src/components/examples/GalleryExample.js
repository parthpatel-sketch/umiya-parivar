import { jsx as _jsx } from "react/jsx-runtime";
import { Gallery } from '../Gallery';
import { ThemeProvider } from '../ThemeProvider';
export default function GalleryExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(Gallery, {}) }) }));
}
