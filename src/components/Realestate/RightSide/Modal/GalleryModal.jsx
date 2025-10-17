import { X } from "lucide-react";
import Image from "next/image";

export default function GalleryModal({ photos, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex flex-col top-15 custom-scrollbar scrollbar-hidden scrollbar-hide">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="self-end m-4 p-2 rounded-full bg-white hover:bg-gray-200 cursor-pointer"
      >
        <X className="w-6 h-6 text-gray-800" />
      </button>

      {/* Photos Grid */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {photos.map((src, idx) => (
            <div
              key={idx}
              className="relative w-full h-48 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
