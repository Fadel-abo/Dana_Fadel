import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ClassValue =
  | string
  | undefined
  | ((state: { isActive: boolean; isPending: boolean }) => string | undefined);

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: ClassValue;
  activeClassName?: ClassValue;
  pendingClassName?: ClassValue;

  /**
   * Optional defaults so you don't have to repeat active styles everywhere.
   * Set to false if you want zero defaults.
   */
  withDefaults?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      withDefaults = true,
      to,
      ...props
    },
    ref,
  ) => {
    const baseDefaults =
      "transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 rounded-md";
    const activeDefaults = "text-foreground";
    const pendingDefaults = "opacity-70";

    const resolveClass = (
      value: ClassValue,
      state: { isActive: boolean; isPending: boolean },
    ) => (typeof value === "function" ? value(state) : value);

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={(state) => {
          const base = resolveClass(className, state);
          const active = state.isActive ? resolveClass(activeClassName, state) : undefined;
          const pending = state.isPending ? resolveClass(pendingClassName, state) : undefined;

          return cn(
            withDefaults && baseDefaults,
            withDefaults && "text-muted-foreground hover:text-foreground",
            base,
            state.isActive && (withDefaults ? activeDefaults : undefined),
            active,
            state.isPending && (withDefaults ? pendingDefaults : undefined),
            pending,
          );
        }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };