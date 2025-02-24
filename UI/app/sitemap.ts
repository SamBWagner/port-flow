import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "samwagner.dev",
            lastModified: new Date(2025, 2, 24)
        },
        {
            url: "samwagner.dev/rust-game",
            lastModified: new Date(2023, 11, 10)
        },
        {
            url: "samwagner.dev/first-commander-deck",
            lastModified: new Date(2023, 9, 29)
        },
        {
            url: "samwagner.dev/fast-brew",
            lastModified: new Date(2024, 12, 29)
        }
    ];
}