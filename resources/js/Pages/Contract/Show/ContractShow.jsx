import react from "react";
import Page from "@/components/Page";
import Card from "@/components/Card";
import ContractEditor from "./ContractEditor/ContractEditor";
import { getFullName } from "@/utils";
const ContractShow = ({ contract }) => {
    console.log(contract);
    return (
        <Page>
            <div className="grid grid-cols-2 gap-3">
                <Card
                    classTitle={"title-purple"}
                    title={"Contract Detail"}
                    className={"bg-red-400"}
                    head={
                        <div>
                            <div className="button cursor-pointer"> Generate NFT </div>
                        </div>
                    }
                >
                    <ContractEditor contract_contract={contract} defaultValue={contract.contract} />
                </Card>
                <div className="flex flex-col gap-3">
                    {contract.members.map((member) => (
                        <Card className={"h-max"} key={member.id}>
                            <div className="grid grid-cols-3  items-center gap-3">
                                <div className="flex h-14 gap-3 items-center">
                                    <img
                                        src={member.profile_picture}
                                        className="w-14 rounded-full"
                                    />
                                    <div className="flex capitalize  flex-col">
                                        <div>{getFullName(member)}</div>
                                        <div>#{member.id}</div>
                                    </div>
                                </div>
                                <div className="h-14 flex flex-col justify-center">
                                    <div className="capitalize opacity-75">
                                        {member.email}
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-light">
                                            Role:{" "}
                                        </span>
                                        <span className="font-semibold">
                                            {member.pivot.role}
                                        </span>
                                    </div>
                                </div>
                                <div className="button h-10 w-20 ml-auto hover:bg-dp2-base cursor-default bg-dp2-base text-dp2">
                                    Signed
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Page>
    );
};
export default ContractShow;
