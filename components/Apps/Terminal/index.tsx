"use client";

export default function Terminal() {
  return (
    <div className="bg-black h-full p-2">
      <span className="text-green-500">
        lalit@los : ${" "}
        <span
          contentEditable
          className="inline-block outline-none ml-2 h-full w-full"
          spellCheck={false}
        ></span>
      </span>
    </div>
  );
}
