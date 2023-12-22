"use client";

export default function Firefox() {
  return (
    <div className="bg-black h-[90vh] text-white overflow-x-auto w-full">
      <iframe
        src="https://www.google.com/webhp?igu=1"
        className="w-full h-full overflow-x-auto"
      />
    </div>
  );
}
