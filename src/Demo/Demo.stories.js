import React from "react";
import {Demo} from "./Demo";

// storiesOf("Examples", module).add("Demo", () => <Demo />);


export function Examples(){
    return (
        <Demo />
    );
  };


export default {
    title: 'General/Demo',
    parameters: {
        component: Demo,
    },
};
