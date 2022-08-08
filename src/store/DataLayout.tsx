import React, { Context, PropsWithChildren, useEffect } from "react";

export type BaseDataProvider = {
  init(): void;
  destroy(): void;
};

export function createDataLayout<T extends BaseDataProvider | null>(
  Ctx: Context<T>
) {
  return React.memo<PropsWithChildren<{ value: T }>>(({ value, children }) => {
    useEffect(() => {
      if (value) {
        value.init();
      }
      return () => {
        if (value) {
          value.destroy();
        }
      };
    }, [value]);

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
  });
}
