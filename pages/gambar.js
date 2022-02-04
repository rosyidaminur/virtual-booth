/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function gambar() {
  const router = useRouter();
  const [src, setSrc] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    setSrc(router.query.sos);
  }, [router]);
  
  return (
    <div style={{ background: "white", padding: "1rem" }}>
      <img src={src} width="100%" height="100%" alt=""/>
    </div>
  );
}
