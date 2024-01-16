export const navItem = (isActive: boolean) => ({
  className: `${isActive ? "active" : ""}`,
  whileHover: "hovered"
})