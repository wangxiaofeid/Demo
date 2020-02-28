import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

const router = <Route key="Schema" path="/Schema" component={SplitComponent(() => import("./index"))} />;

export default router;
