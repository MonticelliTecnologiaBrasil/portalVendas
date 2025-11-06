import { WhatsAppFloat } from "./whatsapp";

export function Footer() {
  return (
    <>
    <footer className="bg-gray-50 p-8 flex justify-center items-center mt-10">
      <span className="text-sm opacity-80">© {new Date().getFullYear()} Copyright: VitalCare</span>
    </footer>
    <WhatsAppFloat />
    </>
  )
}