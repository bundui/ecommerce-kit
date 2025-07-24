import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image width={32} height={32} src="/logo.png" className="rounded-md" alt="logo" />
      <span className="font-medium">EcommerceKit</span>
    </Link>
  );
}
