import React from "react";
import { Route } from "react-router-dom";
import SplitComponent from "@/utils/splitComponent";

const router = <Route key="schemaEdit2" path="/SchemaEdit2" component={SplitComponent(() => import("./index"))} />;

export default router;
