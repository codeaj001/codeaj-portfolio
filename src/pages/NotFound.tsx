import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => { console.error("404: Route not found", location.pathname); }, [location.pathname]);
  return <main className="section flex min-h-screen items-center justify-center bg-[#f5f5f7] text-center"><div><p className="eyebrow">404</p><h1 className="section-title">This page took a different path.</h1><p className="lede mx-auto mt-5 max-w-xl">The link may be outdated, or the page may have moved.</p><Link to="/" className="button-primary mt-8"><ArrowLeft size={17}/> Back home</Link></div></main>;
};
export default NotFound;
