"use client"
import {useContext} from "react";
import { themeContext } from '@/components/themeProvider';
import { ClientSideFundtion } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const result = ClientSideFundtion();
  const theme = useContext(themeContext);
    return <div>
        <h1>{result}</h1>
    </div>
}