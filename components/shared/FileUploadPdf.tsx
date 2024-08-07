"use client";

import { useCallback, Dispatch, SetStateAction } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";

import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  pdfUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploadPdf({
  pdfUrl,
  onFieldChange,
  setFiles,
}: FileUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf"
      ? generateClientDropzoneAccept(["application/pdf"])
      : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {pdfUrl ? (
        <div className="flex h-full w-full flex-1 justify-center">
          <embed
            src={pdfUrl}
            type="application/pdf"
            width={250}
            height={250}
            className="w-full object-contain object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag PDF here</h3>
          <p className="p-medium-12 mb-4">PDF only</p>
          <Button type="button" className="rounded-md">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
}
