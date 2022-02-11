import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

const router = (
    <Route
        key="simple"
        path="/simple"
        component={SplitComponent(() => import(/* webpackChunkName: "demo" */ "./index"))}
    />
);

export default router;
