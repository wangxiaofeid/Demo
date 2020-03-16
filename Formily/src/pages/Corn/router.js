import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

const router = <Route key="Corn" path="/Corn" component={SplitComponent(() => import("./index"))} />;

export default router;
