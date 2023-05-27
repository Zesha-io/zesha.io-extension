import React from "react";

const EmptyState = ({ icon, text }) => {
    return (
        <div className="max-h-96 h-96 py-24 px-4 md:px-6  bg-white mb-7 rounded-lg">
            <div className="h-full flex items-center justify-center flex-col gap-3">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-5 transition duration-200 ease">
                    <img src="/images/page.png" width="24px" />
                </span>
                <p className="text-sm text-[#7F8691]">{text}</p>
            </div>
        </div>
    );
};

export default EmptyState;
