import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { IconSun, IconMoonStars } from "@tabler/icons";

const Theme = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        size="xl"
        iconOn={<IconSun filled />}
        iconOff={<IconMoonStars filled />}
      />
    </div>
  );
};

export default Theme;
