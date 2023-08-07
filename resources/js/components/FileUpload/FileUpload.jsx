import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { useState } from "react";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
import "./FileUpload.scss";

const FileUpload = ({
    files,
    setFiles,
    fileUrl,
    setfileUrl,
    folder = "upload",
}) => {
    const handleProcessFile = (error, file) => {
        if (error) {
            console.error("Error uploading file:", error);
            return;
        }
        const uploadedFileUrl = JSON.parse(file.serverId).fileUrl;
        setfileUrl(uploadedFileUrl);
    };
    return (
        <div>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                onprocessfile={handleProcessFile}
                server={{
                    url: route("upload.store", { folder: folder }),
                    process: {
                        headers: {
                            "X-CSRF-TOKEN": document
                                .querySelector('meta[name="csrf-token"]')
                                .getAttribute("content"),
                        },
                    },
                }}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
};

export default FileUpload;
