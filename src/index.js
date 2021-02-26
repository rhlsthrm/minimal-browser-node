import React from "react";
import ReactDOM from "react-dom";
import { BrowserNode } from "@connext/vector-browser-node";
import { ChannelSigner } from "@connext/vector-utils";

// session monster economy alley thumb fun critic view quit wonder sound soldier

async function run() {
  const pk =
    "0x2df591b7552895e90b6cd24cfde781c59e1afe38fc529399421cbd977db602fa";
  const signer = new ChannelSigner(pk);

  console.log("NODE CREATING");

  let browserNode = await BrowserNode.connect({
    signer,
    chainProviders: {
      4: "https://rinkeby.infura.io/v3/",
    },
    messagingUrl: "https://messaging.connext.network",
  });

  console.log("NODE CREATED: ", browserNode.publicIdentifier);

  const setup = await browserNode.setup({
    timeout: "100000",
    //our router pubkey addr
    counterpartyIdentifier:
      "vector5wTFqAqyphMqbt5dWBoEt6KrkqBRzQeLAHEoV71HfrAcseukvr",
    chainId: 4,
  });
  console.log("setup: ", setup.isError ? setup.getError() : setup.getValue());
}
run();

ReactDOM.render(
  <React.StrictMode></React.StrictMode>,
  document.getElementById("root")
);
