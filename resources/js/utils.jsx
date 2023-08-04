export const numberWithCommas = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

export const progress = () => {
    return Math.floor(Math.random() * 90) + 10 + "%";
};

export const getFullName = (user) => {
    return user.user_type === "invidual"
        ? `${user.first_name} ${user.last_name}`
        : user.corp_name;
};
