import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
export default function Home() {
    return (_jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Events, {})] }));
}
