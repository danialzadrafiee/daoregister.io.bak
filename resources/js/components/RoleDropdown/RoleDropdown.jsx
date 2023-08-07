import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import cn from "classnames";
import styles from "./RoleDropdown.module.sass";
import Tooltip from "@/components/Tooltip";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const RoleDropdown = ({
    roles,
    selectedRole,
    setSelectedRole,
    classLabel,
    label,
    tooltip,
    className,
}) => {
    return (
        <Listbox value={selectedRole} onChange={setSelectedRole}>
            {({ open }) => (
                <>
                    <div className={cn(className, "relative")}>
                        {label && (
                            <div className={cn(classLabel, styles.label)}>
                                {label}{" "}
                                {tooltip && (
                                    <Tooltip
                                        className={styles.tooltip}
                                        title={tooltip}
                                        icon="info"
                                        place={place ? place : "right"}
                                    />
                                )}
                            </div>
                        )}
                        <Listbox.Button className="relative w-32 cursor-default rounded-[12px] border border-gray-300 bg-dn6 h-12 pl-3 pr-10 text-left shadow-sm focus:border-dp1 focus:outline-none focus:ring-1 focus:ring-dp1 sm:text-sm">
                            <span className="block truncate">
                                {selectedRole}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-md bg-dn6 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {roles.map((role, i) => (
                                    <Listbox.Option
                                        key={i}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "text-dn2 bg-dp1"
                                                    : "text-dn1",
                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                            )
                                        }
                                        value={role}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal",
                                                        "block truncate"
                                                    )}
                                                >
                                                    {role}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? "text-dn6"
                                                                : "text-dn2",
                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default RoleDropdown;
