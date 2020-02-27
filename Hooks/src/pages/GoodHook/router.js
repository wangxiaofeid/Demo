import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

export default <Route key="GoodHook" path="/GoodHook" component={SplitComponent(() => import("./index"))} />;
