"use client";

import React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Men",
    href: "/category/men",
    description: "Apparel, shoes, and accessories for men."
  },
  {
    title: "Women",
    href: "/category/women",
    description: "Stylish and comfortable fashion for women."
  },
  {
    title: "Kids",
    href: "/category/kids",
    description: "Fun and functional outfits for kids of all ages."
  },
  {
    title: "Home & Living",
    href: "/category/home",
    description: "Decor, kitchenware, and lifestyle products."
  },
  {
    title: "Beauty",
    href: "/category/beauty",
    description: "Skin care, cosmetics, and grooming essentials."
  },
  {
    title: "Electronics",
    href: "/category/electronics",
    description: "Gadgets, accessories, and smart devices."
  }
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="mb-1 text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navigation() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full flex-col justify-end rounded-md bg-[url('https://bundui-images.netlify.app/products/01.jpeg')] bg-cover p-0! no-underline outline-hidden select-none focus:shadow-md"
                    href="/">
                    <div className="bg-foreground/30 space-y-2 p-4 text-white backdrop-blur-md">
                      <div className="font-medium">New Arrivals</div>
                      <p className="text-sm leading-tight">
                        Discover the styles in our latest collection.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Summer Collection">
                Lightweight essentials perfect for the warm season.
              </ListItem>
              <ListItem href="#" title="Accessories">
                Complete your look with our stylish bags, jewelry, and more.
              </ListItem>
              <ListItem href="#" title="Sale">
                Shop discounted items before they&#39;re gone.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:grid-cols-2 lg:w-[550px]">
              {categories.map((category) => (
                <ListItem key={category.title} title={category.title} href={category.href}>
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Quick Links</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">All Products</div>
                    <div className="text-muted-foreground">Browse our full product catalog.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">FAQs</div>
                    <div className="text-muted-foreground">Answers to common questions.</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Blog</div>
                    <div className="text-muted-foreground">Get inspired by our latest posts.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
