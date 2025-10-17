"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, CheckCircle, Clock, FileText } from "lucide-react";
import Image from "next/image";
import { uploadPropertyMultimedia } from "@/services/Property/mediaService";
import { useRouter } from "next/navigation";

export default function MultimediaUpload({propertyId}) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [documentFiles, setDocumentFiles] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [virtualTourUrl, setVirtualTourUrl] = useState("");
  const imageInputRef = useRef(null);
  const documentInputRef = useRef(null);
  const router = useRouter();

  const handleDeleteImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageUpload = (files) => {
    const fileArray = Array.from(files);
    setImageFiles((prev) => [...prev, ...fileArray]);

    // preview
    const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
    setUploadedImages((prev) => [...prev, ...imageUrls]);
  };

  const handleDropImages = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const handleDocumentUpload = (files) => {
    const fileArray = Array.from(files);
    setDocumentFiles((prev) => [...prev, ...fileArray]);

    const newFiles = fileArray.map((file, index) => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(0)}Kb`,
      status: index === 0 ? "uploading" : "waiting",
      progress: index === 0 ? 0 : null,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  useEffect(() => {
    const uploadingIndex = uploadedFiles.findIndex(
      (file) => file.status === "uploading"
    );
    if (uploadingIndex === -1) return;

    const interval = setInterval(() => {
      setUploadedFiles((prevFiles) => {
        const updated = [...prevFiles];
        const current = updated[uploadingIndex];
        if (current.progress >= 100) {
          updated[uploadingIndex] = {
            ...current,
            status: "done",
            progress: null,
          };

          const nextIndex = updated.findIndex(
            (file) => file.status === "waiting"
          );
          if (nextIndex !== -1) {
            updated[nextIndex] = {
              ...updated[nextIndex],
              status: "uploading",
              progress: 0,
            };
          }
          clearInterval(interval);
        } else {
          updated[uploadingIndex] = {
            ...current,
            progress: current.progress + 10,
          };
        }
        return updated;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [uploadedFiles]);

  const deleteDocument = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setDocumentFiles((prev) => prev.filter((_, i) => i !== index));
  };

 const handleSubmit = async () => {
  try {
    const response = await uploadPropertyMultimedia({
      propertyId: propertyId,   // must be valid UUID
      images: imageFiles,       // matches backend `images`
      documents: documentFiles,      // renamed to match backend `pdfs`
      videoUrl,
      virtualTourUrl,
    });

    console.log("✅ Multimedia uploaded:", response);
    alert("Multimedia uploaded successfully!");
    router.push('/news'); // Navigate to the review page
  } catch (err) {
    console.error("❌ Upload failed:", err);
    alert("Upload failed, check console.");
  }
};


  return (
    <div className="flex flex-col md:flex-row gap-10 p-6">
      <div className="w-full md:w-1/3 text-sm text-gray-700  border-r border-gray-200 relative">
        <h2 className="font-semibold text-black mb-2">
          What affect to property value ?
        </h2>
        <p>
          The location of a residential property in a city directly affects its
          market price, estate.
        </p>
        <div className="hidden md:block absolute top-0 bottom-0 right-[7.5px] transform z-10">
          {[0].map((pos, idx) => (
            <div
              key={idx}
              className="absolute w-4 h-4 rounded-full bg-white border border-gray-400 flex items-center justify-center"
              style={{ top: pos + "px", left: "0px" }}
            >
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-lg font-bold mb-4">Multimedia</h2>

        <div>
          <label className="block text-md text-[#7D869D] font-bold mb-1">
            VIDEO
          </label>
          <input
            type="text"
            placeholder="URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-0"
          />
        </div>

        <div>
          <label className="block text-md text-[#7D869D] font-bold mb-1">
            VIRTUAL TOUR
          </label>
          <div className="flex flex-col justify-center border-gray-300 border p-3 rounded-md">
            <p className="text-gray-400 text-[12px]">URL</p>
            <input
              type="text"
              value={virtualTourUrl}
              onChange={(e) => setVirtualTourUrl(e.target.value)}
              className="w-full outline-none text-black placeholder-black font-bold text-sm"
            />
          </div>
        </div>

        <div>
          <div
            className="w-full border border-dashed border-gray-500 bg-gray-300 text-center py-14 text-[#7D869D] rounded-md"
            onDrop={handleDropImages}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => imageInputRef.current.click()}
          >
            <p className="text-gray-500 text-lg font-bold mb-4">
              DRAG YOUR PHOTOS
            </p>
            <p>
              Click or drag files to upload them,{" "}
              <span className="text-[#ED8F03] cursor-pointer ">click here</span>{" "}
              <br />
              You can tag the photos for identification
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              ref={imageInputRef}
              onChange={(e) => handleImageUpload(e.target.files)}
              className="hidden"
            />
          </div>

          <div className="flex mt-4 gap-3 flex-col overflow-x-auto">
            <label className="block text-md text-[#7D869D] font-bold">
              PICTURES
            </label>
            <div className="flex gap-3">
              {uploadedImages.map((src, index) => (
                <div
                  key={index}
                  className="relative w-35 h-35 rounded-md overflow-hidden border border-gray-200"
                >
                  <Image
                    src={src}
                    alt={`Uploaded ${index}`}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="absolute cursor-pointer top-1 right-1 bg-black bg-opacity-60 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-opacity-80"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div
            className="w-full border text-gray-500 border-dashed border-gray-500 bg-gray-300 text-center py-14 rounded-md cursor-pointer"
            onClick={() => documentInputRef.current.click()}
          >
            <p className="text-gray-500 text-lg font-bold mb-4">
              DRAG YOUR DOCUMENTS
            </p>
            <p>
              Click or drag files to upload them,{" "}
              <span className="text-[#ED8F03] cursor-pointer">click here</span>{" "}
              <br />
              Try to have files organized for maximum productivity.
            </p>
            <input
              type="file"
              multiple
              accept="application/pdf"
              ref={documentInputRef}
              onChange={(e) => handleDocumentUpload(e.target.files)}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <label className="block text-md text-[#7D869D] font-bold">
            DOCUMENTS AND FLOOR PLAN
          </label>
          <div className="space-y-2">
            {uploadedFiles.map((file, i) => (
              <div key={i} className="">
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-6">
                    <div className="bg-gray-300 p-3 rounded-md">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-black">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF file, {file.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-7 ">
                    <div className=" pt-2">
                      <button
                        onClick={() => deleteDocument(i)}
                        className="flex items-center text-red-500 cursor-pointer text-xs hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                    {file.status === "done" && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {file.status === "uploading" && (
                      <Upload className="w-5 h-5 text-blue-500 animate-pulse" />
                    )}
                    {file.status === "waiting" && (
                      <Clock className="w-5 h-5 text-yellow-500" />
                    )}
                    <div className="w-20 h-1 rounded bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          file.status === "done"
                            ? "bg-green-500 w-[91%]"
                            : file.status === "uploading"
                            ? "bg-blue-500 w-[50%]"
                            : "bg-yellow-500 w-[10%]"
                        }`}
                      />
                    </div>
                    {file.progress != null && (
                      <span className="text-xs text-gray-500 w-10 text-right">
                        {file.progress}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-10 py-2 rounded-md text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
