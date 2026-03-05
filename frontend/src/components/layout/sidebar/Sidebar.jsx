import SidebarFooter from "./SidebarFooter";
import SidebarGroup from "./SidebarGroup.jsx";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {




    return (
        <div className="flex flex-col w-2/12  h-screen border">
            <aside>
                <SidebarHeader />
                <SidebarGroup />
                <SidebarFooter />
            </aside>
        </div>
    )
}

export default Sidebar;