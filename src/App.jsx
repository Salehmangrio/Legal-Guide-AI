import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import {
    HeroPage,
    FeaturesPage,
    StatsPage,
    TestimonialsPage,
    CTAPage,
} from "./pages/index";

import { StartLayout } from "./layouts/index";

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
                <Route path="/" element={<StartLayout />} >
                    <Route index element={<HeroPage />} />
                    <Route path="features" element={<FeaturesPage />} />
                    <Route path="stats" element={<StatsPage />} />
                    <Route path="testimonials" element={<TestimonialsPage />} />
                    <Route path="cta" element={<CTAPage />} />
                </Route>
        )
    );
    return <RouterProvider router={router} />;
}
