import { Button } from "#/components/ui";
import { InputGroupAddon } from "#/components/ui";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useMemo, useState } from "react";

export function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);

  const node = useMemo(
    () => (
      <InputGroupAddon align="inline-end" className="pr-1.5">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible((prevState) => !prevState)}
          className="text-muted-foreground rounded-l-none hover:bg-transparent"
        >
          {isVisible ? <EyeOffIcon /> : <EyeIcon />}
          <span className="sr-only">
            {isVisible ? "Hide password" : "Show password"}
          </span>
        </Button>
      </InputGroupAddon>
    ),
    [isVisible],
  );
  return { isVisible, node };
}
