import SidebarHeader from "./SidebarHeader";
import SidebarGroup from "./SidebarGroup";
import SidebarContent from "./SidebarContent";
import SidebarFooter from "./SidebarFooter";

export const Sidebar = ({ collections, onSelectedFolder }) => {
    return (
        <div className="flex flex-col w-64 h-screen border-r border-slate-800 bg-[#0f111a]">
            {/* Top Portion: Logo & Add Button */}
            <SidebarHeader />

            {/* Middle Portion: The Scrollable area for folders/files */}
            <SidebarContent>
                <SidebarGroup 
                    title="Collections"
                    items={collections} 
                    onSelect={onSelectedFolder} 
                />
                {/* You can add more Groups here later, like "Favorites" */}
            </SidebarContent>

            {/* Bottom Portion: User Profile & Logout */}
            <SidebarFooter />
        </div>
    );
};

