import { jsx as _jsx } from "react/jsx-runtime";
import { LiveStreaming } from '../LiveStreaming';
import { ThemeProvider } from '../ThemeProvider';
export default function LiveStreamingExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(LiveStreaming, {}) }) }));
}
