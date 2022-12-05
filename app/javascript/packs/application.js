// Support component names relative to this directory:
import * as bootstrap from "bootstrap"
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
