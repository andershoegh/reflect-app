module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: "all",
    semi: true,
    importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ["prettier-plugin-tailwindcss"],
};
