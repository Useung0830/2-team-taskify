// TODO: 나중에 반드시 삭제할 것
const ColorTest = () => {
  const divStyle = "flex h-20 items-center justify-center flex-1";
  const containerStyle = "flex gap-2";

  return (
    <div className="font-pretendard flex w-full flex-col gap-4">
      {/* Background */}
      <div className={containerStyle}>
        <div className={`bg-background ${divStyle} text-gray-100`}>
          background
        </div>
        <div className={`bg-modal-background ${divStyle} text-gray-100`}>
          modal-background
        </div>
        <div className={`bg-stroke ${divStyle} text-gray-100`}>stroke</div>
      </div>

      {/* Black */}
      <div className={containerStyle}>
        <div className={`bg-black ${divStyle} text-gray-100`}>black</div>
        <div className={`bg-black-900 ${divStyle} text-gray-100`}>
          black-900
        </div>
        <div className={`bg-black-800 ${divStyle} text-gray-100`}>
          black-800
        </div>
        <div className={`bg-black-700 ${divStyle} text-gray-100`}>
          black-700
        </div>
        <div className={`bg-black-600 ${divStyle} text-gray-100`}>
          black-600
        </div>
        <div className={`bg-black-500 ${divStyle} text-gray-100`}>
          black-500
        </div>
      </div>

      {/* Gray */}
      <div className={containerStyle}>
        <div className={`bg-gray-900 ${divStyle} text-gray-100`}>gray-900</div>
        <div className={`bg-gray-800 ${divStyle} text-gray-100`}>gray-800</div>
        <div className={`bg-gray-700 ${divStyle} text-gray-100`}>gray-700</div>
        <div className={`bg-gray-600 ${divStyle} text-gray-100`}>gray-600</div>
        <div className={`bg-gray-500 ${divStyle} text-gray-100`}>gray-500</div>
        <div className={`bg-gray-400 ${divStyle}`}>gray-400</div>
        <div className={`bg-gray-300 ${divStyle}`}>gray-300</div>
        <div className={`bg-gray-200 ${divStyle}`}>gray-200</div>
        <div className={`bg-gray-100 ${divStyle}`}>gray-100</div>
      </div>

      {/* Brand */}
      <div className={containerStyle}>
        <div className={`bg-brand-900 ${divStyle} text-gray-100`}>
          brand-900
        </div>
        <div className={`bg-brand-800 ${divStyle} text-gray-100`}>
          brand-800
        </div>
        <div className={`bg-brand-700 ${divStyle} text-gray-100`}>
          brand-700
        </div>
        <div className={`bg-brand-600 ${divStyle} text-gray-100`}>
          brand-600
        </div>
        <div className={`bg-brand-500 ${divStyle} text-gray-100`}>
          brand-500
        </div>
        <div className={`bg-brand-400 ${divStyle}`}>brand-400</div>
        <div className={`bg-brand-300 ${divStyle}`}>brand-300</div>
        <div className={`bg-brand-200 ${divStyle}`}>brand-200</div>
        <div className={`bg-brand-100 ${divStyle}`}>brand-100</div>
      </div>

      {/* Red, Blue */}
      <div className={containerStyle}>
        <div className={`bg-red ${divStyle} text-gray-100`}>red</div>
        <div className={`bg-blue ${divStyle} text-gray-100`}>blue</div>
        <div className={`bg-sky-blue ${divStyle} text-gray-100`}>sky-blue</div>
      </div>

      {/* Profile Colors */}
      <div className={containerStyle}>
        <div className={`bg-profile-green ${divStyle} text-gray-100`}>
          profile-green
        </div>
        <div className={`bg-profile-violet ${divStyle} text-gray-100`}>
          profile-violet
        </div>
        <div className={`bg-profile-cyan ${divStyle} text-gray-100`}>
          profile-cyan
        </div>
        <div className={`bg-profile-rose ${divStyle} text-gray-100`}>
          profile-rose
        </div>
        <div className={`bg-profile-cobalt ${divStyle} text-gray-100`}>
          profile-cobalt
        </div>
        <div className={`bg-profile-yellow ${divStyle} text-gray-100`}>
          profile-yellow
        </div>
        <div className={`bg-profile-orange ${divStyle} text-gray-100`}>
          profile-orange
        </div>
      </div>
    </div>
  );
};

export default ColorTest;
