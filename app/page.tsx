import Image from "next/image";
import styles from "./page.module.css";
import BasicTable from "./components/table";
import { Providers } from "@/redux/Provider";
import TanStackTableComponent from "./components/Core/Tanstack_table";
import SignPage from "./components/login/SignPage";


export default function Home() {
  return (
    <Providers>
      <SignPage/>
    </Providers>
    
  );
}
