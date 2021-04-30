import React from "react";

interface MaybeProps {
  condition: boolean;
  children: any;
}
export const Maybe = ({ condition, children }: MaybeProps) => (
  <>{condition && children}</>
);
