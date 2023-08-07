import React from "react";
import cn from "classnames";
import Tooltip from "@/components/Tooltip";
const Label = ({ title, tooltip, className, tooltipClassName }) => {
    return (
        <label className={cn(className, "relative pb-3 block")}>
            {title}
            {tooltip && (
                <Tooltip
                    className={cn(tooltipClassName, "fill-white/75")}
                    title={tooltip ?? ""}
                    icon="info"
                    place={"right"}
                />
            )}
        </label>
    );
};

export default Label;
