import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

export default <Route key="EffectHook" path="/EffectHook" component={SplitComponent(() => import("./index"))} />;
