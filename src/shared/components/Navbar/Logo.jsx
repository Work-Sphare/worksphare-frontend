import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl">
        W
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800">
          WorkSphare
        </h2>

        <p className="text-xs text-gray-500">
          Find Skilled Workers
        </p>
      </div>
    </div>
  );
};

export default Logo;