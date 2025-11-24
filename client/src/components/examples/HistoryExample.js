import { jsx as _jsx } from "react/jsx-runtime";
import { History } from '../History';
import { ThemeProvider } from '../ThemeProvider';
export default function HistoryExample() {
    return (_jsx(ThemeProvider, { children: _jsx("div", { className: "min-h-screen bg-background", children: _jsx(History, {}) }) }));
}
