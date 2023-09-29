// import React from "react";

// import { Accordion, AccordionItem } from "@nextui-org/react";

// export default function AccordionComp() {
//     const defaultContent =
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//     return (
//         <Accordion variant="splitted">
//             <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dignissimos enim velit repudiandae omnis numquam? Quasi maiores non est! Non impedit inventore vero consequuntur nostrum quas nulla mollitia natus similique.
//             </AccordionItem>
//             <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
//                 {defaultContent}
//             </AccordionItem>
//             <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
//                 {defaultContent}
//             </AccordionItem>
//         </Accordion>
//     );
// }

import React from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComp() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1"  title={<span className="text-2xl">Web Development</span>}>
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={<span className="text-2xl">Application</span>}
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title={<span className="text-2xl">Digital Marketing</span>}>
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
