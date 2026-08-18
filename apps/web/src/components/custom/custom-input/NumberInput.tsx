import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import {
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "#/components/ui";

import { useEffect } from "react";
import { useDebounce } from "#/hooks";

export function NumberInput({
  defaultValue = 0,
  min = 0,
  max,
  debounceMs = 300,
  onChange,
}: {
  defaultValue?: number;
  min?: number;
  max?: number;
  debounceMs?: number;
  onChange?: (value: number) => void;
}) {
  const [value, setValue] = useState<number | "">(defaultValue);

  const debouncedValue = useDebounce(value, debounceMs);

  useEffect(() => {
    if (debouncedValue !== "") {
      onChange?.(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  const updateValue = (nextValue: number | "") => {
    if (nextValue === "") {
      setValue("");
      return;
    }

    const newValue = Math.max(
      min,
      max !== undefined ? Math.min(max, nextValue) : nextValue,
    );

    setValue(newValue);
  };

  return (
    <InputGroup className="w-min">
      <InputGroupAddon>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            if (value !== "") {
              updateValue(value - 1);
            }
          }}
          disabled={value !== "" && value <= min}
        >
          <Minus />
        </Button>
      </InputGroupAddon>

      <InputGroupInput
        className="w-8 text-center no-spinner"
        type="number"
        min={min}
        max={max}
        value={value}
        onKeyDown={(e) => {
          if (["-", "+", "e", "E"].includes(e.key)) {
            e.preventDefault();
          }
        }}
        onPaste={(e) => {
          const pasted = e.clipboardData.getData("text");

          if (!/^\d*$/.test(pasted)) {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          const input = e.target.value;

          if (input === "") {
            updateValue("");
            return;
          }

          updateValue(Number(input));
        }}
      />

      <InputGroupAddon align="inline-end">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            updateValue(value === "" ? min : value + 1);
          }}
          disabled={max !== undefined && value !== "" && value >= max}
        >
          <Plus />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
