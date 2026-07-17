import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import Input from "./Input";

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-slate-400 hover:text-blue-600 transition"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
    />
  );
};

export default PasswordInput;