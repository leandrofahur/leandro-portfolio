// images & icons:
import Astronaut from "@/assets/images/astronauts/astronaut-04.svg";
import { Alien, Planet, Rocket } from "@phosphor-icons/react";

// shadcn:
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import styles from "./Navigation.module.scss";

const components = [
  {
    label: "Home",
    slug: "/home",
    icon: <Rocket size={24} className={styles["icon"]} />,
  },
  {
    label: "About",
    slug: "/about",
    icon: <Alien size={24} className={styles["icon"]} />,
  },
  {
    label: "Contact",
    slug: "/contact",
    icon: <Planet size={24} className={styles["icon"]} />,
  },
];

export const Navigation = () => {
  return (
    <NavigationMenu className={styles["nav"]}>
      <NavigationMenuLink href="#">
        <img
          src={Astronaut}
          alt="astonaut home menu link"
          className={styles["nav-logo"]}
        />
      </NavigationMenuLink>
      <NavigationMenuList className={styles["nav-menu-list"]}>
        {components.map((component) => {
          const { label, slug, icon } = component;
          return (
            <NavigationMenuItem className={styles["nav-menu-list-item"]}>
              <NavigationMenuLink
                href={slug}
                className={styles["nav-menu-list-item-link"]}
              >
                {icon}
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

// export const Navigation = () => {
//   return (
//     <NavigationMenu className={styles["nav-menu"]}>
//       <NavigationMenuItem >
//         <img
//           src={Astronaut}
//           alt="astronaut"
//           className={styles["nav-menu-astronaut"]}
//         />
//       </NavigationMenuItem>
//       <NavigationMenuList className={styles["nav-menu-list"]}>
//         <NavigationMenuItem>
//           <NavigationMenuLink className={styles["nav-menu-list-item"]} href="#">
//             <Rocket size={24} />
//             Home
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuLink className={styles["nav-menu-list-item"]} href="#">
//             <Alien size={24} />
//             About
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuLink className={styles["nav-menu-list-item"]} href="#">
//             <Planet size={24} />
//             Contact
//           </NavigationMenuLink>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };
