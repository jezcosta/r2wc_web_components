import r2wc from "@r2wc/react-to-web-component";
import Button from "./Button";

customElements.define(
  "rwc-button", r2wc(Button, {
    props: { label: "string", onClick: "function" },
  })
);

export {Button}