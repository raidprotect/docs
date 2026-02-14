import React from "react";

type TimestampFormat = "t" | "T" | "d" | "D" | "f" | "F" | "R";

interface TimestampProps {
  value: number;
  format?: TimestampFormat;
}

function formatTimestamp(ts: number, format: TimestampFormat): string {
  const date = new Date(ts * 1000);

  switch (format) {
    case "t":
      return date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    case "T":
      return date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    case "d":
      return date.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    case "D":
      return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    case "f":
      return date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    case "F":
      return date.toLocaleDateString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    case "R": {
      const now = Date.now();
      const diff = now - date.getTime();
      const seconds = Math.round(diff / 1000);
      const minutes = Math.round(seconds / 60);
      const hours = Math.round(minutes / 60);
      const days = Math.round(hours / 24);

      const rtf = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });

      if (Math.abs(seconds) < 60) return rtf.format(-seconds, "second");
      if (Math.abs(minutes) < 60) return rtf.format(-minutes, "minute");
      if (Math.abs(hours) < 24) return rtf.format(-hours, "hour");
      return rtf.format(-days, "day");
    }
    default:
      return date.toLocaleString();
  }
}

function getFullDate(ts: number): string {
  return new Date(ts * 1000).toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function Timestamp({
  value,
  format = "f",
}: TimestampProps): React.ReactElement {
  const formatted = formatTimestamp(value, format);
  const fullDate = getFullDate(value);

  return (
    <span
      className="timestamp"
      style={{
        position: "relative",
        backgroundColor: "var(--ifm-color-emphasis-200)",
        borderRadius: "3px",
        padding: "0 2px",
        cursor: "default",
      }}
    >
      {formatted}
      <span
        className="timestamp-tooltip"
        role="tooltip"
        style={{
          visibility: "hidden",
          opacity: 0,
          position: "absolute",
          bottom: "calc(100% + 6px)",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "var(--ifm-color-emphasis-900)",
          color: "var(--ifm-color-emphasis-0)",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "0.8rem",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          transition: "opacity 0.15s",
          zIndex: 10,
        }}
      >
        {fullDate}
      </span>
      <style>{`
        .timestamp:hover .timestamp-tooltip {
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </span>
  );
}
