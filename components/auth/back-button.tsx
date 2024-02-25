"use client"

import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton = ({ label, href }: BackButtonProps) => {
    return(
       <Button type="submit" variant="link" className="rounded-md">
         <a href={href}>{label}</a>
         </Button>
    )
};
