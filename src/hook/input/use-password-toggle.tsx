import { useState } from "react";

function usePasswordToggle() {
      const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

      const changePasswordVisible = () => setPasswordVisible((previousState) => !previousState);

      return [passwordVisible, changePasswordVisible] as const;
}

export default usePasswordToggle;
