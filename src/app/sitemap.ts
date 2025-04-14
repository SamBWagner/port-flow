import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: "https://samwagner.dev",
            lastModified: new Date(2025, 2, 24)
        },
        {
            url: "https://samwagner.dev/rust-game",
            lastModified: new Date(2023, 11, 10)
        },
        {
            url: "https://samwagner.dev/first-commander-deck",
            lastModified: new Date(2023, 9, 29)
        },
        {
            url: "https://samwagner.dev/fast-brew",
            lastModified: new Date(2024, 12, 29)
        }
    ];
}