import { render } from "../preset/react.js";
export const bridgeData = {
    "workspaceFolder": "file:///home/dante/developerpie/daoregister_io",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "resources/js/Pages/Dao/Create/DaoCreate.jsx",
    "mapFileRelPath": "resources/js/Pages/Dao/Create/DaoCreate.jsx",
    "presetName": "react",
    "workspaceFolderName": "daoregister_io"
};
export const preview = () => render(getMod);
const getMod = () => import("../../resources/js/Pages/Dao/Create/DaoCreate.jsx");