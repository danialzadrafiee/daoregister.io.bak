import React, { useState } from "react";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import { getFullName } from "@/utils";
import axios from "axios";

let users_list = await axios.get(route("user.get_users_by_term", []));

const MemberModal = ({ visible, onClose, onUserSelect, inputFields }) => {
    const isUserAdded = (email) => {
        return inputFields.some((input) => input.member[0].email === email);
    };
    const [searchTerm, setSearchTerm] = useState("");
    const [usersList, setUsersList] = useState(users_list.data || []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                route("user.get_users_by_term", [searchTerm])
            );
            setUsersList(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    return (
        <Modal className="container" onClose={onClose} visible={visible}>
            <Card>
                <header className="w-[900px]  mb-8 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Select Member</h3>
                    <div className="flex gap-2 items-center">
                        <TextInput
                            placeholder="Search user.."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="button"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </header>
                <div className="block w-full h-[0.5px] bg-white/20 mt-4"></div>
                <main>
                    <header className="grid pt-8 pb-4 grid-cols-9 p-4">
                        <div className="font-semibold col-span-1">#</div>
                        <div className="font-semibold col-span-1">Avatar</div>
                        <div className="font-semibold col-span-2">Name</div>
                        <div className="font-semibold col-span-2">Email</div>
                        <div className="font-semibold col-span-3">About</div>
                    </header>
                    <main className="flex flex-col gap-4">
                        {usersList
                            .filter((user) => !isUserAdded(user.email))
                            .map((user, index) => (
                                <div
                                    key={user.id}
                                    onClick={() => onUserSelect(user)}
                                    className="grid cursor-pointer items-center grid-cols-9 hover:bg-white/10 p-4 rounded-xl"
                                >
                                    <div className="col-span-1 font-light">
                                        {user.id}
                                    </div>
                                    <div className="col-span-1 font-light">
                                        <img
                                            src={user.profile_picture}
                                            className="h-12 rounded-full"
                                        />
                                    </div>
                                    <div className="col-span-2 font-light">
                                        {getFullName(user)}
                                    </div>
                                    <div className="col-span-2 font-light">
                                        {user.email}
                                    </div>
                                    <div className="col-span-3 font-light">
                                        {user.cv
                                            ? user.cv.length > 30
                                                ? user.cv.substring(0, 30) +
                                                  "..."
                                                : user.cv
                                            : "..."}
                                    </div>
                                </div>
                            ))}
                    </main>
                </main>
            </Card>
        </Modal>
    );
};

export default MemberModal;
