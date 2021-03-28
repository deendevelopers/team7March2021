import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import Docs from "../../assets/notice-api.json";

export default function ApiDocs() {
  return <SwaggerUI spec={Docs} />;
}
