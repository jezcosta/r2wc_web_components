import r2wc from "@r2wc/react-to-web-component";
import Button from "./Button";
import Table from "./Table";
import Input from "./Input";

customElements.define(
  "rwc-button", r2wc(Button, {
    props: { label: "string", onClick: "function" },
  })
);
customElements.define(
  "rwc-table", r2wc(Table, {
    props: {  },
  })
);
customElements.define(
  "rwc-input", r2wc(Input, {
    props: { "idTest": "string" },
    
  })
);

export {Button,Table}