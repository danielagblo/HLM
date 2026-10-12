import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#090b0e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="138" height="112" viewBox="0 0 88 72">
          <rect x="2" y="16" width="20" height="26" rx="2.2" fill="#f4f0e8" />
          <rect x="36.5" y="6" width="5.5" height="46" rx="0.8" fill="#f4f0e8" />
          <path
            fill="#f4f0e8"
            fillRule="evenodd"
            d="M42 9h30.5A3.5 3.5 0 0 1 76 12.5V21H42V9Zm0 15h42v28H42V24Zm9 6.5h24v13H51V30.5Z"
          />
          <circle cx="51" cy="62" r="9" fill="#f4f0e8" />
          <circle cx="76" cy="62" r="9" fill="#f4f0e8" />
          <path fill="#e10600" d="M0 22.8h41.5l4.8 2.6v3.2L41.5 31.2H0v-8.4Z" />
          <path fill="#e10600" d="M0 33.6h41.5l4.8 2.6v3.2L41.5 42H0v-8.4Z" />
          <rect x="39.2" y="20.4" width="7.2" height="24.8" rx="1" fill="#e10600" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
