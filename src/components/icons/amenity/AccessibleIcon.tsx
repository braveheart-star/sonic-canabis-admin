import React from "react";

export function AccessibleIcon({ className }: any) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M18 6C19.1046 6 20 5.10457 20 4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4C16 5.10457 16.8954 6 18 6Z" />
      <path d="M17.836 12.014L13.491 12.739L16.781 8.62597C16.956 8.40697 17.031 8.12497 16.988 7.84797C16.945 7.57097 16.788 7.32497 16.554 7.16897L10.554 3.16897C10.158 2.90397 9.63 2.95597 9.292 3.29397L5.292 7.29397L6.706 8.70797L10.126 5.28797L12.71 7.01097L10.029 10.363C9.395 10.132 8.713 9.99997 8 9.99997C6.706 9.99997 5.51 10.416 4.529 11.115L5.98 12.566C6.575 12.216 7.261 12 8 12C10.206 12 12 13.794 12 16C12 16.739 11.784 17.425 11.434 18.02L12.885 19.471C13.584 18.49 14 17.294 14 16C14 15.555 13.947 15.122 13.855 14.705L17 14.181V20H19V13C19 12.706 18.871 12.427 18.646 12.237C18.423 12.048 18.128 11.967 17.836 12.014ZM8 20C5.794 20 4 18.206 4 16C4 15.261 4.216 14.575 4.566 13.98L3.115 12.529C2.416 13.51 2 14.706 2 16C2 19.309 4.691 22 8 22C9.294 22 10.49 21.584 11.471 20.885L10.02 19.434C9.425 19.784 8.739 20 8 20Z" />
    </svg>
  );
}