// resources/js/Pages/Dashboard/Stat/Stat.jsx
import React, { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faBriefcase,
    faEarth,
    faFlag,
    faGraduationCap,
    faHouse,
    faMagic,
    faSchool,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";
import { getFullName } from "@/utils";
const ordinalLabels = [
    "Primary",
    "Secondary",
    "Tertiary",
    "Quaternary",
    "Quinary",
    "Senary",
    "Septenary",
    "Octonary",
    "Nonary",
    "Denary",
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Stat = ({ props, user }) => {
    const parseStat = (stat) => {
        if (typeof stat === "string") {
            try {
                const parsedStat = JSON.parse(stat);
                return Array.isArray(parsedStat) ? parsedStat : [parsedStat];
            } catch (e) {
                return [stat];
            }
        }
        return [stat];
    };
    const stats_individual = [
        {
            label: "Personal Information",
            data: [
                {
                    name: "Full Name",
                    stat: [getFullName(user)], // Ensure this is an array
                    icon: faUser,
                },
                {
                    name: "Nationality Primary",
                    stat: [
                        user.country_primary ??
                            "" + "," + user.state_primary ??
                            "",
                    ], // Ensure this is an array
                    icon: faHouse,
                },
                {
                    name: "Nationality Secondary",
                    stat: [
                        user.country_secondary ??
                            "" + "," + user.state_secondary ??
                            "",
                    ], // Ensure this is an array
                    icon: faHouse,
                },
            ],
        },
        {
            label: "Educational Information",
            data: [
                {
                    name: "Field",
                    stat: parseStat(user.edu_field),
                    icon: faBook,
                },
                {
                    name: "Country",
                    stat: parseStat(user.edu_country),
                    icon: faFlag,
                },
                {
                    name: "University",
                    stat: parseStat(user.edu_univercity),
                    icon: faSchool,
                },
                {
                    name: "Degree",
                    stat: parseStat(user.edu_degree),
                    icon: faGraduationCap,
                },
            ],
        },
        {
            label: "Professional data",
            data: [
                {
                    name: "Profession",
                    stat: parseStat(user.profession),
                    icon: faBriefcase,
                },
                {
                    name: "Skill",
                    stat: parseStat(user.skill),
                    icon: faMagic,
                },
                {
                    name: "Language",
                    stat: parseStat(user.language),
                    icon: faEarth,
                },
            ],
        },
    ];
    return (
        <div>
            {stats_individual.map((item, index) => (
                <div key={index} className="mb-20">
                    <h3 className="font-medium leading-3 text-dn1">
                        {item.label}
                    </h3>
                    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {item.data.map((statItem, index) =>
                            statItem.stat.map(
                                (singleStat, subIndex) =>
                                    singleStat && ( // Check if singleStat is not empty
                                        <div
                                            key={`${index}-${subIndex}`}
                                            className="relative overflow-hidden rounded-lg bg-dn6 px-4 pt-5 shadow sm:px-6 sm:pt-6"
                                        >
                                            <dt>
                                                <div className="absolute rounded-md bg-dp1/20 w-12  flex items-center justify-center text-dp1   h-12 p-3">
                                                    {statItem.icon && (
                                                        // <statItem.icon
                                                        //     className="h-6 w-6 text-dn2"
                                                        //     aria-hidden="true"
                                                        // />
                                                        <FontAwesomeIcon
                                                            icon={statItem.icon} size="xl"
                                                        />
                                                    )}
                                                </div>
                                                <p className="ml-16 uppercase truncate text-sm font-medium text-dn3/60">
                                                    {statItem.stat.length > 1 &&
                                                    ordinalLabels[subIndex]
                                                        ? `${ordinalLabels[subIndex]} ${statItem.name}`
                                                        : statItem.name}
                                                </p>
                                            </dt>
                                            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                                <p className="text-2xl capitalize font-semibold text-dn1">
                                                    {singleStat}
                                                </p>
                                            </dd>
                                        </div>
                                    )
                            )
                        )}
                    </dl>
                </div>
            ))}
        </div>
    );
};
export default Stat;
