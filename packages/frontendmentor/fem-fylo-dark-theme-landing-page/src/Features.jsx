import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

import AccessImg from "./images/icon-access-anywhere.svg";
import SecurityImg from "./images/icon-security.svg";
import AnyFileImg from "./images/icon-any-file.svg";
import ColabImg from "./images/icon-collaboration.svg";

const Heading = styled(Typography)`
  font-size: 1.3em;
  font-weight: 700;
  line-height: 1.5;
`;

const GridItm = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-self: baseline;

  > img {
    width: 60px;
    margin-block-end: 1em;
  }
`;
const GridContent = styled.div`
  max-width: 40ch;
`;

export default function () {
  return (
    <Grid
      container
      rowSpacing={6}
      columnSpacing={2}
      sx={{
        paddingInline: "1em",
        marginBlock: "2em",
        "max-width": "1200px",
        "width": "95%",
        marginInline: "auto"
      }}
    >
      <GridItm item xs={12} md={6}>
        <img src={AccessImg} alt="" />
        <GridContent>
          <Heading variant="h2">Access your files, anywhere</Heading>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </GridContent>
      </GridItm>

      <GridItm item xs={12} md={6}>
        <img src={SecurityImg} alt="" />
        <GridContent>
          <Heading variant="h2">Security you can trust</Heading>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </GridContent>
      </GridItm>

      <GridItm item xs={12} md={6}>
        <img src={ColabImg} alt="" />
        <GridContent>
          <Heading variant="h2"> Real-time collaboration</Heading>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </GridContent>
      </GridItm>

      <GridItm item xs={12} md={6}>
        <img src={AnyFileImg} alt="" />
        <GridContent>
          <Heading variant="h2"> Store any type of file</Heading>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </GridContent>
      </GridItm>
    </Grid>
  );
}
