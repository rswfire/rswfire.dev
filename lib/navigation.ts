// lib/navigation.ts

import type { IconName } from "@/components/Icon";

export type NavItem = {
    label: string;
    href: string;
    description: string;
    icon: IconName;
};

export type NavGroup = {
    id: "primary" | "proof" | "depth" | "system";
    label: string;
    icon: IconName;
    items: NavItem[];
};

export const navigation: NavGroup[] = [
    {
        id: "primary",
        label: "Explore",
        icon: "Compass",
        items: [
            {
                label: "Home",
                href: "/",
                description: "An overview of this site and how to navigate it",
                icon: "Menu",
            },
            {
                label: "Work",
                href: "/work",
                description: "Selected projects and systems I’ve built",
                icon: "Layers",
            },
            {
                label: "Services",
                href: "/services",
                description: "Ways I help individuals and organizations gain autonomy",
                icon: "HelpCircle",
            }
        ],
    },
    {
        id: "proof",
        label: "Proof",
        icon: "FileText",
        items: [
            {
                label: "Testimonials",
                href: "/testimonials",
                description: "A verifiable public record of past work and outcomes",
                icon: "FileText",
            },
            {
                label: "Lineage",
                href: "/lineage",
                description: "Technologies, influences, and systems that shaped my work",
                icon: "TreeDeciduous",
            },
            {
                label: "Network",
                href: "/network",
                description: "Related sites, projects, and external systems",
                icon: "Network",
            },
        ],
    },
    {
        id: "depth",
        label: "Depth",
        icon: "TreeDeciduous",
        items: [
            {
                label: "Myth",
                href: "/myth",
                description: "A nonlinear map of a life lived inside technical systems",
                icon: "TreeDeciduous",
            },
            {
                label: "Story",
                href: "/story",
                description: "A first-person account of growing up with technology from the inside",
                icon: "Mic",
            },
        ],
    },
    {
        id: "system",
        label: "System",
        icon: "Lock",
        items: [
            {
                label: "Client Dashboard",
                href: "/client",
                description: "A private interface for active collaborations",
                icon: "Lock",
            },
            {
                label: "Contact",
                href: "/contact",
                description: "How to reach me or start a conversation",
                icon: "Mail",
            },
        ],
    },
];
