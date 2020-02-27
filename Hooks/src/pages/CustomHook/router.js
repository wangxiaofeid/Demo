import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

export default <Route key="CustomHook" path="/CustomHook" component={SplitComponent(() => import("./index"))} />;
