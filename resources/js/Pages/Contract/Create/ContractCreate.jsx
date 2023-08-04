import Page from "@/components/Page";
import * as React from "react";
import { ReactFormBuilder } from "react-form-builder2";
import * as variables from "./variables";
export const ContractCreate = () => {
    return (
        <div>
            <Page>
                <ReactFormBuilder variables={variables} />
            </Page>
        </div>
    );
};
