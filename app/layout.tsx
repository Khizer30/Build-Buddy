//
import { type Children } from "@lib/Interface";
import "./globals.css";

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  return (
    <html lang="en-PK">
      <body>
        { children }
      </body>
    </html>
  );
}