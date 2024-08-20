"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FloatingDockDisplay } from "@/components/dock";
import { IconBrandDiscord, IconBrandTelegram, IconBrandX } from "@tabler/icons-react";

const SearchResults = ({ data, query }: { data: any; query: string }) => {
  // Create the social media items array
  const socialItems = [
    data.Telegram && { title: "Telegram", icon: <IconBrandTelegram />, href: data.Telegram },
    data.Discord && { title: "Discord", icon: <IconBrandDiscord />, href: data.Discord },
    data.Twitter && { title: "Twitter", icon: <IconBrandX />, href: data.Twitter },
    data.Glaxe && { title: "Glaxe", icon: <IconBrandX />, href: data.Glaxe }, // Assuming same icon for Glaxe
  ].filter(Boolean); // Remove any null or undefined values

  return (
    <div className="p-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>{data.airdropName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Airdrop Time:</span>
              <span>{data.airdropTime}</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Airdrop Type:</span>
              <Badge>{data.airdropType}</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Airdrop Status:</span>
              <Badge variant={data.airdropStatus ? "success" : "destructive"}>
                {data.airdropStatus ? "Active" : "Inactive"}
              </Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-semibold">Airdrop Link:</span>
              <a href={data.airdropLink} className="text-blue-500">
                {data.airdropLink}
              </a>
            </div>
            <Separator />
            <div className="space-y-2">
              <span className="font-semibold">Airdrop Info:</span>
              <div className="whitespace-pre-line">
                {data.dailyActivity}
              </div>
            </div>
            <Separator />
            
          </div>
        </CardContent>
        {/* Center the FloatingDockDisplay */}
        {socialItems.length > 0 && (
          <div className="flex justify-center py-4">
            <FloatingDockDisplay items={socialItems} />
          </div>
        )}
      </Card>
    </div>
  );
};

export default SearchResults;
