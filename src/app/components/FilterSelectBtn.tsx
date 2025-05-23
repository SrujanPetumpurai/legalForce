import { useState } from "react";

export default function FilterSelectBtn({ label }: { label: string }) {
  const [select, setSelect] = useState(false);

  return (
    <div className="flex justify-start items-start mt-4">
      <span onClick={() => setSelect(!select)} className="inline-block w-6 h-6 cursor-pointer">
        {select ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H22C22.5304 24 23.0391 23.7893 23.4142 23.4142C23.7893 23.0391 24 22.5304 24 22V2C24 1.46957 23.7893 0.960859 23.4142 0.585786C23.0391 0.210714 22.5304 0 22 0ZM10 17.5L5 12.543L6.59 11L10 14.346L17.409 7L19 8.577L10 17.5Z" fill="#4380EC"/>
          </svg>
        ) : (
          <span className="inline-block w-5 h-5 border rounded-sm border-black bg-white"></span>
        )}
      </span>
      <p className={ select?"ml-2 text-blue-500":' ml-2 text-black'}>{label}</p>
    </div>
  );
}
