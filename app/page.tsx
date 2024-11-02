'use client'
import React, {useEffect} from "react";
import Landing from "@/app/components/landing/landing"
import { fetchTenants } from "@/lib/features/tenant/tenantSlice";
import { fetchProperties } from "@/lib/features/properties/propertiesSlice";
import { fetchUnits } from "@/lib/features/units/unitsSlice";


export default function IndexPage() {

  

  return <Landing />;
}

// export const metadata = {
//   title: "PDL RENTALS MANAGEMENT APP",
// };
