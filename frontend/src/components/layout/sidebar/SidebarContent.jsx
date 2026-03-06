const SidebarContent = ({ children }) => {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar">
            {children}
        </div>
    );
};
export default SidebarContent;